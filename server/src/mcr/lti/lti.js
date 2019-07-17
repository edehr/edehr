import { Router } from 'express'
import Role from '../roles/roles'
import { ParameterError, AssignmentMismatchError, SystemError } from '../common/errors'
import { Text } from '../../config/text'
import { ltiVersions, LTI_BASIC } from './lti-defs'

const debug = require('debug')('server')
const CustomStrategy = require('passport-custom')
const lti = require('ims-lti')
const passport = require('passport')

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
  'lis_person_name_full',
  'lis_person_contact_email_primary'
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
  constructor (config, cc) {
    this.config = config
    this.assignmentController = cc.assignmentController
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
        console.log('----------------------   STRATEGY ', req.url)
        _this.strategyVerify(req, callback)
      }
      passport.use('ltiStrategy', new CustomStrategy(strategy))
      // serialize the user object into the session. Provide a function that
      // receives a user object and a done(err,id) callback
      passport.serializeUser(function (user, done) {
        debug('----------------------   SERIALIZE user', user.user_id)
        if (user && user._id) {
          let id = user._id.valueOf()
          debug('serializeUser id:' + id)
          done(null, id)
        } else {
          console.log('Can not serialize user', user)
          done('Can not serialize user')
        }
      })
      // deserializeUser is to take the user id stored in the session and
      // go find the user object
      passport.deserializeUser(function (id, done) {
        // debug('---------------------- DESERIALIZE id', id)
        _this.userController.read(id).then(results => {
          let user = results.user
          // debug('LTI deserializeUser result ' + (user ? user.user_id : 'none'))
          // debug('deserializeUser user', user)
          done(null, user)
        })
      })
      app.use(passport.initialize())
      app.use(passport.session())
      // let myLogger = function (req, res, next) {
      //   console.log('LOGGED')
      //   // console.log('Request Type:    ', req.method)
      //   // console.log('Request URL:     ', req.originalUrl)
      //   console.log('Request headers:   ', req.headers)
      //   console.log('Request session:   ', req.session)
      //   // console.log('Request _passport: ', req._passport.session )
      //   // console.log('Request cookie: ', req.cookie)
      //   // console.log('Request user:    ', (req.user ? req.user._id : ''))
      //   next()
      // }
      // app.use(myLogger)
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
    if (!_this.validateLti(req.body, callback)) {
      return
    }
    // store the LTI data for further processing after setting up the user
    var ltiData = (req.ltiData = req.body)
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
          var provider = new lti.Provider(ltiData, req.toolConsumer.oauth_consumer_secret)
          debug('strategyVerify validate msg with provider')
          provider.valid_request(req, function (err, isValid) {
            if (err) {
              debug('strategyVerify lti provider verify send error: ' + err.message)
              return callback(_this._createParameterError(req.ltiData, err.message), null)
            }
            let userId = ltiData['user_id']
            debug('strategyVerify find userId: ' + userId + ' consumer: ' + consumerKey)
            _this._findCreateUser(userId, req.toolConsumer, ltiData).then(user => {
              callback(null, user)
            })
          })
        })
    } catch (err) {
      debug('strategyVerify authentication error: ' + err.message)
      callback(_this._createSystemError(req.ltiData, err.message), null)
    }
  }

  validateLti (ltiData, callback) {
    const _this = this
    debug('strategyVerify validate request ')
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

  _findCreateUser (userId, toolConsumer, ltiData) {
    const _this = this
    return this.userController.findOne({
      $and: [{ user_id: userId }, { toolConsumer: toolConsumer._id }]
    }).then((foundUser, r) => {
      if (foundUser) {
        debug('Found user ' + foundUser._id)
        // will update the user record later
        return foundUser
      }
      debug('Create user ' + userId + JSON.stringify(ltiData, null, 2))
      let user = {
        user_id: ltiData.user_id,
        givenName: ltiData.lis_person_name_given,
        familyName: ltiData.lis_person_name_family,
        fullName: ltiData.lis_person_name_full,
        emailPrimary: ltiData.lis_person_contact_email_primary,
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
      debug('tool consumer is up to date ')
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
    console.log('in locat assignent with ', toolConsumerId)
    return this.assignmentController.locateAssignmentForStudent(externalId, toolConsumerId)
      .then(assignment => {
        if (!assignment) {
          if (role.isStudent) {
            let msg = Text.EdEHR_ASSIGNMENT_MISMATCH(toolConsumer.oauth_consumer_key, toolConsumer._id, externalId)
            debug('locateAssignment ' + msg)
            throw this._createAssignmentMismatchError(req.ltiData, msg)
          }
          let ltiData = req.ltiData
          let title = ltiData.resource_link_title
          // Get the default description for assignments from config.
          // The resource_link_description is used to describe the activity and using it for the
          // assignment too is confusing.
          return _this.assignmentController.createAssignment(externalId, toolConsumer, title)
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
      debug('updateActivity with assignment')
      return this.activityController.updateCreateActivity(
        req.ltiData,
        req.toolConsumer._id,
        req.assignment
      ).then(activity => {
        debug('store the activity in the req')
        req.activity = activity
      })
    }
  }

  updateVisit (req) {
    debug('updateVisit')
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
    let apiUrl = encodeURIComponent(req.protocol + '://' + req.get('host') + port + '/api')
    let route = req.assignment.ehrRoutePath || '/ehr'

    if (visit.isInstructor) {
      debug('Route to instructor page ' + JSON.stringify(req.ltiData, null, 2))
      route = '/instructor'
    }
    let url = this.config.clientUrl + route + '?visit=' + visit._id + '&apiUrl=' + apiUrl
    if (req.errors.length > 0) {
      let errs = req.errors.join('-')
      url += '&error=' + errs
    }
    req.ltiNextUrl = url
    return req
  }

  _postLtiChain (req) {
    const _this = this
    const db = true
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
      debug('have authenticated user. Now process the lti launch request')
      this._postLtiChain(req)
        .then((req) => {
          let url = req.ltiNextUrl
          debug(`ready to redirect to the ehr ${url}`)
          res.redirect(url)
        })
        .catch(err => {
          console.log('ERRRORRRR', err)
          next(err)
        })
    })
    return router
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

}
