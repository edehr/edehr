import EhrDataModel from '@/ehr-definitions/EhrDataModel'

const devSeed = require('@/demos/dev-ehr-only-seed.json')
const erin2Seed = require('@/demos/erin-johns-seed-day2-end.json')
const woundSeed = require('@/demos/wound-case-1.json')
const pbfCase = require('@/demos/pbf-jackson.json')

const state = {
  ehrData: undefined,
  seedObject: undefined,
  ehrOnlyScratch: ''
}

const getters = {
  isActiveEhrOnlyDemo: function (state) {
    return !!state.seedObject
  },
  ehrOnlyData (state) {
    return state.ehrData
  },
  ehrOnlySeed (state) {
    return state.seedObject
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
  },
  setCaseStudy (context, seedObj)  {
    context.commit('setCaseStudy', seedObj)
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
    const ehrDataModel = new EhrDataModel(state.ehrData)
    let asIs = ehrDataModel.ehrData
    asIs[pageKey] = value
    state.ehrData = asIs
  },
  setCaseStudy: (state, seedObj) => {
    setSeed(state, seedObj)
  },
  selectCaseStudy: (state, key) => {
    let seed
    if (key === 'wound') {
      seed = woundSeed
    } else  if (key === 'pbf') {
      seed = pbfCase
    } else  if (key === 'erin2Seed') {
      seed = erin2Seed
    } else  if (key === 'devSeed') {
      seed = devSeed
    }
    setSeed(state, seed)
  }
}

function setSeed (state, seedObj) {
  if(seedObj) {
    // by putting the data into an EhrDataModel and then getting the data again we are
    // sure to be getting the data transformed into the latest version
    state.ehrData = (new EhrDataModel(seedObj.ehrData)).ehrData
    state.seedObject = seedObj
  } else {
    state.ehrData = undefined
    state.seedObject = undefined
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
