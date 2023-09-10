import axios from 'axios'
import authHelper from '@/helpers/auth-helper'
import EventBus, { USER_LOGIN_EVENT, USER_LOGOUT_EVENT } from '@/helpers/event-bus'

const debug = false
const PX = 'Axios helper --- '

/**
 * Set or clear the Authorization header AND emit appropriate log in or log out events.
 *
 * @param token
 */
export const setAuthHeader = (token) => {
  const newHash = authHelper.hashToken(token)
  const currentAuth = axios.defaults.headers['Authorization']
  let existingHash = currentAuth ? authHelper.hashToken(currentAuth.replace('Bearer ', '')) : undefined
  if (token) {
    if (existingHash === newHash) {
      if (debug) console.log(PX + 'new is same as old so do nothing')
    } else {
      if (debug) console.log(PX + 'old and new are different', existingHash, newHash)
      // Note that the token changes when the user selects a new Activity from any Course.
      // As well, of course, when the user enters via LTI
      if(existingHash) {
        if (debug) console.log(PX + 'emit logout event')
        axios.defaults.headers['Authorization'] = null
        EventBus.$emit(USER_LOGOUT_EVENT)
      }
      if (debug) console.log(PX + 'set axios Authorization header to the new token', newHash)
      axios.defaults.headers['Authorization'] = `Bearer ${token}`
      if (debug) console.log(PX + 'emit login event')
      EventBus.$emit(USER_LOGIN_EVENT)
    }
  } else {
    axios.defaults.headers['Authorization'] = null
    if(existingHash) {
      if (debug) console.log(PX + 'emit logout event')
      EventBus.$emit(USER_LOGOUT_EVENT)
    }
  }
}
