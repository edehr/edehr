import should from 'should'
import StoreHelper from '../store-helper'
import * as testHelper from './testHelper'
const data = require('./mockData.json')
const mockData = testHelper.parseJSONData(data)


/**
 * 
 * Calling needed helper methods
 * 
 */
testHelper.setActivityMocks()
testHelper.setActivityDataMocks()
testHelper.setConsumerMocks()
testHelper.setUserMocks()
testHelper.setVisitMocks()
const pageKey = testHelper.getPageKeys[0]

describe('StoreHelper testing', () => {
  it('getAsLoadedPageData', done => {
    const asLoaded = StoreHelper.getAsLoadedPageData(pageKey)
    should.exist(asLoaded)
    should.doesNotThrow(() => StoreHelper.getAsLoadedPageData(pageKey))
    done()
  })

  it('getMergedData', done => {
    const merged = StoreHelper.getMergedData()
    should.doesNotThrow(() => StoreHelper.getMergedData())
    should.exist(merged)
    done()
  })

  it('getHasDataForPagesList', done => {
    const data = StoreHelper.getHasDataForPagesList()
    should.exist(data)
    should.doesNotThrow(() => StoreHelper.getHasDataForPagesList())
    done()
  })

  it('toolConsumerId', done => {
    const tc = StoreHelper.toolConsumerId()
    should.doesNotThrow(() => StoreHelper.toolConsumerId())
    tc.should.be.type('string')
    tc.should.equal(mockData.consumer._id)  
    done()
  })

  it('userId', done => {
    const userId = StoreHelper.userId()
    should.doesNotThrow(() => StoreHelper.userId())
    should.exist(userId)
    userId.should.equal(mockData.user._id)
    done()
  })

  it('fullName', done => {
    const fullName = StoreHelper.fullName()
    should.doesNotThrow(() => StoreHelper.fullName())
    should.exist(fullName)
    fullName.should.equal(mockData.user.fullName)
    done()
  })

  it('lmsUrl', done => {
    const lmsUrl = StoreHelper.lmsUrl()
    should.doesNotThrow(() => StoreHelper.lmsUrl())
    should.exist(lmsUrl)
    lmsUrl.should.equal(mockData.visit.returnUrl)
    done()
  })

  it('lmsName', done => {
    const lmsName = StoreHelper.lmsName()
    should.doesNotThrow(() => StoreHelper.lmsName())
    should.exist(lmsName)
    lmsName.should.equal(mockData.consumer.tool_consumer_instance_name)
    done()
  })

  it('isInstructor', done => {
    const isInstructor = StoreHelper.isInstructor()
    should.doesNotThrow(() => StoreHelper.isInstructor())
    should.exist(isInstructor)
    isInstructor.should.equal(mockData.visit.isInstructor)
    done()
  })


  it('isDeveloper', done => {
    const isDeveloper = StoreHelper.isDeveloper()
    should.doesNotThrow(() => StoreHelper.isDeveloper())
    should.exist(isDeveloper)
    isDeveloper.should.equal(mockData.visit.isDeveloper)
    done()
  })


  it('isStudent', done => {
    const isStudent = StoreHelper.isStudent()
    should.doesNotThrow(() => StoreHelper.isStudent())
    should.exist(isStudent)
    isStudent.should.equal(mockData.visit.isStudent)
    done()
  })

  it('setApiURL', done => {
    const APIUrl = mockData.apiUrl
    StoreHelper.apiUrlSet(APIUrl)
    should.doesNotThrow(() => StoreHelper.apiUrlSet(APIUrl))
    done()
  })

  it('getApiURL', done => {
    const APIUrl = mockData.apiUrl
    const storeApiUrl = StoreHelper.apiUrlGet()
    should.doesNotThrow(() => StoreHelper.apiUrlGet())
    should.exist(storeApiUrl)
    storeApiUrl.should.equal(APIUrl)
    done()
  })

  it('setIsReadOnlyInstructor', done => {
    StoreHelper.setIsReadOnlyInstructor(true)
    should.doesNotThrow(() => StoreHelper.setIsReadOnlyInstructor(true))
    done()
  })

  it('isReadOnlyInstructor', done => {
    const isReadOnlyInstructor = StoreHelper.isReadOnlyInstructor()
    const isTruthy = testHelper.isTruthy(isReadOnlyInstructor)
    should.doesNotThrow(() => StoreHelper.isReadOnlyInstructor())
    should.exist(isReadOnlyInstructor)
    isTruthy.should.equal(true)
    done()
  })

  it('setIsDevelopingContent', done => {
    StoreHelper.setIsDevelopingContent(true)
    should.doesNotThrow(() => StoreHelper.setIsDevelopingContent(true))
    done()
  })

  it('getIsDevelopingContent', done => {
    const isDevelopingContent = StoreHelper.isDevelopingContent()
    const isTruthy = testHelper.isTruthy(isDevelopingContent)
    should.doesNotThrow(() => StoreHelper.isDevelopingContent())
    should.exist(isDevelopingContent)
    isTruthy.should.equal(true)
    done()
  })

  it('getCourseTitle', done => {
    const courseTitle = StoreHelper.getCourseTitle()
    should.doesNotThrow(()=>StoreHelper.getCourseTitle())
    should.exist(courseTitle)
    courseTitle.should.equal(mockData.activity.context_title)
    done()
  })

  it('isSubmitted', done => {
    const isSubmitted = StoreHelper.isSubmitted()
    should.doesNotThrow(()=>StoreHelper.isSubmitted())
    should.exist(isSubmitted)
    isSubmitted.should.equal(mockData.activityData.submitted)
    done()
  })

  it('isEvaluated', done => {
    const isEvaluated = StoreHelper.isEvaluated()
    should.doesNotThrow(() => StoreHelper.isEvaluated())
    should.exist(isEvaluated)
    isEvaluated.should.equal(mockData.activityData.evaluated)
    done()
  })

  it('getStudentAssignmentData', done => {
    const assignmentData = StoreHelper.getStudentAssignmentData()
    should.doesNotThrow(() => StoreHelper.getStudentAssignmentData())
    should.exist(assignmentData)
    assignmentData.should.equal(mockData.activityData.assignmentData)
    done()
  })

  it('getStudentScratchData', done => {
    const scratchData = StoreHelper.getStudentScratchData()
    should.doesNotThrow(() => StoreHelper.getStudentScratchData())
    should.exist(scratchData)
    scratchData.should.equal(mockData.activityData.scratchData)
    done()
  })

  it('getEvaluationNotes', done => {
    const evaluationNotes = StoreHelper.getEvaluationNotes()
    should.doesNotThrow(() => StoreHelper.getEvaluationNotes())
    should.exist(evaluationNotes)
    evaluationNotes.should.equal(mockData.activityData.evaluationData)
    done()
  })

  it('getActivityData', done => {
    const activityData = StoreHelper.getActivityData()
    should.doesNotThrow(() => StoreHelper.getActivityData())
    should.exist(activityData)
    JSON.stringify(activityData).should.equal(JSON.stringify(mockData.activityData))
    done()
  })
 
  it('isLoading', done => {
    const isLoading = StoreHelper.isLoading()
    should.doesNotThrow(() => StoreHelper.isLoading())
    should.exist(isLoading)
    isLoading.should.equal(false)
    done()
  })

  it('setLoading', done => {
    const isLoading = !StoreHelper.isLoading()
    StoreHelper.setLoading(null, isLoading)
    should.doesNotThrow(() => StoreHelper.setLoading(null, isLoading))
    const result = StoreHelper.isLoading()
    result.should.equal(isLoading)
    done()
  })

  it('setShowAdvanced', done => {
    const showAdvanced = !StoreHelper.isShowingAdvanced()
    StoreHelper.setShowAdvanced(showAdvanced)
    should.doesNotThrow( () => StoreHelper.setShowAdvanced(showAdvanced))
    const result = StoreHelper.isShowingAdvanced()
    result.should.equal(showAdvanced)
    done()
  })





  // it('studentSubmitsAssignment', done => {
  //   const submit = !mockData.activityData.submitted
  //   StoreHelper.studentSubmitsAssignment(submit)
  //   should.doesNotThrow(() => StoreHelper.studentSubmitsAssignment(submit))
  // })

  // sendAssignmentDataUpdate

  



})