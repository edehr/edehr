import should from 'should'
import StoreHelper from '../store-helper'
import * as testHelper from './testHelper'
import sKeys from '../session-keys'
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
  resetAxiosResponse()
}

describe('General testing', () => {
  
  beforeEach(() => _beforeEach())

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
    should.doesNotThrow(() => StoreHelper.setApiError(message))
    const apiError = StoreHelper._getSystemProperty('apiError')
    apiError.should.equal(message)
    done()
  })

  it('setSigning', done => {
    should.doesNotThrow(() => StoreHelper.setSigning('is signing'))
    done()
  })

  it('isSigning', done => {
    const s = 'is signing'
    const r = StoreHelper.isSigning()
    s.should.equal(r)
    done()
  })

  it('setSystemMessage', done => {
    const message = 'test system message'
    StoreHelper.setSystemMessage(message)
    should.doesNotThrow(() => StoreHelper.setSystemMessage(message))
    const systemMessage = StoreHelper._getSystemProperty('sysMessage')
    systemMessage.should.equal(message)
    done()
  })
})

describe('classList / instructor tests', () => {

  beforeEach(() => _beforeEach())

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
  
  it('studentSubmitsAssignment', async done => {
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
  
  it('sendAssignmentDataUpdate', async done => {
    const payload = {
      propertyName: 'progressNotes',
      value: true
    }
    await axiosMockHelper.prepareAxiosResponse('put', payload)
    const result = await StoreHelper.sendAssignmentDataUpdate(payload)
    result.should.equal(payload)
    done()
  })

  it('getClassListForActivity', async done => {
    const activityId = mockData.activity._id
    const mockResult =  { classList: mockData.classList }
    await axiosMockHelper.prepareAxiosResponse('get', mockResult)
    const result = await StoreHelper.getClassListForActivity(activityId)
    should.doesNotThrow(() => StoreHelper.getClassListForActivity(activityId))
    result.should.be.equal(mockResult.classList)
    done()
  })

  it('dispatchLoadClassList', async done => {
    const classList = { classList: mockData.classList }
    await axiosMockHelper.prepareAxiosResponse('get', classList)
    const load = await StoreHelper.dispatchLoadClassList(classList)
    should.doesNotThrow(async () => await StoreHelper.dispatchLoadClassList(classList))
    load.should.not.be.empty()
    load.length.should.equal(classList.classList.length)
    done()
  })

  it('instructorReturnsAssignment', async done => {
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

  it('instructorMarksWorkEvaluated', async done => {
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


  it('changeStudentForInstructor', async done => {
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

  it('saveEvaluationNotes', async done => {
    const notes = 'Good job!'
    const r = { evalNotes : notes }
    await axiosMockHelper.prepareAxiosResponse('put', r)
    const result = await StoreHelper.saveEvaluationNotes(notes)
    should.doesNotThrow(async () => await StoreHelper.saveEvaluationNotes(notes))
    result.should.equal(r)
    done()
  })

})
describe('activity tests', () => {
  beforeEach(() => _beforeEach())
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

  it('dispatchLoadActivity', async done => {
    await axiosMockHelper.prepareAxiosResponse('get', { activity: mockData.activity })
    const result = await StoreHelper.dispatchLoadActivity(mockData.activity._id)
    should.doesNotThrow(async () => await StoreHelper.dispatchLoadActivity(mockData.activity._id))
    result.should.equal(mockData.activity)
    done()
  })

  it('loadAsCurrentActivity', async done => {
    await axiosMockHelper.prepareAxiosResponse('get', { activity: mockData.activity })
    const result = await StoreHelper.dispatchLoadActivity(mockData.activity._id)
    should.doesNotThrow(async () => await StoreHelper.dispatchLoadActivity(mockData.activity._id))
    result.should.equal(mockData.activity)
    const currentActivityId = StoreHelper.getActivityId()
    currentActivityId.should.equal(mockData.activity._id)
    done()
  })

  it('closeActivity', async done => {
    const closedActivity = Object.assign({}, mockData.activity, { closed: true })
    await axiosMockHelper.prepareAxiosResponse('put', { activity: closedActivity })
    const result = await StoreHelper.closeActivity(mockData.activity._id)
    should.doesNotThrow(async () => await StoreHelper.closeActivity(mockData.activity._id))
    result.activity.should.equal(closedActivity)
    result.activity.closed.should.equal(true)
    done()
  })

  it('openActivity', async done => {
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
})

describe('assignment tests', () => {
  
  beforeEach(() => _beforeEach())

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

  it('getAssignmentDescription', done => {
    const description = StoreHelper.getAssignmentDescription()
    should.doesNotThrow(() => StoreHelper.getAssignmentDescription())
    description.should.equal(mockData.assignment.description)
    done()
  })

  it('getAssignment', async done => {
    const assignment = mockData.assignment
    await axiosMockHelper.prepareAxiosResponse('get', { assignment })
    const result = await StoreHelper.getAssignment(mockData.assignment._id)
    should.doesNotThrow(async () => await StoreHelper.getAssignment(mockData.assignment._id))
    result.should.equal(assignment)
    done()
  })

  it('loadAssignment', async done => {
    const { assignment } = mockData
    await axiosMockHelper.prepareAxiosResponse('get', { assignment })
    const result = await StoreHelper.loadAssignment(assignment._id)
    should.doesNotThrow(async () => await StoreHelper.loadAssignment(assignment._id))
    result.should.equal(assignment)
    done()
  })

  it('deleteAssignment', async done => {
    await axiosMockHelper.prepareAxiosResponse('delete',  {})
    const result = await StoreHelper.deleteAssignment(mockData.assignment._id)
    should.doesNotThrow(async () => await StoreHelper.deleteAssignment(mockData.assignment._id))
    Object.keys(result).length.should.equal(0)
    done()
  })

  it('loadAssignmentList', async done => {
    const { assignmentListing } = mockData
    await axiosMockHelper.prepareAxiosResponse('get', {assignments: assignmentListing})
    const assignmentList = await StoreHelper.loadAssignmentList(this)
    should.doesNotThrow(async () => await StoreHelper.loadAssignmentList(this))
    assignmentList.should.equal(assignmentListing)
    done()
  })

  it('updateAssignment', async done => {
    const updatedAssignment = Object.assign(
      {}, 
      mockData.assignment, 
      { name: 'updated assignment name' }
    )
    const assignments = [
      ...mockData.assignmentListing.filter(a => a._id !== updatedAssignment._id),
      updatedAssignment
    ]
    should.doesNotThrow(async () => {
      await axiosMockHelper.prepareAxiosResponse('put', updatedAssignment)
      await axiosMockHelper.prepareAxiosResponse('get', { assignments })
      const result = await StoreHelper.updateAssignment(this, updatedAssignment._id, updatedAssignment)
      result.includes(updatedAssignment).should.equal(true)
      done()
    })
  })

  it('createAssignment', async done => {
    const newAssignment = {
      _id: 'newAssignmentId',
      toolConsumer: '5eb2b706df6c04d3212355d9',
      externalId: 'newAssignment',
      name: 'New test assignment',
      description: 'This a new test assignment',
      ehrRoutePath: '',
      seedDataId: '5eb2b706df6c04d3212355db'
    }
    const assignments = [...mockData.assignmentListing, newAssignment]
    should.doesNotThrow(async () => {
      await axiosMockHelper.prepareAxiosResponse('put', newAssignment)
      await axiosMockHelper.prepareAxiosResponse('get', { assignments })
      const result = await StoreHelper.createAssignment(newAssignment)
      result.should.equal(assignments)
      result.length.should.be.greaterThan(mockData.assignmentListing.length)
      done()
    })
  })

  it('getAssignmentsList', done => {
    const list = StoreHelper.getAssignmentsList()
    should.doesNotThrow(() => StoreHelper.getAssignmentsList())
    list.should.not.be.empty()
    list.should.equal(mockData.assignmentListing)
    done()
  })

  it('getAssignmentSeedId', done => {
    const seedId = StoreHelper.getAssignmentSeedId()
    should.doesNotThrow(() => StoreHelper.getAssignmentSeedId())
    seedId.should.equal(mockData.assignment.seedDataId)
    done()
  })

  it('getAssignmentCaseStudyData', done => {
    const { assignment } = mockData
    const caseStudy = StoreHelper.getAssignmentCaseStudyData()
    should.doesNotThrow(() => StoreHelper.getAssignmentCaseStudyData())
    caseStudy.name.should.equal(assignment.persona)
    caseStudy.profession.should.equal(assignment.profession)
    caseStudy.day.should.equal(assignment.day)
    caseStudy.time.should.equal(assignment.time)
    done()
  })
})
describe('seed data tests', () => {
  beforeEach(() => _beforeEach())
  it('getSeedId', done => {
    const { seedData } = mockData
    const result = StoreHelper.getSeedId()
    should.doesNotThrow(() => StoreHelper.getSeedId())
    result.should.equal(seedData._id)
    done()
  })

  it('getSeedDataList', done => {
    const { seedDataList } = mockData
    const result = StoreHelper.getSeedDataList()
    should.doesNotThrow(() => StoreHelper.getSeedDataList())
    JSON.stringify(result).should.equal(JSON.stringify(seedDataList))
    done()
  })
})

describe('LMS/LTI consumers tests', () => {
  beforeEach(() => _beforeEach())
  it('getConsumersList', done => {
    const list = StoreHelper.getConsumersList()  
    should.doesNotThrow(() => StoreHelper.getConsumersList())
    list.should.equal(mockData.consumerListing)
    done()
  })
  
  it('loadConsumersList', async done => {
    const { consumerListing } = mockData
    axiosMockHelper.prepareAxiosResponse('get', { consumers: consumerListing })
    const list = await StoreHelper.loadConsumerList()
    should.doesNotThrow(async () => await StoreHelper.loadConsumerList)
    list.should.equal(consumerListing)
    done()
  })

  it('updateConsumer', async done => {
    const updatedConsumer = Object.assign({}, mockData.consumer, {
      oauth_consumer_key: 'new consumer key',
      oauth_consumer_secret: 'new consumer secret',
      tool_consumer_instance_name: 'new instance name'
    } )
    const consumers = [
      ...mockData.consumerListing.filter(c => c._id !== updatedConsumer._id),
      updatedConsumer
    ]
    await axiosMockHelper.prepareAxiosResponse('put', { consumer: updatedConsumer })
    await axiosMockHelper.prepareAxiosResponse('get', { consumers })
    const result = await StoreHelper.updateConsumer(updatedConsumer._id, updatedConsumer)
    should.doesNotThrow(async () => await StoreHelper.updateConsumer(updatedConsumer._id, updatedConsumer))
    result.includes(updatedConsumer).should.equal(true)
    done()
  })

  it('createConsumer', async done => {
    const consumer = {
      _id: 'newConsumerId',
      oauth_consumer_key: 'new consumer key',
      oauth_consumer_secret: 'new consumer secret',
      tool_consumer_instance_name: 'new instance name'
    }
    const consumers = [
      ...mockData.consumerListing,
      consumer
    ]
    await axiosMockHelper.prepareAxiosResponse('put', { consumer })
    await axiosMockHelper.prepareAxiosResponse('get', { consumers })
    const result = await StoreHelper.createConsumer(consumer)
    should.doesNotThrow(async () => await StoreHelper.createConsumer(consumer))
    result.includes(consumer).should.equal(true)
    done()
  })
})

describe('Loading / restoring tests', () => {
  beforeEach(() => _beforeEach())
  it('getPanelData' , done => {
    const panelData = StoreHelper.getPanelData()
    should.doesNotThrow(() => StoreHelper.getPanelData())
    should.exist(panelData)
    Object.keys(panelData).length.should.be.greaterThan(0)
    done()
  })

  it('restoreSession', async done => {
    const { activity, visit } = mockData
    const token = visit._id
    sessionStorage.setItem(sKeys.USER_TOKEN, token)
    await axiosMockHelper.prepareAxiosResponse('get', { activity })
    const result = await StoreHelper.restoreSession()
    should.doesNotThrow(async () => await StoreHelper.restoreSession())
    result.should.equal(visit._id)
    done()
  })

  it('clearSession', done => {
    should.doesNotThrow(async () => await StoreHelper.clearSession())
    should.not.exist(sessionStorage.getItem(sKeys.C_ACTIVITY))
    should.not.exist(sessionStorage.getItem(sKeys.C_STUDENT))
    should.not.exist(sessionStorage.getItem(sKeys.SEED_ID))
    should.not.exist(sessionStorage.getItem(sKeys.IS_READONLY_INSTRUCTOR))
    done()
  })


  it('loadVisitRecord', async done => {
    const visitId = mockData.visit._id
    const { visit } = mockData
    await axiosMockHelper.prepareAxiosResponse('get', { visit })
    await StoreHelper.loadVisitRecord(visitId)
    should.doesNotThrow(async () => await StoreHelper.loadVisitRecord(visitId))
    const result = StoreHelper._getVisitProperty('visitData')
    result.should.equal(visit)
    done()
  })

  it('loadDevelopingSeed', async done => {
    await axiosMockHelper.prepareAxiosResponse('get', { seeddata: mockData.seedData })
    should.doesNotThrow(async () => {
      await StoreHelper.loadDevelopingSeed()
      const seedId = StoreHelper.getSeedId()
      seedId.should.equal(mockData.seedData._id)
      done()
    })
  })
})

describe('auth/admin tests', () => {
  
  beforeEach(() => _beforeEach())

  it('fetchAndStoreAuthToken', async done => {
    const refreshToken = 'testRefreshToken'
    const token = 'authToken'
    await axiosMockHelper.prepareAxiosResponse('post', { token })
    const result = await StoreHelper.fetchAndStoreAuthToken(refreshToken)
    should.doesNotThrow(async () => await StoreHelper.fetchAndStoreAuthToken(refreshToken))
    result.should.equal(token)
    done()
  })

  it('fetchTokenData', async done => {
    should.doesNotThrow(async () => {
      await axiosMockHelper.prepareAxiosResponse('post', { authPayload: 'payload' })
      await StoreHelper.fetchTokenData('testToken')
      done()
    })

  })

  it('adminLogin (200 status)', async done => {
    const adminPassword = 'adminPassword'
    const token = 'adminToken'
    await axiosMockHelper.prepareAxiosResponse('post', { token }, 200)
    const adminToken = await StoreHelper.adminLogin(adminPassword)
    should.doesNotThrow(async () => await StoreHelper.adminLogin(adminPassword))
    adminToken.should.equal(token)
    done()
  })

  it('adminLogin (201 status)', async done => {
    const adminPassword = 'adminPassword'
    const token = 'adminToken'
    await axiosMockHelper.prepareAxiosResponse('post', { token }, 201)
    StoreHelper.adminLogin(adminPassword)
      .catch(err => {
        err.should.equal('The token has been created. Please, contact an administrator to get it.')
        done()
      })
  })

  it('adminValidate', async done => {
    should.doesNotThrow(async () => {
      const token = 'adminToken'
      await axiosMockHelper.prepareAxiosResponse('post', { isAdmin: true })
      const result = await StoreHelper.adminValidate(token)
      result.isAdmin.should.equal(true)
      done()
    }) 
  })

  it('getAuthData', async done => {
    const authPayload = 'payload'
    await axiosMockHelper.prepareAxiosResponse('post', { authPayload })
    await StoreHelper.fetchTokenData('testToken')
    const response = await StoreHelper.getAuthData()
    response.authPayload.should.equal(authPayload)
    done()
  })

  it('getAuthToken', async done => {
    const token = 'authToken'
    const refreshToken = 'testRefreshToken'
    await axiosMockHelper.prepareAxiosResponse('post', { token })
    await StoreHelper.fetchAndStoreAuthToken(refreshToken)
    const result = StoreHelper.getAuthToken()
    result.should.equal(token)
    done()
  })

  it('logUserOutOfEdEHR', async done => {    
    await StoreHelper.logUserOutOfEdEHR()
    const authToken = localStorage.getItem(sKeys.AUTH_TOKEN)
    const visitData = StoreHelper._getVisitProperty('visitData')
    should.not.exist(authToken)
    Object.keys(visitData).length.should.equal(0)
    done()
  })
})

describe('Compound loading function tests', () => {
  beforeEach(() => _beforeEach())

  it('loadAssignmentAndSeedLists', async done => {
    await axiosMockHelper.createCompoundGetResponse()
    should.doesNotThrow(async () => {
      await StoreHelper.loadAssignmentAndSeedLists()
      const assignments = StoreHelper.getAssignmentsList()
      const seedData = StoreHelper.getSeedDataList()
      assignments.should.equal(mockData.assignmentListing)
      JSON.stringify(seedData).should.equal(JSON.stringify(mockData.seedDataList))
      done()
    })
  })

  it('loadCommon', async done => {
    await axiosMockHelper.createCompoundGetResponse()
    should.doesNotThrow(async () => {
      await StoreHelper.loadCommon()
      const activityId = StoreHelper.getActivityId()
      const assignments = StoreHelper.getAssignmentsList()
      const consumer = StoreHelper._getConsumerProperty('consumer')
      const user = StoreHelper._getUserProperty('user')
      const seedData = StoreHelper.getSeedDataList()
      activityId.should.equal(mockData.activity._id)
      assignments.should.equal(mockData.assignmentListing)
      consumer.should.equal(mockData.consumer)
      user.should.equal(mockData.user)
      JSON.stringify(seedData).should.equal(JSON.stringify(mockData.seedDataList))
      done()
    })
  })

  it('loadStudent2', async done => {
    await axiosMockHelper.createCompoundGetResponse()
    should.doesNotThrow(async () => {
      await StoreHelper.loadStudent2()
      const activityId = StoreHelper.getActivityId()
      const activityData = StoreHelper.getActivityData()
      const assignment = await StoreHelper.getAssignment()
      const assignments = StoreHelper.getAssignmentsList()
      const consumer = StoreHelper._getConsumerProperty('consumer')
      const user = StoreHelper._getUserProperty('user')
      const seedData = StoreHelper.getSeedDataList()
      activityId.should.equal(mockData.activity._id)
      activityData.should.equal(mockData.activityData)
      assignment.should.equal(mockData.assignment)
      assignments.should.equal(mockData.assignmentListing)
      consumer.should.equal(mockData.consumer)
      user.should.equal(mockData.user)
      JSON.stringify(seedData).should.equal(JSON.stringify(mockData.seedDataList))
      done()
    })
  })

  it('loadInstructor2', async done => {
    await axiosMockHelper.createCompoundGetResponse()
    should.doesNotThrow(async () => {
      await StoreHelper.loadInstructor2()
      const activityId = StoreHelper.getActivityId()
      const assignments = StoreHelper.getAssignmentsList()
      const consumer = StoreHelper._getConsumerProperty('consumer')
      const courses = testHelper.dispatchGetter('instructor/sCourses')
      const user = StoreHelper._getUserProperty('user')
      const seedData = StoreHelper.getSeedDataList()
      activityId.should.equal(mockData.activity._id)
      assignments.should.equal(mockData.assignmentListing)
      consumer.should.equal(mockData.consumer)
      courses.should.equal(mockData.courses)
      user.should.equal(mockData.user)
      JSON.stringify(seedData).should.equal(JSON.stringify(mockData.seedDataList))
      done()
    })
  })

  it('loadInstructorWithStudent', async done => {
    await axiosMockHelper.createCompoundGetResponse()
    should.doesNotThrow(async () => await StoreHelper.loadInstructorWithStudent(true))
    const activityId = StoreHelper.getActivityId()
    const activityData = StoreHelper.getActivityData()
    const assignment = await StoreHelper.getAssignment()
    const assignments = StoreHelper.getAssignmentsList()
    const consumer = StoreHelper._getConsumerProperty('consumer')
    const user = StoreHelper._getUserProperty('user')
    const seedData = StoreHelper.getSeedDataList()
    activityId.should.equal(mockData.activity._id)
    activityData.should.equal(mockData.activityData)
    assignment.should.equal(mockData.assignment)
    assignments.should.equal(mockData.assignmentListing)
    consumer.should.equal(mockData.consumer)
    user.should.equal(mockData.user)
    JSON.stringify(seedData).should.equal(JSON.stringify(mockData.seedDataList))
    done()
  })
})

describe('Demonstration related', () => {
  beforeEach(() => _beforeEach())

  it('createDemoToolConsumer', async done => {
    const payload = { demoToken: 'demoToken' }
    await axiosMockHelper.prepareAxiosResponse('post', payload)
    const token = await StoreHelper.createDemoToolConsumer()
    token.should.equal(payload.demoToken)
    done()
  })

  it('loadDemoData', async done => {
    const { demoData } = mockData
    await axiosMockHelper.prepareAxiosResponse('get', { demoData })
    const result = await StoreHelper.loadDemoData()
    JSON.stringify(result).should.equal(JSON.stringify(demoData))
    done()
  })

  it('getDemoToken', done => {
    const demoToken = 'demoToken'
    const token = StoreHelper.getDemoToken()
    token.should.equal(demoToken)
    done()
  })

  it('setDemoPersona', async done => {
    const persona = mockData.demoData.personaList[0]
    should.doesNotThrow(() => StoreHelper.setDemoPersona(persona))
    done()
    
  })

  it('getDemoPersona', done => {
    const persona = mockData.demoData.personaList[0]
    const result = StoreHelper.getDemoPersona()
    result.should.equal(persona)
    done()
  })

  it('getDemoTokenData', done => {
    const data = StoreHelper.getDemoTokenData()
    data.should.equal(mockData.demoData)
    done()
  })

  it('isDemoMode', done => {
    const isDemo = StoreHelper.isDemoMode()
    isDemo.should.equal(true)
    done()
  })

  it('setDemoToken', done => {
    const demoToken = 'newDemoToken'
    should.doesNotThrow(() => StoreHelper.setDemoToken(demoToken))
    const token = StoreHelper.getDemoToken()
    token.should.equal(demoToken)
    done()
  })

  it('setDemoAssignment', done => {
    const assignment = mockData.assignment
    StoreHelper.setDemoAssignment(assignment)
    const result = testHelper.dispatchGetter('demoStore/demoAssignment')
    assignment.should.equal(result)
    done()
  })

  it('submitPersona', async done => {
    const persona = mockData.demoData.personaList[0]
    const { assignment, demoData } = mockData
    const submitData = {
      assignmentName: assignment.name, 
      externalId: assignment.externalId, 
      personaName: persona.name, 
      personaEmail: persona.email, 
      personaRole: persona.role, 
      returnUrl: 'returnUrl', 
      toolKey: demoData.toolConsumerKey
    }
    await axiosMockHelper.prepareAxiosResponse('post', { triggered: true })
    const result = await StoreHelper.submitPersona(submitData)
    result.triggered.should.equal(true)
    done()
  })

  it('submitAcceptsTerms', done => {
    should.doesNotThrow(() => StoreHelper.submitAcceptsTerms(true))
    done()
  })

  it('getDemoAcceptTerms', done => {
    const accept = StoreHelper.getDemoAcceptTerms()
    accept.should.equal(true)
    done()
  })

  it('setDemoFeatureFlag', done => {
    should.doesNotThrow(() => StoreHelper.setDemoFeatureFlag(true))
    done()
  })

  it('getDemoFeatureFlag', done => {
    const flag = StoreHelper.getDemoFeatureFlag()
    flag.should.equal(true)
    done()
  })

  it('demoLogout', async done => {
    await axiosMockHelper.prepareAxiosResponse('post', null)
    await StoreHelper.demoLogout()
    const demoToken = StoreHelper.getDemoToken()
    should.not.exist(demoToken)
    done()
  })

})