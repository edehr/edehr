const should = require('should')
const mongoose = require('mongoose')
import { Text } from '../../config/text'
import HMAC_SHA1 from 'ims-lti/src/hmac-sha1'
import AssignmentController from '../assignment/assignment-controller'
import ActivityController from '../activity/activity-controller'
import AuthUtil from '../common/auth-util'
import FilesController from '../files/files-controller'
import VisitController from '../visit/visit-controller'
import UserController from '../user/user-controller'
import ConsumerController from '../consumer/consumer-controller'
import SeedDataController from '../seed/seedData-controller'
import LTIController from './lti'
import Helper from '../common/test-helper'
import applicationConfiguration from '../../config/config'
const configuration = applicationConfiguration('test')

const debug = require('debug')('testing')
const logError = require('debug')('error')
const helper = new Helper()
const act = new ActivityController()
const as = new AssignmentController(configuration)
const authUtil = new AuthUtil(configuration)
const fileC = new FilesController(configuration)
const vc = new VisitController()
const cc = new ConsumerController()
const uc = new UserController(configuration)
const sc = new SeedDataController()
const lcc = {
  activityController: act,
  assignmentController: as,
  authUtil,
  filesController: fileC,
  consumerController: cc,
  userController: uc,
  visitController: vc
}

const oauth_consumer_key = ['key1', 'key2']
const oauth_consumer_secret = ['secret1', 'secret1']

helper.setClear(false)

function makeReq (ltiData) {
  let req = {
    url: 'http://example.org/test',
    method: 'POST',
    connection: {
      encrypted: undefined
    },
    headers: {
      host: 'localhost'
    },
    protocol: 'unittest',
    errors: [],
    get: (key) => { return key },
    body: ltiData
  }
  let signer = new HMAC_SHA1()
  //sign the fake request
  req.body.oauth_signature = signer.build_signature(req, req.body, ltiData.oauth_consumer_secret)
  return req
}

function makeLtiData (consumerKeyIndex, asInstructor) {
  let ltiData = Helper.sampleValidLtiData()
  if (asInstructor) {
    ltiData.roles = 'instructor'
  }
  ltiData.oauth_consumer_key = oauth_consumer_key[consumerKeyIndex]
  ltiData.oauth_consumer_secret = oauth_consumer_secret[consumerKeyIndex]
  ltiData = Object.assign(ltiData, {
    resource_link_id: 'http://link-to-resource.com/resource',
    oauth_customer_key: 'key',
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: Math.round(Date.now() / 1000),
    oauth_nonce: Date.now() + Math.random() * 100,
  })
  return ltiData
}

function strategyVerify (ltiController, req) {
  return new Promise( (resolve, reject) => {
    ltiController.strategyVerify(req, function (err, user) {
      if (err) return reject(err)
      req.user = user
      resolve(req)
    })
  })
}

