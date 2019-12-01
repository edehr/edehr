import store from '../__mock__/mock-store'
const should = require('should')
jest.mock('../../store')
jest.mock('../../store/modules/instoreHelper')
jest.mock('../../helpers/store-helper')

import StoreHelper from '../../helpers/store-helper'

import { developerVisit, instructorVisit, studentVisit } from './store-test-helper'
describe('Test store module', () => {
  it('store exisits', () => {
    should.exist(store)
    let pageKey = 'foobar'
    store.commit('system/setCurrentPageKey', pageKey)
  })
  it('store visit isStudent', () => {
    store.commit('visit/setVisitData', studentVisit())
    let isStudent = store.getters['visit/isStudent']
    should.exist(isStudent)
    isStudent.should.equal(true)
  })

})

describe('Test visit store module', () => {
  it('store visit isStudent', () => {
    store.commit('visit/setVisitData', studentVisit())
    let isStudent = store.getters['visit/isStudent']
    should.exist(isStudent)
    isStudent.should.equal(true)
  })
  it('store visit isInstructor', () => {
    store.commit('visit/setVisitData', instructorVisit())
    let isInstructor = store.getters['visit/isInstructor']
    should.exist(isInstructor)
    isInstructor.should.equal(true)
  })
  it('store visit isDeveloper', () => {
    store.commit('visit/setVisitData', developerVisit())
    let isDeveloper = store.getters['visit/isDeveloper']
    should.exist(isDeveloper)
    isDeveloper.should.equal(true)
  })
})

/*
Can't get the tests with StoreHelper to work.  Inside the SH, in mock, the "store.getters" contains an empty array.
So, when there is a call to get a value from, say the visit module, the result is undefined.  This needs research time.
 */
describe.skip('Test visit store via the StoreHelper', () => {
  it('storehelper visit setIsDevelopingContent', () => {
    StoreHelper.setIsDevelopingContent(true)
    console.log('StoreHelper',StoreHelper.isDevelopingContent())
    let isDevelopingContent = StoreHelper.isDevelopingContent()
    should.exist(isDevelopingContent)
    isDevelopingContent.should.equal(true)
  })
})


