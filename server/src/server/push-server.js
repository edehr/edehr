'use strict'
import WebSocket from 'ws'
import EventEmitter from 'events'

const details = process.env.WEBSOCKET_DEBUGGING || true
const PX = '--- websocket ---- ' // a prefix for each debug stmt from this module. This helps if there are many other messages in the console.

if (details && process.env.NODE_ENV === 'production') {
  console.error('WARNING ------- \nWARNING ------- \nWARNING ------- Push server will log sensitive information. Disable in code and rebuild.')
}

const PING_DELAY = 5000 // ms

export const WS_EVENT_BUS = new EventEmitter()
export const WS_S2C_MESSAGE_EVENT = 'WS_S2C_MESSAGE_EVENT' // server to client
export const WS_C2S_MESSAGE_EVENT = 'WS_C2S_MESSAGE_EVENT' // client to server

if (details) { // if showing all details then show incoming messages from clients
  WS_EVENT_BUS.on(WS_C2S_MESSAGE_EVENT, (payload) => {
    console.log(PX, WS_C2S_MESSAGE_EVENT, payload)
  })
}

// Status Code
// These are custom codes used by this service
const EXIT_STATUS_NO_TOKEN = 4001 // No token ID was provided.
const EXIT_STATUS_AUTH_FAIL = 4002 // Authentication failed. Either the token ID is invalid, expired, or does not have the necessary ACL.
const EXIT_STATUS_EXPIRED = 4003 // Authentication expired. The token has expired or was deleted.
// The server also uses the pre-defined WebSocket status codes below
// status codes defined here https://www.rfc-editor.org/rfc/rfc6455.html#page-45
// 1001 indicates that an endpoint is "going away", such as a server going down or a browser having navigated away from a page.
// 1002 indicates ... due to a protocol error.
// 1003 indicates ... it has received a type of data it cannot accept
// const EXIT_STATUS_NORMAL_CLOSE = 1000
const EXIT_STATUS_GOING_AWAY = 1001
// eslint-disable-next-line no-unused-vars
const EXIT_STATUS_BAD_INPUT = 1003

/**
 * Assumes all internet connections are done with wss (https) and not just ws.
 *
 * @param appServer - express server
 * @param authUtil - a util that can verify a JWT token
 */
export function setupWebSocket (appServer, authUtil) {

  const HEARTBEAT = 'heartbeat'
  let clientId = 0
  const wss = new WebSocket.Server({ server: appServer })

  wss.on('connection', function (ws, req) {
    ws.clientId = ++clientId // id to help debug tracing, no other purpose so far
    if (details) console.log(PX + 'connection', ws.clientId)
    ws.tokenData = undefined
    // expect req.url to look like this: /?token=<jwt>
    let parts = req.url.split('=')
    if (parts.length !== 2 || !parts[0].includes('token')) {
      console.log(PX + 'invalid creds')
      ws.close(EXIT_STATUS_NO_TOKEN, 'NO TOKEN')
      return
    }
    try {
      let token = parts[1]
      // validateToken throws if token is invalid
      ws.tokenData = authUtil.validateToken(token)
      if (details) console.log(PX + 'token data', ws.tokenData)
    } catch (err) {
      if (details) console.log(PX + 'invalid creds', err.message)
      ws.close(EXIT_STATUS_AUTH_FAIL, 'connection refused')
      return
    }
    ws.on('error', console.error)
    ws.on('close', () => {
      if (details) console.log(PX + 'closing', ws.clientId)
      if (ws.pingInterval) {
        // stop pinging and release memory
        clearInterval(ws.pingInterval)
        WS_EVENT_BUS.off(WS_S2C_MESSAGE_EVENT, send)
      }
    })
    ws.on('message', function (data, origin) {
      const now = Math.round((new Date()).getTime() / 1000)
      const { exp } = ws.tokenData
      const secondsRemaining = now < exp ? exp - now : 0
      if (details) console.log(PX + 'message check seconds remaining', secondsRemaining)
      if (secondsRemaining <= 0) {
        console.log('token date is expired')
        ws.close(EXIT_STATUS_EXPIRED, 'connection expired')
        return
      }

      let value = data.toString()
      if (details) console.log(PX + 'received', ws.clientId, value)
      if (value === HEARTBEAT) {
        if (details) console.log(PX + HEARTBEAT, ws.clientId)
        ws.send(HEARTBEAT)
      } else {
        try {
          const payload = JSON.parse(value)
          WS_EVENT_BUS.emit(WS_C2S_MESSAGE_EVENT, payload) // broadcast the incoming message
        } catch (err) {
          console.error(PX + 'Error parsing message', value)
        }
      }
    })

    function send (data) {
      ws.send(typeof data === 'string' ? data : JSON.stringify(data))
    }

    WS_EVENT_BUS.on(WS_S2C_MESSAGE_EVENT, send) // something in app wants to send msg to client

    function ping () {
      if (ws && ws.readyState === WebSocket.OPEN) {
        // pings happen a lot so uncomment to trace these
        // if(details) console.log(PX + 'send ping to client', ws.clientId, wss.clients.size)
        ws.ping()
      } else {
        // this should never happen
        console.error('what to do about ping when client is not open?', ws ? ws.clientId + ' ' + ws.readyState : null)
        ws ? ws.close(EXIT_STATUS_GOING_AWAY) : null
      }
    }

    send('Welcome client' + ws.clientId)

    ws.pingInterval = setInterval(ping, PING_DELAY)

  }) // end ws.on connection
}



