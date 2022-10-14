import axios from 'axios'
import authHelper from '@/helpers/auth-helper'

export const setAuthHeader = (token) => {
  //console.log('setAuthHeader', authHelper.hashToken(token))
  if (token) {
    axios.defaults.headers['Authorization'] = `Bearer ${token}`
  } else {
    axios.defaults.headers['Authorization'] = null
  }
}
