import axios from 'axios'
import StoreHelper from  './store-helper'


export const setAuthHeader = () => {
  const token = StoreHelper.getAuthToken()
  const tokenString = `Bearer ${token}`
  axios.defaults.headers['Authorization'] = null
  axios.defaults.headers['Authorization'] = tokenString
}
