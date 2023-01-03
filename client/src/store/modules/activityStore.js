import InstoreHelper from '@/store/modules/instoreHelper'
import StoreHelper from '@/helpers/store-helper'
import { Text } from '@/helpers/ehr-text'
const API = 'activities'
const OBJ = 'activity'

const state = {
  activity: {},
  activityId: ''
}

const getters = {
  activity: state => state.activity,
  activityId: state => state.activityId,
  activityTitle: state => state.activity.resource_link_title,
  activityDescription: state => state.activity.resource_link_description,
  courseTitle: state => state.activity.context_title,
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
  loadCurrentActivity ({dispatch, commit, state}) {
    const id = state.activityId
    if(!id || id.length===0) {
      throw new Error('System failure. Can not load the current activity because no activity id has been set')
    }
    return dispatch('get',id)
      .then( (results) => {
        commit('setActivity', results)
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
  put (context, payload) {
    // console.log('activityStore put payload', payload)
    let url = payload.url
    let data = payload.data
    return InstoreHelper.putRequest(context, API, url, data).then(response => {
      let results = response.data
      context.commit('setActivity', results)
      return results
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
      // This id needs to survive a browser refresh
      localStorage.removeItem(ACTIVITY_LOCAL_STORE)
    }
  },
  setActivity: (state, activity) => {
    if(state.activityId !== activity._id) {
      throw new Error('System failure. The give activity has a different id then expected.')
    }
    state.activity = activity
  },

  // set: (state, data) => {
  //   console.log('activityStore MAKE THIS GO OBSOLETE set')
  //   // console.log('activityStore set data', data)
  //   // transfer the db id to the field we use
  //   state.activityId = data._id
  //   // This id needs to survive a browser refresh
  //   localStorage.setItem(ACTIVITY_LOCAL_STORE, state.activityId)
  //   state.activity = data
  // },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
