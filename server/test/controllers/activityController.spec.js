var should = require('should')
const mongoose = require('mongoose')
import Helper from '../helper'
const helper = new Helper()
import ActivityController from '../../controllers/activity-controller'
import Activity from '../../models/activity'
import Consumer from '../../models/consumer'
import Assignment from '../../models/assignment'

const typeName = 'ActivityController'
const modelName = 'Activity'
let seedData = { foo: 'bar' }

// Use following to leave results in test database for inspection
helper.setClear(false)

/* global describe it */
describe(`${typeName} controller testing`, function() {
  before(function(done) {
    helper.before(done, mongoose)
  })

  after(function(done) {
    helper.afterDropDatabase(done, mongoose)
  })

  it(`${typeName} be valid with model and key`, function(done) {
    let m = new ActivityController(Activity)
    m.should.have.property('updateCreateActivity')
    m.should.have.property('listClassList')
    m.should.have.property('findActivity')
    done()
  })

  let theConsumer
  let theAssignment
  it('Create a tool consumer for testing ', function(done) {
    Helper
      .createConsumer()
      .then(doc => {
        theConsumer = doc
        return Helper.createAssignment()
      })
      .then(doc => {
        theAssignment = doc
        done()
      })
  })

  let theActivity
  it(`${typeName} create model`, function(done) {
    let m = new ActivityController(Activity)
    let data = Helper.sampleActivity(theConsumer, theAssignment)
    m.create(data).then(doc => {
      should.exist(doc)
      theActivity = doc
      done()
    })
  })

  it(`${typeName} use findActivity`, function(done) {
    let m = new ActivityController(Activity, 'name')
    m.findActivity(theActivity._id).then(doc => {
      // console.log('findActivity results', doc)
      // should.exist(doc)
      doc.should.have.property('assignment')
      doc.assignment.should.have.property('seedDataId')
      done()
    })
  })

  it(`${typeName} findActivity with id that doesn't exist`, function(done) {
    let m = new ActivityController(Activity, 'name')
    // use an id from the wrong type of object to cause a fail
    m.findActivity(theConsumer._id).then(doc => {
      // console.log('findActivity results', doc)
      should.not.exist(doc)
      done()
    })
  })
})
