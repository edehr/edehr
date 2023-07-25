import authHelper from '@/helpers/auth-helper'
import { setAuthHeader } from '@/helpers/axios-helper'
const hashToken = authHelper.hashToken
const logAuth = false
const state = {
  authData: {},
  /* SAMPLE AUTH DATA
consumerKey: "Demo-1669931569151-raq4aak"
exp: 1670860112
iat:
isInstructor: false
isStudent: true
secondsRemaining: 863762
timeRemaining: "239 hours, 56 minutes, 2 seconds"
toolConsumerId: "63892231dbdd588b73d48771"
userId: from visit.user,
visitId: "638a1e50dbdd588b73d48bb2"
  */
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
  },
  isInstructor: state => {
    return state.authData.isInstructor
  },
  isStudent: state => {
    return state.authData.isStudent
  },
  isInstructorAsStudent: state => {
    return state.authData.instructorAsStudent || false
  },
  visitId: state => {
    return state.authData.visitId
  },
  userId: state => {
    return state.authData.userId
  },
  lmsUrl: state => {
    return state.authData.returnUrl
  },


}

const actions = {
  logOutUser: function ({commit}) {
    commit('setToken', undefined)
    commit('setAuthData', {})
  },
  fetchAndStoreRefreshToken: function ({ commit }, { refreshToken }) {
    if(logAuth) console.log('fetchAndStoreRefreshToken refreshToken', hashToken(refreshToken))
    return authHelper.getToken(refreshToken)
      .then(res => {
        const { token } = res.data
        if(logAuth) console.log('fetchAndStoreRefreshToken token', hashToken(token))
        commit('setToken', token)
        return token
      })
  },
  storeReplaceToken: function ({ commit }, { replaceToken }) {
    commit('setToken', replaceToken)
    return authHelper.getData(replaceToken)
      .then(res => {
        const { data } = res
        if(logAuth) console.log('storeReplaceToken authToken -> data', data)
        return commit('setAuthData', data)
      })
  },
  fetchData: function ({commit}, { authToken }) {
    if(logAuth) console.log('fetchData authToken', hashToken(authToken))
    return authHelper.getData(authToken)
      .then(res => {
        const { data } = res
        if(logAuth) console.log('fetchData authToken -> data', data)
        return commit('setAuthData', data)
      })
  },
  adminLogin: function ({commit}, { adminPassword }) {
    return authHelper.adminLogin(adminPassword)
      .then(res => {
        const { token } = res.data
        // console.log('adminLogin res.data', res.data, res.status)
        if (res.status === 200 && token) {
          commit('setToken', token)
          return token
        } else if (res.status === 201) {
          return Promise.reject('The token has been created. Please, contact an administrator to get it.')
        }  else {
          return Promise.reject('Access denied')
        }
      })
  },
  adminValidate: function ({state}) {
    let token = state.token || ''
    let jwtData = token.split('.')
    if (jwtData.length === 3) {
      // JWT's are two base64-encoded JSON objects and a trailing signature
      // joined by periods. The middle section is the data payload.
      let data = JSON.parse(atob(jwtData[1]))
      // console.log('adminValidate token data >> ', data)
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
    if(logAuth) console.log('authStore initialize with ', hashToken(state.token))
  },
  setAuthData: function (none, data) {
    state.authData = data
  },
  setToken: function (none, token) {
    if(logAuth) console.log('authStore setToken', hashToken(token))
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
