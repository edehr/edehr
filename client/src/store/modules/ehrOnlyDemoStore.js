import EventBus, { ACTIVITY_DATA_EVENT } from '@/helpers/event-bus'
import { decoupleObject } from '@/helpers/ehr-utils'

const erin2Seed = require('@/demos/erin-johns-seed-day2-end.json')
const woundSeed = require('@/demos/wound-case-1.json')
const pbfCase = require('@/demos/pbf-jackson.json')

const state = {
  isActive: false,
  ehrOnlyEhr: {},
  ehrOnlySeed: erin2Seed.ehrData,
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
    context.commit('selectCaseStudy', key)
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
  selectCaseStudy: (state, key) => {
    if (key === 'wound') {
      state.ehrOnlySeed = woundSeed.ehrData
    } else  if (key === 'pbf') {
      state.ehrOnlySeed = pbfCase.ehrData
    } else {
      // erin2Seed
      // default to the erin johns day 2 case
      state.ehrOnlySeed = erin2Seed.ehrData
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
