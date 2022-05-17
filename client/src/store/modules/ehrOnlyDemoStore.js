
const demoSeed = require('@/erin-johns-seed-day2-end.json')
const state = {
  isActive: false,
  ehrOnlyEhr: {},
  ehrOnlySeed: demoSeed.ehrData
}

const getters = {
  isActiveEhrOnlyDemo: function (state) {
    return state.isActive
  },
  ehrOnlyData (state) {
    return state.ehrOnlyEhr
  },
  ehrOnlyDataSeed (state) {
    return state.ehrOnlySeed
  }
}
const actions = {
  activateEhrOnlyDemo (context) {
    context.commit('setEhrOnlyDemoActive', true)
  },
  deactivateEhrOnlyDemo (context) {
    context.commit('setEhrOnlyDemoActive', false)
  },
  ehrOnlyDataUpdate (context, payload) {
    context.commit('setEhrData', payload)
  }
}

const mutations = {
  setEhrOnlyDemoActive: (state, flag) => {
    state.isActive = flag
  },
  setEhrData: (state, payload) => {
    const { pageKey, value } = payload
    state.ehrOnlyEhr[pageKey] = value
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
