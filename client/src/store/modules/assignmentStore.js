import InstoreHelper from './instoreHelper'
import { setApiError } from '../../helpers/ehr-utils'
import { Text } from '../../helpers/ehr-text'
const API = 'assignments'
const NAME = 'AssignmentStore'
const OBJ = 'assignment'
const debug = false

const state = {
  dataStore: {}
}

const getters = {
  id: state => {
    return state.dataStore._id
  },
  seedDataId: state => {
    let prop =  state.dataStore.seedDataId
    if(debug) console.log(NAME + ' get seedDataId', prop)
    return prop
  },
  assignmentName: state => { return state.dataStore.name },
  assignmentDescription:  state => { return state.dataStore.description },
  assignment: state => {
    return state.dataStore
  }
  // TODO add last update field to model in server
  // lastUpdateDate: state => {
  //   let prop =  state.dataStore.lastUpdateDate
  //   console.log(NAME + ' get lastUpdateDate', prop)
  //   return prop
  // },

}

const actions = {
  load ({dispatch, commit}, id) {
    return dispatch('get',id).then( (results) => {
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
        let msg = Text.GET_ASSIGNMENT_ERROR(NAME, id)
        setApiError(msg)
        return
      }
      return results
    })
  },
}

const mutations = {
  set: (state, assignment) => {
    state.dataStore = assignment
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
