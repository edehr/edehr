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

describe('General testing', () => {
  
  beforeEach(() => _beforeEach())

  it('getAsLoadedPageData', done => {
    should.doesNotThrow(() => {
      const asLoaded = StoreHelper.getAsLoadedPageData(pageKey)
      should.exist(asLoaded)
      done()
    })
  })

  it('getMergedData', done => {
    should.doesNotThrow(() => {
      const merged = StoreHelper.getMergedData()
      should.doesNotThrow(() => StoreHelper.getMergedData())
      should.exist(merged)
      done()
    })
  })

  it('getHasDataForPagesList', done => {
    should.doesNotThrow(() => {
      const data = StoreHelper.getHasDataForPagesList()
      should.exist(data)
      done()
    })
  })

  it('toolConsumerId', done => {
    should.doesNotThrow(() => {
      const tc = StoreHelper.toolConsumerId()
      tc.should.be.type('string')
      tc.should.equal(mockData.consumer._id)  
      tc.should.equal(mockData.consumer._id)  
      tc.should.equal(mockData.consumer._id)  
      done()
    })
  })

  it('userId', done => {
    should.doesNotThrow(() => {
      const userId = StoreHelper.userId()
      should.exist(userId)
      userId.should.equal(mockData.user._id)
      done()
    })
  })

  it('fullName', done => {
    should.doesNotThrow(() => {
      const fullName = StoreHelper.fullName()
      should.exist(fullName)
      fullName.should.equal(mockData.user.fullName)
      done()
    })
  })

  it('lmsUrl', done => {
    should.doesNotThrow(() => {
      const lmsUrl = StoreHelper.lmsUrl()
      should.exist(lmsUrl)
      lmsUrl.should.equal(mockData.visit.returnUrl)
      done()
    })
  })

  it('lmsName', done => {
    should.doesNotThrow(() => {
      const lmsName = StoreHelper.lmsName()
      should.exist(lmsName)
      lmsName.should.equal(mockData.consumer.tool_consumer_instance_name)
      done()
    })
  })

  it('isInstructor', done => {
    should.doesNotThrow(() => {
      const isInstructor = StoreHelper.isInstructor()
      should.exist(isInstructor)
      isInstructor.should.equal(mockData.visit.isInstructor)
      done()
    })
  })


  it('isDeveloper', done => {
    should.doesNotThrow(() => {
      const isDeveloper = StoreHelper.isDeveloper()
      should.exist(isDeveloper)
      isDeveloper.should.equal(mockData.visit.isDeveloper)
      done()
    })
  })


  it('isStudent', done => {
    should.doesNotThrow(() => {
      const isStudent = StoreHelper.isStudent()
      should.exist(isStudent)
      isStudent.should.equal(mockData.visit.isStudent)
      done()
    })
  })

  it('setApiURL', done => {
    should.doesNotThrow(() => {
      const APIUrl = mockData.apiUrl
      StoreHelper.apiUrlSet(APIUrl)
      done()
    })
  })

  it('getApiURL', done => {
    should.doesNotThrow(() => {
      const APIUrl = mockData.apiUrl
      const storeApiUrl = StoreHelper.apiUrlGet()
      should.exist(storeApiUrl)
      storeApiUrl.should.equal(APIUrl)
      done()
    })
  })

  it('setIsReadOnlyInstructor', done => {
    should.doesNotThrow(() => StoreHelper.setIsReadOnlyInstructor(true))
    done()
  })

  it('isReadOnlyInstructor', done => {
    should.doesNotThrow(() => {
      const isReadOnlyInstructor = StoreHelper.isReadOnlyInstructor()
      const isTruthy = testHelper.isTruthy(isReadOnlyInstructor)
      should.exist(isReadOnlyInstructor)
      isTruthy.should.equal(true)
      done()
    })
  })

  it('setIsDevelopingContent', done => {
    should.doesNotThrow(() => {
      StoreHelper.setIsDevelopingContent(true)
      done()
    })
  })

  it('getIsDevelopingContent', done => {
    should.doesNotThrow(() => {
      const isDevelopingContent = StoreHelper.isDevelopingContent()
      const isTruthy = testHelper.isTruthy(isDevelopingContent)
      should.exist(isDevelopingContent)
      isTruthy.should.equal(true)
      done()
    })
  })

  it('getCourseTitle', done => {
    should.doesNotThrow(() => {
      const courseTitle = StoreHelper.getCourseTitle()
      should.exist(courseTitle)
      courseTitle.should.equal(mockData.activity.context_title)
      done()
    })
  })

  it('isSubmitted', done => {
    should.doesNotThrow(() => {
      const isSubmitted = StoreHelper.isSubmitted()
      should.exist(isSubmitted)
      isSubmitted.should.equal(mockData.activityData.submitted)
      done()
    })
  })

  it('isEvaluated', done => {
    should.doesNotThrow(() => {
      const isEvaluated = StoreHelper.isEvaluated()
      should.exist(isEvaluated)
      isEvaluated.should.equal(mockData.activityData.evaluated)
      done()
    })
  })

  it('getStudentAssignmentData', done => {
    should.doesNotThrow(() => {
      const assignmentData = StoreHelper.getStudentAssignmentData()
      should.exist(assignmentData)
      assignmentData.should.equal(mockData.activityData.assignmentData)
      done()
    })
  })

  it('getStudentScratchData', done => {
    should.doesNotThrow(() => {
      const scratchData = StoreHelper.getStudentScratchData()
      should.exist(scratchData)
      scratchData.should.equal(mockData.activityData.scratchData)
      done()
    })
  })

  it('getEvaluationNotes', done => {
    should.doesNotThrow(() => {
      const evaluationNotes = StoreHelper.getEvaluationNotes()
      should.exist(evaluationNotes)
      evaluationNotes.should.equal(mockData.activityData.evaluationData)
      done()
    })
  })

  it('getActivityData', done => {
    should.doesNotThrow(() => {
      const activityData = StoreHelper.getActivityData()
      should.exist(activityData)
      JSON.stringify(activityData).should.equal(JSON.stringify(mockData.activityData))
      done()
    })
  })
 
  it('isLoading', done => {
    should.doesNotThrow(() => {
      const isLoading = StoreHelper.isLoading()
      should.exist(isLoading)
      isLoading.should.equal(false)
      done()
    })
  })

  it('setLoading', done => {
    should.doesNotThrow(() => {
      const isLoading = !StoreHelper.isLoading()
      StoreHelper.setLoading(null, isLoading)
      const result = StoreHelper.isLoading()
      result.should.equal(isLoading)
      done()
    })
  })

  it('setShowAdvanced', done => {
    should.doesNotThrow(() => {
      const showAdvanced = !StoreHelper.isShowingAdvanced()
      StoreHelper.setShowAdvanced(showAdvanced)
      const result = StoreHelper.isShowingAdvanced()
      result.should.equal(showAdvanced)
      done()
    })
  })

  it('setApiError', done => {
    should.doesNotThrow(() => {
      const message = 'test error message'
      StoreHelper.setApiError(message)
      const apiError = StoreHelper._getSystemProperty('apiError')
      apiError.should.equal(message)
      done()
    })
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
    should.doesNotThrow(() => {
      const message = 'test system message'
      StoreHelper.setSystemMessage(message)
      const systemMessage = StoreHelper._getSystemProperty('sysMessage')
      systemMessage.should.equal(message)
      done()
    })
  })
})

