import axios from 'axios'
import StoreHelper from './store-helper'
const uuid = require('uuid/v4')
export default class DemoHelper {
    
  createToolConsumer () {
    const id = uuid()
    const apiUrl = StoreHelper.apiUrl() || 'http://localhost:27000/api'
    const url = `${apiUrl}/demo/`
    return axios.post(url, { id })
  }

  setLTIUser (ltiData, assignment, demoToken) {
    const apiUrl = StoreHelper.apiUrl() || 'http://localhost:27000/api'
    const url = `${apiUrl}/demo/set`
    return axios.post(url, { ltiData, assignment })
  }

  fetchDemoData () {
    const apiUrl = StoreHelper.apiUrl() || 'http://localhost:27000/api'
    const url = `${apiUrl}/demo/fetch`
    return axios.post(url, null)

  }
}