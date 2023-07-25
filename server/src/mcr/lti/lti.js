import { Router } from 'express'
import Role from '../roles/roles'
import { ParameterError, AssignmentMismatchError, SystemError } from '../common/errors'
import { Text } from '../../config/text'
import { ltiVersions, LTI_BASIC } from './lti-defs'
import { DEMO_CONSUMER_FAMILY_CODE} from '../demo/demo-controller'
import { logError} from '../../helpers/log-error'

const debug = require('debug')('server')
const logLti = require('debug')('lti')
const debugFine = false

const CustomStrategy = require('passport-custom')
const lti = require('ims-lti')
const passport = require('passport')

/*
Good resource for LTI parameters and what they mean and do
https://developer.itslearning.com/LTI_standard_parameters.html
 */
const PROPS_CONSUMER = [
  'tool_consumer_instance_guid',
  'tool_consumer_instance_name',
  'tool_consumer_info_product_family_code',
  'tool_consumer_instance_description',
]

const PROPS_LTI = [
  'lti_message_type',
  'lti_version'
]

const PROPS_USER = [
  'user_id',
  'lis_person_name_given',
  'lis_person_name_family',
  'lis_person_name_full'
  // 'lis_person_contact_email_primary'
]

let PROPS_CONTEXT = [
  'context_id',
  'context_label',
  'context_title',
  'context_type',
  'custom_assignment',
  'launch_presentation_return_url',
  // 'lis_course_section_sourcedid',
  'resource_link_description',
  'resource_link_id',
  'resource_link_title',
  'roles',
]

export default class LTIController {
  constructor (config) {
    this.config = config
  }
  setSharedControllers (cc) {
    this.assignmentController = cc.assignmentController
    this.activityController = cc.activityController
    this.authUtil = cc.authUtil
    this.visitController = cc.visitController
    this.activityController = cc.activityController
    this.userController = cc.userController
    this.consumerController = cc.consumerController
  }

  initializeApp (app) {
    const _this = this
    this.app = app
    app.lti = this
    return Promise.resolve().then(() => {
      let strategy = function (req, callback) {
        // console.log('----------------------   STRATEGY ', req.url)
        _this.strategyVerify(req, callback)
      }
      passport.use('ltiStrategy', new CustomStrategy(strategy))
      // serialize the user object into the session. Provide a function that
      // receives a user object and a done(err,id) callback
      passport.serializeUser(function (user, done) {
        if (debugFine) debug('----------------------   SERIALIZE user', user.user_id)
        if (user && user._id) {
          let id = user._id.valueOf()
          if (debugFine) debug('serializeUser id:' + id)
          done(null, id)
        } else {
          console.error('Can not serialize user', user)
          done('Can not serialize user')
        }
      })
      // deserializeUser is to take the user id stored in the session and
      // go find the user object
      passport.deserializeUser(function (id, done) {
        if (debugFine) debug('---------------------- DESERIALIZE id', id)
        _this.userController.read(id).then(results => {
          let user = results.user
          // debug('LTI deserializeUser result ' + (user ? user.user_id : 'none'))
          // debug('deserializeUser user', user)
          done(null, user)
        })
      })
      app.use(passport.initialize())
      app.use(passport.session())
    })
  }

  /**
   * Perform validation and LTI authentication and then setup user.
   * Place the user, tool consumer and LTI data into req for further processing
   * @param req
   * @param callback
   */
  async strategyVerify (req, callback) {
    // It is necessary to use a different _req for validation in case
    // one is using postman
    const _req = this._postmanFormat(req)
    if (!this.validateLti(_req.body, callback)) {
      logLti('LTI validation failed on',  _req.body)
      return
    }
    // store the LTI data for further processing after setting up the user
    const ltiData = (req.ltiData = _req.body)
    logLti(ltiData)
    try {
      const consumerKey = ltiData['oauth_consumer_key']
      debug('strategyVerify find consumer by key ' + consumerKey)
      const toolConsumer = await this.consumerController.findOneConsumerByKey(consumerKey)
      // Grave error to not have found a tool consumer
      if (!toolConsumer) {
        let message = Text.EdEHR_UNKNOWN_KEY(consumerKey)
        logError('strategyVerify no consumer' + message)
        callback(this._createParameterError(ltiData, message))
        return
      }
      req.toolConsumer = toolConsumer
      const withDetailsCallback = logLti.enabled ? function (details) {
        logLti('LTI. Here are the details used to create the signature', details)
      } : undefined
      let secret = req.toolConsumer.oauth_consumer_secret
      debug('strategyVerify secret', secret)
      let provider = new lti.Provider(ltiData, secret, null, null, withDetailsCallback)
      logLti('strategyVerify validate msg with provider')
      provider.valid_request(_req,  async (err, isValid) => {
        if (err) {
          logError('strategyVerify invalid lti request ' + err.message)
          callback(this._createParameterError(req.ltiData, err.message), null)
          return
        }
        // let userId = ltiData['user_id']
        // debug('strategyVerify find userId: ' + userId + ' consumer: ' + consumerKey)
        await this._findCreateUser(req.toolConsumer, ltiData).then(user => {
          logLti('strategyVerify verified and found userId: ', user)
          callback(null, user)
        })
      })
    } catch (err) {
      logError('strategyVerify authentication error: ' + err.message)
      callback(this._createSystemError(req.ltiData, err.message), null)
    }
  }

