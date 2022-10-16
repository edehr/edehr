import EventBus, { ACTIVITY_DATA_EVENT } from '@/helpers/event-bus'
import { decoupleObject } from '@/helpers/ehr-utils'

const prodSeed = require('@/demos/erin-johns-seed-day2-end.json')
const woundSeed = require('@/demos/wound-case-1.json')

const devSeed = require('@/demos/dev-ehr-only-seed.json')

const demoSeed = process.env.NODE_ENV === 'production' ? prodSeed : devSeed

const state = {
  isActive: false,
  ehrOnlyEhr: {},
  ehrOnlySeed: woundSeed.ehrData,
  ehrOnlyScratch: ''
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
  },
  ehrOnlyScratch (state) {
    return state.ehrOnlyScratch
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
  },
  saveScratch (context, text) {
    context.commit('setEhrOnlyScratch', text)
  },
  selectCaseStudy (context, key)  {
    context.commit('selectCase', key)
  }
}

const mutations = {
  setEhrOnlyScratch: (state, text) => {
    state.ehrOnlyScratch = text
  },
  setEhrOnlyDemoActive: (state, flag) => {
    state.isActive = flag
  },
  setEhrData: (state, payload) => {
    const { pageKey, value } = payload
    // To trigger Vue's reactivity on complex object we replace the existing with a new object
    const asIs = decoupleObject(state.ehrOnlyEhr)
    asIs[pageKey] = value
    state.ehrOnlyEhr = asIs
    console.log(JSON.stringify(asIs))
    EventBus.$emit(ACTIVITY_DATA_EVENT)
  },
  selectCase: (state, key) => {
    if (key === 'erin') {

    }

  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
