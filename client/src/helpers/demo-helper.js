import axios from 'axios'
import StoreHelper from './store-helper'
import config from '../../config'
const uuid = require('uuid/v4')
export default class DemoHelper {

  constructor () {
    const apiUrl = config.apiUrl
    StoreHelper.apiUrlSet(apiUrl)
  }
  
  createToolConsumer () {
    const id = uuid()
    const apiUrl = StoreHelper.apiUrl()
    const url = `${apiUrl}/demo/`
    return axios.post(url, { id })
  }

  submitPersona (demoData, assignment) {
    const apiUrl = StoreHelper.apiUrl()
    const url = `${apiUrl}/demo/set`
    return axios.post(url, { demoData, assignment })
  }

  fetchDemoData () {
    const apiUrl = StoreHelper.apiUrl()
    const url = `${apiUrl}/demo/fetch`
    return axios.get(url)

  }
}