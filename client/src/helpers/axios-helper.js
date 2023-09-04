import axios from 'axios'
// import authHelper from '@/helpers/auth-helper'
import EventBus, { USER_LOGIN_EVENT } from '@/helpers/event-bus'

export const setAuthHeader = (token) => {
  //console.log('setAuthHeader', authHelper.hashToken(token))
  if (token) {
    axios.defaults.headers['Authorization'] = `Bearer ${token}`
    EventBus.$emit(USER_LOGIN_EVENT)
  } else {
    axios.defaults.headers['Authorization'] = null
  }
}
