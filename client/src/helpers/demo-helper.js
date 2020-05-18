import axios from 'axios'
import StoreHelper from './store-helper'
const uuid = require('uuid/v4')
export default class DemoHelper {
    
  createToolConsumer () {
    const id = uuid()
    const apiUrl = StoreHelper.apiUrl()
    const url = `${apiUrl}/demo`
    return axios.post(url, { id })
  }

  selectLTIUser (user) {
    const apiUrl = StoreHelper.apiUrl()
    const url = `${apiUrl}/demo/set`
    return axios.post(url, { user })
  }

  getLTIData () {
    const apiUrl = StoreHelper.apiUrl()
    const url = `${apiUrl}/demo/fetch`
    return axios.post(url)
  }
}