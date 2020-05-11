import AuthHelper from '../../helpers/auth-helper'
import sKeys from '../../helpers/session-keys'
import { setAuthHeader } from '../../helpers/axios-helper'

const authHelper = new AuthHelper()

const _getToken = () => {
  return localStorage.getItem(sKeys.AUTH_TOKEN)
}

const _setToken = (token) => {
  localStorage.setItem(sKeys.AUTH_TOKEN, token)
}


const state = {
  data: {},
}

const getters = {
  token: function () {
    const token = _getToken()
    return token
  },
  data: function () {
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
        return commit('setData', data)
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
  requestDemoAccess: function (none, { name, email, role }) {
    console.log('requesting demo access from authStore >> ', name, email, role)
    return authHelper.requestDemoAccess(name, email, role)
      .then(res => {
        return res.data
      }).catch(err => {
        return Promise.reject(err.response.data)
      })
  }
}

const mutations = {
  setData: function (none, data) {
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