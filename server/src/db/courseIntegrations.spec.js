const should = require('should')
const mongoose = require('mongoose')
import Helper from '../mcr/common/test-helper'
import CourseController from '../mcr/course/course-controller'
import ActivityController from '../mcr/activity/activity-controller'
import Activity from '../mcr/activity/activity'
import dbCreateMissingCourses from './courseIntegtrations'
const helper = new Helper()
const activityController = new ActivityController()
const courseController = new CourseController()
const lcc = {
  courseController: courseController,
}
activityController.setSharedControllers(lcc)


function* nextId (prefix) {
  let index = 1
  while(true) {
    let id = prefix + index
    index++
    yield id
  }
}
const generateCourseId = nextId('contextId')
const generateActivityId = nextId('actId')


/* global describe it */
describe('DB seeding updating tests....', function () {
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
  })
  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
  })

  let theConsumer

  it('Create a supporting objects for testing Activity ', async function () {
    theConsumer = await Helper.createSampleConsumer()
  })

  it('Create set of activities', async function () {
    let data
    let consumerId = theConsumer._id
    data = {
      toolConsumer: consumerId,
      course: undefined,
      assignment: undefined,
      context_label: 'test label',
      context_title: 'test title',
      context_type: 'test type'
    }
    const numC = 3
    const numA = 5
    const total = numC * numA
    for (let cCnt = 0; cCnt < numC; cCnt++) {
      data.context_id = generateCourseId.next().value
      for (let aCnt = 0; aCnt < numA; aCnt++) {
        data.resource_link_id = generateActivityId.next().value
        const doc = await activityController.create(data)
        should.exist(doc)
      }
    }
    let activities
    activities = await Activity.find({toolConsumer: consumerId})
    let prior = activities[0]
    should.exist(prior.context_label)
    should.exist(prior.context_title)
    should.exist(prior.context_type)
    activities = activities.filter( elem => !elem.course)
    // console.log('BEFORE withoutCourse count', activities.length)
    activities.length.should.equal(total)
    await dbCreateMissingCourses()
    activities = await Activity.find({toolConsumer: consumerId})
    let revised = activities[0]
    should.not.exist(revised.context_label)
    should.not.exist(revised.context_title)
    should.not.exist(revised.context_type)
    activities = activities.filter( elem => !elem.course)
    // console.log('AFTER withoutCourse count', activities.length)
    activities.length.should.equal(0)
  })
})
