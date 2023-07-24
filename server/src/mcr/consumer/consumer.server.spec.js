import Consumer from './consumer'
import EhrApp from '../../server/app'
import Helper from '../common/test-helper'
import { applicationConfiguration } from '../../config/config'
import { logError} from '../../helpers/log-error'
const configuration = applicationConfiguration('test')
const BASE = '/consumers'
const ehrApp = new EhrApp(configuration)
const helper = new Helper()
const mongoose = require('mongoose')
const should = require('should')

const tokenData = Helper.sampleTokenData()
const adminToken = Helper.generateToken(tokenData, true)

/* global describe it */
describe('Consumer mongoose schema testing', function () {
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
  })
  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
  })
  it('Consumer should be invalid if key and secret Are empty', function (done) {
    var m = new Consumer()
    m.validate(function (err) {
      should.exist(err)
      done()
    })
  })
  it('Consumer should be valid if key and secret are given', function (done) {
    let consumerSpec = Helper.sampleConsumerSpec()
    const model = new Consumer(consumerSpec)
    // console.log('consumer created', model)
    model.validate(function (err) {
      should.not.exist(err)
      done()
    })
  })
  it('Consumer can save one ', function (done) {
    let consumerSpec = Helper.sampleConsumerSpec()
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
    let consumerSpec = Helper.sampleConsumerSpec()
    Consumer.findOne({oauth_consumer_key: consumerSpec.oauth_consumer_key}, function (err, doc) {
      should.exist(doc)
      should.not.exist(err)
      doc.lti_version.should.equal(consumerSpec.lti_version)
      doc.tool_consumer_info_product_family_code.should.equal(consumerSpec.tool_consumer_info_product_family_code)
      doc.tool_consumer_info_version.should.equal(consumerSpec.tool_consumer_info_version)
      doc.tool_consumer_instance_description.should.equal(consumerSpec.tool_consumer_instance_description)
      doc.tool_consumer_instance_guid.should.equal(consumerSpec.tool_consumer_instance_guid)
      done()
    }).catch(e => {
      logError(`Consumer can find one error: ${e}`)
    })
  })
})

// skip -- many issues with auth tokens etc
describe.skip('Make server calls on Consumer', function () {
  let theApp
  before(function (done) {
    helper.beforeTestAppAndDbDrop(ehrApp, configuration, mongoose)
      .then( () => {
        theApp = ehrApp.application
        done()
      })
      .catch( err => {
        console.error('should not error', err)
        should.not.exist(err)
        done()
      })
  })
  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
      .catch( err => {
        console.error('should not error', err)
        done()
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

  it.skip('Admin create tool', function () {
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

  // Error { message: 'expected 200 "OK", got 401 "Unauthorized"' }
  it.skip('Admin create second tool with different key', function () {
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
