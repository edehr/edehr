const debug = require('debug')('server')
const should = require('should')
const mongoose = require('mongoose')
import Helper from '../common/test-helper'
const helper = new Helper()
import VisitController from './visit-controller'
import UserController from '../user/user-controller'
import Role from '../roles/roles'
import CourseController from '../course/course-controller'
import SeedData from '../seed/seed-data'

/* global describe it */
describe('VisitController controller testing', function () {
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
  })
  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
  })

  it('VisitController create controller', function () {
    let m = new VisitController()
    should.exist(m)
  })

  function createOneSeed (spec) {
    let model = new SeedData(spec)
    return model.save()
  }

  let theConsumer
  let theAssignment
  let theActivity1, theActivity2, theActivity3
  let theCourse
  let theUser
  let visit1, visit2, visit3
  let theStudentUser, sv1, sv2, sv3

  it('Create a tool consumer for testing consumers with assignment, user and activity', async () => {
    theConsumer = await Helper.createSampleConsumer()
    let seedSpec = Helper.sampleSeedDataSpec()
    seedSpec.toolConsumer = theConsumer._id
    let seed = await createOneSeed(seedSpec)
    theAssignment = await Helper.createAssignment(theConsumer._id, seed._id)
    theCourse = await Helper.createSampleCourse(theConsumer._id)
    theUser = await Helper.createUser(theConsumer)
    theActivity1 = await Helper.createActivity(theConsumer, theCourse, theAssignment, 'resource_link_id1')
    theActivity2 = await Helper.createActivity(theConsumer, theCourse, theAssignment, 'resource_link_id2')
    theActivity3 = await Helper.createActivity(theConsumer, theCourse, theAssignment, 'resource_link_id3')
    let studentUserSpec = {
      toolConsumer: theConsumer._id,
      consumerKey: theConsumer.oauth_consumer_key,
      user_id: '0987654321',
      fullName: 'Student Tester'
    }
    theStudentUser = await Helper.createUserFromSpec(studentUserSpec)
    should.exist(theStudentUser)

  })

  it('VisitController controller create instructor visits', async () => {
    let m = new VisitController()
    let roleI = new Role('instructor')
    let data
    data = Helper.sampleVisit( theConsumer, theUser, theActivity1, theAssignment, roleI)
    visit1 = await m.create(data)
    should.exist(visit1)
    data = Helper.sampleVisit( theConsumer, theUser, theActivity2, theAssignment, roleI)
    visit2 = await m.create(data)
    should.exist(visit2)
    data = Helper.sampleVisit( theConsumer, theUser, theActivity3, theAssignment, roleI)
    visit3 = await m.create(data)
    should.exist(visit3)
  })

  it('VisitController controller create student visits', async () => {
    let m = new VisitController()
    let roleS = new Role('student')
    let data
    data = Helper.sampleVisit( theConsumer, theStudentUser, theActivity1, theAssignment, roleS)
    sv1 = await m.create(data)
    should.exist(sv1)
    data = Helper.sampleVisit( theConsumer, theStudentUser, theActivity2, theAssignment, roleS)
    sv2 = await m.create(data)
    should.exist(sv2)
    data = Helper.sampleVisit( theConsumer, theStudentUser, theActivity3, theAssignment, roleS)
    sv3 = await m.create(data)
    should.exist(sv3)
  })
  /*
  Test the /visits/flushed/visitKey API
   */
  it('VisitController findVisit', function (done) {
    let m = new VisitController()
    m.should.have.property('findVisit')
    m.findVisit(visit1._id)
    done()
  })

  it('VisitController test method findUserVisitList', async function () {
    let m = new VisitController()
    m.should.have.property('findUserVisitList')
    let list = await m.findUserVisitList(theUser._id)
    should.exist(list)
    list.should.be.Array()
    list.length.should.equals(3)
  })

  let userController
  let courseController
  it('Visit/User set up controllers', () => {
    userController = new UserController()
    courseController = new CourseController()
    userController.setSharedControllers({ courseController: courseController })
  })

  it('Visit/User testing listAsInstructorCourses', async () => {
    userController.should.have.property('listAsInstructorCourses')
    const response = await userController.listAsInstructorCourses(theUser._id, theConsumer._id)
    // console.log('response ------- ', response)
    should.exist(response)
    should.exist(response.courses)
    response.courses.should.be.an.Array()
    response.courses.should.have.length(1)
  })

  it('Visit/User testing listActivitiesAsStudent', function (done) {
    userController.should.have.property('listAsStudentCourses')
    userController.listAsStudentCourses(theStudentUser._id, theConsumer._id)
      .then((response) => {
        // debug('listActivitiesAsStudent', response)
        done()
      })
      .catch((err) => {
        debug('listActivitiesAsStudent unexpected err: ', err)
        should.not.exist(err)
        done()
      })
  })

})
