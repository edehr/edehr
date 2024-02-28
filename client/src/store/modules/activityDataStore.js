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

async function _commonPut (context, url, payload) {
  const API = 'activity-data'
  const silent = payload.silent
  const response = await InstoreHelper.putRequest(context, API, url, payload, silent)
  // console.log('_common put url ' + url + ' response data', response)
  await _commonUpdate(context, response.data)
}
async function _commonUpdate (context, data) {
  // console.log('common update', data)
  context.commit('setActivityData', data)
  const assignmentData = data.assignmentData || {}
  const patientList = assignmentData.patients || []
  await context.dispatch('mPatientStore/loadStudentPatientList', patientList, { root: true })
}

const actions = {
  async resetInstructorAsStudentAssignmentData (context) {
    const adi = context.state.activityData._id
    const url = `reset-assignment-data/${adi}`
    await _commonPut(context, url, {})
  },
  sendScratchData (context, data) {
    return context.dispatch('_sendActivityData', { parameter: 'scratch-data', data: data })
  },
  sendEvaluationNotes (context, data) {
    return context.dispatch('_sendActivityData', { parameter: 'evaluation-data', data: data })
  },
  sendSubmitted (context, data) {
    return context.dispatch('_sendActivityData', { parameter: 'submitted', data: data })
  },
  async sendAssignmentDataUpdate (context, payload) {
    if (!payload.propertyName || !payload.value) {
      console.error('Coding error. To put assignment data the payload object must have propertyName (e.g. pageKey) and value (ehrData).')
      return
    }
    if (!payload.action) {
      console.error('Coding error. To put assignment data the payload object must specify action save or draft')
      return
    }
    const adi = context.state.activityData._id
    const url = `assignment-data/${adi}`
    payload.patientObjectId = MPatientHelper.getCurrentPatientObjectId()
    await _commonPut(context, url, payload)
  },
  async sendAddPatientToAssignmentData (context, payload) {
    if (!payload.seedId) {
      // to do allow for a created patient without seed id
      console.error('Coding error. To add a patient we need the case study (seed) id.')
      return
    }
    const adi = context.state.activityData._id
    let url = 'add-patient-with-seed/' + adi
    await _commonPut(context, url, payload)
  },
  async _sendActivityData (context, payload) {
    let activityDataId = context.state.activityData._id
    let apiPayload = { value: payload.data }
    let parameter = payload.parameter
    let url = `${parameter}/${activityDataId}`
    await _commonPut(context, url, apiPayload)
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
    await _commonUpdate(context, response.data.activityData)
  }
}

const mutations = {
  setActivityData: (state, data) => {
    if(debug) console.log(NAME+ ' set data', data)
    state.activityData = data
    state.assignmentData = data.assignmentData
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
