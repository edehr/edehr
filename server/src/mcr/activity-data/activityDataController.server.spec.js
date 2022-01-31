var should = require('should')
const mongoose = require('mongoose')
import Helper from '../common/test-helper'
const helper = new Helper()
import ActivityDataController from './activity-data-controller'
const debug = require('debug')('server')
const typeName = 'ActivityDataController'

// Use following to leave results in test database for inspection
helper.setClear(false)

/* global describe it */
describe(`${typeName} controller testing`, function () {
  let controller

  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
    controller = new ActivityDataController()
  })
  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
  })

  let theConsumerId, theVisitId
  it('Create a tool consumer for testing ', function (done) {
    theVisitId = Helper.sampleObjectId()
    theConsumerId = Helper.sampleObjectId()
    // debug('Testing with visit id ', theVisitId)
    // debug('Testing with consumer id ', theConsumerId)
    done()
  })


  let theActivityData
  it(`${typeName} create model`, function (done) {
    let data = Helper.sampleActivityData(theConsumerId, theVisitId)
    controller.create(data).then(doc => {
      should.exist(doc)
      theActivityData = doc
      controller.findOne(theActivityData._id).then(doc => {
        // debug('findOne results', doc)
        should.exist(doc)
        done()
      })
    })
  })

  it(`${typeName} use updateScratchData`, function (done) {
    const data = 'some scratch data'
    controller.updateScratchData(theActivityData._id,{value:data})
      .then(doc => {
        should.exist(doc)
        doc.should.have.property('scratchData')
        // debug('updateScratchData results:', doc.scratchData)
        doc.scratchData.should.equal(data)
        done()
      })
  })

  it(`${typeName} use updateAssignmentData`, function (done) {
    const data = {propertyName: 'someProp', value: { foo : 'bar'}}
    controller.updateAssignmentData(theActivityData._id, data)
      .then(doc => {
        should.exist(doc)
        doc.should.have.property('assignmentData')
        // debug('updateAssignmentData results:', doc.assignmentData)
        doc.assignmentData.should.have.property(data.propertyName)
        done()
      })
  })

  it(`${typeName} use updateEvaluationData`, function (done) {
    const data = {value: 'instructor evaluates students work'}
    controller.updateEvaluationData(theActivityData._id, data)
      .then(doc => {
        should.exist(doc)
        doc.should.have.property('evaluationData')
        // debug('updateEvaluationData results:', doc.evaluationData)
        doc.evaluationData.should.equal(data.value)
        done()
      })
  })

  it(`${typeName} use assignmentSubmitted`, function (done) {
    const data = {value: true}
    controller.assignmentSubmitted(theActivityData._id, data)
      .then(doc => {
        should.exist(doc)
        doc.should.have.property('submitted')
        doc.submitted.should.equal(data.value)
        done()
      })
  })

  it(`${typeName} use assignmentEvaluated`, function (done) {
    const data = {value: true}
    controller.assignmentEvaluated(theActivityData._id, data)
      .then(doc => {
        should.exist(doc)
        doc.should.have.property('evaluated')
        doc.evaluated.should.equal(data.value)
        done()
      })
  })
})
