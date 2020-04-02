import AuthHelper from '../../helpers/auth-helper'
import sKeys from '../../helpers/session-keys'
import { setAuthHeader } from '../../helpers/axios-helper'

const authHelper = new AuthHelper()

const state = {
  payload: {}
}

const getters = {
  authToken: function () {
    return sessionStorage.getItem(sKeys.AUTH_TOKEN)
  },
  authPayload: function () {
    return state.payload
  }
}

const actions = {
  fetchAuthToken: function ({ commit }, { refreshToken, apiUrl }) {
    authHelper.setUrl(apiUrl)
    return authHelper.getToken(refreshToken)
      .then(res => {
        commit('setToken', res.data.token)
      })
  },
  fetchTokenData: function ({commit}, { authToken, apiUrl }) {
    authHelper.setUrl(apiUrl)
    return authHelper.getData(authToken)
      .then(res => {
        const { data } = res
        commit('setPayload', data)
      })
  }
}

const mutations = {
  setToken: function (none, token) {
    sessionStorage.setItem(sKeys.AUTH_TOKEN, token)
    setAuthHeader()
  },
  setPayload: function (none, payload) {
    state.payload = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}