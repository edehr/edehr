import InstoreHelper from './instoreHelper'
import { decoupleObject } from '../../helpers/ehr-utils'
import { ehrMergeEhrData, ehrMarkSeed } from '../../helpers/ehr-utils'
import EhrDefs from '../../helpers/ehr-defs-grid'
import StoreHelper from '../../helpers/store-helper'

const debug = false

const state = {
}

const _getTables = (obj = {}) => {
  return Object.keys(obj).filter(o => o.includes('table') || o.includes('stacked'))
}

const _hasOnlyTables = (obj) => {
  const tableLength = _getTables(obj).length
  const objectLength = Object.keys(obj).filter(k => k !== 'lastUpdate').length
  return tableLength > 0 && objectLength === tableLength
}

const _hasTables = (obj) => {
  return _getTables(obj).length > 0 
}

const _hasAnyData = (obj) => {
  return _hasTables(obj) ? _doTablesHaveData(obj) : !! obj
}

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
  mergedData: (state, getters, rootState, rootGetters) => {
    let type = ''
    let mData, studentAssignmentData
    // todo put this get into a helper and ditto for below
    let ehrSeedData = decoupleObject(rootGetters['seedListStore/seedEhrData'] || {})
    if (StoreHelper.isSeedEditing()) {
      type = 'Seed Editing'
      mData = ehrSeedData
    } else if (InstoreHelper.instoreIsInstructor(rootState)) {
      type = 'Instructor wants student data'
      studentAssignmentData = StoreHelper.getCurrentEvaluationStudentAssignmentData()
    } else {
      type = 'Student merged data'
      studentAssignmentData = StoreHelper.getStudentAssignmentData()
      // mark all elements in the page arrays to allow us to strip the seed data out before saving
      ehrSeedData = ehrMarkSeed(ehrSeedData)
    }
    if (debug) console.log('EhrData ' + type, studentAssignmentData)
    if (studentAssignmentData) {
      studentAssignmentData = decoupleObject(studentAssignmentData)
      mData = ehrMergeEhrData(ehrSeedData, studentAssignmentData)
      if (debug) {
        console.log('EhrData seed  ', ehrSeedData)
        console.log('EhrData data  ', studentAssignmentData)
        console.log('EhrData merged', mData)
      }
    }
    return mData || {}
  },
  hasDataForPagesList (state, getters, rootState, rootGetters) {
    const pageKeys = EhrDefs.getAllPageKeys()
    const mergedData = getters.mergedData || {}
    const seedData = rootGetters['seedListStore/seedEhrData'] || {}
    const studentData = rootGetters['activityDataStore/assignmentData'] || {}
    let results = {}
    pageKeys.forEach( key => { 
      const combinedObject = Object.assign({}, 
        mergedData[key], 
        seedData[key], 
        studentData[key]
      )
      results[key] = { pagekey: key }
      if (_hasOnlyTables(combinedObject)) {
        results[key].hasMerged = _doTablesHaveData(mergedData[key])
        results[key].hasSeed = _doTablesHaveData(seedData[key])
        results[key].hasStudent =  _doTablesHaveData(studentData[key])
      } else if (_hasTables(combinedObject)) {
        results[key].hasMerged = _hasAnyData(mergedData[key])
        results[key].hasSeed = _hasAnyData(seedData[key])
        results[key].hasStudent = _hasAnyData(studentData[key])
      } else {
        results[key].hasMerged =  !!mergedData[key]
        results[key].hasSeed =  !!seedData[key]
        results[key].hasStudent =  !!studentData[key]
      }
    })
    if (debug) console.log('EhrData hasDataForPagesList pageKeys', pageKeys)
    if (debug) console.log('EhrData hasDataForPagesList mergedData', mergedData)
    if (debug) console.log('EhrData hasDataForPagesList seedData', seedData)
    if (debug) console.log('EhrData hasDataForPagesList results', results)
    return results
  },
  asLoadedDataForPageKey (state, getters, rootState) {
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
