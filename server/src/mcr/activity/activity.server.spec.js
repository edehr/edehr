import ActivityController from './activity-controller'

const should = require('should')
const mongoose = require('mongoose')
import Helper from '../common/test-helper'
const helper = new Helper()
import Activity from './activity'
import CourseController from '../course/course-controller'
const activityController = new ActivityController()
const crs = new CourseController()
const lcc = {
  courseController: crs,
}
activityController.setSharedControllers(lcc)

/* global describe it */
describe('Activity mongoose schema testing', function () {
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
  })

  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done())
  })

  it('ActivityController property check', function () {
    activityController.should.have.property('updateCreateActivity')
    activityController.should.have.property('listClassList')
    activityController.should.have.property('findActivity')
  })

  // setup up for remaining tests
  let theConsumer
  let theAssignment
  let theCourse
  let theData

  it('Create a supporting objects for testing Activity ', async function () {
    theConsumer = await Helper.createSampleConsumer()
    theAssignment = await Helper.createAssignment(theConsumer._id)
    theCourse = await Helper.createSampleCourse(theConsumer._id)
    theData = Helper.sampleActivity(theConsumer, theCourse, theAssignment)
  })

  it('check data consistency', () => {
    // check the objects agree as to the tool consumer
    const tc = theData.toolConsumer
    theData.should.have.property('assignment')
    const as = theData.assignment
    as.should.have.property('toolConsumer')
    const tas = as.toolConsumer
    tc.should.equal(tas)
  })

  it('Activity is not valid when params are empty', function (done) {
    let m = new Activity()
    m.validate(function (err) {
      // debug('Expect error: ', err)
      should.exist(err)
      done()
    })
  })

  it('Activity can save one', async () => {
    const newA = new Activity(theData)
    const doc = await newA.save()
    should.exist(doc)
    doc.should.have.property('toolConsumer')
    doc.should.have.property('assignment')
  })

  it('Activity can find one using query for resourceLinkId on the Activity class', async function () {
    let key = theData.resource_link_id
    let doc = await Activity.findOne({ resource_link_id: key })
    should.exist(doc)
  })

  let theActivity
  it('ActivityController create model', async function () {
    should.exist(theCourse, 'theCourse should exist by now')
    let data = Helper.sampleActivity(theConsumer, theCourse, theAssignment)
    const doc = await activityController.create(data)
    should.exist(doc)
    theActivity = doc
  })

  it('ActivityController use findActivity', async function () {
    const doc = await activityController.findActivity(theActivity._id)
    should.exist(doc)
    doc.should.have.property('activity')
    const activity = doc.activity
    activity.should.have.property('assignment')
    activity.should.have.property('course')
  })

  it('Use findActivityByLti ', async () => {
    const doc = await activityController.findActivityByLti(theActivity.resource_link_id, theActivity.toolConsumer)
    should.exist(doc)
  })

  it('ActivityController findActivity with id that doesn\'t exist', async () => {
    // use an id from the wrong type of object to cause a fail
    const doc = await activityController.findActivity(theConsumer._id)
    should.exist(doc)
    doc.should.have.property('activity')
    should.not.exist(doc.activity)
  })

  it('ActivityController use findActivity', async () => {
    const doc = await activityController.findActivity(theActivity._id)
    should.exist(doc)
    doc.should.have.property('activity')
    const activity = doc.activity
    activity.should.have.property('assignment')
    activity.should.have.property('course')
  })

  it('ActivityController test updateHelper', async () => {
    const updated = await activityController._updateHelper(theActivity, { resource_link_title: 'newTitle' })
    should.exist(updated, 'test update helper should return activity')
    updated.should.have.property('resource_link_title')
    updated.resource_link_title.should.equal('newTitle')
  })

  it('ActivityController test updateCreateActivity', async () => {
    const lT = (new Date(theActivity.lastDate).getTime() )
    const activity = await activityController.updateCreateActivity(theData, theConsumer._id)
    const nT = (new Date(activity.lastDate).getTime() )
    nT.should.be.greaterThan(lT)
  })

  it.skip('ActivityController test updateCreateActivity and change demo title', async () => {
    const newData = Object.assign({}, theData)
    newData.resource_link_id = 'someNewID'
    newData.resource_link_title = 'LOA-something'
    const activity = await activityController.updateCreateActivity(newData, theConsumer._id)
    should.exist(activity)
    activity.resource_link_title.should.equal('AC-something')
  })

})
describe.skip('more tests TO DO!', () => {
  it('ActivityController test closeOpenActivity', () =>{
    const results = undefined
    should.exist(results, 'test closeOpenActivity')
  })

  it('ActivityController test listClassList', () =>{
    const results = undefined
    should.exist(results, 'test listClassList')
  })

})
