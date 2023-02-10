var should = require('should')
const mongoose = require('mongoose')
import Helper from '../common/test-helper'
const helper = new Helper()
import ActivityData from './activity-data'
import { logError} from '../../helpers/log-error'


/* global describe it */
describe('ActivityData mongoose schema testing', function () {
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
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

  it('ActivityData create model with no parameters should error', function (done) {
    let m = new ActivityData()
    m.validate(function (error) {
      // console.log('Expecting error here: ', error)
      should.exist(error)
      should.equal(error.errors['visit'].message, 'Path `visit` is required.')
      should.equal(error.errors['toolConsumer'].message, 'Path `toolConsumer` is required.')
      done()
    })
  })

  let savedId
  it('ActivityData can save one', function (done) {
    const newModel = new ActivityData(Helper.sampleActivityData(theConsumerId, theVisitId))
    newModel
      .save()
      .then((doc) => {
        should.exist(doc)
        // debug('saved doc', doc)
        savedId = doc._id
        done()
      })
      .catch(err => {
        logError(`ActivityData can save one error: ${err}`)
        should.not.exist(err)
        done()
      })
  })

  it('ActivityData can find one', function (done) {
    ActivityData.findOne({ _id: savedId }, function (err, doc) {
      // debug('results', doc)
      should.exist(doc)
      should.not.exist(err)
      done()
    }).catch(e => {
      logError('find one error', e)
    })
  })
})