describe('classList / instructor tests', () => {

  beforeEach(() => _beforeEach())

  it('getClassList', done => {
    should.doesNotThrow(() => {
      const classes = mockData.classList
      testHelper.instructorCommit(classes, 'setClassList')
      const classList = StoreHelper.getClassList()
      should.doesNotThrow(() => StoreHelper.getClassList())
      classList.should.equal(classes)
      classList.length.should.equal(classes.length)
      done()
    })
  })
  
  it('getCurrentEvaluationStudentId', done => {
    should.doesNotThrow(() => {
      const studentEvalId = 'currentEvaluationStudentId'
      testHelper.instructorCommit(studentEvalId, 'setCurrentEvaluationStudentId')
      StoreHelper.getCurrentEvaluationStudentId()
      const currentEval = StoreHelper.getCurrentEvaluationStudentId()
      should.exist(currentEval)
      currentEval.should.equal(studentEvalId)
      done()
    })
  })
  
  it('getCurrentEvaluationStudentVisit', done => {
    should.doesNotThrow(() => {
      const studentEvalId = StoreHelper.getCurrentEvaluationStudentId()
      const currentVisit = StoreHelper.getCurrentEvaluationStudentVisit()
      currentVisit._id.should.equal(studentEvalId)
      done()
    })
  })

  it('getCurrentEvaluationStudentAssignmentData', done => {
    should.doesNotThrow(() => {
      const classList = mockData.classList
      const assignmentData = StoreHelper.getCurrentEvaluationStudentAssignmentData()
      assignmentData.should.not.be.empty()
      assignmentData.should.equal(classList[0].activityData.assignmentData)
      done()
    })
  })
  
  it('studentSubmitsAssignment', async done => {
    should.doesNotThrow(async () => {
      const submit = !mockData.activityData.submitted
      const mockedResult = {
        submitted: submit
      }
      await axiosMockHelper.prepareAxiosResponse('put', mockedResult)
      const result = await StoreHelper.studentSubmitsAssignment(submit)
      result.submitted.should.equal(submit)
      done()
    })  
  })  
  
  it('sendAssignmentDataUpdate', async done => {
    should.doesNotThrow(async () => {
      const payload = {
        propertyName: 'progressNotes',
        value: true
      }
      await axiosMockHelper.prepareAxiosResponse('put', payload)
      const result = await StoreHelper.sendAssignmentDataUpdate(payload)
      result.should.equal(payload)
      done()
    })
  })

  it('getClassListForActivity', async done => {
    should.doesNotThrow(async () => {
      const activityId = mockData.activity._id
      const mockResult =  { classList: mockData.classList }
      await axiosMockHelper.prepareAxiosResponse('get', mockResult)
      const result = await StoreHelper.getClassListForActivity(activityId)
      result.should.be.equal(mockResult.classList)
      done()
    })
  })

  it('dispatchLoadClassList', async done => {
    should.doesNotThrow(async () => {
      const classList = { classList: mockData.classList }
      await axiosMockHelper.prepareAxiosResponse('get', classList)
      const load = await StoreHelper.dispatchLoadClassList(classList)
      load.should.not.be.empty()
      load.length.should.equal(classList.classList.length)
      done()
    })
  })

  it('instructorReturnsAssignment', async done => {
    should.doesNotThrow(async () => {
      const submit = false
      const mockedResult = {
        submitted: submit
      }  
      await axiosMockHelper.prepareAxiosResponse('put', mockedResult)
      const result = await StoreHelper.instructorReturnsAssignment()
      result.submitted.should.equal(false)
      done()
    })
  })

  it('instructorMarksWorkEvaluated', async done => {
    should.doesNotThrow(async () => {
      const evaluated = true
      const mockedResult = {
        evaluated
      }  
      await axiosMockHelper.prepareAxiosResponse('put', mockedResult)
      const result = await StoreHelper.instructorMarksWorkEvaluated(evaluated)
      result.evaluated.should.equal(evaluated)
      done()
    })
  })


  it('changeStudentForInstructor', async done => {
    should.doesNotThrow(async () => {
      const _id = 'currentEvaluationStudentId2'
      const found = mockData.classList.find(c => c._id === _id)
      const classes = mockData.classList
      testHelper.instructorCommit(classes, 'setClassList')
      const usedActivity = StoreHelper.getActivityData()
      usedActivity.should.not.be.empty()
      testHelper.setActivityDataMocks(found.activityData)
      await axiosMockHelper.prepareAxiosResponse('get', { activitydata: found.activityData })
      await StoreHelper.changeStudentForInstructor(_id) 
      const result = StoreHelper.getActivityData()
      // const result = StoreHelper.getActivityData()
      result.should.equal(found.activityData)
      done()
    })
  })

  it('saveEvaluationNotes', async done => {
    should.doesNotThrow(async () => {
      const notes = 'Good job!'
      const r = { evalNotes : notes }
      await axiosMockHelper.prepareAxiosResponse('put', r)
      const result = await StoreHelper.saveEvaluationNotes(notes)
      result.should.equal(r)
      done()
    })
  })

})
describe('activity tests', () => {
  beforeEach(() => _beforeEach())
  it('getActivityId', done => {
    should.doesNotThrow(() => {
      const activityId = StoreHelper.getActivityId()
      activityId.should.equal(mockData.activity._id)
      done()
    })
  })

  it('getActivityTitle', done => {
    should.doesNotThrow(() => {
      const activityTitle = StoreHelper.getActivityTitle()
      activityTitle.should.equal(mockData.activity.resource_link_title)
      done()
    })
  })

  it('getActivityDescription', done => {
    should.doesNotThrow(() => {
      const description = StoreHelper.getActivityDescription()
      description.should.equal(mockData.activity.resource_link_description)
      done()
    })
  })

  it('getActivityIsClosed', done => {
    should.doesNotThrow(() => {
      const closed = StoreHelper.getActivityIsClosed()
      closed.should.equal(mockData.activity.closed)
      done()
    })
  })

  it('getActivityClosedDate', done => {
    should.doesNotThrow(() => {
      const closedDate = StoreHelper.getActivityClosedDate()
      closedDate.should.equal(mockData.activity.closedDate)
      done()
    })
  })

  it('activitiesUsingAssignmentCount', done => {
    should.doesNotThrow(() => {
      testHelper.instructorCommit(mockData.courses, 'setCourses')
      const cnt = StoreHelper.activitiesUsingAssignmentCount('assignment1')
      cnt.should.be.greaterThan(0)
      done()
    })
  })

  it('dispatchLoadActivity', async done => {
    should.doesNotThrow(async () => {
      await axiosMockHelper.prepareAxiosResponse('get', { activity: mockData.activity })
      const result = await StoreHelper.dispatchLoadActivity(mockData.activity._id)
      result.should.equal(mockData.activity)
      done()
    })
  })

  it('loadAsCurrentActivity', async done => {
    should.doesNotThrow(async () => {
      await axiosMockHelper.prepareAxiosResponse('get', { activity: mockData.activity })
      const result = await StoreHelper.dispatchLoadActivity(mockData.activity._id)
      result.should.equal(mockData.activity)
      const currentActivityId = StoreHelper.getActivityId()
      currentActivityId.should.equal(mockData.activity._id)
      done()
    })
  })

  it('closeActivity', async done => {
    should.doesNotThrow(async () => {
      const closedActivity = Object.assign({}, mockData.activity, { closed: true })
      await axiosMockHelper.prepareAxiosResponse('put', { activity: closedActivity })
      const result = await StoreHelper.closeActivity(mockData.activity._id)
      result.activity.should.equal(closedActivity)
      result.activity.closed.should.equal(true)
      done()
    })
  })

  it('openActivity', async done => {
    should.doesNotThrow(async () => {
      const openedActivity = Object.assign({}, mockData.activity, { closed: false })
      await axiosMockHelper.prepareAxiosResponse('put', { activity: openedActivity })
      const result = await StoreHelper.openActivity(mockData.activity._id)
      should.doesNotThrow(async () => await StoreHelper.openActivity(mockData.activity._id))
      result.activity.should.equal(openedActivity)
      result.activity.closed.should.equal(false)
      done()
    })
  })

  it('getCourseList', done => {
    should.doesNotThrow(() => {
      const courseList = StoreHelper.getCourseList()
      courseList.should.equal(mockData.courses)
      done()
    })
  })
})

