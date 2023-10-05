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

  putRequest (context, api, url, bodyData, silent) {
    url = this.composeUrl(context, api, url)
    if(debug) console.log('PUT to this url', url)
    if(debug) console.log('with this data "', bodyData, '"')
    if (!silent) StoreHelper.setLoading('putRequest', true)
    return new Promise((resolve, reject) => {
      axios
        .put(url, bodyData)
        .then(results => {
          resolve(results)
        })
        .catch(error => {
          let msg = composeAxiosResponseError(error, 'Update failed: ')
          StoreHelper.setApiError(msg)
          reject(msg)
        })
        .finally(() => {
          if (!silent) StoreHelper.setLoading('putRequest', false)
        })
    })
  }
  postRequest (context, api, url, bodyData) {
    url = this.composeUrl(context, api, url)
    if(debug) console.log('POST to this url', url)
    if(debug) console.log('POST with this data "', bodyData, '"')
    StoreHelper.setLoading('postRequest', true)
    return new Promise((resolve, reject) => {
      axios
        .post(url, bodyData)
        .then(results => {
          // console.log('success instoreHelper putRequest', results)
          resolve(results)
        })
        .catch(error => {
          let msg = composeAxiosResponseError(error, 'Create failed: ')
          StoreHelper.setApiError(msg)
          reject(msg)
        })
        .finally(() => StoreHelper.setLoading('postRequest', false))
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
    StoreHelper.setLoading('upsert', true)
    return new Promise((resolve, reject) => {
      axios(config)
        .then(results => {
          console.log('success instoreHelper upsert', results)
          resolve(results)
        })
        .catch(error => {
          console.log('success instoreHelper catch', error)
          let msg = composeAxiosResponseError(error, 'Create failed: ')
          StoreHelper.setApiError(msg)
          reject(msg)
        })
        .finally(() => StoreHelper.setLoading('upsert', false))
    })
  }
  // TODO remove context parameter
  getRequest (context, api, url, silent) {
    url = this.composeUrl(context, api, url)
    if(debug) console.log('GET to this url', url)
    if (!silent) StoreHelper.setLoading('getRequest - not silent', true)
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
          if (!silent) StoreHelper.setLoading('getRequest - not silent', false)
        })
    })
  }
  deleteRequest (context, api, url) {
    url = this.composeUrl(context, api, url)
    if (debug) console.log('delete TO URL ', url, context)
    StoreHelper.setLoading('deleteRequest', true)
    return new Promise ((resolve, reject) => {
      axios.delete(url)
        .then(result => {
          resolve(result)
        }).catch(err => {
          const msg = composeAxiosResponseError(err, 'Delete failed: ')
          StoreHelper.setApiError(msg)
          reject(msg)
        })
        .finally(() => StoreHelper.setLoading('deleteRequest', false))
    })
  }
}
const InstoreHelper = new InstoreHelperWorker()
export default InstoreHelper
