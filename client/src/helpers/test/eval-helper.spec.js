const should = require('should')
import evalHelper from '../eval-helper'
import mockData from './mockData.json'
import { prepareAxiosResponse } from './axios-mock-helper'
import * as testHelper from './testHelper'
import StoreHelper from '../store-helper'

jest.mock('axios')

let router = {}
router.push = jest.fn()

const studentVisitId = 'currentEvaluationStudentId2'
const found = mockData.classList.find(c => c._id === studentVisitId)
const classes = mockData.classList
const { activityData, activity } = mockData

const _prepareChangeStudent = (submitted = true, activity = mockData.activity) => {
  let activitydata = Object.assign(
    {}, 
    activityData, 
    { submitted, evaluated: !mockData.activityData.evaluated }
  ) 
  testHelper.instructorCommit(classes, 'setClassList')
  testHelper.setActivityDataMocks(found.activityData)
  return prepareAxiosResponse('get', { activitydata, classList: mockData.classList, activity })
    .then(() => {
      return prepareAxiosResponse('put', activitydata)
    })
}

describe('Testing evalHelper', () => {
  it('changeStudent', async done => {
    _prepareChangeStudent()
    const found = mockData.classList.find(c => c._id === studentVisitId)
    should.doesNotThrow(async () => await evalHelper.changeStudent(studentVisitId))
    const result = StoreHelper.getActivityData()
    // const result = StoreHelper.getActivityData()
    result.should.equal(found.activityData)
    done()
  })

  it('forceSubmit', async done => {
    await _prepareChangeStudent()
    should.doesNotThrow(async () => {
      const list = await evalHelper.forceSubmit(studentVisitId)
      should.exist(list)
      list.length.should.be.greaterThan(0)
      list.length.should.equal(mockData.classList.length)
      list.should.equal(mockData.classList)
      done()
    })
  })

  it('unsubmit', async done => {
    await _prepareChangeStudent(false)
    const result = await evalHelper.unsubmit(studentVisitId)
    should.exist(result)
    result.length.should.be.greaterThan(0)
    result.should.equal(classes)
    const activityData = StoreHelper.getActivityData()
    activityData.submitted.should.equal(false)
    done()
  })

  it('markEvaluated', async done => {
    await _prepareChangeStudent()
    const studentVisit = Object.assign({}, {activityData: mockData.activityData}, { _id: studentVisitId })
    should.doesNotThrow(async () => {
      const result = await evalHelper.markEvaluated(studentVisit)
      result.length.should.be.greaterThan(0)
      result.should.equal(classes)
      const activityData = StoreHelper.getActivityData()
      activityData.evaluated.should.equal(!mockData.activityData.evaluated)
      done()
    })
  })

  it('closeActivity', async done => {
    const ac = Object.assign({}, activity, { closed: true })
    await _prepareChangeStudent(false, ac)
    const result = await evalHelper.closeActivity(activity._id)
    result.should.be.equal(ac)
    result.closed.should.be.equal(true)
    done()
  })


  it('openActivity', async done => {
    const ac = Object.assign({}, activity, { closed: false })
    await _prepareChangeStudent(false, ac)
    const result = await evalHelper.openActivity(activity._id)
    result.should.be.equal(ac)
    result.closed.should.be.equal(false)
    done()
  })

  it('goToEhr', async done => {
    await evalHelper.goToEhr(studentVisitId, router)
    // This is following jest's function mocking 
    // (https://jestjs.io/docs/en/mock-function-api.html#mockfnmockcalls). 
    // This mock makes sure that the router.push function was 
    // called only once and that it redirects properly (by asserting the ehr link)...
    const [call] = router.push.mock.calls
    const isDev = StoreHelper.isDevelopingContent()
    call.length.should.equal(1)
    call[0].should.equal('/ehr/patient/demographics')
    isDev.should.equal(false)
    done()

  })

  

})