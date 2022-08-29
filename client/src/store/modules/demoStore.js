import DemoStoreHelper from '@/helpers/demo-store-helper'
import sKeys from '../../helpers/session-keys'

const debugDS = false
let demoHelper

function _getHelper () {
  /*
  Lazy load helper to speed up startup, reduce mem if demo is not used and because store helper is not yet defined in
  the global scope.
   */
  if (!demoHelper)
    demoHelper = new DemoStoreHelper()
  return demoHelper
}
const _clearDemo = () => {
  localStorage.removeItem(sKeys.DEMO_TOKEN)
  localStorage.removeItem('AcceptTerms')
  localStorage.removeItem('DemoData')
  localStorage.removeItem('DemoFeature')
  localStorage.removeItem('DemoPersona')
}

const _getAcceptTerms = () => localStorage.getItem('AcceptTerms')
const _setAcceptTerms = (value) => localStorage.setItem('AcceptTerms', value)
const _getDemoData = () => localStorage.getItem('DemoData')
const _setDemoData = (value) => localStorage.setItem('DemoData', value)
const _getDemoFeature = () => localStorage.getItem('DemoFeature')
const _setDemoFeature = (value) => localStorage.setItem('DemoFeature', value)
const _getDemoPersona = () => localStorage.getItem('DemoPersona')
const _setDemoPersona = (value) => localStorage.setItem('DemoPersona', value)
const _getDemoToken = () => localStorage.getItem(sKeys.DEMO_TOKEN)
const _setDemoToken = (token) => localStorage.setItem(sKeys.DEMO_TOKEN, token)

const getters = {
  demoToken: function () {
    return _getDemoToken()
  },
  demoTokenData: function (state) {
    return state.demoData
  },
  toolConsumerId: function (state) {
    return state.demoData ? state.demoData.toolConsumerId : undefined
  },
  demoAssignment: function (state) {
    return state.assignment
  },
  demoPersona: function (state) {
    return state.persona
  },
  isDemo: function (state) {
    // yes this is an active demo is the demo data has been loaded
    return state.demoData.constructor === Object && Object.keys(state.demoData).length > 0
  },
  agreesWithTerms: function (state) {
    return state.acceptsTerms
  },
  getDemoFeatureFlag: function (state) {
    return state.demoFeature
  }
}

const state = {
  demoData: {}, // load from a fetch token
  persona: {}, // selected by user on the Demo page
  assignment: {}, // selected by the user on the DemoCourse page
  acceptsTerms: false,
  demoFeature: false
}

const actions = {
  acceptsTerms: function ({ commit }, data) {
    commit('setAcceptTerms', data)
  },
  createToolConsumer: function () {
    return _getHelper().createToolConsumer()
      .then(res => {
        const { demoToken } = res.data
        _setDemoToken(demoToken)
        return Promise.resolve(demoToken)
      })
      .catch(err => {
        console.log('Create tool consumer failed ', err.response)
        return Promise.reject(err)
      })
  },
  demoLogout: function ({ commit, getters }) {
    const tid = getters.toolConsumerId
    const token = _getDemoToken()
    if (token && tid) {
      if (debugDS) console.log('demoStore logout tool id ', tid)
      return _getHelper().demoLogout(token, tid)
        .then(() => {
          if (debugDS) console.log('demoStore logout server side done. Next clear localstorage')
          _clearDemo()
          commit('setDemoData', {})
        })
        .catch(err => {
          console.error('demoStore logout ERROR', err)
          _clearDemo()
          commit('setDemoData', {})
        })
    } else {
      console.error('demoStore logout no token')
      return Promise.resolve()
    }
  },
  setDemoFeatureFlag: function ({ commit }, data) {
    commit('demoFeature', data)
  },
  loadDemoData: function ({ commit }) {
    const token = _getDemoToken()
    if (!token ) {
      console.error('Unexpected no demo token when calling loadDemoData')
      return Promise.reject('No token')
    }
    return _getHelper().dhLoadDemoData(token)
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
  submitPersona: function (none, submitData) {
    const token = _getDemoToken()
    return _getHelper().submitPersona(token, submitData)
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
  initialize: function ({ commit }) {
    commit('initialize')
  },
}

const mutations = {
  initialize: function (state) {
    state.acceptsTerms = _getAcceptTerms() === 'true'
    state.demoFeature = _getDemoFeature() === 'true'
    const stashedDemoData = _getDemoData()
    if (stashedDemoData) {
      if (debugDS) console.log('DemoStore restore stashed DemoData', stashedDemoData)
      state.demoData = JSON.parse(stashedDemoData)
    }
    const stashedPersona = _getDemoPersona()
    if (stashedPersona) {
      if (debugDS) console.log('DemoStore restore stashed persona', stashedPersona)
      state.persona = JSON.parse(stashedPersona)
    }
    if (debugDS) console.log('DemoStore initialize: accept terms, demo feature state', state.acceptsTerms, state.demoFeature)
  },
  setAcceptTerms: function (state, data) {
    if (debugDS) console.log('DemoStore set accept terms data', data)
    state.acceptsTerms = data.accepts
    _setAcceptTerms(data.accepts)
  },
  setDemoData: function (state, data) {
    if (debugDS) console.log('DemoStore set demo data', data)
    state.demoData = data
    _setDemoData(JSON.stringify(data))
  },
  demoFeature: function (state, data) {
    if (debugDS) console.log('DemoStore set demo feature', data)
    state.demoFeature = data
    _setDemoFeature(data)
  },
  setAssignment: function (state, data) {
    if (debugDS) console.log('DemoStore set assignment', data)
    state.assignment = data
  },
  setPersona: function (state, data) {
    if (debugDS) console.log('DemoStore set persona', data)
    state.persona = data
    _setDemoPersona(JSON.stringify(data))
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
