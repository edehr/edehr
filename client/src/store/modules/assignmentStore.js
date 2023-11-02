import InstoreHelper from '@/store/modules/instoreHelper'
import StoreHelper from '@/helpers/store-helper'
import { Text } from '@/helpers/ehr-text'
import sKeys from '@/helpers/session-keys'

const API = 'assignments'
const NAME = 'AssignmentStore'
const debug = false
const L_OBJ_INIT = {}
const state = {
  learningObject: L_OBJ_INIT,
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
  clearAssignment: function (context) {
    context.commit('set', undefined)
  },
  clearSeed ( context, id ) {
    let url = 'clearSeed/' + id
    // console.log('Lobj store clear the seed from the lobj', url)
    // just clear and then let the caller handle any reloads that may be needed
    return InstoreHelper.putRequest(context, API, url)
  },
  load (context, id) {
    let url = 'getLObj/' + id
    if(debug) console.log(NAME + ' load learning object url ', url)
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let results = response.data['learningObject']
      if (!results) {
        let msg = Text.GET_ASSIGNMENT_ERROR(NAME, id)
        StoreHelper.setApiError(msg)
        return
      }
      context.commit('set', results)
      return results
    })
  },
  reload (context) {
    let id = context.state.learningObjectId
    return context.dispatch('load', id)
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
    if (assignment) {
      localStorage.setItem(sKeys.LOBJ_ID, learningObjectId)
      state.learningObjectId = learningObjectId
    } else {
      localStorage.removeItem(sKeys.LOBJ_ID)
      state.learningObjectId = L_OBJ_INIT
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
