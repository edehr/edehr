// eslint-disable-next-line no-unused-vars
import fs from 'fs'

var should = require('should')
const mongoose = require('mongoose')
import Helper from '../common/test-helper'
const helper = new Helper()
import ActivityDataController from './activity-data-controller'
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

  it(`${typeName} use putAssignmentData`, function (done) {
    const data = {propertyName: 'someProp', value: { foo : 'bar'}}
    controller.putAssignmentData(theActivityData._id, data)
      .then(doc => {
        should.exist(doc)
        doc.should.have.property('assignmentData')
        // debug('putAssignmentData results:', doc.assignmentData)
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

})

describe('Test EhrDataModel with activity controller', function () {
  let controller
  let theConsumerId, theVisitId
  let theActivityData
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
    controller = new ActivityDataController()
  })
  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done())
  })

  it('Create consumer, visit, activity ', function (done) {
    theVisitId = Helper.sampleObjectId()
    theConsumerId = Helper.sampleObjectId()
    let data = Helper.sampleActivityData(theConsumerId, theVisitId)
    controller.create(data).then(doc => {
      theActivityData = doc
      controller.findOne(theActivityData._id).then(doc => {
        done()
      })
    })
  })

  it('use putAssignmentData which used Prepare', function (done) {
    const PAGE_KEY = 'hematology'
    const ID = '_id'
    const payload = {
      propertyName: PAGE_KEY,
      value: {
        tableCbcAnalysis: [{ name: 'foo' }, { name: 'bar' }],
        tablePbfReview: [{ name: 'foo' }, { name: 'bar' }]
      }
    }
    controller.putAssignmentData(theActivityData._id, payload)
      .then(doc => {
        should.exist(doc)
        doc.should.have.property('assignmentData')
        // console.log('putAssignmentData results:', doc.assignmentData)
        doc.assignmentData.should.have.property(PAGE_KEY)
        const pData = doc.assignmentData[PAGE_KEY]
        pData.tableCbcAnalysis.should.have.length(2)
        let row
        row = pData.tableCbcAnalysis[0]
        row.should.have.property(ID)
        row[ID].should.equal('hematology.tableCbcAnalysis.0')
        done()
      })
  })

})


