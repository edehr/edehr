'use strict'
import WebSocket from 'ws'
import EventEmitter from 'events'

const details = process.env.WEBSOCKET_DEBUGGING || false
const pongDetails = false
const PX = '--- websocket ---- ' // a prefix for each debug stmt from this module. This helps if there are many other messages in the console.

if (details && process.env.NODE_ENV === 'production') {
  console.error('WARNING ------- \nWARNING ------- \nWARNING ------- Push server will log sensitive information. Disable in code and rebuild.')
}

const PING_DELAY = 5000 // ms
const HEARTBEAT = 'heartbeat'

export const WS_EVENT_BUS = new EventEmitter()
export const WS_S2C_MESSAGE_EVENT = 'WS_S2C_MESSAGE_EVENT' // server to client
export const WS_C2S_MESSAGE_EVENT = 'WS_C2S_MESSAGE_EVENT' // client to server
export const WS_CLIENT_CLOSING_EVENT = 'WS_CLIENT_CLOSING_EVENT'

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

let clientId = 0
let theAuthUtil

class Client {
  constructor (wsClient, url) {
    this.wsClient = wsClient
    this.clientId = ++clientId // id for debug tracing
    if (details) console.log(PX + 'connection opened.', this.clientId)
    this.tokenData = this.validateConnectionAndGetTokenData(url, (code, msg) => this.closeClient(code, msg))
    if (!this.tokenData) {
      if (details) console.log(PX + 'not auth\'d so close immediately.', this.clientId)
      return
    }
    this.msgCnt = 0
    wsClient.on('error', console.error)
    if (pongDetails) wsClient.on('pong', () => console.log('Got pong', this.clientId) )
    wsClient.on('close', () => WS_EVENT_BUS.emit(WS_CLIENT_CLOSING_EVENT, this.clientId))
    wsClient.on('message', (data, origin) => this.handleMessage(data, origin))
  }
  get readyState () { return this.wsClient.readyState }

  checkExpired () {
    const now = Math.round((new Date()).getTime() / 1000)
    const { exp } = this.tokenData
    const secondsRemaining = now < exp ? exp - now : 0
    return (secondsRemaining <= 0)
  }
  closeClient (code = EXIT_STATUS_GOING_AWAY, msg = 'closing') {
    if (details) console.log('close client ', this.clientId)
    this.wsClient.close(code, msg) // will result in close event
  }

  handleMessage (data, origin) {
    this.msgCnt++
    const { clientId } = this
    if (details) console.log('handleMessage message', clientId, this.msgCnt)
    if (this.checkExpired()) {
      if (details) console.log('token date is expired so close the connection', clientId)
      this.closeClient(EXIT_STATUS_EXPIRED, 'connection expired')
      return
    }
    let value = data.toString() // websocket data is a buffer
    if (value === HEARTBEAT) {
      if (details) console.log(PX + HEARTBEAT, clientId)
      this.wsClient.send(HEARTBEAT)
    } else {
      if (details) console.log(PX + 'received', clientId, value)
      try {
        const payload = JSON.parse(value)
        WS_EVENT_BUS.emit(WS_C2S_MESSAGE_EVENT, payload) // broadcast the incoming message
      } catch (err) {
        console.error(PX + 'Error parsing message', value)
      }
    }
  }
  pingClient () {
    this.wsClient.ping()
  }

  sendData (data) {
    this.wsClient.send(data)
  }
  validateConnectionAndGetTokenData (url, errCb ) {
    let tknData
    // expect req.url to look like this: /?token=<jwt>
    let parts = url.split('=')
    if (parts.length !== 2 || !parts[0].includes('token')) {
      console.log(PX + 'invalid creds', url)
      errCb(EXIT_STATUS_NO_TOKEN, 'NO TOKEN')
      return
    }
    try {
      let token = parts[1]
      // validateToken throws if token is invalid
      tknData = theAuthUtil.validateToken(token)
      if (details) console.log(PX + 'validated token uId', tknData.userId, 'vId', tknData.visitId)
    } catch (err) {
      if (details) console.log(PX + 'invalid creds', err.message)
      errCb(EXIT_STATUS_AUTH_FAIL, 'connection refused')
    }
    return tknData
  }
}

// -------------------------- Manage list of client --------------------------
const clients = {}
function registerClient (client) {
  if (clients[client.clientId]) {
    console.error('Registering a duplicate websocket client. Will close the original')
    clients[client.clientId].closeClient()
  }
  clients[client.clientId] = client
  if (details) console.log(PX + 'registerClient', client.clientId, clientCount())
}
function delistClient (clientId) {
  if (!clients[clientId]) {
    console.error('Delisting a websocket client that is not registered', clientId)
    return
  }
  delete clients[clientId]
  if (details) console.log(PX + 'delistClient', clientId, clientCount())
}
function pingAllClients () {
  if (pongDetails) console.log('Ping all websocket clients', Object.keys(clients))
  const toRemove = []
  for (const clientId in clients) {
    const wsClient = clients[clientId]
    if (wsClient.readyState === WebSocket.OPEN) {
      wsClient.pingClient()
    } else if (wsClient.readyState === WebSocket.CLOSED) {
      toRemove.push(clientId)
    } else {
      console.error('This should not happen ... ping when client is not open', clientId + ' ' + wsClient.readyState)
      wsClient.closeClient(EXIT_STATUS_GOING_AWAY, 'Can not ping because ws is not open.')
    }
  }
  toRemove.forEach(clientId => {
    delistClient(clientId)
  })
}

setInterval(pingAllClients, PING_DELAY)

function sendAll (data) {
  data = typeof data === 'string' ? data : JSON.stringify(data)
  if (details) console.log('someone wants to send this data (', data, ') to all clients', Object.keys(clients))
  for (const clientId in clients) {
    let client = clients[clientId]
    client.sendData(data)
  }
}

function clientCount () {
  return Object.keys(clients).length
}

// --------------------------------- Global event handlers ----------------

// something in app wants to send msg to client
WS_EVENT_BUS.on(WS_S2C_MESSAGE_EVENT, sendAll)

WS_EVENT_BUS.on(WS_CLIENT_CLOSING_EVENT, (client) => delistClient(client))

// -------------------------------------------- Setup -------------------
/**
 * Assumes all internet connections are done with wss (https) and not just ws.
 *
 * @param appServer - express server
 * @param authUtil - a util that can verify a JWT token
 */
export function setupWebSocket (appServer, authUtil) {
  theAuthUtil = authUtil
  const wss = new WebSocket.Server({ server: appServer })
  wss.on('connection', function (wsClient, req) {
    registerClient(new Client(wsClient, req.url))
  })
}
