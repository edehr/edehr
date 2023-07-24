const should = require('should')
const mongoose = require('mongoose')
import Helper from '../common/test-helper'
const helper = new Helper()
import Course from './course'
import CourseController from './course-controller'
const controller = new CourseController()
const theConsumerId = Helper.sampleObjectId()

function* nextCourseId () {
  let index = 1
  while(true) {
    let id = 'contextId' + index
    index++
    yield id
  }
}
const generateCourseId = nextCourseId()


/* global describe it */
describe('Course mongoose schema testing', function () {
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
  })
  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
  })

  it('Course create model with no parameters should error', function (done) {
    let m = new Course()
    m.validate(function (error) {
      // console.log('Expecting error here: ', error)
      should.exist(error)
      should.equal(error.errors['context_id'].message, 'Path `context_id` is required.')
      should.equal(error.errors['toolConsumer'].message, 'Path `toolConsumer` is required.')
      done()
    })
  })

  it('Course create model with correct parameters should not error', async function () {
    const theData = Helper.createSampleCourseData()
    theData.toolConsumer = theConsumerId
    theData.context_id = generateCourseId.next().value
    let m = new Course(theData)
    await m.save()
    // console.log('saved course ', m)
    try {
      await m.validate()
    } catch(error) {
      // console.log('Expecting null here: ', error)
      should.not.exist(error)
    }
  })

  it('Course create model with model.create', async function () {
    const theData = Helper.createSampleCourseData()
    theData.toolConsumer = theConsumerId
    theData.context_id = generateCourseId.next().value
    let m = await Course.create(theData)
    await m.save()
    // console.log('saved course ', m)
    try {
      await m.validate()
    } catch(error) {
      // console.log('Expecting null here: ', error)
      should.not.exist(error)
    }
  })

  let savedId
  it('Course can save one', async () => {
    const theData = Helper.createSampleCourseData()
    theData.toolConsumer = theConsumerId
    theData.context_id = generateCourseId.next().value
    const newModel = new Course(theData)
    const doc = await newModel.save()
    should.exist(doc)
    savedId = doc._id
  })

  it('Course can find one', async () => {
    const doc = await Course.findOne({ _id: savedId } )
    should.exist(doc)
  })

  it('Course create via Helper', async () => {
    const course = await Helper.createSampleCourse(theConsumerId)
    should.exist(course)
    try {
      await course.validate()
    } catch (error) {
      // console.log('Expecting null here: ', error)
      should.not.exist(error)
    }
  })

  let theCourse, theConsumer, theUser
  it('CourseController setup consumer and user', async () => {
    theConsumer = await Helper.createSampleConsumer()
    theUser = await Helper.createUser(theConsumer)
  })

  it('CourseController createCourse', async () => {
    const ltiData = Helper.createSampleCourseData()
    // change id to create new course
    ltiData.context_id = generateCourseId.next().value
    theCourse = await controller.createCourse(ltiData, theConsumerId)
    should.exist(theCourse)
  })

  it('CourseController getCourseRecord', async () => {
    let courseRecord = await controller.getCourseRecord(theCourse._id)
    should.exist(courseRecord)
  })

  it('CourseController getCourseRecordWithActivities', async () => {
    const isInstructor = true
    let getCourseRecordWithActivities = await controller.getCourseRecordWithActivities(theCourse._id, theUser._id, theConsumer._id, isInstructor)
    console.log('getCourseRecordWithActivities',getCourseRecordWithActivities)
    should.exist(getCourseRecordWithActivities)
  })

  it('CourseController listCoursesOnly', async () => {
    const isInstructor = true
    let listCoursesOnly = await controller.listCoursesOnly(theCourse._id, theUser._id, theConsumer._id, isInstructor)
    console.log('listCoursesOnly',listCoursesOnly)
    should.exist(listCoursesOnly)
  })

  //  course-controller.js               |   46.85 |    36.55 |   62.29 |   45.27 | 42,221,235, 249-319, 324-327,335-336,343,350,367-374,382-480,489-532,539-562
  // course-controller.js               |   53.09 |    42.74 |   62.29 |   52.27 | 42,221,234, 248-257, 262-265, 273-274, 281, 288, 305-312, 320-418,427-470,477-500
  // course-controller.js               |   68.07 |    58.06 |   72.13 |   68.93 | 42,221,234, 248-257, 262-265, 273-274, 281, 288, 305-312, 331-363, 376-380, 385-388, 396-397,404,439,456-457,477-500
  // listCoursesOnly
  // route
  // updateCourse
  // activitiesForCourse

  it.skip('CourseController test findCourseByLti', () =>{
    // let course = await controller.findCourseByLti(ltiCourseIdd, toolConsumerId)
    const results = undefined
    should.exist(results, 'test findCourseByLti')
  })

})
