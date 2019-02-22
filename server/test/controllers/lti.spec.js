var should = require('should')
const mongoose = require('mongoose')
const ObjectID = require('mongodb').ObjectID
import HMAC_SHA1 from '../../node_modules/ims-lti/src/hmac-sha1'

import LTIController from '../../controllers/lti'
import Helper from '../helper'
const helper = new Helper()
const { ltiVersions, LTI_BASIC } = require('../../utils/lti')
import Assignment from '../../models/assignment'

let seedData = { foo: 'bar' }
let assignmentKey = '59'

helper.setClear(false)
/* global describe it */
describe('LTI controller testing', function() {
  before(function(done) {
    helper.before(done, mongoose)
  })
  after(function(done) {
    helper.afterDropDatabase(done, mongoose)
  })

  let theConsumer
  let oauth_consumer_key
  let oauth_consumer_secret
  let theAssignment
  it('Create a tool consumer for testing ', function(done) {
    const assignment = new Assignment(Helper.sampleAssignmentSpec(undefined, assignmentKey))
    Helper.createConsumer().then(doc => {
      theConsumer = doc
      oauth_consumer_key = theConsumer.oauth_consumer_key
      oauth_consumer_secret = theConsumer.oauth_consumer_secret
      assignment
        .save()
        .then(doc => {
          // console.log('created an assignment', doc)
          theAssignment = doc
          return Helper.createDefaultAssignment()
        })
        .then(doc => {
          console.log('created default assignment', doc)
          done()
        })
    })
  })

  let config = {
    clientUrl: 'some/url'
  }
  let ltiController
  it('create LTI controller', function(done) {
    ltiController = new LTIController(config)
    should.exist(ltiController)

    ltiController.should.have.property('route')
    ltiController.should.have.property('initializeApp')
    ltiController.should.have.property('strategyVerify')
    ltiController.should.have.property('validateLti')
    ltiController.should.have.property('_postLtiChain')

    let route = ltiController.route()
    should.exist(route)
    done()
  })

  it('validate lti data', function(done) {
    function expectErrorCallback(error) {
      should.exist(error)
      error.should.have.property('name')
      error.should.have.property('message')
      error.name.should.equal('ParameterError')
      console.log(error.message)
      done()
    }
    let ltiData = Helper.sampleValidLtiData()
    let result = ltiController.validateLti(ltiData, expectErrorCallback)
    should.ok(result)
    done()
  })

  it('validate invalid lti data', function(done) {
    function expectErrorCallback(error) {
      should.exist(error)
      error.should.have.property('name')
      error.should.have.property('message')
      error.name.should.equal('ParameterError')
      // console.log(error.message)
      done()
    }
    let ltiData = Helper.sampleValidLtiData()
    delete ltiData.custom_assignment
    let result = ltiController.validateLti(ltiData, expectErrorCallback)
    should.fail(result)
    done()
  })

  let req
  it('should return true if good headers and oauth', done => {
    let ltiData = Helper.sampleValidLtiData()
    ltiData.oauth_consumer_key = oauth_consumer_key
    ltiData.oauth_consumer_secret = oauth_consumer_secret
    ltiData = Object.assign(ltiData, {
      resource_link_id: 'http://link-to-resource.com/resource',
      oauth_customer_key: 'key',
      oauth_signature_method: 'HMAC-SHA1',
      oauth_timestamp: Math.round(Date.now() / 1000),
      oauth_nonce: Date.now() + Math.random() * 100
    })
    req = {
      url: 'http://example.org/test',
      method: 'POST',
      connection: {
        encrypted: undefined
      },
      headers: {
        host: 'localhost'
      },
      body: ltiData
    }
    let signer = new HMAC_SHA1()
    //sign the fake request
    const signature = signer.build_signature(req, req.body, oauth_consumer_secret)
    req.body.oauth_signature = signature

    ltiController.strategyVerify(req, function(err, user) {
      should.not.exist(err)
      should.exist(user)
      user.should.have.property('user_id')
      // console.log('inside strategy verify callback', user.user_id)
      user.user_id.should.equal(ltiData.user_id)
      req.user = user
      done()
    })
  })

  it('lti _postLtiChain', function(done) {
    let result = ltiController._postLtiChain(req).then(() => {
      should.exist(req.visit)
      should.exist(req.activity)
      should.exist(req.assignment)
      should.exist(req.assignment.seedDataId)
      // console.log(req.assignment)
      //
      // console.log('after _postLtiChain ')
      done()
    })
  })
})
