var should = require('should')
const mongoose = require('mongoose')
import Helper from '../helper'
const helper = new Helper()
import AssignmentController from '../../controllers/assignment-controller'
import { DEFAULT_ASSIGNMENT_EXTERNAL_ID } from '../../controllers/assignment-controller'
import Model from '../../models/seed-data'

const typeName = 'AssignmentController'
const modelName = 'Assignment'
const collectionName = 'assignments'

// Use following to leave results in test database for inspection
// helper.setClear(false)

/* global describe it */
describe(`${typeName} controller testing`, function() {
  before(function(done) {
    helper.before(done, mongoose)
  })

  after(function(done) {
    helper.afterTests(done, mongoose, collectionName)
  })

  it(`${typeName} be valid with model and key`, function(done) {
    let m = new AssignmentController(Model, 'user_id')
    m.should.have.property('locateAssignmentByExternalId')
    done()
  })

  let seedData = { foo: 'bar' }
  let key = '1'

  it(`${typeName} create model`, function(done) {
    let m = new AssignmentController()
    let data = Helper.sampleAssignmentSpec(undefined, key)
    m.create(data)
      .then(doc => {
        should.exist(doc)
        // doc.seedData.should.have.property('foo');
        done()
      })
      .catch(err => {
        console.log(`${typeName} create ${modelName} error ${err}`)
        done()
      })
  })

  it(`${typeName} use locateAssignmentByExternalId`, function(done) {
    let m = new AssignmentController(Model, 'name')
    m.locateAssignmentByExternalId(key)
      .then(doc => {
        // console.log('results', doc)
        should.exist(doc)
        // doc.seedData.should.have.property('foo')
        done()
      })
      .catch(e => {
        console.log('find one error', e)
      })
  })

  it(`${typeName} ask for assignment that doesn't exist`, function(done) {
    let m = new AssignmentController(Model, 'name')
    let data = Helper.sampleAssignmentSpec(undefined, DEFAULT_ASSIGNMENT_EXTERNAL_ID)
    m.create(data)
      .then(doc => {
        should.exist(doc)
      })
      .then(() => {
        return m.locateAssignmentByExternalId('999')
      })
      .then(defaultDoc => {
        should.exist(defaultDoc)
        defaultDoc.externalId.should.equal(DEFAULT_ASSIGNMENT_EXTERNAL_ID)
        done()
      })
  })
})
