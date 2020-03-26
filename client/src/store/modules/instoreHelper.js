import axios from 'axios'
import { composeAxiosResponseError, setApiError } from '../../helpers/ehr-utils'
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

  composeUrl (context, api, url) {
    let apiUrl = sessionStorage.getItem('apiUrl')
    return `${apiUrl}/${api}/` + (url ? url : '')
  }

  instoreIsInstructor (rootState) {
    return rootState.visit.sVisitData.isInstructor
  }

  instoreIsDevContent (rootState) {
    return rootState.visit.isDevelopingContent
  }

  putRequest (context, api, url, bodyData) {
    url = this.composeUrl(context, api, url)
    if(debug) console.log('PUT to this url', url)
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
          setApiError(msg)
          StoreHelper.setLoading(context, false)
          reject(msg)
        })
    })
  }
  postRequest (context, api, url, bodyData) {
    url = this.composeUrl(context, api, url)
    if(debug) console.log('POST to this url', url)
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
          setApiError(msg)
          StoreHelper.setLoading(context, false)
          reject(msg)
        })
    })
  }
  getRequest (context, api, url) {
    url = this.composeUrl(context, api, url)
    if(debug) console.log('GET to this url', url, context)
    StoreHelper.setLoading(context, true)
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(results => {
          StoreHelper.setLoading(context, false)
          resolve(results)
        })
        .catch(error => {
          // let msg = `Failed GET to ${url} with error: ${error.message}`
          let msg = composeAxiosResponseError(error, 'Get failed: ')
          setApiError(msg)
          StoreHelper.setLoading(context, false)
          reject(msg)
        })
    })
  }
}
const InstoreHelper = new InstoreHelperWorker()
export default InstoreHelper