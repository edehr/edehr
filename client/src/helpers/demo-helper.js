import axios from 'axios'
import StoreHelper from './store-helper'
const uuid = require('uuid/v4')
export default class DemoHelper {
  // TODO: implement apiURL fetching from the backend before LTI POST
  createToolConsumer () {
    const id = uuid()
    const apiUrl = StoreHelper.apiUrl() || 'http://localhost:27000/api'
    const url = `${apiUrl}/demo/`
    return axios.post(url, { id })
  }

  submitPersona (demoData, assignment) {
    const apiUrl = StoreHelper.apiUrl() || 'http://localhost:27000/api'
    const url = `${apiUrl}/demo/set`
    return axios.post(url, { demoData, assignment })
  }

  fetchDemoData () {
    const apiUrl = StoreHelper.apiUrl() || 'http://localhost:27000/api'
    const url = `${apiUrl}/demo/fetch`
    return axios.get(url)

  }
}