import InstoreHelper from '@/store/modules/instoreHelper'
import StoreHelper from '@/helpers/store-helper'
import { Text } from '@/helpers/ehr-text'
const API = 'assignments'
const debug = true

const state = {
  assignmentsListing: [],
}

const getters = {
  list: state => {
    return state.assignmentsListing
  }
}

function getAssignmentViaApi (context, url) {
  return InstoreHelper.getRequest(context, API, url).then(response => {
    let list = response.data.assignments
    if (debug) console.log('loadAssignments response.data', list)
    if (!list) {
      let msg = Text.MUST_HAVE_ASSIGNMENTS
      StoreHelper.setApiError(msg)
      return
    }
    let sdList = StoreHelper.getSeedDataList()
    list.forEach(ass => {
      let sd = sdList.find(sd => {
        return sd._id === ass.seedDataId
      })
      ass.seedDataObj = sd || {}
    })
    return list
  })
}

const actions = {
  getAssignments (context) {
    let url = 'consumer/' + StoreHelper.toolConsumerId()
    return getAssignmentViaApi(context, url)
  },
  getAssignmentsWithCounts (context) {
    let url = 'withActivityCount/' + StoreHelper.toolConsumerId()
    return getAssignmentViaApi(context, url)
  },

  
  async loadAssignments (context) {
    const { dispatch, commit } = context
    const list = await dispatch('getAssignments', context)
    commit('setAssignmentsListing', list)
    return list
  },

  async loadAssignmentsWithCounts (context) {
    const { dispatch, commit } = context
    const list = await dispatch('getAssignmentsWithCounts', context)
    commit('setAssignmentsListing', list)
    return list
  },


  async createAssignment (context, payload) {
    let url = undefined
    if(debug) console.log('send assignment data ', url, payload)
    const results = await InstoreHelper.postRequest(context, API, url, payload)
    let resultsData = results.data
    if(debug) console.log('assignment post responded with:', JSON.stringify(resultsData))
    await context.dispatch('loadAssignments')
    return resultsData
  },

  updateAssignment (context, dataIdPlusPayload) {
    let id = dataIdPlusPayload.id
    let payload = dataIdPlusPayload.payload
    let url = id
    if(debug) console.log('updateAssignment', url, payload)
    return InstoreHelper
      .putRequest(context, API, url, payload)
      .then(results => {
        let resultsData = results.data
        if(debug) console.log('assignment post responded with:', JSON.stringify(resultsData))
        return context.dispatch('loadAssignments')
      })
      .catch(err => {
        let msg = Text.UPDATE_ASSIGNMENT_ERROR(err)
        console.error(msg)
        StoreHelper.setApiError(msg)
      })
  }
}

const mutations = {
  setAssignmentsListing: (state, cData) => {
    if(debug) console.log('setAssignmentsListing ', cData)
    cData.sort( (a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()) )
    state.assignmentsListing = cData
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