describe('assignment tests', () => {
  
  beforeEach(() => _beforeEach())

  it('getAssignmentId', done => {
    should.doesNotThrow(() => {
      const id = StoreHelper.getAssignmentId()
      id.should.equal(mockData.assignment._id)
      done()
    })
  })

  it('getAssignmentName', done => {
    should.doesNotThrow(() => {
      const name = StoreHelper.getAssignmentName()
      name.should.equal(mockData.assignment.name)
      done()
    })
  })

  it('getAssignmentDescription', done => {
    should.doesNotThrow(() => {
      const description = StoreHelper.getAssignmentDescription()
      description.should.equal(mockData.assignment.description)
      done()
    })
  })

  it('getAssignment', async done => {
    should.doesNotThrow(async () => {
      const assignment = mockData.assignment
      await axiosMockHelper.prepareAxiosResponse('get', { assignment })
      const result = await StoreHelper.getAssignment(mockData.assignment._id)
      result.should.equal(assignment)
      done()
    })
  })

  it('loadAssignment', async done => {
    should.doesNotThrow(async () => {
      const { assignment } = mockData
      await axiosMockHelper.prepareAxiosResponse('get', { assignment })
      const result = await StoreHelper.loadAssignment(assignment._id)
      result.should.equal(assignment)
      done()
    })
  })

  it('deleteAssignment', async done => {
    should.doesNotThrow(async () => {
      await axiosMockHelper.prepareAxiosResponse('delete',  {})
      const result = await StoreHelper.deleteAssignment(mockData.assignment._id)
      Object.keys(result).length.should.equal(0)
      done()
    })
  })

  it('loadAssignmentList', async done => {
    should.doesNotThrow(async () => {
      const { assignmentListing } = mockData
      await axiosMockHelper.prepareAxiosResponse('get', {assignments: assignmentListing})
      const assignmentList = await StoreHelper.loadAssignmentList(this)
      assignmentList.should.equal(assignmentListing)
      done()
    })
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
    should.doesNotThrow(() => {
      const list = StoreHelper.getAssignmentsList()
      list.should.not.be.empty()
      list.should.equal(mockData.assignmentListing)
      done()
    })
  })

  it('getAssignmentSeedId', done => {
    should.doesNotThrow(() => {
      const seedId = StoreHelper.getAssignmentSeedId()
      seedId.should.equal(mockData.assignment.seedDataId)
      done()
    })
  })

  it('getAssignmentCaseStudyData', done => {
    should.doesNotThrow(() => {
      const { assignment } = mockData
      const caseStudy = StoreHelper.getAssignmentCaseStudyData()
      caseStudy.name.should.equal(assignment.persona)
      caseStudy.profession.should.equal(assignment.profession)
      caseStudy.day.should.equal(assignment.day)
      caseStudy.time.should.equal(assignment.time)
      done()
    })
  })
})
describe('seed data tests', () => {
  beforeEach(() => _beforeEach())
  it('getSeedId', done => {
    should.doesNotThrow(() => {
      const { seedData } = mockData
      const result = StoreHelper.getSeedId()
      result.should.equal(seedData._id)
      done()
    })
  })

  it('getSeedDataList', done => {
    should.doesNotThrow(() => {
      const { seedDataList } = mockData
      const result = StoreHelper.getSeedDataList()
      JSON.stringify(result).should.equal(JSON.stringify(seedDataList))
      done()
    })
  })
})

