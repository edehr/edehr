var should = require('should')
const mongoose = require('mongoose')
import Helper from '../helper'
const helper = new Helper()
import Model from '../../src/models/activity-data'

const typeName = 'ActivityData'

/* global describe it */
describe(`${typeName} mongoose schema testing`, function () {
  before(function (done) {
    helper.before(done, mongoose)
  })

  let theConsumerId, theVisitId
  it('Create a tool consumer for testing ', function (done) {
    theVisitId = Helper.sampleObjectId()
    theConsumerId = Helper.sampleObjectId()
    // console.log('Testing with visit id ', theVisitId)
    // console.log('Testing with consumer id ', theConsumerId)
    done()
  })

  it(`${typeName} create model with no parameters should error`, function (done) {
    let m = new Model()
    m.validate(function (error) {
      // console.log('Expect error: ', error)
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
        // console.log('saved doc', doc)
        savedId = doc._id
        done()
      })
      .catch(err => {
        should.not.exist(err)
        done()
      })
  })

  it(`${typeName} can find one`, function (done) {
    Model.findOne({ _id: savedId }, function (err, doc) {
      // console.log('results', doc)
      should.exist(doc)
      should.not.exist(err)
      done()
    }).catch(e => {
      console.log('find one error', e)
    })
  })
})
