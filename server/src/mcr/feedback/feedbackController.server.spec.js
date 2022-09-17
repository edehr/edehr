var should = require('should')
const mongoose = require('mongoose')
import FeedbackController from './feedback-controller'
import Helper from '../common/test-helper'
import applicationConfiguration from '../../config/config'
import { logError} from '../../helpers/log-error'
const configuration = applicationConfiguration('test')
const helper = new Helper()
const typeName = 'FeedbackController'
const modelName = 'Feedback'

function makeController () {
  return new FeedbackController(configuration)
}

/* global describe it */
describe(`${typeName} controller testing`, function () {
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
  })
  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
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