describe('LMS/LTI consumers tests', () => {
  beforeEach(() => _beforeEach())
  it('getConsumersList', done => {
    should.doesNotThrow(() => {
      const list = StoreHelper.getConsumersList()
      list.should.equal(mockData.consumerListing)
      done()
    })
  })
  
  it('loadConsumersList', async done => {
    should.doesNotThrow(async () => {
      const { consumerListing } = mockData
      axiosMockHelper.prepareAxiosResponse('get', { consumers: consumerListing })
      const list = await StoreHelper.loadConsumerList()
      should.doesNotThrow(async () => await StoreHelper.loadConsumerList)
      list.should.equal(consumerListing)
      done()
    })
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
    should.doesNotThrow(async () => {
      await axiosMockHelper.prepareAxiosResponse('put', { consumer: updatedConsumer })
      await axiosMockHelper.prepareAxiosResponse('get', { consumers })
      const result = await StoreHelper.updateConsumer(updatedConsumer._id, updatedConsumer)
      result.includes(updatedConsumer).should.equal(true)
      done()
    })
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
    should.doesNotThrow(async () => {
      await axiosMockHelper.prepareAxiosResponse('put', { consumer })
      await axiosMockHelper.prepareAxiosResponse('get', { consumers })
      const result = await StoreHelper.createConsumer(consumer)
      result.includes(consumer).should.equal(true)
      done()
    })
  })
})

