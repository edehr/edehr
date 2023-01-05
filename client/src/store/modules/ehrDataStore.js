import InstoreHelper from './instoreHelper'
import { decoupleObject, ehrMergeEhrData, ehrMarkSeed } from '@/helpers/ehr-utils'
import EhrDefs from '@/helpers/ehr-defs-grid'
import StoreHelper from '@/helpers/store-helper'
import { EhrPages } from '@/ehr-definitions/ehr-models'

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
      const table = obj[key]
      if(table && table.length > 0) {
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
      secondLevelData = rootGetters['activityDataStore/assignmentData']
    }
    if ( secondLevelData ) {
      secondLevelData.meta = secondLevelData.meta || { simTime: { visitDay: 0, visitTime: '0000' } }
      secondLevelData = decoupleObject(secondLevelData)
    }
    return secondLevelData  || {}
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
    baseLevelData.meta = baseLevelData.meta || {simTime: {visitDay: 0, visitTime: '0000'}}
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
      mData.meta = {}
      const start = {visitDay: 0, visitTime: '0000'}
      let baseMeta = baseLevelData.meta || {simTime: start}
      let secondMeta = secondLevelData.meta || {simTime: start}
      let baseTime = parseInt(baseMeta.simTime.visitTime)
      let secondTime = parseInt(secondMeta.simTime.visitTime)
      let baseDay = baseMeta.simTime.visitDay
      let secondDay = secondMeta.simTime.visitDay
      if (secondDay === 0 && secondTime === 0) {
        // secondLevelData.meta.simTime  may have zero values if the ehr data is empty or has no time stamped records
        mData.meta.simTime = baseMeta.simTime
      } else if (baseDay > secondDay || ( baseDay === secondDay && baseTime > secondTime ) ) {
        console.log('Error in data. Seed simulation time is after activity\'s simulation time. This should never happen. baseLevelData.meta',
          baseLevelData.meta, 'secondLevelData.meta', secondLevelData.meta)
      } else {
        let vDay = baseDay
        let mTime = baseTime
        if (baseDay === secondDay) {
          mTime = secondTime
        } else {
          vDay = secondDay
          mTime = secondTime
        }
        let vTime = '' + mTime // convert to string
        mData.meta = { simTime: { visitDay: vDay, visitTime: vTime.padStart(4,'0')}}
      }
      if (debug) {
        console.log('EhrData base  ', baseLevelData)
        console.log('EhrData second  ', secondLevelData)
        console.log('EhrData merged', mData)
      }
    }
    return mData || {}
  },
  hasDataForPagesList (state, getters, rootState, rootGetters) {
    const hasD = (stats, pageKey) => stats[pageKey] && stats[pageKey].hasData
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
        hasMerged: hasD(statsMerged, pagekey),
        hasSeed: hasD(statsSeed, pagekey),
        hasStudent:  hasD(statsStudent, pagekey),
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
