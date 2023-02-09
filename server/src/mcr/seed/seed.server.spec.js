var should = require('should')
const mongoose = require('mongoose')
const ObjectID = require('mongodb').ObjectId
import Helper from '../common/test-helper'
const helper = new Helper()
import SeedData from './seed-data'

/* global describe it */
describe('SeedData mongoose schema testing', function () {
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
  })
  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
  })

  it('SeedData create without name is not allowed', function (done) {
    let m = new SeedData()
    m.validate(function (err) {
      // debug('Expect error: ', err)
      should.exist(err)
      done()
    })
  })
  let sampleData = {
    toolConsumer: new ObjectID('56955ca46063c5600627f393'),
    name: '1234',
    description: 'a test seed',
    version: '1.0',
    ehrData: {foo: 'bar'}
  }

  it('SeedData can save one', function (done) {
    const newUser = new SeedData(sampleData)
    newUser.save()
      .then(() => {
        SeedData.findOne({name: '1234'}, function (err, doc) {
          // debug('results', doc)
          should.exist(doc)
          should.not.exist(err)
          doc.should.have.property('ehrData')
          doc.ehrData.should.have.property('foo')
          doc.should.have.property('version')
          doc.version.should.equal(sampleData.version)
          done()
        })
      })
      .catch(err => {
        should.not.exist(err)
        done()
      })
  })
})
