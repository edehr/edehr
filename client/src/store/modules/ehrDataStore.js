import InstoreHelper from './instoreHelper'
import { decoupleObject } from '../../helpers/ehr-utils'
import { ehrMergeEhrData, ehrMarkSeed } from '../../helpers/ehr-utils'
import EhrDefs from '../../helpers/ehr-defs-grid'
import StoreHelper from '../../helpers/store-helper'

const debug = false

const state = {
}

const getters = {
  mergedData: (state, getters, rootState, rootGetters) => {
    let type = ''
    let mData, studentAssignmentData
    // todo put this get into a helper and ditto for below
    let ehrSeedData = decoupleObject(rootGetters['seedListStore/seedEhrData'] || {})
    if (InstoreHelper.instoreIsDevContent(rootState)) {
      type = 'Developing Seed'
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
      const combinedObject = Object.assign({}, mergedData[key], seedData[key])
      const isTable = Object.keys(combinedObject).includes('table')
      results[key] = { pagekey: key }
      if(isTable) {
        results[key].hasMerged =  mergedData[key] && mergedData[key].table.length > 0
        results[key].hasSeed =  seedData[key] && seedData[key].table.length > 0
        results[key].hasStudent =  studentData[key] && studentData[key].table.length > 0
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