describe('Loading / restoring tests', () => {
  beforeEach(() => _beforeEach())
  it('getPanelData' , done => {
    should.doesNotThrow(() => {
      const panelData = StoreHelper.getPanelData()
      should.exist(panelData)
      Object.keys(panelData).length.should.be.greaterThan(0)
      done()
    })
  })

  it('clearSession', done => {
    should.doesNotThrow(async () => await StoreHelper.clearSession())
    should.not.exist(sessionStorage.getItem(sKeys.SEED_ID))
    should.not.exist(sessionStorage.getItem(sKeys.IS_READONLY_INSTRUCTOR))
    done()
  })


  it('loadVisitRecord', async done => {
    const visitId = mockData.visit._id
    const { visit } = mockData
    should.doesNotThrow(async () => {
      await axiosMockHelper.prepareAxiosResponse('get', { visit })
      await StoreHelper.loadVisitRecord(visitId)
      const result = StoreHelper._getVisitProperty('visitData')
      result.should.equal(visit)
      done()
    })
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
    should.doesNotThrow(async () => {
      const refreshToken = 'testRefreshToken'
      const token = 'authToken'
      await axiosMockHelper.prepareAxiosResponse('post', { token })
      const result = await StoreHelper.fetchAndStoreAuthToken(refreshToken)
      result.should.equal(token)
      done()
    })
  })

  it('fetchTokenData', async done => {
    should.doesNotThrow(async () => {
      await axiosMockHelper.prepareAxiosResponse('post', { authPayload: 'payload' })
      await StoreHelper.fetchTokenData('testToken')
      done()
    })

  })

  it('adminLogin (200 status)', async done => {
    should.doesNotThrow(async () => {
      const adminPassword = 'adminPassword'
      const token = 'adminToken'
      await axiosMockHelper.prepareAxiosResponse('post', { token }, 200)
      const adminToken = await StoreHelper.adminLogin(adminPassword)
      adminToken.should.equal(token)
      done()
    })
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
    should.doesNotThrow(async () => {
      const authPayload = 'payload'
      await axiosMockHelper.prepareAxiosResponse('post', { authPayload })
      await StoreHelper.fetchTokenData('testToken')
      const response = await StoreHelper.getAuthData()
      response.authPayload.should.equal(authPayload)
      done()
    })
  })

  it('getAuthToken', async done => {
    should.doesNotThrow(async () => {
      const token = 'authToken'
      const refreshToken = 'testRefreshToken'
      await axiosMockHelper.prepareAxiosResponse('post', { token })
      await StoreHelper.fetchAndStoreAuthToken(refreshToken)
      const result = StoreHelper.getAuthToken()
      result.should.equal(token)
      done()
    })
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
    should.doesNotThrow(async () => {
      await axiosMockHelper.createCompoundGetResponse()
      await StoreHelper.loadInstructorWithStudent(true)  
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
})

describe('Demonstration related', () => {
  beforeEach(() => _beforeEach())

  it('createDemoToolConsumer', async done => {
    should.doesNotThrow(async () => {
      const payload = { demoToken: 'demoToken' }
      await axiosMockHelper.prepareAxiosResponse('post', payload)
      const token = await StoreHelper.createDemoToolConsumer()
      token.should.equal(payload.demoToken)
      done()
    })
  })

  it('loadDemoData', async done => {
    should.doesNotThrow(async () => {
      const { demoData } = mockData
      await axiosMockHelper.prepareAxiosResponse('get', { demoData })
      const result = await StoreHelper.loadDemoData()
      JSON.stringify(result).should.equal(JSON.stringify(demoData))
      done()
    })
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
    should.doesNotThrow(async () => {
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
    should.doesNotThrow(async () => {
      await axiosMockHelper.prepareAxiosResponse('post', null)
      await StoreHelper.demoLogout()
      const demoToken = StoreHelper.getDemoToken()
      should.not.exist(demoToken)
      done()
    })
  })

})