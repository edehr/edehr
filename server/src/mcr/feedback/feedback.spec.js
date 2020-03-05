var should = require('should')
const mongoose = require('mongoose')
import Helper from '../common/test-helper'
const helper = new Helper()
import Model from './feedback'

const typeName = 'Feedback'
const collectionName = 'feedback'

/* global describe it */
describe(`${typeName} mongoose schema testing`, function () {
  before(function (done) {
    helper.before(done, mongoose)
  })

  after(function (done) {
    helper.afterTests(done, mongoose, collectionName)
  })

  it(`${typeName} be invalid if params are empty`, function (done) {
    let m = new Model()
    m.validate(function (err) {
      should.exist(err)
      done()
    })
  })

  it(`${typeName} can save one`, function (done) {
    const newModel = new Model({feedbackData: 'Some feedback'})
    newModel
      .save()
      .then(() => {
        done()
      })
  })

})
