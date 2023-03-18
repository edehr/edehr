import InstoreHelper from './instoreHelper'
import StoreHelper from '../../helpers/store-helper'
import { Text } from '../../helpers/ehr-text'
const API = 'users'
const NAME = 'UserStore'
const OBJ = 'user'
const debug = false

const state = {
  dataStore: {},
  usersList: []
}

const getters = {
  fullName: state => {
    let info = state.dataStore
    let name = info ? info.fullName : ''
    return name
  },
  givenName: state => {
    let info = state.dataStore
    let name = info ? info.givenName : ''
    return name
  },
  userId: state => {
    return state.dataStore._id
  },
  username: state => {
    let info = state.dataStore
    let name = info ? info.givenName : ''
    return name
  },
  user: state => state.dataStore,
  list: state => {
    return state.usersList
  }

}

const actions = {
  load ({dispatch, commit}, id) {
    return dispatch('get',id)
      .then( (user) => {
        if(debug) console.log('User store loaded ', user)
        return commit('set', user)
      })
  },
  get (context, id) {
    let url = 'get/' + id
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let user = response.data[OBJ]
      if(debug) console.log('response.data', response.data)
      if (!user) {
        let msg = Text.GET_USER_STORE_ERROR(NAME, id)
        StoreHelper.setApiError(msg)
        return
      }
      return user
    })
  },
  loadUsers (context, toolId) {
    let url = 'consumer/' + toolId
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let list = response.data.users
      if(debug) console.log('loadUsers response.data', list)
      if (list) {
        context.commit('setUsersList', list)
      }
      return list
    })
  },
}

const mutations = {
  set: (state, user) => {
    state.dataStore = user
  },
  setUsersList: (state, cData) => {
    if(debug) console.log('setUsersList ', cData)
    state.usersList = cData
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
