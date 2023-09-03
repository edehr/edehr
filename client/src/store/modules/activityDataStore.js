import InstoreHelper from './instoreHelper'
import StoreHelper from '../../helpers/store-helper'
import { Text } from '@/helpers/ehr-text'
import { EhrPages } from '@/ehr-definitions/ehr-models'

const API = 'activity-data'
const OBJ = 'activitydata'
const NAME = 'ActivityDataStore'
const debug = false

const state = {
  dataStore: {}
}

function _sendHelper (context, parameter, data) {
  return context.dispatch('sendActivityData', { parameter: parameter, data: data })
}
const getters = {
  assignmentData: state => state.dataStore.assignmentData || {},
  hasDraftRows: state => {
    let assignmentData =  state.dataStore.assignmentData || {}
    const ehrPages = new EhrPages()
    const statsSeed = ehrPages.ehrPagesStats(assignmentData)
    return statsSeed.meta.draftRows > 0
  },
  lastUpdateDate: state => state.dataStore.lastDate,
  scratchData: state => state.dataStore.scratchData,
  submitted: state => state.dataStore.submitted || false,
  evaluationData: state => state.dataStore.evaluationData,
  id: state => state.dataStore._id,
  activityData: state => state.dataStore,
}

const actions = {
  sendScratchData (context, data) {return _sendHelper(context, 'scratch-data', data)},

  sendEvaluationNotes (context, data) {return _sendHelper(context, 'evaluation-data', data)},

  sendSubmitted (context, data) {return _sendHelper(context, 'submitted', data)},

  sendAssignmentDataUpdate (context, payload) {
    // Update the contents of the activityData.assignmentData.
    // Payload must have form similar to
    // let payload = {
    //   propertyName: 'progressNotes',
    //   value: value
    // }
    let adi = context.state.dataStore._id
    let url = `assignment-data/${adi}/save`
    if (debug) console.log(NAME+ ' sendAssignmentDataUpdate', payload)
    return context.dispatch('putActiveData', {url: url, data: payload })
  },

  sendActivityData (context, payload) {
    let activityDataId = context.state.dataStore._id
    let data = payload.data
    let parameter = payload.parameter
    let url = `${parameter}/${activityDataId}`
    if (debug) console.log(NAME+ ' ActivityData send ', url, data)
    return context.dispatch('putActiveData', { url:url, data: { value: data }})
  },
  sendAssignmentDataDraft (context, payload) {
    // console.log('sendAssignmentDataDraft',payload)
    let adi = context.state.dataStore._id
    let url = `assignment-data/${adi}/draft`
    if (debug) console.log(NAME+ ' sendAssignmentDataUpdate', payload)
    return context.dispatch('putActiveDataSilent', {url: url, data: payload })
  },
  loadActivityData (context, payload) {
    if (!payload) throw new Error('Coding error. Must provide payload to loadActivityData')
    if (!payload.id) payload.id = context.state.dataStore._id
    if (!payload.id) {
      console.error(NAME + ' can not get activityData from null id ')
      return
    }
    return context.dispatch('getActivityData',payload)
      .then( (results) => {
        if (debug) console.log(NAME + ' loaded ', results)
        return context.commit('set', results)
      })
  },
  getActivityData (context, payload) {
    const { id, silent } = payload
    let url = 'get/' + id
    return InstoreHelper.getRequest(context, API, url, silent).then(response => {
      let results = response.data[OBJ]
      if (!results) {
        let msg = Text.GET_ACTIVITY_DATA_ERROR(NAME, id)
        StoreHelper.setApiError(msg)
        return
      }
      return results
    })
  },
  putActiveData (context, payload) {
    let url = payload.url
    let data = payload.data
    return InstoreHelper.putRequest(context, API, url, data).then(response => {
      let results = response.data
      if(debug) console.log(NAME+ ' put', response.data)
      context.commit('set', results)
      return results
    })
  },
  putActiveDataSilent (context, payload) {
    let url = payload.url
    let data = payload.data
    return InstoreHelper.putRequestSilent(context, API, url, data).then(response => {
      let results = response.data
      // console.log(NAME+ ' put', response.data)
      context.commit('set', results)
      return results
    })
  }
}

const mutations = {
  set: (state, data) => {
    if(debug) console.log(NAME+ ' set data', data)
    state.dataStore = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
