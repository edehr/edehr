import store from '../__mock__'
const should = require('should')
jest.mock('../../store')
import { developerVisit, instructorVisit, studentVisit } from './store-test-helper'
describe('Test store module', () => {
  it('store exisits', () => {
    should.exist(store)
    let pageKey = 'foobar'
    store.commit('system/setCurrentPageKey', pageKey)
  })
})

describe('Test visit store module', () => {
  it('store visit isStudent', () => {
    store.commit('visit/setVisitInfo', studentVisit())
    let isStudent = store.getters['visit/isStudent']
    should.exist(isStudent)
    isStudent.should.equal(true)
  })
  it('store visit isInstructor', () => {
    store.commit('visit/setVisitInfo', instructorVisit())
    let isInstructor = store.getters['visit/isInstructor']
    should.exist(isInstructor)
    isInstructor.should.equal(true)
  })
  it('store visit isDeveloper', () => {
    store.commit('visit/setVisitInfo', developerVisit())
    let isDeveloper = store.getters['visit/isDeveloper']
    should.exist(isDeveloper)
    isDeveloper.should.equal(true)
  })
  it('store visit setIsDevelopingContent', () => {
    store.commit('visit/setIsDevelopingContent', true)
    let isDevelopingContent = store.state.visit.isDevelopingContent
    should.exist(isDevelopingContent)
    isDevelopingContent.should.equal(true)
  })
})