/* global describe it */
describe('LTI controller testing', function () {
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
  })
  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
  })

  it('Create a tool consumer for testing LTI', function (done) {
    let consumerDef = Helper.createConsumerDef(oauth_consumer_key[0], oauth_consumer_secret[0])
    let seedDef = Helper.createConsumerSeedDef()
    Helper.createConsumer(consumerDef, seedDef).then(doc => {
      // console.log('created a tool consumer for testing', doc)
      done()
    })
  })

  it('Retrieve created tool consumer for testing ', async () => {
    let tc = await Helper.getConsumer(oauth_consumer_key[0])
    should.exist(tc)
    tc.should.have.property('is_primary')
    tc.is_primary.should.equal(false)
    tc.should.have.property('tool_consumer_info_product_family_code')
    tc.tool_consumer_info_product_family_code.should.equal('Test')
  })

  it('Create an initial seed for consumer', function (done) {
    let sampleEhrData = Helper.sampleSeedDataSpec()
    sc.create(sampleEhrData)
      .then(doc => {
        done()
      })
  })

  let ltiController
  it('create LTI controller', function (done) {
    ltiController = new LTIController(configuration)
    ltiController.setSharedControllers(lcc)
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

  it('validate lti data', function (done) {
    function expectNoErrorCallback (error) {
      should.not.exist(error)
      done()
    }
    let ltiData = Helper.sampleValidLtiData()
    let result = ltiController.validateLti(ltiData, expectNoErrorCallback)
    should.ok(result)
    done()
  })

  function makeErrCB (done, errName, errMsg) {
    return function expectErrorCallback (error) {
      should.exist(error)
      error.should.have.property('name')
      error.should.have.property('message')
      error.name.should.equal(errName)
      error.message.should.equal(errMsg)
      // debug('expectErrorCallback', error.message)
      done()
    }
  }

  it('invalid lti data no assignment', function (done) {
    let ltiData = Helper.sampleValidLtiData()
    delete ltiData.custom_assignment
    let result = ltiController.validateLti(ltiData, makeErrCB(done, 'AssignmentMismatchError', Text.EdEHR_REQUIRES_CUSTOM))
    result.should.be.false
  })

  it('invalid lti data must have consumer key', function (done) {
    let ltiData = Helper.sampleValidLtiData()
    delete ltiData.oauth_consumer_key
    let result = ltiController.validateLti(ltiData, makeErrCB(done, 'ParameterError', Text.EdEHR_REQUIRES_KEY))
    result.should.be.false
  })

  it('invalid lti data must resource_link_id', function (done) {
    let ltiData = Helper.sampleValidLtiData()
    delete ltiData.resource_link_id
    let result = ltiController.validateLti(ltiData, makeErrCB(done, 'ParameterError', Text.EdEHR_REQUIRES_RESOURCE))
    result.should.be.false
  })
  it('invalid lti data user_id', function (done) {
    let ltiData = Helper.sampleValidLtiData()
    delete ltiData.user_id
    let result = ltiController.validateLti(ltiData, makeErrCB(done, 'ParameterError', Text.EdEHR_REQUIRES_USER))
    result.should.be.false
  })
  it('do a lti strategyVerify', () => {
    let ltiData = makeLtiData(0)
    let req = makeReq(ltiData)
    return strategyVerify(ltiController, req)
      .then((req) => {
        req.should.have.property('ltiData')
        req.should.have.property('user')
        let user = req.user
        user.should.have.property('user_id')
        // debug('inside strategy verify callback', user.user_id)
        user.user_id.should.equal(ltiData.user_id)
        req.should.have.property('toolConsumer')
        let toolConsumer = req.toolConsumer
        // verify the db has a new user
        return uc.findOne({
          $and: [{user_id: user.user_id}, {toolConsumer: toolConsumer._id}]
        })
      })
      .then((foundUser, r) => {
        should.exist(foundUser)
      })
      .catch((error) => {
        logError('post equivalent ', error)
        should.not.exist(error)
      })
  })

  it('lti _postLtiChain verify fail on assignment mismatch ', function () {
    let req = makeReq(makeLtiData(0))
    return strategyVerify(ltiController, req)
      .then((req) => {
        return ltiController._postLtiChain(req)
          .then((req) => {
            should.exist(req.user)
            should.exist(req.assignment.seedDataId)
            should.exist(req.ltiNextUrl)
          })
          .catch(err => {
            should.exist(err)
          })
      })
  })

  it('lti _postLtiChain verify assignment', function () {
    let ltiData = makeLtiData(0, /* as instructor */ true)
    ltiData.resource_link_title = 'Test assignment'
    let req = makeReq(ltiData)
    return strategyVerify(ltiController, req)
      .then((req) => {
        return ltiController._postLtiChain(req)
          .then((req) => {
            should.exist(req.user)
            should.exist(req.visit)
            should.exist(req.activity)
            should.exist(req.assignment)
            should.exist(req.assignment.seedDataId)
            let visit = req.visit
            visit.should.have.property('isStudent')
          })
          .catch(err => {
            // debug('Error 1 .... ', err)
            should.not.exist(err)
          })
      })
  })

  it('lti _postLtiChain verify wrong secret', function () {
    let ltiData = makeLtiData(0, /* as instructor */ true)
    ltiData.resource_link_title = 'Test assignment'
    ltiData.oauth_consumer_secret = 'wrong secret'
    let req = makeReq(ltiData)
    return strategyVerify(ltiController, req)
      .then((req) => {
        debug('ltiData', ltiData)
        debug('her')
        return ltiController._postLtiChain(req)
          .then((req) => {
            debug('req',req)
            should.not.exist(req.user)
          })
          .catch(err => {
            debug('Error inner .... ', err)
            should.not.exist(err)
          })
      })
      .catch(err => {
        debug('Expected Error 1 .... ', err.name, err.message)
        should.exist(err)
        err.should.have.property('name')
        err.name.should.equal('ParameterError')
        err.message.should.equal('Invalid Signature')
      })
  })

  it('lti tool changes', async () => {
    let ltiData = makeLtiData(0, /* as instructor */ true)
    ltiData.resource_link_title = 'Test assignment'
    ltiData.tool_consumer_info_product_family_code = 'Before'
    let req = makeReq(ltiData)
    await strategyVerify(ltiController, req)
    await ltiController._postLtiChain(req).catch(err => { should.not.exist(err) })
    should.exist(req.toolConsumer)
    req.toolConsumer.tool_consumer_info_product_family_code.should.equal('Before')
    // second round
    ltiData = makeLtiData(0, /* as instructor */ true)
    ltiData.resource_link_title = 'Test assignment'
    ltiData.tool_consumer_info_product_family_code = 'After'
    req = makeReq(ltiData)
    await strategyVerify(ltiController, req)
    await ltiController._postLtiChain(req).catch(err => { should.not.exist(err) })
    should.exist(req.toolConsumer)
    req.toolConsumer.tool_consumer_info_product_family_code.should.equal('After')
  })

})
