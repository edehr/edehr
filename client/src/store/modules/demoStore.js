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

const DEMO_DATA = 'DemoData'
const DEMO_PERSONA = 'DemoPersona'
const DEMO_FEATURE = 'DemoFeature'

const _getStoredDemoData = () => localStorage.getItem(DEMO_DATA)
const _setDemoData = (value) => localStorage.setItem(DEMO_DATA, value)
const _getStoredDemoFeature = () => localStorage.getItem(DEMO_FEATURE)
const _setDemoFeature = (value) => localStorage.setItem(DEMO_FEATURE, value)
const _getStoredDemoPersona = () => localStorage.getItem(DEMO_PERSONA)
const _setDemoPersona = (value) => localStorage.setItem(DEMO_PERSONA, value)
const _getStoredDemoToken = () => localStorage.getItem(sKeys.DEMO_TOKEN)
const _setDemoToken = (token) => localStorage.setItem(sKeys.DEMO_TOKEN, token)
function clearStorage () {
  localStorage.removeItem(sKeys.DEMO_TOKEN)
  localStorage.removeItem(DEMO_DATA)
  localStorage.removeItem(DEMO_PERSONA)
}

const getters = {
  demoToken: function () {
    return _getStoredDemoToken()
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
    // yes this is an active demo is the demo data has been loaded i.e. is object with data
    const dd = state.demoData
    return dd && dd.constructor === Object && Object.keys(dd).length > 0
  },
  getDemoFeatureFlag: function (state) {
    return state.demoFeature
  }
}

const state = {
  demoData: undefined, // load from a fetch token
  persona: undefined, // selected by user on the Demo page
  demoFeature: true // ToDo remove this flag soon. and ui code. We shouldn't need it if full demo is easy enough to use.
}

const actions = {
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
  demoLogout: async function ({ commit, getters }) {
    const tid = getters.toolConsumerId
    const token = _getStoredDemoToken()
    if (token && tid) {
      if (debugDS) console.log('demoStore logout tool id ', tid)
      await _getHelper().demoLogout(token, tid)
        .catch(err => {
          console.error('demoStore logout ERROR', err)
        })
    }
    clearStorage()
    commit('setDemoData', undefined)
    commit('setPersona', undefined)
  },
  // setDemoFeatureFlag: function ({ commit }, data) {
  //   commit('demoFeature', data)
  // },
  loadDemoData: function ({ commit }) {
    const token = _getStoredDemoToken()
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
      // do not catch just let something higher up deal with any errors
  },
  submitPersona: function (none, submitData) {
    const token = _getStoredDemoToken()
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
    state.demoFeature = true // _getStoredDemoFeature() === 'true'
    if (debugDS) console.log('DemoStore initialize: demo feature state',  state.demoFeature)
    const stashedDemoData = _getStoredDemoData()
    const stashedPersona = _getStoredDemoPersona()
    try {
      state.demoData = JSON.parse(stashedDemoData)
      state.persona = JSON.parse(stashedPersona)
      if (debugDS) console.log('DemoStore restore stashed DemoData', state.demoData)
      if (debugDS) console.log('DemoStore restore stashed persona', state.persona)
    } catch(err) {
      console.error('DemoStore restore stashed data failed', stashedDemoData, stashedPersona)
      state.demoData = undefined
      state.persona = undefined
      clearStorage()
    }
  },
  setDemoData: function (state, data) {
    if (debugDS) console.log('DemoStore set demo data', data)
    state.demoData = data
    if (data) {
      _setDemoData(JSON.stringify(data))
    } else {
      localStorage.removeItem(DEMO_DATA)
    }
  },
  // demoFeature: function (state, data) {
  //   if (debugDS) console.log('DemoStore set demo feature', data)
  //   state.demoFeature = data
  //   _setDemoFeature(data)
  // },
  setPersona: function (state, data) {
    if (debugDS) console.log('DemoStore set persona', data)
    state.persona = data
    if (data) {
      _setDemoPersona(JSON.stringify(data))
    } else {
      localStorage.removeItem(DEMO_PERSONA)
    }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
