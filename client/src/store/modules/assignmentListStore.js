import InstoreHelper from '@/store/modules/instoreHelper'
import StoreHelper from '@/helpers/store-helper'
import { Text } from '@/helpers/ehr-text'
const API = 'assignments'
const debug = false

const state = {
  assignmentsListing: [],
  listMetadata: {},
}

const getters = {
  list: state => {
    return state.assignmentsListing
  },
  listMetadata: state => { return state.listMetadata },
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
    let url = 'consumer/' + StoreHelper.getAuthdConsumerId()
    return getAssignmentViaApi(context, url)
  },
  getAssignmentsWithCounts (context) {
    let url = 'withActivityCount/' + StoreHelper.getAuthdConsumerId()
    return getAssignmentViaApi(context, url)
  },

  loadPage (context, payload) {
    let consumerId = StoreHelper.getAuthdConsumerId()
    if (!consumerId) {
      // this can happen if you visit the L Objs page and then refresh the page. No worries. Load will happen later.
      // console.log('L Obj List. Will not load lobjs at this time because the consumer id is not yet set up.')
      return
    }
    let { offset, limit, sortKey, sortDir, appTypes, searchTerm } = payload
    // appTypes a CSV string with appTypes like EHR and LIS
    let qs = `toolConsumerId=${consumerId}&offset=${offset}&limit=${limit}&sortKey=${sortKey}&sortDir=${sortDir}&appTypes=${appTypes}`
    if (searchTerm) {
      qs += '&searchTerm=' + searchTerm
    }
    let url = 'paginate?' + qs
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let list = response.data.list
      if (!list) {
        console.error('ERROR the system should have seeddata')
        return
      }
      context.commit('setAssignmentsListing', list)
      context.commit('_setListMeta', response.data.metadata)
      return list
    })
  },


  // TODO  remove the following and replace with the loadAssignmentsWithCounts
  // because the create and update use the following but most other parts of the system use the with counts
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
    let url = 'create'
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
    let url = 'update/' + id
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
    // cData.sort( (a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()) )
    state.assignmentsListing = cData
  },
  _setListMeta: (state, metadata) => {
    state.listMetadata = metadata
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
