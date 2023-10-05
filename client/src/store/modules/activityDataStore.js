import InstoreHelper from './instoreHelper'
import StoreHelper from '../../helpers/store-helper'
import { Text } from '@/helpers/ehr-text'
import { EhrPages } from '@/ehr-definitions/ehr-models'

const API = 'activity-data'
const NAME = 'ActivityDataStore'
const debug = false

const state = {
  activityData: {},
}

const getters = {
  assignmentData: state => state.activityData.assignmentData || {},
  hasDraftRows: state => {
    let assignmentData =  state.activityData.assignmentData || {}
    const ehrPages = new EhrPages()
    const statsSeed = ehrPages.ehrPagesStats(assignmentData)
    return statsSeed.meta.draftRows > 0
  },
  lastUpdateDate: state => state.activityData.lastDate,
  scratchData: state => state.activityData.scratchData,
  submitted: state => state.activityData.submitted || false,
  evaluationData: state => state.activityData.evaluationData,
  id: state => state.activityData._id,
  activityData: state => state.activityData,
}

function _sendHelper (context, parameter, data) {
  return context.dispatch('sendActivityData', { parameter: parameter, data: data })
}
const actions = {
  sendScratchData (context, data) {
    return _sendHelper(context, 'scratch-data', data)
  },

  sendEvaluationNotes (context, data) {
    return _sendHelper(context, 'evaluation-data', data)
  },

  sendSubmitted (context, data) {
    return _sendHelper(context, 'submitted', data)
  },

  sendAssignmentDataUpdate (context, payload) {
    if (!payload.propertyName || !payload.value) {
      console.error('Coding error. To put assignment data the payload object must have propertyName (e.g. pageKey) and value (ehrData).')
      return
    }
    if (!payload.action) {
      console.error('Coding error. To put assignment data the payload object must specify action save or draft')
      return
    }
    const adi = context.state.activityData._id
    const url = `assignment-data/${adi}/${payload.action}`
    const silent = payload.silent
    return InstoreHelper.putRequest(context, API, url, payload, silent).then(response => {
      let results = response.data
      context.commit('setActivityData', results)
      return results
    })
  },
  sendActivityData (context, payload) {
    let activityDataId = context.state.activityData._id
    let apiPayload = { value: payload.data }
    let parameter = payload.parameter
    let url = `${parameter}/${activityDataId}`
    if (debug) console.log(NAME + ' ActivityData send ', url, data)
    return InstoreHelper.putRequest(context, API, url, apiPayload).then(response => {
      context.commit('setActivityData', response.data)
      return response.data
    })
  },
  async loadActivityData (context, payload) {
    if (!payload || !payload.id) throw new Error('Coding error. Must provide payload with id to loadActivityData')
    const { id, silent } = payload
    let url = 'get/' + id
    const response = await InstoreHelper.getRequest(context, API, url, silent)
    if (!(response.data && response.data.activitydata)) {
      let msg = Text.GET_ACTIVITY_DATA_ERROR('activity data', id)
      StoreHelper.setApiError(msg)
      return
    }
    let activityData = response.data.activitydata
    await context.commit('setActivityData', activityData)
  },
}

const mutations = {
  setActivityData: (state, data) => {
    if(debug) console.log(NAME+ ' set data', data)
    state.activityData = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
