jest.mock('../../store')
import store from '../__mock__/mock-store'
import {activityData, developerVisit, instructorVisit, studentVisit, SEED} from './store-test-helper'
import should  from 'should'


beforeEach(function () { reset() })
/*
TODO this test file needs a complete rewrite and it needs to be based on the new way of managing
activity and assignmet data.
 */
describe.skip('Test activityDataStore module', () => {
  it('store _setActivityData', () => {
    store.commit('activityDataStore/_setActivityData', activityData())
    let data = store.getters['assignmentStore/assignmentData']
    should.exist(data)
    data.should.have.property('demographics')
  })

  it('store _setCurrentStudentData', () => {
    store.commit('activityDataStore/_setCurrentStudentData', activityData())
    store.commit('visit/setVisitInfo', instructorVisit())
    // now the get should return something
    let data = store.getters['activityDataStore/assignmentData']
    should.exist(data)
  })
})

describe.skip('Test ehrDataStore mergedData', () => {
  it('store mergedData student', () => {
    store.commit('seedListStore/_setSeedEhrData', SEED)
    store.commit('visit/setVisitInfo', studentVisit())
    store.commit('ehrDataStore/_setActivityData', activityData())
    let data = store.getters['ehrDataStore/mergedData']
    should.exist(data)
  })
  it('store mergedData instructor', () => {
    store.commit('seedListStore/_setSeedEhrData', SEED)
    store.commit('visit/setVisitInfo', instructorVisit())
    store.commit('ehrDataStore/_setCurrentStudentData', activityData())
    let data = store.getters['ehrDataStore/mergedData']
    should.exist(data)
  })
  it('store mergedData developer', () => {
    store.commit('seedListStore/_setSeedEhrData', SEED)
    store.commit('visit/setVisitInfo', developerVisit())
    let data = store.getters['ehrDataStore/mergedData']
    should.exist(data)
  })
})

describe.skip('Test ehrDataStore asLoadedDataForPageKey', () => {
  it('store asLoadedDataForPageKey student', () => {
    store.commit('seedListStore/_setSeedEhrData', SEED)
    store.commit('visit/setVisitInfo', studentVisit())
    store.commit('ehrDataStore/_setActivityData', activityData())
    let aFunction = store.getters['ehrDataStore/asLoadedDataForPageKey']
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

describe.skip('Test ehrDataStore hasDataForPagesList', () => {
  it('store hasDataForPagesList ', () => {
    store.commit('seedListStore/_setSeedEhrData', SEED)
    store.commit('visit/setVisitInfo', studentVisit())
    store.commit('ehrDataStore/_setActivityData', activityData(1))
    let hasData = store.getters['ehrDataStore/hasDataForPagesList']
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
    store.commit('seedListStore/_setSeedEhrData', SEED)
    store.commit('visit/setVisitInfo', developerVisit())
    let hasData = store.getters['ehrDataStore/hasDataForPagesList']
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
  store.commit('seedListStore/_setSeedEhrData', {})
  store.commit('visit/setVisitInfo', {})
  // store.commit('ehrDataStore/_setActivityData', {})
  // store.commit('ehrDataStore/_setCurrentStudentData', {})
}