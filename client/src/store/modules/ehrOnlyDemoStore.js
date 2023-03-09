import EhrDataModel from '@/ehr-definitions/EhrDataModel'

const devSeed = require('@/demos/dev-ehr-only-seed.json')
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
    // Place data into a model update meta data and transform model to latest version if needed
    const ehrDataModel = new EhrDataModel(state.ehrOnlyEhr)
    let asIs = ehrDataModel.ehrData
    asIs[pageKey] = value
    state.ehrOnlyEhr = asIs
  },
  selectCaseStudy: (state, key) => {
    let seed
    if (key === 'wound') {
      seed = woundSeed.ehrData
    } else  if (key === 'pbf') {
      seed = pbfCase.ehrData
    } else  if (key === 'erin2Seed') {
      seed = erin2Seed.ehrData
    } else  if (key === 'devSeed') {
      seed = devSeed.ehrData
    }
    if(seed) {
      // by putting the data into an EhrDataModel and then getting the data again we are
      // sure to be getting the data transformed into the latest version
      const ehrDataModel = new EhrDataModel(seed)
      seed = ehrDataModel.ehrData
    }
    state.ehrOnlySeed = seed
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
