import StoreHelper from './storeHelper'
const helper = new StoreHelper()
import { composeUrl, setApiError } from '../../helpers/ehr-utills'
const API = 'assignments'

const state = {
  assignmentsListing: [],
  assignment: {}
}

const getters = {}

const actions = {
  loadOneAssignmentThenSeed(context, id) {
    let url = composeUrl(context, API) + 'get/' + id
    return helper.getRequest(context, url).then(response => {
      let assignment = response.data.assignment
      if (!assignment) {
        let msg = 'ERROR the could not get assignment ' + id
        setApiError(context, msg)
        return
      }
      let seedId = assignment.seedDataId
      let options = { root: true }
      console.log('Got assignment for ', id, 'with seedDataId', seedId)
      context.commit('setAssignment', assignment)
      context.commit('seedStore/setSeedId', seedId, options)
      return context.dispatch('seedStore/loadSeedContent', null, options)
    })
  },
  loadAssignments(context) {
    let url = composeUrl(context, API)
    return helper.getRequest(context, url).then(response => {
      let list = response.data.assignments
      if (!list) {
        console.error('ERROR the system should have assignments')
        return
      }
      this.assignmentsListing = list
      context.commit('setAssignmentsListing', list)
    })
  },
  createAssignment(context, payload) {
    let url = composeUrl(context, API)
    console.log('send assignment data ', url, payload)
    return helper.postRequest(context, url, payload).then(results => {
      let resultsData = results.data
      console.log('assignment post responded with:', JSON.stringify(resultsData))
      return context.dispatch('loadAssignments')
    })
  },
  updateAssignment(context, dataIdPlusPayload) {
    let id = dataIdPlusPayload.id
    let payload = dataIdPlusPayload.payload
    let url = composeUrl(context, API) + id
    console.log('updateAssignment', url, payload)
    return helper
      .putRequest(context, url, payload)
      .then(results => {
        let resultsData = results.data
        console.log('assignment post responded with:', JSON.stringify(resultsData))
        return context.dispatch('loadAssignments')
      })
      .catch(err => {
        console.log('error in update assignment ', err)
      })
  }
}

const mutations = {
  setAssignmentsListing: (state, cData) => {
    state.assignmentsListing = cData
  },
  setAssignment: (state, assignment) => {
    state.assignment = assignment
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
