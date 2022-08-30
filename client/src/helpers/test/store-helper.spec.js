/**
 * @jest-environment jsdom
 */
import should from 'should'
import StoreHelper from '../store-helper'
import * as testHelper from './testHelper'
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
  testHelper.commonBeforeEach()
}

// clear
describe('General testing', () => {
  
  beforeEach(() => _beforeEach())

  it('getMergedPageData', done => {
    should.doesNotThrow(() => {
      const asLoaded = StoreHelper.getMergedPageData(pageKey)
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
      should.exist(tc)
      tc.should.be.type('string')
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

  it('getApiURL', done => {
    should.doesNotThrow(() => {
      // process.env.VUE_APP_ROOT_API = 'some url'
      // const APIUrl = process.env.VUE_APP_ROOT_API // mockData.apiUrl
      const storeApiUrl = StoreHelper.apiUrlGet()
      should.exist(storeApiUrl)
      // storeApiUrl.should.equal(APIUrl)
      done()
    })
  })

  /*
    The read only mode has been temporarily removed
   */
  it.skip('setIsReadOnlyInstructor', done => {
    should.doesNotThrow(() => StoreHelper.setIsReadOnlyInstructor(true))
    done()
  })

  it.skip('isReadOnlyInstructor', done => {
    should.doesNotThrow(() => {
      const isReadOnlyInstructor = StoreHelper.isReadOnlyInstructor()
      const isTruthy = testHelper.isTruthy(isReadOnlyInstructor)
      should.exist(isReadOnlyInstructor)
      should.exist(isTruthy)
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
      should.exist(isTruthy)
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
      should.exist(result)
      result.should.equal(isLoading)
      done()
    })
  })

  it('setApiError', done => {
    should.doesNotThrow(() => {
      const message = 'test error message'
      StoreHelper.setApiError(message)
      const apiError = StoreHelper._getSystemProperty('apiError')
      should.exist(apiError)
      apiError.should.equal(message)
      done()
    })
  })

  it('setSystemMessage', done => {
    should.doesNotThrow(() => {
      const message = 'test system message'
      StoreHelper.setSystemMessage(message)
      const systemMessage = StoreHelper._getSystemProperty('sysMessage')
      should.exist(systemMessage)
      systemMessage.should.equal(message)
      done()
    })
  })
})

// clear
describe('classList / instructor tests', () => {

  beforeEach(() => _beforeEach())

  it('getClassList', done => {
    should.doesNotThrow(() => {
      const classes = mockData.classList
      testHelper.instructorCommit(classes, 'setClassList')
      const classList = StoreHelper.getClassList()
      should.doesNotThrow(() => StoreHelper.getClassList())
      should.exist(classList)
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
      should.exist(currentVisit)
      currentVisit._id.should.equal(studentEvalId)
      done()
    })
  })

  it('getCurrentEvaluationStudentAssignmentData', done => {
    should.doesNotThrow(() => {
      const classList = mockData.classList
      const assignmentData = StoreHelper.getCurrentEvaluationStudentAssignmentData()
      should.exist(assignmentData)
      assignmentData.should.not.be.empty()
      assignmentData.should.equal(classList[0].activityData.assignmentData)
      done()
    })
  })
  
  it('studentSubmitsAssignment', async () => {
    should.doesNotThrow(async () => {
      const submit = !mockData.activityData.submitted
      const mockedResult = {
        submitted: submit
      }
      await axiosMockHelper.prepareAxiosResponse('put', mockedResult)
      const result = await StoreHelper.studentSubmitsAssignment(submit)
      should.exist(result)
      should.exist(result[0])
      should.exist(result[0].submitted)
      result[0].submitted.should.equal(submit)
    })
  })

  it('sendAssignmentDataUpdate', async () => {
    should.doesNotThrow(async () => {
      const payload = {
        propertyName: 'progressNotes',
        value: true
      }
      await axiosMockHelper.prepareAxiosResponse('put', payload)
      const result = await StoreHelper.sendAssignmentDataUpdate(payload)
      should.exist(result)
      result.should.equal(payload)
    })
  })

  it('getClassListForActivity', async () => {
    should.doesNotThrow(async () => {
      const activityId = mockData.activity._id
      const mockResult =  { classList: mockData.classList }
      await axiosMockHelper.prepareAxiosResponse('get', mockResult)
      const result = await StoreHelper.getClassListForActivity(activityId)
      should.exist(result)
      result.should.be.equal(mockResult.classList)
    })
  })

  it('dispatchLoadClassList', async () => {
    should.doesNotThrow(async () => {
      const classList = { classList: mockData.classList }
      await axiosMockHelper.prepareAxiosResponse('get', classList)
      const load = await StoreHelper.dispatchLoadClassList(classList)
      should.exist(load)
      load.should.not.be.empty()
      load.length.should.equal(classList.classList.length)
    })
  })

  it('instructorReturnsAssignment', async () => {
    should.doesNotThrow(async () => {
      const submit = false
      const mockedResult = {
        submitted: submit
      }
      await axiosMockHelper.prepareAxiosResponse('put', mockedResult)
      const result = await StoreHelper.instructorReturnsAssignment()
      should.exist(result)
      should.exist(result[0])
      should.exist(result[0].submitted)
      result[0].submitted.should.equal(false)
    })
  })

  it('instructorMarksWorkEvaluated', async () => {
    should.doesNotThrow(async () => {
      const evaluated = true
      const mockedResult = {
        evaluated
      }
      await axiosMockHelper.prepareAxiosResponse('put', mockedResult)
      const result = await StoreHelper.instructorMarksWorkEvaluated(evaluated)
      should.exist(result)
      should.exist(result.evaluated)
      result.evaluated.should.equal(evaluated)
    })
  })

  it('changeStudentForInstructor', async () => {
    should.doesNotThrow(async () => {
      const _id = 'currentEvaluationStudentId2'
      const found = mockData.classList.find(c => c._id === _id)
      const classes = mockData.classList
      testHelper.instructorCommit(classes, 'setClassList')
      const usedActivity = StoreHelper.getActivityData()
      should.exist(usedActivity)
      usedActivity.should.not.be.empty()
      testHelper.setActivityDataMocks(found.activityData)
      await axiosMockHelper.prepareAxiosResponse('get', { activitydata: found.activityData })
      await StoreHelper.changeStudentForInstructor(_id) 
      const result = StoreHelper.getActivityData()
      // const result = StoreHelper.getActivityData()
      should.exist(result)
      result.should.equal(found.activityData)
    })
  })

  it('saveEvaluationNotes', async () => {
    should.doesNotThrow(async () => {
      const notes = 'Good job!'
      const r = { evalNotes : notes }
      await axiosMockHelper.prepareAxiosResponse('put', r)
      const result = await StoreHelper.saveEvaluationNotes(notes)
      should.exist(result)
      result.should.equal(r)
    })
  })

})

// clear
describe('activity tests', () => {
  beforeEach(() => _beforeEach())
  it('getActivityId', done => {
    should.doesNotThrow(() => {
      const activityId = StoreHelper.getActivityId()
      should.exist(activityId)
      activityId.should.equal(mockData.activity._id)
      done()
    })
  })

  it('getActivityTitle', done => {
    should.doesNotThrow(() => {
      const activityTitle = StoreHelper.getActivityTitle()
      should.exist(activityTitle)
      activityTitle.should.equal(mockData.activity.resource_link_title)
      done()
    })
  })

  it('getActivityDescription', done => {
    should.doesNotThrow(() => {
      const description = StoreHelper.getActivityDescription()
      should.exist(description)
      description.should.equal(mockData.activity.resource_link_description)
      done()
    })
  })

  it('getActivityIsClosed', done => {
    should.doesNotThrow(() => {
      const closed = StoreHelper.getActivityIsClosed()
      should.exist(closed)
      closed.should.equal(mockData.activity.closed)
      done()
    })
  })

  it('getActivityClosedDate', done => {
    should.doesNotThrow(() => {
      const closedDate = StoreHelper.getActivityClosedDate()
      should.exist(closedDate)
      closedDate.should.equal(mockData.activity.closedDate)
      done()
    })
  })

  it('activitiesUsingAssignmentCount', done => {
    should.doesNotThrow(() => {
      testHelper.instructorCommit(mockData.courses, 'setCourses')
      const cnt = StoreHelper.activitiesUsingAssignmentCount('assignment1')
      should.exist(cnt)
      cnt.should.be.greaterThan(0)
      done()
    })
  })

  it('dispatchLoadActivity', async () => {
    should.doesNotThrow(async () => {
      await axiosMockHelper.prepareAxiosResponse('get', { activity: mockData.activity })
      const result = await StoreHelper.dispatchLoadActivity(mockData.activity._id)
      should.exist(result)
      result.should.equal(mockData.activity)
    })
  })

  it('loadAsCurrentActivity', async () => {
    should.doesNotThrow(async () => {
      await axiosMockHelper.prepareAxiosResponse('get', { activity: mockData.activity })
      const result = await StoreHelper.dispatchLoadActivity(mockData.activity._id)
      should.exist(result)
      result.should.equal(mockData.activity)
      const currentActivityId = StoreHelper.getActivityId()
      should.exist(currentActivityId)
      currentActivityId.should.equal(mockData.activity._id)
    })
  })

  it('closeActivity', async () => {
    should.doesNotThrow(async () => {
      const closedActivity = Object.assign({}, mockData.activity, { closed: true })
      await axiosMockHelper.prepareAxiosResponse('put', { activity: closedActivity })
      const result = await StoreHelper.closeActivity(mockData.activity._id)
      should.exist(result)
      should.exist(result.activity)
      result.activity.should.equal(closedActivity)
      should.exist(result.activity.closed)
      result.activity.closed.should.equal(true)
    })
  })

  it('openActivity', async () => {
    should.doesNotThrow(async () => {
      const openedActivity = Object.assign({}, mockData.activity, { closed: false })
      await axiosMockHelper.prepareAxiosResponse('put', { activity: openedActivity })
      const result = await StoreHelper.openActivity(mockData.activity._id)
      should.exist(result)
      should.doesNotThrow(async () => await StoreHelper.openActivity(mockData.activity._id))
      should.exist(result.activity)
      result.activity.should.equal(openedActivity)
      should.exist(result.activity.closed)
      result.activity.closed.should.equal(false)
    })
  })

  it('getCourseList', done => {
    should.doesNotThrow(() => {
      const courseList = StoreHelper.getCourseList()
      should.exist(courseList)
      courseList.should.equal(mockData.courses)
      done()
    })
  })
})

// clear
describe('assignment tests', () => {
  
  beforeEach(() => _beforeEach())

  it('getAssignmentId', done => {
    should.doesNotThrow(() => {
      const id = StoreHelper.getAssignmentId()
      should.exist(id)
      id.should.equal(mockData.assignment._id)
      done()
    })
  })

  it('getAssignment', async () => {
    should.doesNotThrow(async () => {
      const assignment = mockData.assignment
      await axiosMockHelper.prepareAxiosResponse('get', { assignment })
      const result = await StoreHelper.getAssignment(mockData.assignment._id)
      should.exist(result)
      result.should.equal(assignment)
    })
  })

  it('loadAssignment', async () => {
    should.doesNotThrow(async () => {
      const { assignment } = mockData
      await axiosMockHelper.prepareAxiosResponse('get', { assignment })
      const result = await StoreHelper.loadAssignment(assignment._id)
      should.exist(result)
      result.should.equal(assignment)
    })
  })

  it('deleteAssignment', async () => {
    should.doesNotThrow(async () => {
      await axiosMockHelper.prepareAxiosResponse('delete',  {})
      const result = await StoreHelper.deleteAssignment(mockData.assignment._id)
      should.exist(result)
      Object.keys(result).length.should.equal(0)
    })
  })

  it('loadAssignmentList', async () => {
    should.doesNotThrow(async () => {
      const { assignmentListing } = mockData
      await axiosMockHelper.prepareAxiosResponse('get', {assignments: assignmentListing})
      const assignmentList = await StoreHelper.loadAssignmentList(this)
      should.exist(assignmentList)
      assignmentList.should.equal(assignmentListing)
    })
  })

  it('updateAssignment', async () => {
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
      should.exist(result)
      result.includes(updatedAssignment).should.equal(true)
    })
  })

  it('createAssignment', async () => {
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
      should.exist(result)
      result.should.equal(assignments)
      result.length.should.be.greaterThan(mockData.assignmentListing.length)
    })
  })

  it('getAssignmentsList', done => {
    should.doesNotThrow(() => {
      const list = StoreHelper.getAssignmentsList()
      should.exist(list)
      list.should.not.be.empty()
      list.should.equal(mockData.assignmentListing)
      done()
    })
  })

  it('getAssignmentSeedId', done => {
    should.doesNotThrow(() => {
      const seedId = StoreHelper.getAssignmentSeedId()
      should.exist(seedId)
      seedId.should.equal(mockData.assignment.seedDataId)
      done()
    })
  })


})

