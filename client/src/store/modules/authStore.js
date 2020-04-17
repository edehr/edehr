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
    return state.token || sessionStorage.getItem(sKeys.AUTH_TOKEN)
  },
  authData: function () {
    return state.data
  }
}

const actions = {
  fetchAndStoreAuthToken: function ({ commit }, { refreshToken }) {
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
  },
  adminLogin: function ({commit}, { adminPassword }) {
    return authHelper.adminLogin(adminPassword)
      .then(res => {
        const { token } = res.data
        if (res.status === 200 && token) {
          return commit('setAuthToken', token)
        } else if (res.status === 201) {
          return Promise.reject('The token has been created. Please, contact an administrator to get it.')
        }
      }).catch(err => {
        return Promise.reject(err.response.data)
      })
  },
  adminValidate: function (none, { token }) {
    return authHelper.adminValidate(token)
      .then(() => {
        return {
          isAdmin: true
        }
      }).catch(err => {
        return Promise.reject(err.response.data)
      })
  }
  
}

const mutations = {
  setAuthToken: function (none, token) {
    sessionStorage.setItem(sKeys.AUTH_TOKEN, token)
    state.token = token
    return setAuthHeader(token)
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