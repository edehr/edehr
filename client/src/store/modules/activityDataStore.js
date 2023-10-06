import InstoreHelper from './instoreHelper'
import StoreHelper from '../../helpers/store-helper'
import { Text } from '@/helpers/ehr-text'
import { EhrPages } from '@/ehr-definitions/ehr-models'
import MPatientHelper from '@/helpers/mPatientHelper'

const API = 'activity-data'
const NAME = 'ActivityDataStore'
const debug = false

const state = {
  activityData: {},
  assignmentData: {}
}

const getters = {
  assignmentData: state => state.activityData.assignmentData || {},
  hasDraftRows: state => {
    let assignmentData =  state.activityData.assignmentData || {}
    const ehrPages = new EhrPages()
    let dCnt = 0
    const patients =  assignmentData.patients
    if(patients) {
      for(const patient of patients)  {
        const ehrData = patient ? patient.ehrData : {}
        const stats = ehrPages.ehrPagesStats(ehrData)
        dCnt += stats.meta.draftRows
      }
    }
    return dCnt > 0
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
    const API = 'activity-data'
    const adi = context.state.activityData._id
    const url = `assignment-data/${adi}`
    const silent = payload.silent
    payload.patientObjectId = MPatientHelper.getCurrentPatientObjectId()
    return InstoreHelper.putRequest(context, API, url, payload, silent).then(response => {
      let results = response.data
      // console.log('after put this is returned for storing', JSON.stringify(results.assignmentData, null, 2))
      context.commit('setAssignmentData', results.assignmentData)
      return results.assignmentData
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
  /**
   * Invoke this action to call the API to get an ActivityData record along with the
   * student's assignmentData, which contains a patient object that is an array of patients.
   * @param context
   * @param payload must contain id of ActivityData record
   * @returns {Promise<void>}
   */
  async loadActivityData (context, payload) {
    if (!payload || !payload.id) throw new Error('Coding error. Must provide payload with id to loadActivityData')
    const { id, silent } = payload
    let url = 'activity-assignment-data/' + id
    const response = await InstoreHelper.getRequest(context, API, url, silent)
    if (!(response.data && response.data.activityData)) {
      let msg = Text.GET_ACTIVITY_DATA_ERROR('activity data', id)
      StoreHelper.setApiError(msg)
      return
    }
    // assignmentData is the student's ehr data
    if (!response.data.activityData.assignmentData) {
      // this can happen for a brief interval, in the full demo, while the activity is linking.
      return
    }
    await context.commit('setActivityData', response.data.activityData)
    await context.commit('setAssignmentData', response.data.activityData.assignmentData)
  }
}

const mutations = {
  setActivityData: (state, data) => {
    if(debug) console.log(NAME+ ' set data', data)
    state.activityData = data
  },
  setAssignmentData: (state, data) => {
    // student data
    state.assignmentData = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
