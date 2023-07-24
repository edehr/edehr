var should = require('should')
const mongoose = require('mongoose')
import Helper from '../common/test-helper'
const helper = new Helper()
import UserController from './user-controller'
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

  it('Create a tool consumer for testing user', async () => {
    theConsumer = await Helper.createSampleConsumer()
  })

  it(`${typeName} create controller`, function (done) {
    let m = new UserController()
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

  // listActivitiesAsStudent and listAsInstructorCourses are in visit-controller testing
  // it.skip(`${typeName} listActivitiesAsStudent`,
  // it.skip(`${typeName} listAsInstructorCourses`,

})
