import axios from 'axios'
import StoreHelper from  './store-helper'


export const setAuthHeader = () => {
  const token = StoreHelper.getAuthToken()
  console.log('token >> ', token)
  const tokenString = `Bearer ${token}`
  axios.defaults.headers['Authorization'] = null
  axios.defaults.headers['Authorization'] = tokenString
}
