import InstoreHelper from './instoreHelper'
import StoreHelper from '../../helpers/store-helper'
import { Text } from '../../helpers/ehr-text'
const API = 'activities'
const OBJ = 'activity'
const NAME = 'ActivityStore'
const debug = false

const state = {
  dataStore: {},
}

const getters = {
  id: state => {
    let prop =  state.dataStore._id
    if(debug) console.log(NAME + ' get activityDataId', prop)
    return prop
  },
  courseTitle: state => {
    let prop =  state.dataStore.context_title
    if(debug) console.log(NAME + ' get courseTitle', prop)
    return prop
  },
  activityId: state => {
    let prop =  state.dataStore._id
    if(debug) console.log(NAME + ' get dataStore._id', prop)
    return prop
  },
  activityTitle: state => {
    let prop =  state.dataStore.resource_link_title
    if(debug) console.log(NAME + ' get activityTitle', prop)
    return prop
  },
  activityDescription: state => {
    let prop =  state.dataStore.resource_link_description
    if(debug) console.log(NAME + ' get activityDescription', prop)
    return prop
  },
  closed: state => {
    let prop =  state.dataStore.closed
    if(debug) console.log(NAME + ' get dataStore.closed', prop)
    return prop
  },
  closedDate: state => {
    let prop =  state.dataStore.closedDate
    if(debug) console.log(NAME + ' get dataStore.closedDate', prop)
    return prop
  }
}

const actions = {
  close ({dispatch, commit}, id) {
    let url = 'close-activity/' + id
    let payload = { url:url, data: { }}
    return dispatch('put', payload)
      .then( (results) => {
        if(debug) console.log(NAME + ' loaded ', results)
        commit('set', results)
        return results
      })
  },
  open ({dispatch, commit}, id) {
    let url = 'open-activity/' + id
    let payload = { url:url, data: { }}
    return dispatch('put', payload)
      .then( (results) => {
        if(debug) console.log(NAME + ' loaded ', results)
        commit('set', results)
        return results
      })
  },

  load ({dispatch, commit}, id) {
    // at this time the switch to aactivityctivity and class list component both invoke this load.
    // commit the new id now so the class list component uses the latest as set by the switch assignment
    return dispatch('get',id)
      .then( (results) => {
        if(debug) console.log(NAME + ' loaded ', results)
        commit('set', results)
        return results
      })
  },
  get (context, id) {
    let url = 'get/' + id
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let results = response.data[OBJ]
      if (!results) {
        let msg = Text.GET_ACTIVITY_STORE_ERROR(NAME, id)
        StoreHelper.setApiError(msg)
        return
      }
      return results
    })
  },
  put (context, payload) {
    let url = payload.url
    let data = payload.data
    return InstoreHelper.putRequest(context, API, url, data).then(response => {
      let results = response.data
      context.commit('set', results)
      return results
    })
  },
}

const mutations = {
  set: (state, data) => {
    state.dataStore = data
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
