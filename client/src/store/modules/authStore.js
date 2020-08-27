import authHelper from '../../helpers/auth-helper'
import { setAuthHeader } from '../../helpers/axios-helper'

const state = {
  authData: {},
  token: undefined
}

const getters = {
  token: state => {
    return state.token
  },
  authData: state => {
    return state.authData
  },
  consumerId: state => {
    return state.authData.toolConsumerId
  }
}

const actions = {
  logOutUser: function ({commit}) {
    commit('setToken', undefined)
  },
  fetchAndStoreAuthToken: function ({ commit }, { refreshToken }) {
    return authHelper.getToken(refreshToken)
      .then(res => {
        const { token } = res.data
        commit('setToken', token)
        return token
      })
  },
  fetchData: function ({commit}, { authToken }) {
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
        console.log('adminLogin res.data', res.data, res.status)
        if (res.status === 200 && token) {
          commit('setToken', token)
          return token
        } else if (res.status === 201) {
          return Promise.reject('The token has been created. Please, contact an administrator to get it.')
        }
      }).catch(err => {
        return Promise.reject(err)
      })
  },
  adminValidate: function ({state}) {
    let token = state.token || ''
    let jwtData = token.split('.')
    if (jwtData.length === 3) {
      // JWT's are two base64-encoded JSON objects and a trailing signature
      // joined by periods. The middle section is the data payload.
      let data = JSON.parse(atob(jwtData[1]))
      console.log('adminValidate token data >> ', data)
      if (data.isAdmin) {
        return authHelper.adminValidate(token)
          .then((r) => {
            return {
              isAdmin: true
            }
          }).catch(err => {
            return Promise.reject(err.response.data)
          })
      }
    }
    return Promise.resolve({isAdmin: false})
  },
  initialize: function ({ commit }) {
    commit('initialize')
  },
}

const AUTH_TOKEN_KEY = 'authToken'

const mutations = {
  initialize: function (state) {
    state.token = localStorage.getItem(AUTH_TOKEN_KEY)
  },
  setAuthData: function (none, data) {
    state.authData = data
  },
  setToken: function (none, token) {
    state.token = token
    if (token) {
      localStorage.setItem(AUTH_TOKEN_KEY, token)
    } else {
      localStorage.removeItem(AUTH_TOKEN_KEY)
    }
    setAuthHeader(token)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