// clear
describe('seed data tests', () => {
  beforeEach(() => _beforeEach())
  it('getSeedId', done => {
    should.doesNotThrow(() => {
      const { seedData } = mockData
      const result = StoreHelper.getSeedId()
      should.exist(result)
      result.should.equal(seedData._id)
      done()
    })
  })

  it('getSeedDataList', done => {
    should.doesNotThrow(() => {
      const { seedDataList } = mockData
      const result = StoreHelper.getSeedDataList()
      should.exist(result)
      JSON.stringify(result).should.equal(JSON.stringify(seedDataList))
      done()
    })
  })
})

// clear
describe('LMS/LTI consumers tests', () => {
  beforeEach(() => _beforeEach())
  it('getConsumersList', done => {
    should.doesNotThrow(() => {
      const list = StoreHelper.getConsumersList()
      should.exist(list)
      list.should.equal(mockData.consumerListing)
      done()
    })
  })
  
  it('loadConsumersList', async () => {
    should.doesNotThrow(async () => {
      const { consumerListing } = mockData
      axiosMockHelper.prepareAxiosResponse('get', { consumers: consumerListing })
      const list = await StoreHelper.loadConsumerList()
      should.exist(list)
      should.doesNotThrow(async () => await StoreHelper.loadConsumerList)
      list.should.equal(consumerListing)
    })
  })

  it('updateConsumer', async () => {
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
      should.exist(result)
      result.includes(updatedConsumer).should.equal(true)
    })
  })

  it('createConsumer', async () => {
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
      should.exist(result)
      result.includes(consumer).should.equal(true)
    })
  })
})

