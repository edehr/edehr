//import store from '../../store'
// import store from '../__mock__/mock-store'
jest.mock('../../store')
import EhrDefs from '@/ehr-definitions/ehr-defs-grid'
import ehrDataStore from '../modules/ehrDataStore'
// import { mutations as dMutations, state as dState, getters as dGetters} from '../modules/ehrDataStore'
import seedListStore from '../modules/seedListStore'
let dMutations = ehrDataStore.mutations
let dState = ehrDataStore.state
let dGetters = ehrDataStore.getters

let sMutations = seedListStore.mutations
let sState = seedListStore.state

import {getObjFromFile, SEED} from './store-test-helper'
const should = require('should')

describe('Test ehr defs', () => {
  it('getAllPageKeys', () => {
    let pageKeys = EhrDefs.getAllPageKeys()
    should.exist(pageKeys)
    pageKeys.length.should.be.greaterThanOrEqual(40)
  })
  it('getPageDefinition', () => {
    let pageKeys = EhrDefs.getAllPageKeys()
    let key = pageKeys[0]
    let aPage = EhrDefs.getPageDefinition(key)
    should.exist(aPage)
  })
})

// all of these tests belong to code that is now gone or completely transformed. Keeping them until suitable replacements are build
// look at setting content into the activity data store
describe.skip('Test ehrData store mutations', () => {

  it('test _setCurrentStudentData', () => {
    let rootState = createRootState()
    let assignmentData = getObjFromFile('student-data1.json')
    // console.log('assignmentData', assignmentData)
    let activityData = {
      _id:'testing',
      assignmentData: assignmentData
    }
    dMutations._setCurrentStudentData(dState, activityData)
    let data = dGetters.assignmentData(dState, dGetters, rootState)
    should.exist(data)
  })
})

describe.skip('Test ehrData merged data', () => {
  it('test getter mergedData as dev', () => {
    let rootState = createRootState()
    rootState.visit.isDevelopingContent = true
    sMutations._setSeedContent(sState, SEED)
    should.exist(sState.sSeedContent)
    rootState.seedStore.sSeedContent = sState.sSeedContent
    let mSeed = dGetters.mergedData(dState, dGetters, rootState)
    should.exist(mSeed)
  })

  it('test getter mergedData as instructor', () => {
    let rootState = createRootState()
    rootState.visit.sVisitInfo.isInstructor = true
    // state.sCurrentStudentData.assignmentData
    let student = getObjFromFile('student-data1.json')
    sMutations._setSeedContent(sState, SEED)
    dMutations._setCurrentStudentData(dState, student)
    should.exist(sState.sSeedContent)
    should.exist(dState.sCurrentStudentData.assignmentData)
    let mSeed = dGetters.mergedData(dState, dGetters, rootState)
    should.exist(mSeed)
  })

  it('test getter mergedData as student', () => {
    let rootState = createRootState()
    let student = getObjFromFile('student-data1.json')
    sMutations._setSeedContent(sState, SEED)
    rootState.seedStore.sSeedContent = sState.sSeedContent
    dMutations._setActivityData(dState, student)
    should.exist(sState.sSeedContent)
    should.exist(dState.sActivityData)
    let mSeed = dGetters.mergedData(dState, dGetters, rootState)
    should.exist(mSeed)
  })
})

describe.skip('Test ehrData dataExists tests', () => {
  it('test dataExists as dev', () => {
    let rootState = createRootState()
    rootState.visit.isDevelopingContent = true
    sMutations._setSeedContent(sState, SEED)
    should.exist(sState.sSeedContent)
    rootState.seedStore.sSeedContent = sState.sSeedContent
    let mSeed = dGetters.mergedData(dState, dGetters, rootState)
    should.exist(mSeed)
  })

  it.skip('test dataExists as instructor', () => {
    let rootState = createRootState()
    rootState.visit.sVisitInfo.isInstructor = true
    // state.sCurrentStudentData.assignmentData
    let student = getObjFromFile('student-data1.json')
    sMutations._setSeedContent(sState, SEED)
    dMutations._setCurrentStudentData(dState, student)
    should.exist(sState.sSeedContent)
    should.exist(dState.sCurrentStudentData.assignmentData)
    let mSeed = dGetters.mergedData(dState, dGetters, rootState)
    should.exist(mSeed)
  })

  it.skip('test dataExists as student', () => {
    let rootState = createRootState()
    let student = getObjFromFile('student-data1.json')
    sMutations._setSeedContent(sState, SEED)
    rootState.seedStore.sSeedContent = sState.sSeedContent
    dMutations._setActivityData(dState, student)
    should.exist(sState.sSeedContent)
    should.exist(dState.sActivityData)
    let mSeed = dGetters.mergedData(dState, dGetters, rootState)
    should.exist(mSeed)
  })
})

function createRootState () {
  return {
    seedStore: {},
    visit: {
      isDevelopingContent: false,
      sVisitInfo: {
        isInstructor: false
      }
    }
  }
}
