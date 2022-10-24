import EventBus, { ACTIVITY_DATA_EVENT } from '@/helpers/event-bus'
import { decoupleObject } from '@/helpers/ehr-utils'

const erin2Seed = require('@/demos/erin-johns-seed-day2-end.json')
const woundSeed = require('@/demos/wound-case-1.json')
const pbfCase = require('@/demos/pbf-jackson.json')

const state = {
  ehrOnlyEhr: {},
  ehrOnlySeed: undefined,
  ehrOnlyScratch: ''
}

const getters = {
  isActiveEhrOnlyDemo: function (state) {
    return !!state.ehrOnlySeed
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
  setEhrData: (state, payload) => {
    const { pageKey, value } = payload
    // To trigger Vue's reactivity on complex object we replace the existing with a new object
    const asIs = decoupleObject(state.ehrOnlyEhr)
    asIs[pageKey] = value
    state.ehrOnlyEhr = asIs
    updateEhrDataMeta(state.ehrOnlyEhr)
    // console.log('setEhrData', JSON.stringify(asIs))
    EventBus.$emit(ACTIVITY_DATA_EVENT)
  },
  selectCaseStudy: (state, key) => {
    if (key === 'wound') {
      state.ehrOnlySeed = woundSeed.ehrData
    } else  if (key === 'pbf') {
      state.ehrOnlySeed = pbfCase.ehrData
    } else  if (key === 'erin2Seed') {
      state.ehrOnlySeed = erin2Seed.ehrData
    } else {
      state.ehrOnlySeed = undefined
    }
    if(state.ehrOnlySeed) {
      updateEhrDataMeta(state.ehrOnlySeed)
    }
    // console.log('selectCaseStudy state.ehrOnlySeed = ', state.ehrOnlySeed)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
