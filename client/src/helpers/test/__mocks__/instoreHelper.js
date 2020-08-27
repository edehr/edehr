import axios from 'axios'

class InstoreHelperWorker {
  _prepareResolve (resolve, data) {
    if (data) resolve(data)
    resolve(true)
  }

  composeUrl (context, api, url) {
    let apiUrl = 'someURL'
    return `${apiUrl}/${api}/` + (url ? url : '')
  }

  instoreIsInstructor (rootState) {
    return rootState.visit.sVisitData.isInstructor
  }

  putRequest (context, api, url, bodyData) {
    console.log('putRequest was fired')
    url = this.composeUrl(context, api, url)
    return new Promise((resolve, reject) => {
      const data = axios.put(url, bodyData)
      console.log('put request >> resolving ', this._prepareResolve(resolve, data))
      resolve(data)
    })
  }
  postRequest (context, api, url, bodyData) {
    url = this.composeUrl(context, api, url)
    return new Promise((resolve, reject) => {
      try {
        const data = axios.post(url, bodyData)
        return resolve(data)
      } catch (err) {
        return reject(err)
      }
    })
  }
  getRequest (context, api, url) {
    url = this.composeUrl(context, api, url)
    return new Promise((resolve, reject) => {
      try {
        const data = axios.get(url)
        return this._prepareResolve(resolve, data)
      } catch (err) {
        return reject(err)
      } 
    })
  }
}
const InstoreHelper = new InstoreHelperWorker()
export default InstoreHelper
