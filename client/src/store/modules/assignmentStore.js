import InstoreHelper from '@/store/modules/instoreHelper'
import StoreHelper from '@/helpers/store-helper'
import { Text } from '@/helpers/ehr-text'
import sKeys from '@/helpers/session-keys'

const API = 'assignments'
const NAME = 'AssignmentStore'
const OBJ = 'assignment'
const debug = false

const state = {
  learningObject: {},
  learningObjectId: ''
}

const getters = {
  learningObjectId: state => {
    return state.learningObjectId
  },
  assignment: state => {
    return state.learningObject
  },
  learningObject: state => {
    return state.learningObject
  },
  seedDataId: state => {
    return state.learningObject.seedDataId
  },
  assignmentCaseContext: state => {
    const { persona, time, day, profession } = state.learningObject
    // persona key is changed to 'name' to match structure of recHeader in the EHR page definitions.
    return { name: persona, time, day, profession }  
  }
}

const actions = {
  initialize: function ({ commit }) {
    commit('initialize')
  },
  load ({dispatch, commit}, id) {
    if(debug) console.log(NAME + ' load id ', id)
    return dispatch('get',id).then( (results) => {
      if(debug) console.log(NAME + ' loaded ', results)
      commit('set', results)
      return results
    })
  },
  get (context, id) {
    let url = 'get/' + id
    if(debug) console.log(NAME + ' get url ', url)
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let results = response.data[OBJ]
      if (!results) {
        let msg = Text.GET_ASSIGNMENT_ERROR(NAME, id)
        StoreHelper.setApiError(msg)
        return
      }
      return results
    })
  },
  activityUsingLearningObjectCount (context, id) {
    let url = 'activityCount/' + id
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let results = response.data
      // console.log('activityCount', id, results)
      return results
    })
  },
  deleteUnused (context, id) {
    let url = 'unused/' + id
    console.log('send request to delete unused', url)
    return InstoreHelper.deleteRequest(context, API, url)
      .then(response => {
        if (debug) console.log('delete response >>', response)
        return response.data
      })

  },
  delete (context, id) {
    return InstoreHelper.deleteRequest(context, API, id)
      .then(response => {
        if (debug) console.log('delete response >>', response)
        return response.data
      })
  }
}

const mutations = {
  initialize: function (state) {
    const learningObjectId = localStorage.getItem(sKeys.LOBJ_ID)
    if (learningObjectId) {
      state.learningObjectId = learningObjectId
    }
  },
  set: (state, assignment) => {
    state.learningObject = assignment
    const learningObjectId = assignment ? assignment._id : ''
    localStorage.setItem(sKeys.LOBJ_ID, learningObjectId)
    state.learningObjectId = learningObjectId
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
