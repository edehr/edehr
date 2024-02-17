import StoreHelper from '@/helpers/store-helper'
import EventBus, { MESSAGE_FROM_SERVER, USER_LOGIN_EVENT, USER_LOGOUT_EVENT } from '@/helpers/event-bus'

const details = process.env.WEBSOCKET_DEBUGGING || false
const detailMessages = false
const PX = '--- websocket ---- ' // a prefix for each debug stmt from this module. This helps if there are many other messages in the console.

// Message sent to server that it will echo back to be used by the client to check the server is accessible
const HEARTBEAT = 'heartbeat'

const CHECK_DELAY = 30000 // 30 seconds

export function setupWebSocket () {
  let baseUrl = StoreHelper.wsUrlGet()
  let client = null
  // When the user logs in try to start the connection
  EventBus.$on(USER_LOGIN_EVENT, () => {
    if (details) console.log(PX + 'user logging in so start web socket client')
    start()
  })

  function start (){
    const token = StoreHelper.getAuthToken()
    if(!token) {
      if (details) console.log(PX + 'User is not logged in so no attempt to connect')
      return
    }
    let url = baseUrl + '?token=' + token
    client = new WebSocket(url)
    client.onopen = function () {
      if (details) console.log(PX + 'connection established')
      EventBus.$on(USER_LOGOUT_EVENT, () => { client.close() })
      client.onmessage = function (event) {
        const value = event.data.toString()
        if (HEARTBEAT === value) {
          // do nothing. Server is responding to this client's message.
          if (details) console.log(PX + HEARTBEAT)
        } else {
          if (detailMessages) console.log(PX + 'socket onmessage', value)
          // send the message to another part of the application, for processing
          EventBus.$emit(MESSAGE_FROM_SERVER, value)
        }
      }
      client.onclose = function (event) {
        if (details) console.log(PX + 'connection closed', event.code)
        // release memory
        EventBus.$off(USER_LOGOUT_EVENT)
      }
      client.onerror = function (err) {
        console.error('Socket encountered error: ', err.message, 'Closing socket')
        client.close()
      }
    }
  }
  function check () {
    if (!client || client.readyState === WebSocket.CLOSED) {
      client = null
      if (details) console.log('checking start again')
      start()
    } else if (client.readyState === WebSocket.OPEN) {
      client.send(HEARTBEAT)
    } else if (client.readyState === WebSocket.CLOSING) {
      // never seen this condition
      console.error('check while CLOSING')
    } else if (client.readyState === WebSocket.CONNECTING) {
      // rarely happens.  Ignore it because the connection is already connecting
      // console.error('check while CONNECTING')
    } else {
      // never seen this condition
      console.error('check while WS is in some unknown state')
    }
  }
  // try to start on setup. This will try if the user is logged in.
  start()
  // set up to periodically check the connection and reconnect if necessary.
  setInterval(check, CHECK_DELAY)
}