  validateLti (ltiData, callback) {
    const _this = this
    if (debugFine) debug('strategyVerify validate request ')
    function invalid (message) {
      callback(_this._createParameterError(ltiData, message))
      return false
    }
    if (!ltiData.resource_link_id) {
      return invalid(Text.EdEHR_REQUIRES_RESOURCE)
    }
    if (!ltiData.user_id) {
      return invalid(Text.EdEHR_REQUIRES_USER)
    }
    if (!ltiVersions().includes(ltiData.lti_version)) {
      return invalid(Text.EdEHR_REQUIRES_LTI)
    }
    if (ltiData.lti_message_type !== LTI_BASIC) {
      return invalid(Text.EdEHR_REQUIRES_TYPE(LTI_BASIC))
    }
    let role = new Role(ltiData.roles)
    if (!role.isValid) {
      return invalid(Text.EdEHR_REQUIRES_ROLE)
    }
    if (!ltiData['oauth_consumer_key']) {
      return invalid(Text.EdEHR_REQUIRES_KEY)
    }
    if (!ltiData['context_id']) {
      return invalid(Text.EdEHR_REQUIRES_CONTEXT)
    }
    return true
  }

  _findCreateUser (toolConsumer, ltiData) {
    const _this = this
    let userDate = {
      user_id: ltiData.user_id,
      givenName: ltiData.lis_person_name_given,
      familyName: ltiData.lis_person_name_family,
      fullName: ltiData.lis_person_name_full,
      consumerKey: toolConsumer.oauth_consumer_key,
      toolConsumer: toolConsumer._id
    }
    logLti('_findCreateUser ltiData user data ', JSON.stringify(userDate, null, 2))
    return this.userController.findOne({
      $and: [{ user_id: ltiData.user_id }, { toolConsumer: toolConsumer._id }]
    }).then((foundUser, r) => {
      if (foundUser) {
        logLti('_findCreateUser found user', foundUser)
        if (debugFine) debug('Found user ' + foundUser._id)
        // will update the user record later
        return foundUser
      }
      return _this.userController.create(userDate)
        .then((newUser, r) => {
          // create returns a structure with the new user inside
          logLti('A new user has been created', newUser._id)
          return newUser
        })
    })
  }

