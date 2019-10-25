jest.mock('../../store')
import store from '../__mock__'
import {activityData, developerVisit, instructorVisit, studentVisit, SEED} from './store-test-helper'
import should  from 'should'


beforeEach(function () { reset() })

describe('Test ehrData module', () => {
  it('store _setActivityData', () => {
    store.commit('ehrData/_setActivityData', activityData())
    let data = store.getters['ehrData/assignmentData']
    should.exist(data)
    data.should.have.property('demographics')
  })

  it('store _setCurrentStudentData', () => {
    store.commit('ehrData/_setCurrentStudentData', activityData())
    store.commit('visit/setVisitInfo', instructorVisit())
    // now the get should return something
    let data = store.getters['ehrData/assignmentData']
    should.exist(data)
  })
})

describe('Test ehrData mergedData', () => {
  it('store mergedData student', () => {
    store.commit('seedStore/_setSeedEhrData', SEED)
    store.commit('visit/setVisitInfo', studentVisit())
    store.commit('ehrData/_setActivityData', activityData())
    let data = store.getters['ehrData/mergedData']
    should.exist(data)
  })
  it('store mergedData instructor', () => {
    store.commit('seedStore/_setSeedEhrData', SEED)
    store.commit('visit/setVisitInfo', instructorVisit())
    store.commit('ehrData/_setCurrentStudentData', activityData())
    let data = store.getters['ehrData/mergedData']
    should.exist(data)
  })
  it('store mergedData developer', () => {
    store.commit('seedStore/_setSeedEhrData', SEED)
    store.commit('visit/setVisitInfo', developerVisit())
    let data = store.getters['ehrData/mergedData']
    should.exist(data)
  })
})

describe('Test ehrData asLoadedDataForPageKey', () => {
  it('store asLoadedDataForPageKey student', () => {
    store.commit('seedStore/_setSeedEhrData', SEED)
    store.commit('visit/setVisitInfo', studentVisit())
    store.commit('ehrData/_setActivityData', activityData())
    let aFunction = store.getters['ehrData/asLoadedDataForPageKey']
    should.exist(aFunction)
    let demographics = aFunction('demographics')
    should.exist(demographics)
    // get a page that is NOT in the seed data. It should exist and be empty
    let testPage = aFunction('testPage')
    should.exist(testPage)
  })

  it.skip('store asLoadedDataForPageKey as Developer', () => {
    // TODO build out this test.  Look for data case study data in the seed
  })
})

describe('Test ehrData hasDataForPagesList', () => {
  it('store hasDataForPagesList ', () => {
    store.commit('seedStore/_setSeedEhrData', SEED)
    store.commit('visit/setVisitInfo', studentVisit())
    store.commit('ehrData/_setActivityData', activityData(1))
    let hasData = store.getters['ehrData/hasDataForPagesList']
    let p
    p = hasData.demographics
    should(p.hasSeed).equals(true)
    should(p.hasInstructor).equals(false)
    should(p.hasStudent).equals(true)
    p = hasData.neurological
    should(p.hasSeed).equals(false)
    should(p.hasInstructor).equals(false)
    should(p.hasStudent).equals(true)
  })
  it('store hasDataForPagesList ', () => {
    store.commit('seedStore/_setSeedEhrData', SEED)
    store.commit('visit/setVisitInfo', developerVisit())
    let hasData = store.getters['ehrData/hasDataForPagesList']
    let p
    p = hasData.demographics
    should(p.hasSeed).equals(true)
    should(p.hasInstructor).equals(false)
    should(p.hasStudent).equals(undefined)
    p = hasData.neurological
    should(p.hasSeed).equals(false)
  })
})

function reset () {
  store.commit('seedStore/_setSeedEhrData', {})
  store.commit('visit/setVisitInfo', {})
  store.commit('ehrData/_setActivityData', {})
  store.commit('ehrData/_setCurrentStudentData', {})
}