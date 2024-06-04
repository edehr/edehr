import InstoreHelper from './instoreHelper'
import EhrDefs from '@/ehr-definitions/ehr-defs-grid'
import StoreHelper from '@/helpers/store-helper'
import { EhrPages } from '@/ehr-definitions/ehr-models'
import EhrDataModel from '@/ehr-definitions/EhrDataModel'
import MPatientHelper from '@/helpers/mPatientHelper'

const debug = false

const state = {}

const getters = {
  ehrOnly: (state, getters, rootState, rootGetters) => {
    return rootGetters['ehrOnlyDemoStore/isActiveEhrOnlyDemo']
  },
  secondLevel: (state, getters, rootState, rootGetters) => {
    let secondLevelData
    if (StoreHelper.isSeedEditing()) {
      // no second level
    } else if (getters.ehrOnly) {
      // no second level
    } else if (InstoreHelper.instoreIsInstructor(rootState)) {
      const mp = MPatientHelper.getCurrentPatient()
      secondLevelData = mp ? mp.ehrData : {}
    } else { // student
      const mp = MPatientHelper.getCurrentPatient()
      secondLevelData = mp ? mp.ehrData : {}
    }
    if ( secondLevelData ) {
      // place data into a model update meta data and transform model to latest version if needed
      const model = new EhrDataModel(secondLevelData)
      secondLevelData = model.ehrData
    }
    return secondLevelData  || {}
  },
  baseLevel: (state, getters, rootState, rootGetters) => {
    let baseLevelData
    if (StoreHelper.isSeedEditing()) {
      baseLevelData = rootGetters['seedListStore/seedEhrData'] || {}
    } else if (getters.ehrOnly) {
      baseLevelData = rootGetters['ehrOnlyDemoStore/ehrOnlyData']
    } else { // student or instructor evaluating student
      baseLevelData = rootGetters['seedListStore/seedEhrData'] || {}
    }
    // place data into a model update meta data and transform model to latest version if needed
    const model = new EhrDataModel(baseLevelData)
    baseLevelData = model.ehrData
    return baseLevelData
  },
  mergedData: (state, getters, rootState, rootGetters) => {
    let startTime = performance.now()
    let type = ''
    let mData
    const baseLevelData = getters.baseLevel
    const secondLevelData = getters.secondLevel
    if (StoreHelper.isSeedEditing()) {
      type = 'Seed Editing'
      mData = baseLevelData
    } else if (getters.ehrOnly) {
      type = 'EHR Only demo'
    } else if (InstoreHelper.instoreIsInstructor(rootState)) {
      type = 'Instructor wants student data'
    } else {
      type = 'Student merged data'
    }
    if (secondLevelData) {
      //EhrDataModel both updates the data as needed it also computes the sim time
      mData = EhrDataModel.MergeTwoLevels(baseLevelData, secondLevelData)
    }
    if (mData) {
      mData = InstoreHelper.timeSliceData(rootState, mData)
    }
    if (debug) {
      console.log('EhrData base  ', baseLevelData)
      console.log('EhrData second  ', secondLevelData)
      console.log('EhrData merged', mData)
      console.log('merged data has this meta', mData.meta)
    }
    let elapsedTime = performance.now() - startTime
    console.log('EhrData merge data  ', String(elapsedTime).padStart(3, ' '), 'ms Type:', type)
    return mData || {meta:{}}
  },
  hasDataForPagesList (state, getters) {
    const hasData = (stats, pageKey) => stats[pageKey] && stats[pageKey].hasData
    const hasDraft = (stats, pageKey) => stats[pageKey] && stats[pageKey].hasDraft
    const pageKeys = EhrDefs.getAllPageKeys()
    const baseLevelData = getters.baseLevel
    const secondLevelData = getters.secondLevel || {}
    const mergedData = getters.mergedData
    let results = {}
    const ehrPages = new EhrPages()
    const statsSeed = ehrPages.ehrPagesStats(baseLevelData)
    const statsStudent = ehrPages.ehrPagesStats(secondLevelData)
    const statsMerged = ehrPages.ehrPagesStats(mergedData)
    pageKeys.forEach( pagekey => {
      results[pagekey] = {
        pagekey: pagekey,
        hasMerged: hasData(statsMerged, pagekey),
        hasSeed: hasData(statsSeed, pagekey),
        hasStudent:  hasData(statsStudent, pagekey),
        draftMerged: hasDraft(statsMerged, pagekey),
        draftSeed: hasDraft(statsSeed, pagekey),
        draftStudent:  hasDraft(statsStudent, pagekey),
      }
    })
    // console.log('hasDataForPagesListV2', JSON.stringify(results))
    return results
  },
  mergedDataForPageKey (state, getters, rootState) {
    return pageKey => {
      let mergedData = getters.mergedData
      let pageData = mergedData[pageKey]
      return pageData || {}
    }
  },
}
const actions = {
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
