const should = require('should')
const mongoose = require('mongoose')
import User from './user'
import Helper from '../common/test-helper'
const helper = new Helper()
const logError = require('debug')('error')
console.log('USS: mongoose.connection.readyState', mongoose.connection.readyState)

/* global describe it */
describe('user mongoose schema testing', function () {
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
  })
  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
  })

  it('user should be invalid if id is empty', function (done) {
    let m = new User()
    m.validate(function (err) {
      should.exist(err)
      done()
    })
  })

  let sampleUserSpec = Helper.sampleUserSpec()

  it('can save one ', function (done) {
    const newUser = new User(sampleUserSpec)
    newUser
      .save()
      .then(() => {
        done()
      })
      .catch(err => {
        logError('Error ', err)
        done()
      })
  })
  it('can find one ', function (done) {
    User.findOne({ user_id: sampleUserSpec.user_id }, function (err, doc) {
      // debug('results', err, doc)
      should.exist(doc)
      should.not.exist(err)
      done()
    }).catch(e => {
      logError('find one error', e)
    })
  })
})
