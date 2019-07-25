import fs from 'fs'
import path from 'path'
import { getPageDefinition, getAllPageKeys } from '../../../helpers/ehr-defs'
import { mutations as dMutations, state as dState, getters as dGetters} from '../ehrData'
import { mutations as sMutations, state as sState, getters as sGetters} from '../seedStore'

import {createActivityData, getObjFromFile, SEED} from './store-test-helper'
const should = require('should')

describe('Test ehr defs', () => {
  it('getAllPageKeys', () => {
    let pageKeys = getAllPageKeys()
    should.exist(pageKeys)
    pageKeys.length.should.be.greaterThanOrEqual(40)
  })
  it('getPageDefinition', () => {
    let pageKeys = getAllPageKeys()
    let key = pageKeys[0]
    let aPage = getPageDefinition(key)
    should.exist(aPage)
  })
})

describe('Test ehrData store mutations', () => {

  it('test mutations', () => {
    let cData = {foo:'bar'}
    dMutations.setCurrentStudentInfo(dState, cData)
    should.exist(dState.sCurrentStudentInfo)
    should.exist(dState.sCurrentStudentInfo.foo)
  })

  it('test _setActivityData', () => {
    let cData = createActivityData()
    cData.assignmentData = getObjFromFile('student-data1.json')
    dMutations._setActivityData(dState, cData)
    should.exist(dState.sActivityData)
    dState.sActivityData.should.have.property('evaluated')
    dState.sActivityData.evaluated.should.equal(false)
  })

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

describe('Test ehrData merged data', () => {
  it('test getter mergedData as dev', () => {
    let rootState = createRootState()
    rootState.visit.isDevelopingContent = true
    sMutations._setSeedEhrData(sState, SEED)
    should.exist(sState.ehrSeedData)
    rootState.seedStore.ehrSeedData = sState.ehrSeedData
    let mSeed = dGetters.mergedData(dState, dGetters, rootState)
    should.exist(mSeed)
  })

  it('test getter mergedData as instructor', () => {
    let rootState = createRootState()
    rootState.visit.sVisitInfo.isInstructor = true
    // state.sCurrentStudentData.assignmentData
    let student = getObjFromFile('student-data1.json')
    sMutations._setSeedEhrData(sState, SEED)
    dMutations._setCurrentStudentData(dState, student)
    should.exist(sState.ehrSeedData)
    should.exist(dState.sCurrentStudentData.assignmentData)
    let mSeed = dGetters.mergedData(dState, dGetters, rootState)
    should.exist(mSeed)
  })

  it('test getter mergedData as student', () => {
    let rootState = createRootState()
    let student = getObjFromFile('student-data1.json')
    sMutations._setSeedEhrData(sState, SEED)
    rootState.seedStore.ehrSeedData = sState.ehrSeedData
    dMutations._setActivityData(dState, student)
    should.exist(sState.ehrSeedData)
    should.exist(dState.sActivityData)
    let mSeed = dGetters.mergedData(dState, dGetters, rootState)
    should.exist(mSeed)
  })
})

describe('Test ehrData dataExists tests', () => {
  it('test dataExists as dev', () => {
    let rootState = createRootState()
    rootState.visit.isDevelopingContent = true
    sMutations._setSeedEhrData(sState, SEED)
    should.exist(sState.ehrSeedData)
    rootState.seedStore.ehrSeedData = sState.ehrSeedData
    let mSeed = dGetters.mergedData(dState, dGetters, rootState)
    should.exist(mSeed)
  })

  it.skip('test dataExists as instructor', () => {
    let rootState = createRootState()
    rootState.visit.sVisitInfo.isInstructor = true
    // state.sCurrentStudentData.assignmentData
    let student = getObjFromFile('student-data1.json')
    sMutations._setSeedEhrData(sState, SEED)
    dMutations._setCurrentStudentData(dState, student)
    should.exist(sState.ehrSeedData)
    should.exist(dState.sCurrentStudentData.assignmentData)
    let mSeed = dGetters.mergedData(dState, dGetters, rootState)
    should.exist(mSeed)
  })

  it.skip('test dataExists as student', () => {
    let rootState = createRootState()
    let student = getObjFromFile('student-data1.json')
    sMutations._setSeedEhrData(sState, SEED)
    rootState.seedStore.ehrSeedData = sState.ehrSeedData
    dMutations._setActivityData(dState, student)
    should.exist(sState.ehrSeedData)
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
