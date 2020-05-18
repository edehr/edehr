import DemoHelper from '../../helpers/demo-helper'
import sKeys from '../../helpers/session-keys'
import { setAuthHeader } from '../../helpers/axios-helper'

const demoHelper = new DemoHelper()

const _setDemoToken = (token) => localStorage.setItem(sKeys.DEMO_TOKEN, token)

const _setDemoData = (data) => localStorage.setItem(sKeys.DEMO_DATA, data)

const _setDemoUser = (user) => localStorage.setItem(sKeys.SELECTED_DEMO_USER, user)

const _getDemoToken = () => localStorage.getItem(sKeys.DEMO_TOKEN)

const _getDemoData = () => localStorage.getItem(sKeys.DEMO_DATA)

const _getDemoUser = () => localStorage.getItem(sKeys.SELECTED_DEMO_USER)


const getters = {
  demoToken: function () {
    return _getDemoToken()
  },
  demoUser: function () {
    return _getDemoUser()
  },
  demoData: function () {
    return _getDemoData()
  }
}

const state = {
  ltiData: []
}

const actions = {
  createToolConsumer: function () {
    return demoHelper.createToolConsumer()
      .then(res => {
        const { demoToken } = res.data
        _setDemoToken(demoToken)
        setAuthHeader(demoToken)
        return Promise.resolve(demoToken)
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  fetchDemoData: function () {
    return demoHelper.fetchDemoData() 
      .then(res => {
        console.log('demoHelperThen >> ', res)
        const { authPayload } = res.data
        _setDemoData(authPayload)
        return Promise.resolve(authPayload)
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },

  setDemoToken: function (none, { demoToken }) {
    _setDemoToken(demoToken)
  },
  setDemoUser: function (none, { user }) {
    _setDemoUser(user)
  },
  setDemoData: function (none, { data }) {
    _setDemoData(data)
  }
}

const mutations = {
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}