import axios from 'axios'
import qs from 'qs'
import StoreHelper from '@/helpers/store-helper'

const debugDH = false

export default class DemoStoreHelper {
  createToolConsumer () {
    /*
    Create something short and random for the tool consumer's key and id. The server will take this
    short id and add more to make sure it is unique.  The following generates 7 character string like: mpbchrk
     */
    let id = Math.random().toString(32).slice(-7)
    const apiUrl = StoreHelper.apiUrlGet()
    console.log('DemoStoreHelper create consumer for user id ', id, 'apiUrl', apiUrl)
    const url = `${apiUrl}/demo/`
    return axios.post(url, { id })
  }

  demoLogout (token, consumerId) {
    const apiUrl = StoreHelper.apiUrlGet()
    const url = `${apiUrl}/demo/logout`
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`
      },
      data: qs.stringify({ toolConsumerId: consumerId}),
      url,
    }
    return axios(options)
      .then(res => {
        return Promise.resolve(res.data)
      }).catch(err => {
        // extract the error data provided by the api
        return Promise.reject(err.response.data)
      })
  }

  dhLoadDemoData (token) {
    const apiUrl = StoreHelper.apiUrlGet()
    const url = `${apiUrl}/demo/fetch`
    if(debugDH) console.log('DH fetch', apiUrl)
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      },
      url,
    }
    return axios(options)
  }

  /**
   *
   * @param token
   * @param ltiData
   * @returns {Promise<unknown>}
   */
  submitPersona (token, ltiData /*submitData*/) {
    const apiUrl = StoreHelper.apiUrlGet()
    const url = `${apiUrl}/demo/set`
    if(debugDH) console.log('DH submitPersona', ltiData, apiUrl)
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`
      },
      data: qs.stringify({ltiData}),
      url,
    }
    return axios(options)
      .then(res => {
        return Promise.resolve(res.data)
      }).catch(err => {
        // extract the error data provided by the api
        return Promise.reject(err.response.data)
      })

  }

}
