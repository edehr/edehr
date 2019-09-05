import axios from 'axios'
import { composeAxiosResponseError, setApiError } from '../../helpers/ehr-utils'
import StoreHelper from '../../helpers/store-helper'

class InstoreHelperWorker {

  instoreIsInstructor (rootState) {
    return rootState.visit.sVisitInfo.isInstructor
  }

  instoreIsDevContent (rootState) {
    return rootState.visit.isDevelopingContent
  }

  putRequest (context, url, bodyData) {
    console.log('PUT to this url', url)
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
  postRequest (context, url, bodyData) {
    console.log('POST to this url', url)
    StoreHelper.setLoading(context, true)
    return new Promise((resolve, reject) => {
      axios
        .post(url, bodyData)
        .then(results => {
          console.log('success instoreHelper putRequest', results)
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
  getRequest (context, url) {
    console.log('GET to this url', url, context)
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