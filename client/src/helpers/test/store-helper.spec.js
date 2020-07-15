import should from 'should'
import StoreHelper from '../store-helper'
import * as testHelper from './testHelper'
// import instoreFactory from './instoreFactory'
const mockData = require('./mockData.json')
const axiosMockHelper = require('./axios-mock-helper')
jest.mock('axios')
/**
 * 
 * Calling needed helper methods
 * 
 */

const pageKey = testHelper.getPageKeys[0]

const resetAxiosResponse = () => {
  const methods = ['get', 'post', 'put', 'delete']
  methods.map(m => axiosMockHelper.prepareAxiosResponse(m, {}))
}

beforeEach(() => {
  resetAxiosResponse()
  testHelper.setActivityMocks()
  testHelper.setActivityDataMocks()
  testHelper.setAssignmentMocks()
  testHelper.setConsumerMocks()
  testHelper.setUserMocks()
  testHelper.setVisitMocks()
})
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

  it('setApiError', done => {
    const message = 'test error message'
    StoreHelper.setApiError(message)
    should.doesNotThrow(() => StoreHelper.setApiError(message))
    const apiError = testHelper.getSystemProperty('apiError')
    apiError.should.equal(message)
    done()
  })

  it('setSystemMessage', done => {
    const message = 'test system message'
    StoreHelper.setSystemMessage(message)
    should.doesNotThrow(() => StoreHelper.setSystemMessage(message))
    const systemMessage = testHelper.getSystemProperty('sysMessage')
    systemMessage.should.equal(message)
    done()
  })

  it('getClassList', done => {
    const classes = mockData.classList
    testHelper.instructorCommit(classes, 'setClassList')
    should.doesNotThrow(() => testHelper.instructorCommit(classes, 'setClassList'))
    const classList = StoreHelper.getClassList()
    should.doesNotThrow(() => StoreHelper.getClassList())
    classList.should.equal(classes)
    classList.length.should.equal(classes.length)
    done()
  })
  
  it('getCurrentEvaluationStudentId', done => {
    const studentEvalId = 'currentEvaluationStudentId'
    testHelper.instructorCommit(studentEvalId, 'setCurrentEvaluationStudentId')
    should.doesNotThrow(() => testHelper.instructorCommit(studentEvalId, 'setCurrentEvaluationStudentId'))
    const currentEval = StoreHelper.getCurrentEvaluationStudentId()
    should.doesNotThrow(() => StoreHelper.getCurrentEvaluationStudentId())
    should.exist(studentEvalId)
    currentEval.should.equal(studentEvalId)
    done()
  })
  
  it('getCurrentEvaluationStudentVisit', done => {
    const studentEvalId = StoreHelper.getCurrentEvaluationStudentId()
    const currentVisit = StoreHelper.getCurrentEvaluationStudentVisit()
    should.doesNotThrow(() => StoreHelper.getCurrentEvaluationStudentVisit())
    currentVisit._id.should.equal(studentEvalId)
    done()
  })

  it('getCurrentEvaluationStudentAssignmentData', done => {
    const classList = mockData.classList
    const assignmentData = StoreHelper.getCurrentEvaluationStudentAssignmentData()
    should.doesNotThrow(() => StoreHelper.getCurrentEvaluationStudentAssignmentData())
    assignmentData.should.not.be.empty()
    assignmentData.should.equal(classList[0].activityData.assignmentData)
    done()
  })
  
  it('studentSubmitsAssignment', async (done) => {
    const submit = !mockData.activityData.submitted
    const mockedResult = {
      submitted: submit
    }  
    await axiosMockHelper.prepareAxiosResponse('put', mockedResult)
    const result = await StoreHelper.studentSubmitsAssignment(submit)
    should.doesNotThrow(() => StoreHelper.studentSubmitsAssignment(submit))
    result.submitted.should.equal(submit)
    done()
  })  
  
  it('sendAssignmentDataUpdate', async (done) => {
    const payload = {
      propertyName: 'progressNotes',
      value: true
    }
    await axiosMockHelper.prepareAxiosResponse('put', payload)
    const result = await StoreHelper.sendAssignmentDataUpdate(payload)
    result.should.equal(payload)
    done()
  })

  it('getClassListForActivity', async (done) => {
    const activityId = mockData.activity._id
    const mockResult =  { classList: mockData.classList }
    await axiosMockHelper.prepareAxiosResponse('get', mockResult)
    const result = await StoreHelper.getClassListForActivity(activityId)
    should.doesNotThrow(() => StoreHelper.getClassListForActivity(activityId))
    result.should.be.equal(mockResult.classList)
    done()
  })

  it('dispatchLoadClassList', async (done) => {
    const classList = { classList: mockData.classList }
    await axiosMockHelper.prepareAxiosResponse('get', classList)
    const load = await StoreHelper.dispatchLoadClassList(classList)
    should.doesNotThrow(async () => await StoreHelper.dispatchLoadClassList(classList))
    load.should.not.be.empty()
    load.length.should.equal(classList.classList.length)
    
    done()
  })

  it('instructorReturnsAssignment', async (done) => {
    const submit = false
    const mockedResult = {
      submitted: submit
    }  
    await axiosMockHelper.prepareAxiosResponse('put', mockedResult)
    const result = await StoreHelper.instructorReturnsAssignment()
    should.doesNotThrow(() => StoreHelper.instructorReturnsAssignment())
    result.submitted.should.equal(false)
    done()
  })

  it('instructorMarksWorkEvaluated', async (done) => {

    const evaluated = true
    const mockedResult = {
      evaluated
    }  
    await axiosMockHelper.prepareAxiosResponse('put', mockedResult)
    const result = await StoreHelper.instructorMarksWorkEvaluated(evaluated)
    should.doesNotThrow(async () => await StoreHelper.instructorMarksWorkEvaluated(evaluated))
    result.evaluated.should.equal(evaluated)
    done()
  })


  it('changeStudentForInstructor', async (done) => {
    const _id = 'currentEvaluationStudentId2'
    const found = mockData.classList.find(c => c._id === _id)
    const classes = mockData.classList
    testHelper.instructorCommit(classes, 'setClassList')
    const usedActivity = StoreHelper.getActivityData()
    usedActivity.should.not.be.empty()
    testHelper.setActivityDataMocks(found.activityData)
    await axiosMockHelper.prepareAxiosResponse('get', { activitydata: found.activityData })
    await StoreHelper.changeStudentForInstructor(_id) 
    should.doesNotThrow(async () =>  await StoreHelper.changeStudentForInstructor(_id))
    const result = StoreHelper.getActivityData()
    // const result = StoreHelper.getActivityData()
    result.should.equal(found.activityData)
    done()
  })

  it('saveEvaluationNotes', async (done) => {
    const notes = 'Good job!'
    const r = { evalNotes : notes }
    await axiosMockHelper.prepareAxiosResponse('put', r)
    const result = await StoreHelper.saveEvaluationNotes(notes)
    should.doesNotThrow(async () => await StoreHelper.saveEvaluationNotes(notes))
    result.should.equal(r)
    done()
  })

  it('getActivityId', done => {
    const activityId = StoreHelper.getActivityId()
    should.doesNotThrow(() => StoreHelper.getActivityId())
    activityId.should.equal(mockData.activity._id)
    done()
  })

  it('getActivityTitle', done => {
    const activityTitle = StoreHelper.getActivityTitle()
    should.doesNotThrow(() => StoreHelper.getActivityTitle())
    activityTitle.should.equal(mockData.activity.resource_link_title)
    done()
  })

  it('getActivityDescription', done => {
    const description = StoreHelper.getActivityDescription()
    should.doesNotThrow(()=> StoreHelper.getActivityDescription())
    description.should.equal(mockData.activity.resource_link_description)
    done()
  })

  it('getActivityIsClosed', done => {
    const closed = StoreHelper.getActivityIsClosed()
    should.doesNotThrow(() => StoreHelper.getActivityIsClosed())
    closed.should.equal(mockData.activity.closed)
    done()
  })

  it('getActivityClosedDate', done => {
    const closedDate = StoreHelper.getActivityClosedDate()
    should.doesNotThrow(() => StoreHelper.getActivityClosedDate())
    closedDate.should.equal(mockData.activity.closedDate)
    done()
  })

  it('activitiesUsingAssignmentCount', done => {
    testHelper.instructorCommit(mockData.courses, 'setCourses')
    const cnt = StoreHelper.activitiesUsingAssignmentCount('assignment1')
    should.doesNotThrow(() => StoreHelper.activitiesUsingAssignmentCount('assignment1'))
    cnt.should.be.greaterThan(0)
    done()
  })

  it('dispatchLoadActivity', async (done) => {
    await axiosMockHelper.prepareAxiosResponse('get', { activity: mockData.activity })
    const result = await StoreHelper.dispatchLoadActivity(mockData.activity._id)
    should.doesNotThrow(async () => await StoreHelper.dispatchLoadActivity(mockData.activity._id))
    result.should.equal(mockData.activity)
    done()
  })

  it('loadAsCurrentActivity', async (done) => {
    await axiosMockHelper.prepareAxiosResponse('get', { activity: mockData.activity })
    const result = await StoreHelper.dispatchLoadActivity(mockData.activity._id)
    should.doesNotThrow(async () => await StoreHelper.dispatchLoadActivity(mockData.activity._id))
    result.should.equal(mockData.activity)
    const currentActivityId = StoreHelper.getActivityId()
    currentActivityId.should.equal(mockData.activity._id)
    done()
  })

  it('closeActivity', async (done) => {
    const closedActivity = Object.assign({}, mockData.activity, { closed: true })
    await axiosMockHelper.prepareAxiosResponse('put', { activity: closedActivity })
    const result = await StoreHelper.closeActivity(mockData.activity._id)
    should.doesNotThrow(async () => await StoreHelper.closeActivity(mockData.activity._id))
    result.activity.should.equal(closedActivity)
    result.activity.closed.should.equal(true)
    done()
  })

  it('openActivity', async (done) => {
    const openedActivity = Object.assign({}, mockData.activity, { closed: false })
    await axiosMockHelper.prepareAxiosResponse('put', { activity: openedActivity })
    const result = await StoreHelper.openActivity(mockData.activity._id)
    should.doesNotThrow(async () => await StoreHelper.openActivity(mockData.activity._id))
    result.activity.should.equal(openedActivity)
    result.activity.closed.should.equal(false)
    done()
  })

  it('currentStudentId', done => {
    const currentStudentId = 'currStudentId'
    testHelper.instructorCommit(currentStudentId, 'setCurrentEvaluationStudentId')
    const id = StoreHelper.currentStudentId()
    should.doesNotThrow(() => StoreHelper.currentStudentId())
    id.should.equal(currentStudentId)
    done()
  })

  it('getCourseList', done => {
    const courseList = StoreHelper.getCourseList()
    should.doesNotThrow( () => StoreHelper.getCourseList())
    courseList.should.equal(mockData.courses)
    done()
  })

  it('getAssignmentId', done => {
    const id = StoreHelper.getAssignmentId()
    should.doesNotThrow(() => StoreHelper.getAssignmentId())
    id.should.equal(mockData.assignment._id)
    done()
  })

  it('getAssignmentName', done => {
    const name = StoreHelper.getAssignmentName()
    should.doesNotThrow(() => StoreHelper.getAssignmentName())
    name.should.equal(mockData.assignment.name)
    done()
  })

  it('getASsignmentDescription', done => {
    const description = StoreHelper.getAssignmentDescription()
    should.doesNotThrow(() => StoreHelper.getAssignmentDescription())
    description.should.equal(mockData.assignment.description)
    done()
  })

})