// clear
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

  it('loadVisitRecord', async () => {
    const visitId = mockData.visit._id
    const { visit } = mockData
    should.doesNotThrow(async () => {
      await axiosMockHelper.prepareAxiosResponse('get', { visit })
      await StoreHelper.loadVisitRecord(visitId)
      const result = StoreHelper._getVisitProperty('visitData')
      should.exist(result)
      result.should.equal(visit)
    })
  })

})

// clear
describe('auth/admin tests', () => {

  beforeEach(() => _beforeEach())

  it('fetchAndStoreAuthToken', async () => {
    should.doesNotThrow(async () => {
      const refreshToken = 'testRefreshToken'
      const token = 'authToken'
      await axiosMockHelper.prepareAxiosResponse('post', {token})
      const result = await StoreHelper.fetchAndStoreAuthToken(refreshToken)
      should.exist(result)
      result.should.equal(token)
    })
  })

  it('fetchTokenData', async () => {
    should.doesNotThrow(async () => {
      await axiosMockHelper.prepareAxiosResponse('post', {authPayload: 'payload'})
      await StoreHelper.fetchTokenData('testToken')
    })
  })

  it('adminLogin (200 status)', async () => {
    should.doesNotThrow(async () => {
      const adminPassword = 'adminPassword'
      const token = 'start.' + btoa(JSON.stringify({isAdmin: true})) + '.end'
      await axiosMockHelper.prepareAxiosResponse('post', {token}, 200)
      const adminToken = await StoreHelper.adminLogin(adminPassword)
      should.exist(adminToken)
      adminToken.should.equal(token)
    })
  })

  it('adminLogin (201 status)', async () => {
    const adminPassword = 'adminPassword'
    const token = 'start.'+ btoa(JSON.stringify({isAdmin: true})) + '.end'
    await axiosMockHelper.prepareAxiosResponse('post', { token }, 201)
    StoreHelper.adminLogin(adminPassword)
      .catch(err => {
        err.should.equal('The token has been created. Please, contact an administrator to get it.')
      })
  })

  it('adminValidate', async () => {
    should.doesNotThrow(async () => {
      const token = 'start.'+ btoa(JSON.stringify({isAdmin: true})) + '.end'
      await axiosMockHelper.prepareAxiosResponse('post', { isAdmin: true })
      const result = await StoreHelper.adminValidate(token)
      should.exist(result)
      should.exist(result.isAdmin)
      result.isAdmin.should.equal(true)
    })
  })

  it('getAuthData', async () => {
    should.doesNotThrow(async () => {
      const authPayload = 'payload'
      await axiosMockHelper.prepareAxiosResponse('post', { authPayload })
      await StoreHelper.fetchTokenData('testToken')
      const response = await StoreHelper.getAuthData()
      should.exist(response)
      response.authPayload.should.equal(authPayload)
    })
  })

  it('getAuthToken', async () => {
    should.doesNotThrow(async () => {
      const token = 'authToken'
      const refreshToken = 'testRefreshToken'
      await axiosMockHelper.prepareAxiosResponse('post', { token })
      await StoreHelper.fetchAndStoreAuthToken(refreshToken)
      const result = StoreHelper.getAuthToken()
      should.exist(result)
      result.should.equal(token)
    })
  })

  it('logUserOutOfEdEHR', async () => {
    await StoreHelper.logUserOutOfEdEHR()
    const visitData = StoreHelper._getVisitProperty('visitData')
    should.exist(visitData)
    Object.keys(visitData).length.should.equal(0)
  })
})

