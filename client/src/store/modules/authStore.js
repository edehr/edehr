import AuthHelper from '../../helpers/auth-helper'
import sKeys from '../../helpers/session-keys'
import { setAuthHeader } from '../../helpers/axios-helper'

const authHelper = new AuthHelper()

const state = {
  data: {},
  token: undefined
}

const getters = {
  authToken: function () {
    return sessionStorage.getItem(sKeys.AUTH_TOKEN) || state.token
  },
  authData: function () {
    return state.data
  }
}

const actions = {
  fetchAndStoreAuthToken: function ({ commit }, { refreshToken, apiUrl }) {
    authHelper.setUrl(apiUrl)
    return authHelper.getToken(refreshToken)
      .then(res => {
        const { token } = res.data
        return commit('setAuthToken', token)
      })
  },
  fetchTokenData: function ({commit}, { authToken }) {
    return authHelper.getData(authToken)
      .then(res => {
        const { data } = res
        return commit('setAuthData', data)
      })
  }
}

const mutations = {
  setAuthToken: function (none, token) {
    sessionStorage.setItem(sKeys.AUTH_TOKEN, token)
    state.token = token
    setAuthHeader()
  },
  setAuthData: function (none, data) {
    state.data = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}