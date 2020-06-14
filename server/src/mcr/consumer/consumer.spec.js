import Consumer from './consumer'
import Config from '../../config/config'
import EhrApp from '../../server/app'
import Helper from '../common/test-helper'

// const request = require('supertest')
const BASE = '/consumers'
const config = new Config('test')
const configuration = config.config
const ehrApp = new EhrApp()
const helper = new Helper()
const mongoose = require('mongoose')
const should = require('should')
const TYPE = 'Consumer'
const debug = require('debug')('server')

const visitId = Helper.sampleObjectId(true)
const adminToken = Helper.generateToken(visitId, true)

const visitId = Helper.sampleObjectId(true)
const token = Helper.generateToken(visitId)
const adminToken = Helper.generateToken(visitId, true)

/* global describe it */
describe('Consumer mongoose schema testing', function () {
  before(function (done) {
    helper.before(done, mongoose)
  })

  after(function (done) {
    let collection = 'consumers'
    helper.afterTests(done, mongoose, collection)
  })

  it('Consumer should be invalid if key and secret Are empty', function (done) {
    var m = new Consumer()
    m.validate(function (err) {
      should.exist(err)
      done()
    })
  })

  let consumerSpec = Helper.sampleConsumerSpec()

  it('Consumner can save one ', function (done) {
    const model = new Consumer(consumerSpec)
    model
      .save()
      .then(() => {
        done()
      })
      .catch(err => {
        should.not.exist(err)
        done()
      })
  })
  it('Consumer can find one ', function (done) {
    Consumer.findOne({oauth_consumer_key: consumerSpec.oauth_consumer_key}, function (err, doc) {
      should.exist(doc)
      should.not.exist(err)
      doc.lti_version.should.equal(consumerSpec.lti_version)
      done()
    }).catch(e => {
      debug(`Consumer can find one error: ${e}`)
    })
  })
})

describe(`Make server calls on ${TYPE}`, function () {
  let theApp
  before(function (done) {
    ehrApp
      .setup(configuration)
      .then(() => theApp = ehrApp.application)
      .then(() => {
        return helper.before(done, mongoose)
      })
  })

  it('Admin create tool without auth', function () {
    let url = BASE + '/create'
    let theData = {key: 'akey', secret: 'asecret'}
    return Helper.postUrlAuth(theApp, url, null, theData)
      .expect(401)
      .expect((res) => {
        should.not.exist(res)
      // Helper.consoleRes(res)
      })
      .catch((error) => {
        should.exist(error)
      })
  })

  it('Admin create tool', function () {
    let url = BASE + '/create'
    let theData = {oauth_consumer_key: 'akey', oauth_consumer_secret: 'asecret'}
    return Helper.postUrlAuth(theApp, url, adminToken, theData)
      .expect(200)
      .expect((res) => {
        should.exist(res)
      })
      .catch((error) => {
        should.not.exist(error)
      })
  })

  it('Admin create 2nd tool with conflict on key --- should error', function () {
    let url = BASE + '/create'
    let theData = {oauth_consumer_key: 'akey', oauth_consumer_secret: 'asecret'}
    return Helper.postUrlAuth(theApp, url, adminToken, theData)
      .expect(200)
      .expect((res) => {
        should.not.exist(res)
      })
      .catch((error) => {
        should.exist(error)
      })
  })

  it('Admin create second tool with different key', function () {
    let url = BASE + '/create'
    let theData = {oauth_consumer_key: 'akey2', oauth_consumer_secret: 'asecret'}
    return Helper.postUrlAuth(theApp, url, adminToken, theData)
      .expect(200)
      .expect((res) => {
        should.exist(res)
      })
      .catch((error) => {
        should.not.exist(error)
      })
  })

  it.skip('Admin list consumer users', function () {
    let url = BASE + '/consumers/'
    return Helper.getUrlAuth(theApp, url, adminToken)
      .expect(200)
      .expect((res) => {
        should.exist(res)
      })
      .catch((error) => {
        should.not.exist(error)
      })
  })

})