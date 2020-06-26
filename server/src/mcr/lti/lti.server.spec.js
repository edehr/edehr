const should = require('should')
const mongoose = require('mongoose')
import HMAC_SHA1 from 'ims-lti/src/hmac-sha1'
import AssignmentController from '../assignment/assignment-controller'
import ActivityController from '../activity/activity-controller'
import AuthUtil from '../common/auth-util'
import VisitController from '../visit/visit-controller'
import UserController from '../user/user-controller'
import ConsumerController from '../consumer/consumer-controller'
import SeedDataController from '../seed/seedData-controller'
import LTIController from './lti'
import Helper from '../common/test-helper'
import Config from '../../config/config'
import Assignment from '../assignment/assignment'

const debug = require('debug')('server')
const logError = require('debug')('error')
const helper = new Helper()
const config = new Config('test')
const configuration = config.config
const act = new ActivityController()
const as = new AssignmentController(configuration)
const authUtil = new AuthUtil(configuration)
const vc = new VisitController()
const cc = new ConsumerController()
const uc = new UserController(configuration)
const sc = new SeedDataController()
const lcc = {
  activityController: act,
  assignmentController: as,
  authUtil,
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

function makeLtiData (consumerKeyIndex, externalId, asInstructor) {
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
    custom_assignment: externalId
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


let assignmentKey = '599'
let theConsumer
let theAssignment

/* global describe it */
describe('LTI controller testing', function () {
  before(function (done) {
    helper.before(done, mongoose)
  })
  after(function (done) {
    helper.afterDropDatabase(done, mongoose)
  })

  it('Create a tool consumer for testing ', function (done) {
    Helper.createConsumer(oauth_consumer_key[0], oauth_consumer_secret[0]).then(doc => {
      theConsumer = doc
      done()
    })
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
    ltiController = new LTIController(configuration, lcc)
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

  it('invalid lti data', function (done) {
    function expectErrorCallback (error) {
      should.exist(error)
      error.should.have.property('name')
      error.should.have.property('message')
      error.name.should.equal('AssignmentMismatchError')
      // debug(error.message)
      done()
    }
    let ltiData = Helper.sampleValidLtiData()
    delete ltiData.custom_assignment
    let result = ltiController.validateLti(ltiData, expectErrorCallback)
    should.fail(result)
    done()
  })

  it('do a lti strategyVerify', () => {
    let externalId = 'test_assignment_id_1'
    let ltiData = makeLtiData(0, externalId)
    let req = makeReq(ltiData)
    return strategyVerify(ltiController, req)
      .then((req) => {
        req.should.have.property('ltiData')
        req.should.have.property('user')
        let user = req.user
        user.should.have.property('user_id')
        debug('inside strategy verify callback', user.user_id)
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
    let externalId = 'test_assignment_id_2'
    let req = makeReq(makeLtiData(0, externalId))
    return strategyVerify(ltiController, req)
      .then((req) => {
        return ltiController._postLtiChain(req)
          .then((req) => {
            should.not.exist(req.ltiNextUrl)
          })
          .catch(err => {
            should.exist(err)
          })
      })
  })

  it('lti _postLtiChain verify assignment', function () {
    let externalId = 'test_assignment_id_1'
    let ltiData = makeLtiData(0, externalId, /* as instructor */ true)
    ltiData.resource_link_title = 'Test assignment'
    let req = makeReq(ltiData)
    return strategyVerify(ltiController, req)
      .then((req) => {
        return ltiController._postLtiChain(req)
          .then((req) => {
            debug('after post LIT')
            should.exist(req.user)
            should.exist(req.visit)
            should.exist(req.activity)
            should.exist(req.assignment)
            should.exist(req.assignment.seedDataId)
            debug('req.user', req.user)
            debug('req.visit', req.visit)
            debug('req.assignment', req.assignment)

            let visit = req.visit
            visit.should.have.property('isStudent')
            // should.be.true(user.isStudent)

            /*
      req.visit { isStudent: true,
isInstructor: false,
isDeveloper: false,
_id: 5cf1a1bbecff4b38aae9eb6f,
toolConsumer: 5cf1a1baecff4b38aae9eb6b,
user: 5cf1a1bbecff4b38aae9eb6d,
activity: 5cf1a1bbecff4b38aae9eb6e,
assignment: 5cf1a1baecff4b38aae9eb6c,
returnUrl: 'http://some.place.org',
createDate: 2019-05-31T21:50:51.091Z,
lastVisitDate: 2019-05-31T21:50:51.091Z,
__v: 0,
activityData:
{ submitted: false,
 evaluated: false,
 _id: 5cf1a1bbecff4b38aae9eb70,
 toolConsumer: 5cf1a1baecff4b38aae9eb6b,
 visit: 5cf1a1bbecff4b38aae9eb6f,
 createDate: 2019-05-31T21:50:51.117Z,
 lastDate: 2019-05-31T21:50:51.117Z,
 __v: 0,
 id: '5cf1a1bbecff4b38aae9eb70' } }
       */
          })
          .catch(err => {
            // debug('Error 1 .... ', err)
            should.not.exist(err)
          })
      })
  })


})
