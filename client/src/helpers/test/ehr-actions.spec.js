/**
 * @jest-environment jsdom
 */

const should = require('should')
import EhrActions from '../ehr-actions'
import * as testHelper from './testHelper'
import { Text } from '../ehr-text'
import mockData from './mockData.json'
import StoreHelper from '../store-helper'

const axiosMockHelper = require('./axios-mock-helper')
const ehrActions = new EhrActions()

const _setUpWindowObj = () => {
  delete window.location
  window.location = ''
}

jest.mock('axios')

const _beforeEach = () => {
  testHelper.setActivityMocks()
  testHelper.setActivityDataMocks()
  testHelper.setAssignmentMocks()
  testHelper.setAssignmentListingMocks()
  testHelper.setConsumerMocks()
  testHelper.setConsumerListingMocks()
  testHelper.setSeedDataMocks()
  testHelper.setSeedDataListMocks()
  testHelper.setUserMocks()
  testHelper.setVisitMocks()
  testHelper.resetAxiosResponse()
}
  
describe('Testing ehr-actions', () => {
  beforeAll(() => _setUpWindowObj())
  beforeEach(() => _beforeEach())
  
  it('isUnsubmittedStudent', done => {
    const r = ehrActions.isUnsubmittedStudent()
    should.doesNotThrow(() => ehrActions.isUnsubmittedStudent())
    r.should.equal(true)
    done()
  })

  it('getNavPanelActionLabel', done => {
    const result = ehrActions.getNavPanelActionLabel()
    result.should.equal(Text.SEND_FOR_EVAL)
    done()
  })

  it('navPanelActionConfirmOptions', done => {
    const mockedResult = { title: Text.SEND_FOR_EVAL_TITLE, msg: Text.SEND_FOR_EVAL_BODY }
    const result = ehrActions.navPanelActionConfirmOptions()
    result.title.should.equal(mockedResult.title)
    result.msg.should.equal(mockedResult.msg)
    done()
  })

  it('gotoLMS', done => {
    should.doesNotThrow(() => {
      ehrActions.gotoLMS()
      window.location.should.equal(StoreHelper.lmsUrl())
      done()
    })
  })

  it('invokeNavPanelAction', async () => {
    const mockedResult = {
      submitted: true,
      sentBack: false,
    }  
    await axiosMockHelper.prepareAxiosResponse('put', mockedResult)
    const result = await ehrActions.invokeNavPanelAction()
    should.exist(result)
    should.exist(result[0])
    should.exist(result[0].submitted)
    result[0].submitted.should.equal(true)
  })

  it('isStudent', done => {
    const { isStudent } = mockData.visit
    const result = ehrActions.isStudent()
    should.exist(result)
    result.should.equal(isStudent)
    done()
  })

  it('submitted', done => {
    const { submitted } = mockData.activityData
    const result = ehrActions.submitted()
    result.should.equal(submitted)
    done()
  })

  it('getStudentHasSubmitted', done => {
    const hasSubmitted = ehrActions.getStudentHasSubmitted()
    hasSubmitted.should.equal(Text.STUDENT_HAS_SUBMITTED)
    done()
  })

  it('getAssignmentIsClosed', done => {
    const isClosed = ehrActions.getAssignmentIsClosed()
    isClosed.should.equal(Text.ACTIVITY_IS_CLOSED)
    done()
  })

})