import DemoHelper from '../../helpers/demo-helper'
import sKeys from '../../helpers/session-keys'

const debugDS = true

const demoHelper = new DemoHelper()

const _clearDemoToken = () => localStorage.removeItem(sKeys.DEMO_TOKEN)
const _getDemoToken = () => localStorage.getItem(sKeys.DEMO_TOKEN)
const _setDemoToken = (token) => localStorage.setItem(sKeys.DEMO_TOKEN, token)

// const _setPersona = (persona) => localStorage.setItem(sKeys.SELECTED_DEMO_PERSONA, JSON.stringify(persona))
// const _getPersona = () => JSON.parse(localStorage.getItem(sKeys.SELECTED_DEMO_PERSONA))


const getters = {
  demoToken: function () {
    return _getDemoToken()
  },
  demoTokenData: function (state) {
    return state.demoData
  },
  demoAssignment: function (state) {
    return state.assignment
  },
  demoPersona: function (state) {
    return state.persona
  },
  isDemo: function () {
    // yes this is an active demo is the demo data has been loaded
    return state.demoData.constructor === Object && Object.keys(state.demoData).length > 0
  }
}

const state = {
  demoData: {}, // load from a fetch token
  persona: {}, // selected by user on the Demo page
  assignment: {} // selected by the user on the DemoCourse page
}

const actions = {
  createToolConsumer: function () {
    return demoHelper.createToolConsumer()
      .then(res => {
        const { demoToken } = res.data
        _setDemoToken(demoToken)
        return Promise.resolve(demoToken)
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  demoLogout: function ({ commit }) {
    const token = _getDemoToken()
    if (token) {
      if (debugDS) console.log('demoStore logout t', token)
      return demoHelper.demoLogout(token)
        .then(res => {
          if (debugDS) console.log('demoStore logout server side done. Next clear localstorage')
          _clearDemoToken()
          commit('setDemoData', {})
        })
        .catch(err => {
          console.error('demoStore logout ERROR', err)
          _clearDemoToken()
          commit('setDemoData', {})
        })
    } else {
      console.error('demoStore logout no token')
      return Promise.resolve()
    }
  },
  loadDemoData: function ({ commit }) {
    const token = _getDemoToken()
    if (!token ) {
      console.error('Unexpected no demo token when calling loadDemoData')
      return Promise.reject('No token')
    }
    return demoHelper.dhLoadDemoData(token)
      .then(res => {
        const { demoData } = res.data
        commit('setDemoData', demoData)
        return Promise.resolve(demoData)
      })
      .catch(err => {
        console.error('DemoStore loadDemoData ERROR', err)
        return Promise.reject(err)
      })
  },
  submitPersona: function (none, { submitData }) {
    const token = _getDemoToken()
    return demoHelper.submitPersona(token, submitData)
      .then(res => {
        return Promise.resolve(res.data)
      }).catch(err => {
        return Promise.reject(err)
      })
  },

  setDemoToken: function (none, demoToken) {
    _setDemoToken(demoToken)
  },
  setDemoData: function ({ commit }, data) {
    commit('setDemoData', data)
  },
  setDemoAssignment: function ({ commit }, data) {
    commit('setAssignment', data)
  },
  setDemoPersona: function ({ commit }, data) {
    commit('setPersona', data)
  },
}

const mutations = {
  setDemoData: function (state, data) {
    if (debugDS) console.log('DemoStore set demo data', data)
    state.demoData = data
  },
  setAssignment: function (state, data) {
    if (debugDS) console.log('DemoStore set assignment', data)
    state.assignment = data
  },
  setPersona: function (state, data) {
    if (debugDS) console.log('DemoStore set persona', data)
    state.persona = data
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}