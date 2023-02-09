var should = require('should')
const mongoose = require('mongoose')
const ObjectID = require('mongodb').ObjectId
import Helper from '../common/test-helper'
const helper = new Helper()
import UserController from './user-controller'
import Model from './user'
const debug = require('debug')('server')
const typeName = 'UserController'

// Use following to leave results in test database for inspection
// helper.setClear(false)

/* global describe it */
describe(`${typeName} controller testing`, function () {
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
  })
  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
  })

  it(`${typeName} create controller `, function (done) {
    new UserController()
    done()
  })


  let theConsumer

  it('Create a tool consumer for testing user', function (done) {
    Helper
      .createSampleConsumer()
      .then(doc => {
        theConsumer = doc
        debug('have consumer', doc)
        done()
      })
      .catch((err) => {
        debug('setup unexpected err: ', err)
        should.not.exist(err)
        done()
      })
  })

  it(`${typeName} create controller`, function (done) {
    let m = new UserController(Model, 'user_id')
    let data = Helper.sampleUserSpec(theConsumer)
    m.create(data)
      .then(doc => {
        should.exist(doc)
        done()
      })
  })

  it(`${typeName} route`, function (done) {
    let m = new UserController()
    m.should.have.property('route')
    m.route()
    done()
  })

  it.skip(`${typeName} listActivitiesAsStudent`, function (done) {
    let id = new ObjectID('56955ca46063c5600627f393')
    let m = new UserController()
    m.should.have.property('listActivitiesAsStudent')
    m.listActivitiesAsStudent(id)
      .then((response) => {
        debug('listActivitiesAsStudent', response)
        done()
      })
      .catch((err) => {
        debug('listActivitiesAsStudent unexpected err: ', err)
        should.not.exist(err)
        done()
      })
  })

  // listAsInstructorCourses requires parameter req with authPayload
  it.skip(`${typeName} listAsInstructorCourses`, function (done) {
    let id = new ObjectID('56955ca46063c5600627f393')
    let m = new UserController()
    m.should.have.property('listAsInstructorCourses')
    m.listAsInstructorCourses(id)
      .then((response) => {
        debug('listAsInstructorCourses', response)
        done()
      })
      .catch((err) => {
        debug('listAsInstructorCourses unexpected err: ', err)
        should.not.exist(err)
        done()
      })
  })


})
