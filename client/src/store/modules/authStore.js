import AuthHelper from '../../helpers/auth-helper'
import sKeys from '../../helpers/session-keys'
import { setAuthHeader } from '../../helpers/axios-helper'

const authHelper = new AuthHelper()
const debugAS = false

const _setToken = (token) => {
  if (debugAS) console.log('AuthStore store token into local storage ', token)
  localStorage.setItem(sKeys.AUTH_TOKEN, token)
}

const state = {
  data: {},
}

const getters = {
  // Vuex getter values are cached. But the reactive system can't see into local storage so the cached
  // value can become incorrect.  So, for this app, get the token via the StorageHelper which will always
  // query local storage.
  // token: state => {
  //   return _getToken()
  // },
  data: state => {
    return state.data
  }
}

const actions = {
  fetchAndStoreAuthToken: function ({ commit }, { refreshToken }) {
    return authHelper.getToken(refreshToken)
      .then(res => {
        const { token } = res.data
        _setToken(token)
        setAuthHeader(token)
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
        if (res.status === 200 && token) {
          _setToken(token)
          setAuthHeader(token)
          return Promise.resolve(token)
        } else if (res.status === 201) {
          return Promise.reject('The token has been created. Please, contact an administrator to get it.')
        }
      }).catch(err => {
        return Promise.reject(err.response.data)
      })
  },
  adminValidate: function (none, { token }) {
    return authHelper.adminValidate(token)
      .then((r) => {
        return {
          isAdmin: true
        }
      }).catch(err => {
        return Promise.reject(err.response.data)
      })
  },
}

const mutations = {
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