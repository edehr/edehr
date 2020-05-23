import DemoHelper from '../../helpers/demo-helper'
import sKeys from '../../helpers/session-keys'
import { setAuthHeader } from '../../helpers/axios-helper'

const demoHelper = new DemoHelper()

const _setDemoToken = (token) => localStorage.setItem(sKeys.DEMO_TOKEN, token)

const _setPersona = (persona) => localStorage.setItem(sKeys.SELECTED_DEMO_PERSONA, JSON.stringify(persona))

const _getDemoToken = () => localStorage.getItem(sKeys.DEMO_TOKEN)

const _getPersona = () => JSON.parse(localStorage.getItem(sKeys.SELECTED_DEMO_PERSONA))


const getters = {
  demoToken: function () {
    return _getDemoToken()
  },
  demoPersona: function () {
    return _getPersona()
  },
  demoData: function () {
    return state.demoData
  }
}

const state = {
  demoData: [],
  selectedUser: {}
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
  fetchDemoData: function ({ commit }) {
    setAuthHeader(_getDemoToken())
    return demoHelper.fetchDemoData() 
      .then(res => {
        const { demoData } = res.data
        commit('setDemoData', demoData)
        return Promise.resolve(demoData)
      })
      .catch(err => {
        console.error(err)
        return Promise.reject(err)
      })
  },
  submitPersona: function (none, { demoData, assignment }) {
    return demoHelper.submitPersona(demoData, assignment)
      .then(res => {
        return Promise.resolve(res.data)
        
      }).catch(err => {
        return Promise.reject(err)
      })
  },

  setDemoToken: function (none, { demoToken }) {
    _setDemoToken(demoToken)
  },
  setDemoPersona: function (none, { demoPersona }) {
    _setPersona(demoPersona)
  },
  setDemoData: function (none, { data }) {
    _setDemoData(data)
  }
}

const mutations = {
  setDemoData: function (none, data) {
    state.demoData = data
  },
  // setDemoUser: function (none, data) {
  //   state.selectedUser = data
  // }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}