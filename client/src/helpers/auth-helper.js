import axios from 'axios'

export default class AuthHelper {
  constructor (url) {
    this.url = url
    console.log('newAuthHelper >> ', url)
  }

  setUrl (url) {
    this.url = url
  }

  getToken (refreshToken) {
    const url = `${this.url}/auth/refresh`
    return axios.post(url, {refreshToken})
      .catch(err => {
        throw `Token has expired \n${err}`
      })
  }

  getData (token) {
    const url = `${this.url}/auth/`
    const headers = {authorization: `Bearer ${token}`}
    return axios.post(url, null, { headers })
      .catch(err => {
        throw `Invalid token \n ${err}`
      })
  }

}