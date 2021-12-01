import { Router } from 'express'
import Role from '../roles/roles'
import { ParameterError, AssignmentMismatchError, SystemError } from '../common/errors'
import { Text } from '../../config/text'
import { ltiVersions, LTI_BASIC } from './lti-defs'

const url = require('url')
const debug = require('debug')('server')
const debugFine = false
const logError = require('debug')('error')

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
  'lti_version'
]

const PROPS_LTI = [
  'lti_message_type',
  'lti_version',
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
  'lis_course_section_sourcedid',
  'resource_link_description',
  'resource_link_id',
  'resource_link_title',
  'roles',
]

export default class LTIController {
  constructor (config) {
    this.config = config
  }
  setSharedControllers(cc) {
    this.assignmentController = cc.assignmentController
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
  strategyVerify (req, callback) {
    const _this = this
    // It is necessary to use a different _req for validation in case
    // one is using postman
    const _req = this._postmanFormat(req) 
    if (!_this.validateLti(_req.body, callback)) {
      return
    }
    // store the LTI data for further processing after setting up the user
    var ltiData = (req.ltiData = _req.body)
    try {
      var consumerKey = ltiData['oauth_consumer_key']
      debug('strategyVerify find consumer by key ' + consumerKey)
      _this.consumerController.findOneConsumerByKey(consumerKey)
        .then(toolConsumer => {
          // Grave error to not have found a tool consumer
          if (!toolConsumer) {
            let message = 'Unsupported consumer key ' + consumerKey
            debug('strategyVerify ' + message)
            return callback(_this._createParameterError(req.ltiData, message))
          }
          req.toolConsumer = toolConsumer
          return toolConsumer
        })
        .then(() => {

          let debugLtiValidation = false
          let withDetailsCallback = undefined

          if (debugLtiValidation) {
            withDetailsCallback = function (details) {
              debug('LTI. Here are the details used to create the signature', details)
            }
            /*
            // mimic a little of what the provider does to verify the oauth signature
            let secret = req.toolConsumer.oauth_consumer_secret
            let {protocol} = req
            if (req.headers['x-forwarded-proto'] ==='https') {
              protocol = 'https'
            }

            let x_forwarded_proto = req.headers['x-forwarded-proto']
            let originalUrl = req.originalUrl || req.url
            let {encrypted} = req.connection
            const parsedUrl = url.parse(originalUrl, true)
            const hitUrl = protocol + '://' + req.headers.host + parsedUrl.pathname
            console.log('req.url', req.url)
            console.log('originalUrl', originalUrl)
            console.log('x_forwarded_proto', x_forwarded_proto)
            console.log('protocol', protocol)
            console.log('encrypted', encrypted)
            console.log('hitUrl', hitUrl)
            console.log('req.toolConsumer.oauth_consumer_secret', secret)
            console.log('ltiData.oauth_signature', ltiData.oauth_signature)
            */
          }
          let secret = req.toolConsumer.oauth_consumer_secret
          let provider = new lti.Provider(ltiData, secret, null, null, withDetailsCallback)
          if (debugFine) debug('strategyVerify validate msg with provider')
          provider.valid_request(_req, function (err, isValid) {
            if (err) {
              debug('strategyVerify lti provider verify send error: ' + err.message)
              let detailsCallback = function (details) {
                // console.log('LTI auth details', details)
              }
              let provider = new lti.Provider(ltiData, sec, null, null, detailsCallback)
              provider.valid_request(_req, function (err, isValid) {})
              return callback(_this._createParameterError(req.ltiData, err.message), null)
            }
            // let userId = ltiData['user_id']
            // debug('strategyVerify find userId: ' + userId + ' consumer: ' + consumerKey)
            _this._findCreateUser(req.toolConsumer, ltiData).then(user => {
              callback(null, user)
            })
          })
        })
    } catch (err) {
      logError('strategyVerify authentication error: ' + err.message)
      callback(_this._createSystemError(req.ltiData, err.message), null)
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
    if (!ltiData['custom_assignment']) {
      callback(_this._createAssignmentMismatchError(ltiData, Text.EdEHR_REQUIRES_CUSTOM))
      return false
    }
    return true
  }

  _findCreateUser (toolConsumer, ltiData) {
    const _this = this
    return this.userController.findOne({
      $and: [{ user_id: ltiData.user_id }, { toolConsumer: toolConsumer._id }]
    }).then((foundUser, r) => {
      if (foundUser) {
        if (debugFine) debug('Found user ' + foundUser._id)
        // will update the user record later
        return foundUser
      }
      debug('Create user ' + ltiData.user_id + JSON.stringify(ltiData, null, 2))
      let user = {
        user_id: ltiData.user_id,
        givenName: ltiData.lis_person_name_given,
        familyName: ltiData.lis_person_name_family,
        fullName: ltiData.lis_person_name_full,
        // emailPrimary: ltiData.lis_person_contact_email_primary,
        // ltiData: [JSON.stringify(ltiData)],
        consumerKey: toolConsumer.oauth_consumer_key,
        toolConsumer: toolConsumer._id
      }
      return _this.userController.create(user).then((newUser, r) => {
        // create returns a structure with the new user inside
        debug('created new user ' + newUser._id)
        return newUser
      })
    })
  }

  updateToolConsumer (req) {
    const ltiData = req.ltiData
    const toolConsumer = req.toolConsumer
    if (
      toolConsumer.tool_consumer_instance_guid !== ltiData.tool_consumer_instance_guid ||
      toolConsumer.tool_consumer_instance_name !== ltiData.tool_consumer_instance_name ||
      toolConsumer.tool_consumer_info_product_family_code !==
        ltiData.tool_consumer_info_product_family_code ||
      toolConsumer.tool_consumer_instance_description !== ltiData.tool_consumer_instance_description
    ) {
      debug('updateToolConsumer starting with ' + toolConsumer)
      toolConsumer.lti_version = ltiData.lti_version
      toolConsumer.tool_consumer_info_product_family_code =
        ltiData.tool_consumer_info_product_family_code
      toolConsumer.tool_consumer_info_version = ltiData.tool_consumer_info_version
      toolConsumer.tool_consumer_instance_guid = ltiData.tool_consumer_instance_guid
      toolConsumer.tool_consumer_instance_name = ltiData.tool_consumer_instance_name
      toolConsumer.tool_consumer_instance_description = ltiData.tool_consumer_instance_description
      debug('updateToolConsumer update tool consumer record ') // + JSON.stringify(toolConsumer))
      return toolConsumer.save()
    } else {
      if (debugFine) debug('tool consumer is up to date ')
      return Promise.resolve()
    }
  }

  updateOutcomeManagement (req) {
    return Promise.resolve(req)
    // see models/outcomes.js
  }

  locateAssignment (req) {
    const _this = this
    let externalId = req.ltiData.custom_assignment
    req.externalId = externalId
    let role = new Role(req.ltiData.roles)
    let toolConsumer = req.toolConsumer
    let toolConsumerId = toolConsumer._id
    // console.log('in locate learning object with ', toolConsumerId, externalId)
    return this.assignmentController.locateAssignmentForStudent(externalId, toolConsumerId)
      .then(assignment => {
        if (!assignment) {
          if (role.isStudent) {
            let msg = Text.EdEHR_ASSIGNMENT_MISMATCH(toolConsumer.oauth_consumer_key, externalId)
            debug('locateAssignment ' + msg)
            throw this._createAssignmentMismatchError(req.ltiData, msg)
          }
          let ltiData = req.ltiData
          let title = ltiData.resource_link_title
          // Get the default description for assignments from config.
          // The resource_link_description is used to describe the activity and using it for the
          // assignment too is confusing.
          let aAssignment = {
            resource_link_title: title,
            externalId: externalId,
            toolConsumer: toolConsumer
          }
          return _this.assignmentController.createAssignment(aAssignment)
        }
        return assignment
      })
      .then(assignment => {
        req.assignment = assignment
      })
  }

  updateActivity (req, results) {
    debug('updateActivity ' + JSON.stringify(req.assignment))
    if (req.assignment) {
      if (debugFine) debug('updateActivity with assignment')
      return this.activityController.updateCreateActivity(
        req.ltiData,
        req.toolConsumer._id,
        req.assignment
      ).then(activity => {
        if (debugFine) debug('store the activity in the req')
        req.activity = activity
      })
    }
  }

  updateVisit (req) {
    if (debugFine) debug('updateVisit')
    if(req.activity) {
      return this.visitController.updateCreateVisit(
        req.user,
        req.toolConsumer,
        req.activity,
        req.assignment,
        req.ltiData
      ).then(visit => {
        req.visit = visit
      })
    }
  }

  composeLtiNextUrl (req) {
    const toolConsumer = req.toolConsumer
    if (!req.visit) {
      throw new SystemError(Text.EdEHR_MISSING_VISIT(toolConsumer.oauth_consumer_key, toolConsumer._id) )
    }
    let visit = req.visit
    let port = req.get('port') ? ':' + req.get('port') : ''
    // let apiUrl = encodeURIComponent(req.protocol + '://' + req.get('host') + port + '/api')
    let apiUrl = this.config.apiUrl
    let route = req.assignment.ehrRoutePath || '/ehr'

    if (visit.isInstructor) {
      if (debugFine) debug('Route to instructor page ')// + JSON.stringify(req.ltiData, null, 2))
      route = '/instructor'
    }

    try {
      const tokenData = {
        consumerKey: visit.consumerKey,
        isInstructor: visit.isInstructor,
        isStudent: visit.isStudent,
        toolConsumerId: req.toolConsumer._id,
        visitId: visit._id
      }
      debug('LTI create token with', tokenData)
      const token = this.authUtil.createToken(tokenData)
      const refreshToken = this.authUtil.createRefreshToken(token)
      let ltiQuery = 'lti=' + (visit.isInstructor ? 'instructor' : (visit.isStudent ? 'student' : 'unknown'))
      req.refreshToken = refreshToken
      let url = this.config.clientUrl + route + `?${ltiQuery}&apiUrl=${apiUrl}&token=${refreshToken}`
      if (req.errors.length > 0) {
        let errs = req.errors.join('-')
        url += '&error=' + errs
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

  _postLtiChain (req) {
    const _this = this
    const db = false
    return Promise.resolve()
      .then(() => {
        if (db) console.log('Do update tool')
        return _this.updateToolConsumer(req)
      })
      .then(() => {
        if (db) console.log('Do updateOutcomeManagement')
        return _this.updateOutcomeManagement(req)
      })
      .then(() => {
        if (db) console.log('Do locateAssignment')
        return _this.locateAssignment(req)
      })
      .then(() => {
        if (db) console.log('Do update activity')
        return _this.updateActivity(req)
      })
      .then(() => {
        if (db) console.log('Do updateVisit')
        return _this.updateVisit(req)
      })
      .then(() => {
        if (db) console.log('Do composeLtiNextUrl')
        return _this.composeLtiNextUrl(req)
      })
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
          debug(`LTI ready to redirect to the ehr "${url}"`)
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
