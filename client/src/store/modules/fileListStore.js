import InstoreHelper from './instoreHelper'
import StoreHelper from '@/helpers/store-helper'
import { isImageFile } from '@/helpers/ehr-utils'
const debugFL = false

const state = {
  ehrMaxFileSize: 1024 * 2,
  imageFiles: [],
  otherFiles: [],
  errorMessage: '',
  uploadedFile: {size:0}
}

const getters = {
  imageFiles: state => {
    return state.imageFiles
  },
  otherFiles: state => {
    return state.otherFiles
  },
  errorMessage: state => {
    return state.errorMessage
  },
  uploadedFile: state => {
    return state.uploadedFile
  }
}

const actions = {
  uploadReset (context) {
    context.commit('setUploadedFile', undefined)
    context.commit('setErrorMessage', '')
  },
  getMaxFileSize (context) {
    if (debugFL) console.debug('File List store get max files size')
    const api = 'files'
    const url = 'public/maxFileSize'
    return InstoreHelper.getRequest(context, api, url)
      .then(response => {
        if (debugFL) console.log('file max size response data', response.data)
        return response.data.value
      })
  },
  addFileToList ( context, {file, onUploadProgress, consumerId, usePut}) {
    const config = {
      onUploadProgress: onUploadProgress
    }
    let bodyData = new FormData()
    // TODO get field name via api endpoint
    bodyData.append('ehrFile', file)
    const api = 'files'
    const url = 'upload'
    //clear the error message
    context.commit('setErrorMessage', '')
    const method = usePut ? 'put' : 'post'
    InstoreHelper.upsert(context, method, api, url, bodyData, config)
      .then( (response) => {
        context.commit('setUploadedFile', response.data)
        context.dispatch('refreshFileLists', consumerId)
      })
      .catch((error) => {
        let errorMessage = error
        if (error.response)
          errorMessage = error.response.data.message
        context.commit('setErrorMessage', errorMessage)
      })

  },
  refreshFileLists (context, consumerId) {
    if (!consumerId) {
      StoreHelper.setApiError('No tool consumer id so can not do file listing.')
      return
    }
    const apiUrl = StoreHelper.apiUrlGet()
    const api = 'files'
    const url = 'list'
    if (debugFL) console.log('refreshFileList ')
    //clear the error message
    context.commit('setErrorMessage', '')
    return InstoreHelper.getRequest(context, api, url)
      .then(response => {
        const fileNames = JSON.parse(response.data)
        // sort
        fileNames.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        // get file names of image files
        const imageNames = fileNames.filter((fName) => isImageFile(fName))
        // get all the other file names (not images)
        const otherNames = fileNames.filter(fName => imageNames.indexOf(fName) < 0)
        // compose the data structure for each file
        const map = (fName) => {
          return {
            fName: fName,
            url: apiUrl + `/files/public/${fName}/consumer/${consumerId}`
          }
        }
        context.commit('setImageFiles', imageNames.map((fName) => map(fName)))
        context.commit('setOtherFiles', otherNames.map((fName) => map(fName)))
      })
      .catch((error) => {
        let errorMessage = error
        if (error.response)
          errorMessage = error.response.data.message
        context.commit('setErrorMessage', errorMessage)
      })
  }
}

const mutations = {
  setImageFiles: (state, cData) => {
    if (debugFL) console.log('setImageFiles ', cData)
    state.imageFiles = cData
  },
  setOtherFiles: (state, cData) => {
    if (debugFL) console.log('setOtherFiles ', cData)
    state.otherFiles = cData
  },
  setErrorMessage: (state, cData) => {
    if (debugFL) console.log('setErrorMessage ', cData)
    state.errorMessage = cData
  },
  setUploadedFile: (state, cData) => {
    if (debugFL) console.log('setUploadedFile ', cData)
    state.uploadedFile = cData
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
