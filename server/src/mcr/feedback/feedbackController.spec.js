var should = require('should')
const mongoose = require('mongoose')
import FeedbackController from './feedback-controller'
import Helper from '../common/test-helper'
import Config from '../../config/config'
const config = new Config('test')
const configuration = config.config
const helper = new Helper()

const typeName = 'FeedbackController'
const modelName = 'Feedback'

const logError = require('debug')('error')

function makeController () {
  return new FeedbackController(configuration)
}

/* global describe it */
describe(`${typeName} controller testing`, function () {
  before(function (done) {
    helper.before(done, mongoose)
  })

  it(`${typeName} create model`, function (done) {
    let m = makeController()
    m.create({feedbackData: 'Some feedback from a test controller'})
      .then(doc => {
        should.exist(doc)
        done()
      })
      .catch(err => {
        logError(`${typeName} create ${modelName} error ${err}`)
        done()
      })
  })

})
