const should = require('should')
const mongoose = require('mongoose')
import Helper from '../common/test-helper'
const helper = new Helper()
import VisitController from './visit-controller'
// import Model from '../../models/user'

const typeName = 'VisitController'
// const modelName = 'Visit'

// Use following to leave results in test database for inspection
// helper.setClear(false)

/* global describe it */
describe(`${typeName} controller testing`, function () {
  before(function (done) {
    helper.before(done, mongoose)
  })

  // after(function (done) {
  //   helper.afterDropDatabase(done, mongoose)
  // })

  let theConsumer
  let theAssignment
  let theActivity
  let theUser
  let visitId

  it('Create a tool consumer for testing ', function (done) {
    Helper
      .createConsumer()
      .then(doc => {
        should.exist(doc,'consumer')
        theConsumer = doc
        return Helper.createAssignment()
      })
      .then(doc => {
        should.exist(doc,'assignment')
        theAssignment = doc
        return Helper.createUser(theConsumer)
      })
      .then(doc => {
        should.exist(doc,'user')
        theUser = doc
        return Helper.createActivity(theConsumer, theAssignment)
      })
      .then(doc => {
        should.exist(doc,'activity')
        theActivity = doc
      })
      .then(() => {
        done()
      })
      .catch((err) => {
        console.log('setup unexpected err: ', err)
        should.not.exist(err)
        done()
      })
  })

  it(`${typeName} create controller`, function () {
    let m = new VisitController()
    should.exist(m)
  })

  it(`${typeName} controller create visit`, function (done) {
    let m = new VisitController()
    let data = Helper.sampleVisit(
      theConsumer,
      theUser,
      theActivity,
      theAssignment)
    m.create(data)
      .then(doc => {
        should.exist(doc)
        // console.log('created visit record', doc)
        visitId = doc._id
        done()
      })
  })

  /*
  Test the /visits/flushed/visitKey API
   */
  it(`${typeName} findVisit`, function (done) {
    let m = new VisitController()
    m.should.have.property('findVisit')
    m.findVisit(visitId)
    done()
  })

})