describe.skip('Compound loading function tests', () => {
  beforeEach(() => _beforeEach())

  it('loadAssignmentAndSeedLists', async () => {
    await axiosMockHelper.createCompoundGetResponse()
    should.doesNotThrow(async () => {
      await StoreHelper.loadAssignmentAndSeedLists()
      const assignments = StoreHelper.getAssignmentsList()
      const seedData = StoreHelper.getSeedDataList()
      should.exist(assignments)
      should.exist(seedData)
      assignments.should.equal(mockData.assignmentListing)
      JSON.stringify(seedData).should.equal(JSON.stringify(mockData.seedDataList))
    })
  })

  it('loadCommon', async () => {
    await axiosMockHelper.createCompoundGetResponse()
    should.doesNotThrow(async () => {
      await StoreHelper.loadCommon()
      const activityId = StoreHelper.getActivityId()
      const assignments = StoreHelper.getAssignmentsList()
      const consumer = StoreHelper._getConsumerProperty('consumer')
      const user = StoreHelper._getUserProperty('user')
      const seedData = StoreHelper.getSeedDataList()
      should.exist(activityId)
      should.exist(assignments)
      should.exist(consumer)
      should.exist(user)
      activityId.should.equal(mockData.activity._id)
      assignments.should.equal(mockData.assignmentListing)
      consumer.should.equal(mockData.consumer)
      user.should.equal(mockData.user)
      JSON.stringify(seedData).should.equal(JSON.stringify(mockData.seedDataList))
    })
  })

  it('loadStudent2', async () => {
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
      should.exist(activityId,'a')
      should.exist(activityData,'b')
      should.exist(assignment,'c')
      should.exist(assignments,'d')
      should.exist(consumer,'e')
      should.exist(user,'u')
      activityId.should.equal(mockData.activity._id)
      activityData.should.equal(mockData.activityData)
      assignment.should.equal(mockData.assignment)
      assignments.should.equal(mockData.assignmentListing)
      consumer.should.equal(mockData.consumer)
      user.should.equal(mockData.user)
      JSON.stringify(seedData).should.equal(JSON.stringify(mockData.seedDataList))
    })
  })

  // todo unskip --- some problem getting the assignment store
  it.skip('loadInstructor2', async () => {
    await axiosMockHelper.createCompoundGetResponse()
    should.doesNotThrow(async () => {
      await StoreHelper.loadInstructor2()
      const activityId = StoreHelper.getActivityId()
      const assignments = StoreHelper.getAssignmentsList()
      const consumer = StoreHelper._getConsumerProperty('consumer')
      const courses = testHelper.dispatchGetter('instructor/sCourses')
      const user = StoreHelper._getUserProperty('user')
      const seedData = StoreHelper.getSeedDataList()
      should.exist(activityId)
      should.exist(assignments)
      should.exist(consumer)
      should.exist(courses)
      should.exist(user)
      activityId.should.equal(mockData.activity._id)
      assignments.should.equal(mockData.assignmentListing)
      consumer.should.equal(mockData.consumer)
      courses.should.equal(mockData.courses)
      user.should.equal(mockData.user)
      JSON.stringify(seedData).should.equal(JSON.stringify(mockData.seedDataList))
    })
  })

  it.skip('loadInstructorWithStudent', async () => {
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
      should.exist(activityId)
      should.exist(assignment)
      should.exist(assignments)
      should.exist(consumer)
      should.exist(activityData)
      should.exist(user)
      activityId.should.equal(mockData.activity._id)
      activityData.should.equal(mockData.activityData)
      assignment.should.equal(mockData.assignment)
      assignments.should.equal(mockData.assignmentListing)
      consumer.should.equal(mockData.consumer)
      user.should.equal(mockData.user)
      JSON.stringify(seedData).should.equal(JSON.stringify(mockData.seedDataList))
    })
  })
})

