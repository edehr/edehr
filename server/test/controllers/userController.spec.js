var should = require('should')
const mongoose = require('mongoose')
const ObjectID = require('mongodb').ObjectID
import Helper from '../helper'
const helper = new Helper()
import UserController from '../../controllers/user-controller'
import Model from '../../models/user'

const typeName = 'UserController'
const modelName = 'User'

// Use following to leave results in test database for inspection
// helper.setClear(false)

/* global describe it */
describe(`${typeName} controller testing`, function() {
  before(function(done) {
    helper.before(done, mongoose)
  })

  after(function(done) {
    helper.afterDropDatabase(done, mongoose)
  })

  it(`${typeName} create controller `, function(done) {
    let m = new UserController()
    done()
  })


  let theConsumer

  it('Create a tool consumer for testing ', function(done) {
    Helper
    .createConsumer()
    .then(doc => {
      theConsumer = doc
      console.log('have consumer', doc)
      done()
    })
    .catch((err) => {
      console.log('setup unexpected err: ', err)
      should.not.exist(err)
      done()
    })
  })

  it(`${typeName} create controller`, function(done) {
    let m = new UserController(Model, 'user_id')
    let data = Helper.sampleUserSpec(theConsumer)
    m.create(data)
    .then(doc => {
      should.exist(doc)
      done()
    })
  })

  it(`${typeName} route`, function(done) {
    let m = new UserController()
    m.should.have.property('route')
    m.route()
    done()
  })

  it.skip(`${typeName} listActivitiesAsStudent`, function(done) {
    let id = new ObjectID('56955ca46063c5600627f393')
    let m = new UserController()
    m.should.have.property('listActivitiesAsStudent')
    m.listActivitiesAsStudent(id)
    .then((response) => {
      console.log('listActivitiesAsStudent', response)
      done()
    })
    .catch((err) => {
      console.log('listActivitiesAsStudent unexpected err: ', err)
      should.not.exist(err)
      done()
    })
  })

  it(`${typeName} listAsInstructorCourses`, function(done) {
    let id = new ObjectID('56955ca46063c5600627f393')
    let m = new UserController()
    m.should.have.property('listAsInstructorCourses')
    m.listAsInstructorCourses(id)
    .then((response) => {
      console.log('listAsInstructorCourses', response)
      done()
    })
    .catch((err) => {
      console.log('listAsInstructorCourses unexpected err: ', err)
      should.not.exist(err)
      done()
    })
  })


})
