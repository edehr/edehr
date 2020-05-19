import axios from 'axios'
import StoreHelper from './store-helper'
const uuid = require('uuid/v4')
export default class DemoHelper {
    
  _prepareHeaderObject = (token = StoreHelper.getDemoToken()) => {
    return {
      authorization: `Bearer ${token}`
    }
  }

  createToolConsumer () {
    const id = uuid()
    const apiUrl = StoreHelper.apiUrl()
    const url = `${apiUrl}/demo`
    return axios.post(url, { id })
  }

  selectLTIUser (ltiData) {
    const apiUrl = StoreHelper.apiUrl()
    const url = `${apiUrl}/demo/set`
    const headers = this._prepareHeaderObject()
    return axios.post(url, { ltiData }, { headers })
  }

  fetchDemoData (token) {
    const apiUrl = StoreHelper.apiUrl()
    const url = `${apiUrl}/demo/fetch`
    const headers = this._prepareHeaderObject()
    return axios.post(url, null, { headers })
  }
}