  async updateToolConsumer (req) {
    const ltiData = req.ltiData
    const toolConsumer = req.toolConsumer
    if (debugFine) debug('updateToolConsumer toolConsumer ', toolConsumer)
    if (debugFine) debug('updateToolConsumer vs ltiData ', ltiData)
    if (
      toolConsumer.tool_consumer_instance_guid !== ltiData.tool_consumer_instance_guid ||
      toolConsumer.tool_consumer_instance_name !== ltiData.tool_consumer_instance_name ||
      toolConsumer.tool_consumer_info_product_family_code !==
        ltiData.tool_consumer_info_product_family_code ||
      toolConsumer.tool_consumer_instance_description !== ltiData.tool_consumer_instance_description
    ) {
      debug('updateToolConsumer toolConsumer ')
      if (debugFine) debug('updateToolConsumer starting with ' + toolConsumer)
      toolConsumer.lti_version = ltiData.lti_version
      toolConsumer.tool_consumer_info_product_family_code =
        ltiData.tool_consumer_info_product_family_code
      toolConsumer.tool_consumer_info_version = ltiData.tool_consumer_info_version
      toolConsumer.tool_consumer_instance_guid = ltiData.tool_consumer_instance_guid
      toolConsumer.tool_consumer_instance_name = ltiData.tool_consumer_instance_name
      toolConsumer.tool_consumer_instance_description = ltiData.tool_consumer_instance_description
      // is_primary is now required field. If the previous creation of the consumer did not have this field set
      // the save below will fail. So we must make sure the is_primary field contains a boolean value.
      // The Demo consumers all shared the same family code.
      if (toolConsumer.is_primary === undefined) {
        toolConsumer.is_primary= toolConsumer.tool_consumer_info_product_family_code === DEMO_CONSUMER_FAMILY_CODE
      }
      if (debugFine) debug('updateToolConsumer update tool consumer record ', toolConsumer)
      await toolConsumer.save()
      req.toolConsumer = await this.consumerController.findOneConsumerByKey(toolConsumer.oauth_consumer_key)
      if (debugFine) debug('updateToolConsumer update req ', req.toolConsumer)
    } else {
      if (debugFine) debug('tool consumer is up to date ')
      return Promise.resolve()
    }
  }

  async updateUser (req) {
    const ltiData = req.ltiData
    const user = req.user
    if (debugFine) debug('updateUser user ', user)
    if (debugFine) debug('updateUser vs ltiData ', ltiData)
    if (
      user.givenName !== ltiData.lis_person_name_given ||
      user.familyName !== ltiData.lis_person_name_family ||
      user.fullName !== ltiData.lis_person_name_full
    ) {
      user.givenName = ltiData.lis_person_name_given
      user.familyName = ltiData.lis_person_name_family
      user.fullName = ltiData.lis_person_name_full
      if (debugFine) debug('update user ', user)
      await user.save()
      const response = await this.userController.read(user._id)
      req.user = response.user
      if (debugFine) debug('update user req.user', req.user)
      return Promise.resolve()
    }
  }

  updateOutcomeManagement (req) {
    return Promise.resolve(req)
    // see models/outcomes.js
  }

  // async updateActivity (req) {
  //   if (debugFine) debug('updateActivity with assignment')
  //   req.activity = this.activityController.updateCreateActivity(req.ltiData, req.toolConsumer._id)
  // }

  async updateVisit (req) {
    if (debugFine) debug('updateVisit')
    if (req.activity) {
      const visit = await this.visitController.updateCreateVisit(
        req.user,
        req.toolConsumer,
        req.activity._id,
        req.ltiData.roles,
        req.ltiData.launch_presentation_return_url
      )
      await this.activityController.updateActivityVisit(req.activity._id, visit._id)
      req.visit = visit
    }
  }

  composeLtiNextUrl (req) {
    const toolConsumer = req.toolConsumer
    if (!req.visit) {
      throw new SystemError(Text.EdEHR_MISSING_VISIT(toolConsumer.oauth_consumer_key, toolConsumer._id) )
    }
    let visit = req.visit
    let route = '/ehr'
    let params = []
    // the DemoController adds a flag to the lti data
    if (req.ltiData.isDemoLti) {
      // pass this flag onto the client
      params.push('isDemoLti=true')
    }
    if (req.ltiData.demo_lobjId) {
      // pass this flag onto the client
      params.push('demo_lobjId='+ req.ltiData.demo_lobjId)
    }
    if (req.ltiData.appType) {
      // pass this flag onto the client
      params.push('appType='+ req.ltiData.appType)
    }
    if (visit.isInstructor) {
      if (debugFine) debug('Route to instructor page ')// + JSON.stringify(req.ltiData, null, 2))
      route = '/lms-instructor-activity'
      params.push('activityId=' + visit.activity._id)
    }
    try {
      const tokenData = {
        consumerKey: visit.consumerKey,
        isInstructor: visit.isInstructor,
        isStudent: visit.isStudent,
        returnUrl: visit.returnUrl,
        toolConsumerId: req.toolConsumer._id,
        userId: visit.user,
        visitId: visit._id
      }
      debug('LTI create token with', tokenData)
      const token = this.authUtil.createToken(tokenData, this.config.authTokenLives)
      const refreshToken = this.authUtil.createRefreshToken(token)
      params.push('lti=' + (visit.isInstructor ? 'instructor' : 'student'))
      params.push('token='+ refreshToken)
      req.refreshToken = refreshToken
      if (req.errors.length > 0) {
        let errs = req.errors.join('-')
        params.push('error=' + errs)
      }
      let url = this.config.clientUrl + route
      if (params.length> 0) {
        url += '?' + params.join('&')
      }
      if (debugFine) debug(`LTI redirect url is "${url}`)
      req.ltiNextUrl = url
      return req
    }
    // TODO: implement AuthError handling
    catch (err) {
      throw new SystemError(err)
    }
  }

