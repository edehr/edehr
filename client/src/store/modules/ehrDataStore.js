import InstoreHelper from './instoreHelper'
import { decoupleObject, ehrMergeEhrData, ehrMarkSeed } from '@/helpers/ehr-utils'
import EhrDefs from '@/helpers/ehr-defs-grid'
import StoreHelper from '@/helpers/store-helper'

const debug = false

const state = {}

const _getTables = (obj = {}) => {
  return Object.keys(obj).filter(o => o.includes('table') || o.includes('stacked'))
}

const _hasOnlyTables = (obj) => {
  const tableLength = _getTables(obj).length
  // flakey way to see if the objects on this page are only tables
  const objectLength = Object.keys(obj).filter(k => k !== 'lastUpdate').length
  return tableLength > 0 && objectLength === tableLength
}

const _hasTables = (obj) => { return _getTables(obj).length > 0 }

const _hasAnyData = (obj) => { return _hasTables(obj) ? _doTablesHaveData(obj) : !! obj }

const _doTablesHaveData = (obj) => {
  let hasData = false
  const tableKeys = _getTables(obj)
  if(tableKeys.length > 0) { 
    tableKeys.map(key => {
      if(obj[key] &&( obj[key] && obj[key].length > 0)) {
        hasData = true
      }
    })
  }
  return hasData
}

const getters = {
  ehrOnly: (state, getters, rootState, rootGetters) => {
    return rootGetters['ehrOnlyDemoStore/isActiveEhrOnlyDemo']
  },
  secondLevel: (state, getters, rootState, rootGetters) => {
    let secondLevelData
    if (StoreHelper.isSeedEditing()) {
      // no second level
    } else if (getters.ehrOnly) {
      secondLevelData = rootGetters['ehrOnlyDemoStore/ehrOnlyData']
    } else if (InstoreHelper.instoreIsInstructor(rootState)) {
      secondLevelData = StoreHelper.getCurrentEvaluationStudentAssignmentData()
    } else {
      secondLevelData = rootGetters['activityDataStore/assignmentData'] || {}
    }
    return secondLevelData ? decoupleObject(secondLevelData) : undefined
  },
  baseLevel: (state, getters, rootState, rootGetters) => {
    let baseLevelData = decoupleObject(rootGetters['seedListStore/seedEhrData'] || {})
    if (StoreHelper.isSeedEditing()) {
      // base already set above
    } else if (getters.ehrOnly) {
      baseLevelData = decoupleObject(rootGetters['ehrOnlyDemoStore/ehrOnlyDataSeed'])
      baseLevelData = ehrMarkSeed(baseLevelData)
    } else if (InstoreHelper.instoreIsInstructor(rootState)) {
      // base already set above
    } else {
      // type = 'Student merged data'
      baseLevelData = ehrMarkSeed(baseLevelData)
    }
    return baseLevelData
  },
  mergedData: (state, getters, rootState, rootGetters) => {
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
    if (debug) console.log('EhrData type: ' + type, secondLevelData)
    if (secondLevelData) {
      mData = decoupleObject(ehrMergeEhrData(baseLevelData, secondLevelData))
      if (debug) {
        console.log('EhrData base  ', baseLevelData)
        console.log('EhrData second  ', secondLevelData)
        console.log('EhrData merged', mData)
      }
    }
    return mData || {}
  },
  hasDataForPagesList (state, getters, rootState, rootGetters) {
    const pageKeys = EhrDefs.getAllPageKeys()
    const baseLevelData = getters.baseLevel
    const secondLevelData = getters.secondLevel || {}
    const mergedData = getters.mergedData
    let results = {}
    pageKeys.forEach( pagekey => {
      const mergedDatum = mergedData[pagekey]
      const seedDatum = baseLevelData[pagekey]
      const studentDatum = secondLevelData[pagekey]
      const combinedObject = Object.assign({}, mergedDatum, seedDatum, studentDatum)
      let hasMerged, hasSeed, hasStudent
      if (_hasOnlyTables(combinedObject)) {
        hasMerged = _doTablesHaveData(mergedDatum)
        hasSeed = _doTablesHaveData(seedDatum)
        hasStudent =  _doTablesHaveData(studentDatum)
      } else if (_hasTables(combinedObject)) {
        hasMerged = _hasAnyData(mergedDatum)
        hasSeed = _hasAnyData(seedDatum)
        hasStudent = _hasAnyData(studentDatum)
      } else {
        hasMerged =  !!mergedDatum
        hasSeed =  !!seedDatum
        hasStudent =  !!studentDatum
      }
      results[pagekey] = {
        pagekey: pagekey,
        hasMerged: hasMerged,
        hasSeed: hasSeed,
        hasStudent: hasStudent
      }
    })
    if (debug) console.log('EhrData hasDataForPagesList results', results)
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
