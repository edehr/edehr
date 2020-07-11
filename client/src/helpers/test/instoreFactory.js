import axios from 'axios'

export default function instoreFactory () {
  return {
    _prepareResolve: function (resolve, data) {
      if (data) resolve(data)
      resolve(true)
    },
  
    composeUrl : function (context, api, url) {
      let apiUrl = 'someURL'
      return `${apiUrl}/${api}/` + (url ? url : '')
    },
  
    instoreIsInstructor: function (rootState) {
      return rootState.visit.sVisitData.isInstructor
    },
  
    instoreIsDevContent: function (rootState) {
      return rootState.visit.isDevelopingContent
    },
  
    putRequest: function (context, api, url, bodyData) {
      url = this.composeUrl(context, api, url)
      return new Promise((resolve, reject) => {
        const data = axios.put(url, bodyData)
        console.log('put request >> resolving ', this._prepareResolve(resolve, data))
        resolve(data)
      })
    },
    postRequest: function (context, api, url, bodyData) {
      url = this.composeUrl(context, api, url)
      return new Promise((resolve, reject) => {
        try {
          const data = axios.post(url, bodyData)
          return resolve(data)
        } catch (err) {
          return reject(err)
        }
      })
    },
    getRequest: function (context, api, url) {
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
  
}
 
