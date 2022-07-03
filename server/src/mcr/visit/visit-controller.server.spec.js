const should = require('should')
const mongoose = require('mongoose')
import Helper from '../common/test-helper'
const helper = new Helper()
import VisitController from './visit-controller'
// import Model from '../../models/user'
const logError = require('debug')('error')
const typeName = 'VisitController'
// const modelName = 'Visit'

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

  let theConsumer
  let theAssignment
  let theActivity
  let theUser
  let visitId

  it('Create a tool consumer for testing consumers with assignment, user and activity', function (done) {
    Helper
      .createSampleConsumer()
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
        logError('setup unexpected err: ', err)
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
        // debug('created visit record', doc)
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

  it(`${typeName} test method findUserVisitList`, async function () {
    let m = new VisitController()
    m.should.have.property('findUserVisitList')
    let list = await m.findUserVisitList(theUser._id)
    should.exist(list)
    list.should.be.Array()
    list.length.should.equals(1)
  })

})
