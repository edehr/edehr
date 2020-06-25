var should = require('should')
const mongoose = require('mongoose')
import Helper from '../common/test-helper'
const helper = new Helper()
import Model from './activity-data'

const typeName = 'ActivityData'

const debug = require('debug')('server')

/* global describe it */
describe(`${typeName} mongoose schema testing`, function () {
  before(function (done) {
    helper.before(done, mongoose)
  })

  let theConsumerId, theVisitId
  it('Create a tool consumer for testing ', function (done) {
    theVisitId = Helper.sampleObjectId()
    theConsumerId = Helper.sampleObjectId()
    // debug('Testing with visit id ', theVisitId)
    // debug('Testing with consumer id ', theConsumerId)
    done()
  })

  it(`${typeName} create model with no parameters should error`, function (done) {
    let m = new Model()
    m.validate(function (error) {
      // debug('Expect error: ', error)
      should.exist(error)
      should.equal(error.errors['visit'].message, 'Path `visit` is required.')
      should.equal(error.errors['toolConsumer'].message, 'Path `toolConsumer` is required.')
      done()
    })
  })

  let savedId
  it(`${typeName} can save one`, function (done) {
    const newModel = new Model(Helper.sampleActivityData(theConsumerId, theVisitId))
    newModel
      .save()
      .then((doc) => {
        should.exist(doc)
        // debug('saved doc', doc)
        savedId = doc._id
        done()
      })
      .catch(err => {
        debug(`${typeName} can save one error: ${err}`)
        should.not.exist(err)
        done()
      })
  })

  it(`${typeName} can find one`, function (done) {
    Model.findOne({ _id: savedId }, function (err, doc) {
      // debug('results', doc)
      should.exist(doc)
      should.not.exist(err)
      done()
    }).catch(e => {
      debug('find one error', e)
    })
  })
})
