import axios from 'axios'
import { composeAxiosResponseError } from '../../helpers/ehr-utils'
import StoreHelper from '../../helpers/store-helper'

const debug = false
/*
  const API = 'someBase'
...
  let someId = ...
  let url = 'get/' + someId
  return InstoreHelper.getRequest(context, API, url).then(response => {
    let somedata = response.data.somedata
  })

 */
class InstoreHelperWorker {

  // TODO remove context parameter
  composeUrl (context, api, url) {
    let apiUrl = StoreHelper.apiUrlGet()
    return `${apiUrl}/${api}/` + (url ? url : '')
  }

  instoreIsInstructor (rootState) {
    return rootState.visit.sVisitData.isInstructor
  }

  instoreIsDevContent (rootState) {
    return rootState.visit.isDevelopingContent
  }

  // postRequest (context, api, url, bodyData, config) {
  //   console.log('here in post req')
  //   return this.upsert(context, 'post', api, url, bodyData, config)
  // }
  //
  // putRequest (context, api, url, bodyData, config) {
  //   return this.upsert(context, 'put', api, url, bodyData, config)
  // }

  async putRequestSilent (context, api, url, bodyData) {
    url = this.composeUrl(context, api, url)
    // console.log('PUT silent to this url', url)
    // console.log('with silent this data "', bodyData, '"')
    return await axios.put(url, bodyData)
  }

  putRequest (context, api, url, bodyData) {
    url = this.composeUrl(context, api, url)
    if(debug) console.log('PUT to this url', url)
    if(debug) console.log('with this data "', bodyData, '"')
    StoreHelper.setLoading(context, true)
    return new Promise((resolve, reject) => {
      axios
        .put(url, bodyData)
        .then(results => {
          // console.log('success instoreHelper putRequest')
          StoreHelper.setLoading(context, false)
          resolve(results)
        })
        .catch(error => {
          let msg = composeAxiosResponseError(error, 'Update failed: ')
          StoreHelper.setApiError(msg)
          StoreHelper.setLoading(context, false)
          reject(msg)
        })
    })
  }
  postRequest (context, api, url, bodyData) {
    url = this.composeUrl(context, api, url)
    if(debug) console.log('POST to this url', url)
    if(debug) console.log('POST with this data "', bodyData, '"')
    StoreHelper.setLoading(context, true)
    return new Promise((resolve, reject) => {
      axios
        .post(url, bodyData)
        .then(results => {
          // console.log('success instoreHelper putRequest', results)
          StoreHelper.setLoading(context, false)
          resolve(results)
        })
        .catch(error => {
          let msg = composeAxiosResponseError(error, 'Create failed: ')
          StoreHelper.setApiError(msg)
          StoreHelper.setLoading(context, false)
          reject(msg)
        })
    })
  }

  upsert (context, method, api, url, bodyData, config) {
    console.log('here in  upsert')
    config = Object.assign({}, config)
    config.url = this.composeUrl(context, api, url)
    config.method = method
    config.data = bodyData
    console.log('here in  upsert', config)
    if(debug) console.log('POST to this url', url)
    StoreHelper.setLoading(context, true)
    return new Promise((resolve, reject) => {
      axios(config)
        .then(results => {
          console.log('success instoreHelper upsert', results)
          StoreHelper.setLoading(context, false)
          resolve(results)
        })
        .catch(error => {
          console.log('success instoreHelper catch', error)
          let msg = composeAxiosResponseError(error, 'Create failed: ')
          StoreHelper.setApiError(msg)
          StoreHelper.setLoading(context, false)
          reject(msg)
        })
    })
  }
  // TODO remove context parameter
  getRequest (context, api, url) {
    url = this.composeUrl(context, api, url)
    if(debug) console.log('GET to this url', url)
    StoreHelper.setLoading(context, true)
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(results => {
          if(debug) console.log('GOT ', api, '>> ', results)
          resolve(results)
        })
        .catch(error => {
          if(debug) console.log('Error ', api, '>> ', error)
          // let msg = `Failed GET to ${url} with error: ${error.message}`
          let msg = composeAxiosResponseError(error, 'Get failed: ')
          StoreHelper.setApiError(msg)
          reject(msg)
        })
        .finally( () => {
          if(debug) console.log('GOT ', api, '>> finally')
          StoreHelper.setLoading(context, false)
        })
    })
  }
  deleteRequest (context, api, url) {
    url = this.composeUrl(context, api, url)
    if (debug) console.log('delete TO URL ', url, context)
    StoreHelper.setLoading(context, true)
    return new Promise ((resolve, reject) => {
      axios.delete(url)
        .then(result => {
          StoreHelper.setLoading(context, false)
          resolve(result)
        }).catch(err => {
          const msg = composeAxiosResponseError(err, 'Delete failed: ')
          StoreHelper.setApiError(msg)
          StoreHelper.setLoading(context, false)
          reject(msg)
        })
    })
  }
}
const InstoreHelper = new InstoreHelperWorker()
export default InstoreHelper