describe.skip('Demonstration related', () => {
  beforeEach(() => _beforeEach())

  it('createDemoToolConsumer', async () => {
    should.doesNotThrow(async () => {
      const payload = { demoToken: 'demoToken' }
      await axiosMockHelper.prepareAxiosResponse('post', payload)
      const token = await StoreHelper.createDemoToolConsumer()
      should.exist(token)
      token.should.equal(payload.demoToken)
    })
  })

  it('loadDemoData', async () => {
    should.doesNotThrow(async () => {
      const { demoData } = mockData
      await axiosMockHelper.prepareAxiosResponse('get', { demoData })
      const result = await StoreHelper.loadDemoData()
      should.exist(result)
      JSON.stringify(result).should.equal(JSON.stringify(demoData))
    })
  })

  it.skip('getDemoToken', done => {
    const demoToken = 'demoToken'
    const token = StoreHelper.getDemoToken()
    should.exist(token)
    token.should.equal(demoToken)
    done()
  })

  it.skip('setDemoPersona', done => {
    const persona = mockData.demoData.personaList[0]
    should.doesNotThrow(() => StoreHelper.setDemoPersona(persona))
    done()
  })

  it.skip('getDemoPersona', done => {
    const persona = mockData.demoData.personaList[0]
    const result = StoreHelper.getDemoPersona()
    should.exist(result)
    result.should.equal(persona)
    done()
  })

  it.skip('getDemoTokenData', done => {
    const data = StoreHelper.getDemoTokenData()
    should.exist(data)
    data.should.equal(mockData.demoData)
    done()
  })

  // Todo  unskip
  it.skip('isDemoMode', done => {
    const isDemo = StoreHelper.isDemoMode()
    should.exist(isDemo)
    isDemo.should.equal(true)
    done()
  })

  it.skip('setDemoToken', done => {
    const demoToken = 'newDemoToken'
    should.doesNotThrow(() => StoreHelper.setDemoToken(demoToken))
    const token = StoreHelper.getDemoToken()
    should.exist(token)
    token.should.equal(demoToken)
    done()
  })

  it.skip('setDemoAssignment', done => {
    const assignment = mockData.assignment
    StoreHelper.setDemoAssignment(assignment)
    const result = testHelper.dispatchGetter('demoStore/demoAssignment')
    should.exist(assignment)
    assignment.should.equal(result)
    done()
  })

  it.skip('submitPersona', async () => {
    should.doesNotThrow(async () => {
      const persona = mockData.demoData.personaList[0]
      const { assignment, demoData } = mockData
      const submitData = {
        resource_link_title: assignment.name,
        externalId: assignment.externalId,
        personaName: persona.name,
        personaEmail: persona.email,
        personaRole: persona.role,
        returnUrl: 'returnUrl',
        toolKey: demoData.toolConsumerKey
      }
      await axiosMockHelper.prepareAxiosResponse('post', { triggered: true })
      const result = await StoreHelper.submitPersona(submitData)
      should.exist(result)
      result.triggered.should.equal(true)
    })
  })

  it.skip('submitAcceptsTerms', done => {
    should.doesNotThrow(() => StoreHelper.submitAcceptsTerms(true))
    done()
  })

  it.skip('getDemoAcceptTerms', done => {
    const accept = StoreHelper.getDemoAcceptTerms()
    should.exist(accept)
    accept.should.equal(true)
    done()
  })

  it.skip('setDemoFeatureFlag', done => {
    should.doesNotThrow(() => StoreHelper.setDemoFeatureFlag(true))
    done()
  })

  it.skip('getDemoFeatureFlag', done => {
    const flag = StoreHelper.getDemoFeatureFlag()
    should.exist(flag)
    flag.should.equal(true)
    done()
  })

  it.skip('demoLogout', async () => {
    should.doesNotThrow(async () => {
      await axiosMockHelper.prepareAxiosResponse('post', null)
      await StoreHelper.demoLogout()
      const demoToken = StoreHelper.getDemoToken()
      should.not.exist(demoToken)
    })
  })

})
