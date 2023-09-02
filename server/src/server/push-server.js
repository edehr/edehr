'use strict'
import WebSocket from 'ws'

const details = process.env.WEBSOCKET_DEBUGGING || true
const PX = '--- websocket ---- ' // a prefix for each debug stmt from this module. This helps if there are many other messages in the console.

const PING_DELAY = 5000 // ms

export function setupWebSocket (appServer, authUtil) {

  const HEARTBEAT = 'heartbeat'
  let clientId = 0
  const wss = new WebSocket.Server({ server: appServer })

  wss.on('connection', function (ws, req) {
    ws.clientId = ++clientId
    if(details) console.log(PX + 'connection', ws.clientId)
    ws.tokenData = undefined
    // expect req.url to look like this: /?token=<jwt>
    let parts = req.url.split('=')
    try {
      if (parts.length !== 2 || !parts[0].includes('token')) {
        // yes throw to local catch to reuse error handling
        throw new Error('invalid url')
      }
      let token = parts[1]
      // validateToken throws if token is invalid
      const result = authUtil.validateToken(token)
      ws.tokenData = result.data
    } catch (err) {
      if(details) console.log(PX + 'invalid creds', err.message)
      ws.close(1003, 'connection refused')
      return
    }
    // status codes defined here https://www.rfc-editor.org/rfc/rfc6455.html#page-45
    // 1001 indicates that an endpoint is "going away", such as a server going down or a browser having navigated away from a page.
    // 1002 indicates ... due to a protocol error.
    // 1003 indicates ... it has received a type of data it cannot accept

    ws.on('error', console.error)
    ws.on('close', () => {
      if(details) console.log(PX + 'closing', ws.clientId)
      if (ws.pingInterval) {
        // stop pinging and release memory
        clearInterval(ws.pingInterval)
      }
    })
    ws.on('message', function (data, origin) {
      let value = data.toString()
      if(details) console.log(PX + 'received', ws.clientId, value)
      if (value === HEARTBEAT) {
        if(details) console.log(PX + HEARTBEAT, ws.clientId)
        ws.send(HEARTBEAT)
      }
    })
    ws.send('Welcome client' + ws.clientId)

    function ping () {
      if (ws && ws.readyState === WebSocket.OPEN) {
        // pings happen a lot so uncomment to trace these
        // if(details) console.log(PX + 'send ping to client', ws.clientId, wss.clients.size)
        ws.ping()
      } else {
        // this should never happen
        console.error('what to do about ping when client is not open?', ws ? ws.clientId + ' ' + ws.readyState : null)
        ws ? ws.close(1000) : null
      }
    }

    ws.pingInterval = setInterval(ping, PING_DELAY)

  }) // end ws.on connection
}