  async _postLtiChain (req) {
    const _this = this
    const db = false
    if (db) console.log('Do update tool')
    await _this.updateToolConsumer(req)
    if (db) console.log('Do update user')
    await _this.updateUser(req)
    if (db) console.log('Do update activity and course')
    // update activity may create a new Course object too.
    // await _this.updateActivity(req)
    req.activity = await this.activityController.updateCreateActivity(req.ltiData, req.toolConsumer._id)
    if (db) console.log('Do updateVisit')
    await _this.updateVisit(req)
    let activityRecord = await this.activityController.getActivityRecord(req.visit)
    if (db) console.log('Do composeLtiNextUrl', activityRecord)
    await _this.composeLtiNextUrl(req, activityRecord)
    return req
  }

  route () {
    const router = new Router()
    router.get('/', (req, res) => {
      res.status(200).send('OK')
    })
    router.post('/', passport.authenticate('ltiStrategy'), (req, res, next) => {
      req.errors = []
      if (debugFine) debug('have authenticated user. Now process the lti launch request')
      this._postLtiChain(req)
        .then((req) => {
          let url = req.ltiNextUrl
          const refreshToken = req.refreshToken
          debug('LTI ready to redirect to the ehr')
          // When the demo-controller redirects to LTI and this LTI controller uses redirect (note that is a
          // POST sending a POST that would redirect) the redict results in a 404 error.
          // So, instead return to the demo controller enough information to get into the ehr
          if (req.body.demoRedirect) {
            res.status(200).json({refreshToken, url})
          } else {
            res.redirect(url)
          }
        })
        .catch(err => {
          logError(`ERRRORRRR ${err}`)
          next(err)
        })
    })
    return router
  }

  _makeSignature (req, res) {
    if(req.body) {
      // console.log('req.body >>', req.body)
      try {
        let signer = new HMAC_SHA1()
        const oauth_signature = signer.build_signature(
          req,
          req.body,
          req.body.oauth_consumer_secret
        )
        res.status(200).json({ oauth_signature })
      }
      catch (err) {
        req.status(500).send(err)
      }
    }
  }

  _extractLtiData (props, src, dest) {
    dest = dest || {}
    props.forEach( p => dest[p] = src[p])
    return dest
  }

  _createErrorData (ltiData) {
    let data = {
      consumer: {},
      course: {},
      lti: {},
      user: {}
    }
    this._extractLtiData(PROPS_CONSUMER, ltiData, data.consumer)
    this._extractLtiData(PROPS_LTI, ltiData, data.lti)
    this._extractLtiData(PROPS_CONTEXT, ltiData, data.course)
    this._extractLtiData(PROPS_USER, ltiData, data.user)
    return data
  }

  _createAssignmentMismatchError (ltiData, msg) {
    let errData = this._createErrorData(ltiData)
    return new AssignmentMismatchError(msg, errData)
  }
  _createParameterError (ltiData, msg) {
    let errData = this._createErrorData(ltiData)
    return new ParameterError(msg, errData)
  }
  _createSystemError (ltiData, msg) {
    let errData = this._createErrorData(ltiData)
    return new SystemError(msg, errData)
  }

  /**
   * @method _postmanFormat
   * @param {*} req
   * @description Formats and return a new _req object, in case the request is coming from postman.
   * This happens since postman needs an API call so that the request is signed and, therefore the request needs to be
   * equal for both of the requests, which is difficult. Therefore, this method assigns an _req object passed to the body
   * which reflects the same value as used in the other method. If the request is not from postman's user-agent,
   * then it returns the original _req.
   */
  _postmanFormat (req) {
    const isPostman = req.headers['user-agent'] && req.headers['user-agent'].includes('PostmanRuntime')
    if (isPostman) {
      req.body.debug = true
      const _req = req.body._req
      delete req.body._req
      _req.body = req.body.body
      return _req
    }
    return req
  }

}
