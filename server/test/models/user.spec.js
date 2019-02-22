var should = require('should')
const mongoose = require('mongoose')
import User from '../../models/user'
import Helper from '../helper'
const helper = new Helper()

/* global describe it */
describe('user mongoose schema testing', function() {
  before(function(done) {
    helper.before(done, mongoose)
  })
  after(function(done) {
    let collection = 'users'
    helper.afterTests(done, mongoose, collection)
  })

  it('user should be invalid if id is empty', function(done) {
    var m = new User()
    m.validate(function(err) {
      should.exist(err)
      done()
    })
  })

  let sampleUserSpec = Helper.sampleUserSpec()

  it('can save one ', function(done) {
    const newUser = new User(sampleUserSpec)
    newUser
      .save()
      .then(() => {
        done()
      })
      .catch(err => {
        console.log('Error ', err)
        done()
      })
  })
  it('can find one ', function(done) {
    User.findOne({ user_id: sampleUserSpec.user_id }, function(err, doc) {
      // console.log('results', err, doc)
      should.exist(doc)
      should.not.exist(err)
      done()
    }).catch(e => {
      console.log('find one error', e)
    })
  })
})
