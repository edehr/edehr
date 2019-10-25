import InstoreHelper from './instoreHelper'
import { composeUrl, setApiError } from '../../helpers/ehr-utils'
const API = 'assignments'

const state = {
  assignmentsListing: [],
  assignment: {}
}

const getters = {}

const actions = {
  loadAssignment ({dispatch, commit}, id) {
    return dispatch('getAssignment',id)
      .then( (assignment) => {
        // console.log('Assignment store loaded ', assignment)
        return commit('setAssignment', assignment)
      })
  },
  getAssignment (context, id) {
    let url = composeUrl(context, API) + 'get/' + id
    return InstoreHelper.getRequest(context, url).then(response => {
      let assignment = response.data.assignment
      if (!assignment) {
        let msg = 'ERROR the could not get assignment ' + id
        setApiError(msg)
        return
      }
      return assignment
    })
  },
  switchAssignment (context, assignment) {
    context.commit('setAssignment', assignment)
  },

  findAssignment (context, payload) {
    let {toolConsumerId, externalId} = payload
    let url = composeUrl(context, API) + 'consumer/' + toolConsumerId + '/externalId/' + externalId
    // console.log('findAssignment URL', url)
    return InstoreHelper.getRequest(context, url).then(response => {
      // console.log('findAssignment response', response)
      return response.data
    })
  },

  loadAssignments (context) {
    let url = composeUrl(context, API)
    return InstoreHelper.getRequest(context, url).then(response => {
      let list = response.data.assignments
      if (!list) {
        let msg = 'ERROR the system should have assignments'
        console.error(msg)
        setApiError(msg)
        return
      }
      this.assignmentsListing = list
      context.commit('setAssignmentsListing', list)
      return list
    })
  },
  createAssignment (context, payload) {
    let url = composeUrl(context, API)
    // console.log('send assignment data ', url, payload)
    return InstoreHelper.postRequest(context, url, payload).then(results => {
      // let resultsData = results.data
      // console.log('assignment post responded with:', JSON.stringify(resultsData))
      return context.dispatch('loadAssignments')
    })
  },
  updateAssignment (context, dataIdPlusPayload) {
    let id = dataIdPlusPayload.id
    let payload = dataIdPlusPayload.payload
    let url = composeUrl(context, API) + id
    // console.log('updateAssignment', url, payload)
    return InstoreHelper
      .putRequest(context, url, payload)
      .then(results => {
        let resultsData = results.data
        console.log('assignment post responded with:', JSON.stringify(resultsData))
        return context.dispatch('loadAssignments')
      })
      .catch(err => {
        let msg = 'error in update assignment ' + err
        console.error(msg)
        setApiError(msg)
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
