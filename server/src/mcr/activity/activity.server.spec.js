var should = require('should')
const mongoose = require('mongoose')
import Helper from '../common/test-helper'
const helper = new Helper()
import Model from './activity'
const logError = require('debug')('error')

const typeName = 'Activity'
// const collectionName = 'activties'
// let seedData = { foo: 'bar' }

/* global describe it */
describe(`${typeName} mongoose schema testing`, function () {
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
  })

  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
  })

  let theConsumer
  let theAssignment
  it('Create a tool consumer for testing create assignment ', function (done) {
    Helper
      .createSampleConsumer()
      .then(doc => {
        theConsumer = doc
        return Helper.createAssignment()
      })
      .then(doc => {
        theAssignment = doc
        done()
      })
      .catch(err => {
        console.error(err)
        should.not.exist(err)
      })
  })

  it(`${typeName} be valid params are empty`, function (done) {
    let m = new Model()
    m.validate(function (err) {
      // debug('Expect error: ', err)
      should.exist(err)
      done()
    })
  })

  it(`${typeName} can save one`, function (done) {
    const newUser = new Model(Helper.sampleActivity(theConsumer, theAssignment))
    newUser
      .save()
      .then(() => {
        done()
      })
      .catch(err => {
        should.not.exist(err)
        done()
      })
  })

  it(`${typeName} can find one`, function (done) {
    let activity = Helper.sampleActivity(theConsumer)
    let key = activity.resource_link_id
    Model.findOne({ resource_link_id: key }, function (err, doc) {
      // debug('results', doc)
      should.exist(doc)
      should.not.exist(err)
      // doc.seedData.should.have.property('foo');
      done()
    }).catch(e => {
      logError('find one error', e)
    })
  })
})
