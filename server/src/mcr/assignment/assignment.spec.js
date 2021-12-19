var should = require('should')
const mongoose = require('mongoose')
import Helper from '../common/test-helper'
const helper = new Helper()
import Model from './assignment'

const typeName = 'Assignment'
const collectionName = 'assignments'

const logError = require('debug')('error')

/* global describe it */
describe(`${typeName} mongoose schema testing`, function () {
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
  })

  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
  })

  it(`${typeName} be invalid if params are empty`, function (done) {
    let m = new Model()
    m.validate(function (err) {
      // debug('Expect error: ', err)
      should.exist(err)
      done()
    })
  })

  let key
  let data = Helper.sampleAssignmentSpec()
  it(`${typeName} can save one`, function (done) {
    key = data.externalId
    const newUser = new Model(data)
    newUser
      .save()
      .then(() => {
        done()
      })
  })

  it(`${typeName} can find one`, function (done) {
    Model.findOne({ externalId: key }, function (err, doc) {
      // debug('results', doc)
      should.not.exist(err)
      should.exist(doc)
      doc.should.have.property('seedDataId')
      done()
    }).clone().catch(e => {
      logError('find one error', e)
    })
  })
})
