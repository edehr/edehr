import InstoreHelper from '@/store/modules/instoreHelper'
import StoreHelper from '@/helpers/store-helper'
import { Text } from '@/helpers/ehr-text'
const API = 'activities'
const OBJ = 'activity'

const state = {
  activityRecord: {},
  activityId: ''
}

const getters = {
  activityId: state => state.activityId,
  activityRecord: state => state.activityRecord,
  hasActivity: state => JSON.stringify(state.activityRecord).length > 2,
}

const actions = {
  initialize: function ({ commit }) {
    commit('initialize')
  },
  clearActivity: function (context) {
    context.commit('setActivityId', undefined)
  },
  // open and close toggle the submit state of all visit records for this activity.
  close ({dispatch, commit}, id) {
    let url = 'close-activity/' + id
    let payload = { url: url, data: {} }
    return dispatch('put', payload)
  },
  open ({dispatch, commit}, id) {
    let url = 'open-activity/' + id
    let payload = { url: url, data: {} }
    return dispatch('put', payload)
  },
  linkAssignment ({dispatch, commit}, payload) {
    const {activity, assignment} = payload
    // console.log('activityStore.linkAssignment activity, assignment', activity, assignment)
    let url = 'link-assignment/' + activity
    let data = { url: url, data: {assignmentId: assignment} }
    // console.log('activityStore.linkAssignment data:', data)
    return dispatch('put', data)
  },
  setActivityId (context, id) {
    context.commit('setActivityId', id)
  },
  clearCurrentActivity (context) {
    context.commit('clearActivity')
    context.commit('setActivityId', undefined)
  },
  loadActivityRecord (context) {
    const visitId = context.rootGetters['visit/visitId']
    let url = 'getActivityRecord/' + visitId
    return InstoreHelper.getRequest(context, API, url).then(async response => {
      let results = response.data['activityRecord']
      // console.log('in load activity record', visitId, results)
      if (!results) {
        let msg = Text.GET_ACTIVITY_STORE_ERROR(id)
        StoreHelper.setApiError(msg)
        return
      }
      await context.commit('setActivityId', results.id)
      await context.commit('setActivityRecord', results)
      return results
    })
  },
  get (context, id) {
    let url = 'get/' + id
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let results = response.data[OBJ]
      if (!results) {
        let msg = Text.GET_ACTIVITY_STORE_ERROR(id)
        StoreHelper.setApiError(msg)
        return
      }
      return results
    })
  },
  updateTitleDescription ({dispatch, commit}, payload) {
    // const {custom_title, custom_description} = payload
    const {activityId } = payload
    let url = 'update-text/' + activityId
    let data = { url: url, data: payload }
    // console.log('activity-store update title. data ', data)
    return dispatch('put', data)
  },
  put (context, payload) {
    // console.log('activityStore put payload', payload)
    let url = payload.url
    let data = payload.data
    return InstoreHelper.putRequest(context, API, url, data).then(response => {
      return context.dispatch('loadActivityRecord')
    })
  },
}

const ACTIVITY_LOCAL_STORE ='activityId'
const mutations = {
  initialize: function (state) {
    // if stored get the activityId. Once it is in place a page load can request the activity data
    const activityId = localStorage.getItem(ACTIVITY_LOCAL_STORE)
    if (activityId) {
      state.activityId = activityId
    }
  },
  setActivityId: (state, id) => {
    if (id) {
      state.activityId = id
      // This id needs to survive a browser refresh
      localStorage.setItem(ACTIVITY_LOCAL_STORE, state.activityId)
    } else {
      state.activityId = ''
      localStorage.removeItem(ACTIVITY_LOCAL_STORE)
    }
  },
  clearActivity: (state) => {
    state.activityRecord = {}
  },
  setActivity: (state, activity) => {
    if(state.activityId !== activity._id) {
      throw new Error('System failure. The given activity has a different id then expected.')
    }
    state.activity = activity
  },
  setActivityRecord: (state, activityRecord) => {
    if(state.activityId !== activityRecord.id) {
      throw new Error('System failure. The given activity has a different id then expected.')
    }
    state.activityRecord = activityRecord
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
