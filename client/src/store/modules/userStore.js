import InstoreHelper from './instoreHelper'
import StoreHelper from '@/helpers/store-helper'
import { Text } from '@/helpers/ehr-text'
const API = 'users'
const NAME = 'UserStore'
const OBJ = 'user'
const debug = false

const state = {
  userData: {},
  usersList: [],
  userSettings: {}
}

const getters = {
  fullName: state => state.userData?.fullName || '',
  givenName: state => state.userData?.givenName || '',
  username: state => state.userData?.givenName || '',
  userId: state => state.userData._id,
  user: state => state.userData,
  list: state => state.usersList,
  userSettings: state => state.userData?. userSettings
}

const actions = {
  loadUser (context, id) {
    let url = 'getUser/' + id
    return InstoreHelper.getRequest(context, API, url).then(response => {
      let user = response.data[OBJ]
      return context.commit('setUser', user)
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
  setEhrLayout ( context, layoutStyle) {
    let userSettings = Object.assign({}, context.getters.userSettings)
    userSettings.ehrLayout = layoutStyle
    return context.dispatch('updateUserSettings', userSettings)
  },
  updateUserSettings (context, settings) {
    const url = 'user-settings/'+ context.state.userData._id
    return InstoreHelper.putRequest(context, API, url, settings).then(response => {
      let user = response.data[OBJ]
      return context.commit('setUser', user)
    })
  }
}

const mutations = {
  setUser: (state, user) => {
    state.userData = user
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
