const should = require('should')
import EhrActions from '../ehr-actions'
import * as testHelper from './testHelper'
import { Text } from '../ehr-text'
import mockData from './mockData.json'

const axiosMockHelper = require('./axios-mock-helper')
const ehrActions = new EhrActions()

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

  // window.location could potentially be difficult to test. Further improvement might be needed
  it('gotoLMS', done => {
    should.doesNotThrow(() => ehrActions.gotoLMS())
    done()
  })

  it('invokeNavPanelAction', async done => {
    const mockedResult = {
      submitted: true
    }  
    await axiosMockHelper.prepareAxiosResponse('put', mockedResult)
    const result = await ehrActions.invokeNavPanelAction()
    result.submitted.should.equal(true)
    done()
  })

  it('isStudent', done => {
    const { isStudent } = mockData.visit
    const result = ehrActions.isStudent()
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