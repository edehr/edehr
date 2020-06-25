var should = require('should')
const mongoose = require('mongoose')
import Helper from '../common/test-helper'
const helper = new Helper()
import Model from './activity'
const debug = require('debug')('server')

const typeName = 'Activity'
// const collectionName = 'activties'
// let seedData = { foo: 'bar' }

/* global describe it */
describe(`${typeName} mongoose schema testing`, function () {
  before(function (done) {
    helper.before(done, mongoose)
  })

  after(function (done) {
    helper.afterDropDatabase(done, mongoose)
  })

  let theConsumer
  let theAssignment
  it('Create a tool consumer for testing ', function (done) {
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
      debug('find one error', e)
    })
  })
})
