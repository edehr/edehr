import axios from 'axios'
import StoreHelper from './store-helper'
// TODO: implement this into a store
export default class authHelper {
  constructor (url) {
    this.url = url
  }

  getToken (refreshToken) {
    const url = `${this.url}/auth/refresh`
    return axios.post(url, {refreshToken})
  }

  getData (token) {
    const url = `${this.url}/auth/`
    const headers = {authorization: `Bearer ${token}`}
    return axios.post(url, null, { headers })
  }

}