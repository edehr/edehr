import axios from 'axios'
import StoreHelper from './store-helper'
const uuid = require('uuid/v4')
import config from '../../config'
import { setAuthHeader } from './axios-helper'

const debugDH = true

export default class DemoHelper {
  apiUrl = config.apiUrl

  constructor () {
    StoreHelper.apiUrlSet(this.apiUrl)
  }

  createToolConsumer () {
    const id = uuid()
    const apiUrl = this.apiUrl
    if(debugDH) console.log('DH create consumer for user id ', id)
    const url = `${apiUrl}/demo/`
    return axios.post(url, { id })
  }

  demoLogout (token) {
    if(debugDH) console.log('DH logout')
    setAuthHeader(token)
    const apiUrl = this.apiUrl
    const url = `${apiUrl}/demo/logout`
    return axios.post(url)
      .catch(err => {
        console.log('demoHelper error', err)
      })
  }

  dhLoadDemoData (token) {
    if(debugDH) console.log('DH fetch')
    setAuthHeader(token)
    const apiUrl = this.apiUrl
    const url = `${apiUrl}/demo/fetch`
    return axios.get(url)
  }

  submitPersona (token, demoData, assignment) {
    if(debugDH) console.log('DH submitPersona', demoData, assignment)
    setAuthHeader(token)
    const apiUrl = this.apiUrl
    const url = `${apiUrl}/demo/set`
    return axios.post(url, { demoData, assignment })
  }
  
}
