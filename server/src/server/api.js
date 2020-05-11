import { Router } from 'express'
import moment from 'moment'
import cors from 'cors'
import dbSeeder from '../config/lib/dbSeeder'
import { AssignmentMismatchError } from '../mcr/common/errors'
import ActivityController from '../mcr/activity/activity-controller'
import ActivityDataController from '../mcr/activity-data/activity-data-controller'
import AdminController from '../mcr/admin/admin-controller'
import AssignmentController from '../mcr/assignment/assignment-controller'
import AuthController from '../mcr/auth/auth-controller'
import ConsumerController from '../mcr/consumer/consumer-controller'
import FeedbackController from '../mcr/feedback/feedback-controller'
import IntegrationController from '../mcr/integration/integration-controller'
import LTIController from '../mcr/lti/lti'
import LookaheadController from '../mcr/lookahead/lookahead-controller'
import PlaygroundController from '../mcr/playground/playground-controller'
import UserController from '../mcr/user/user-controller.js'
import VisitController from '../mcr/visit/visit-controller'
import SeedDataController from '../mcr/seed/seedData-controller'
import { validatorMiddlewareWrapper, adminLimiter, localhostOnly, isAdmin } from '../helpers/middleware'
import demoSeeder from '../config/lib/demoSeeder'
import DemoController from '../mcr/demo/demo-controller'

// Sessions and session cookies
// express-session stores session data here on the server and only puts session id in the cookie
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const uuid = require('uuid/v4')

const debug = require('debug')('server')

export function apiMiddle (app, config) {
  const fileStoreOptions = {}
  if (config.sessionPath) {
    fileStoreOptions.path = config.sessionPath
  }
  if (config.sessionTTL) {
    fileStoreOptions.ttl = config.sessionTTL
  }
  app.sessionStore = new FileStore(fileStoreOptions)

  app.use(
    session({
      genid: req => {
        // debug('Inside the session middleware req.sessionID ' + req.sessionID)
        let guid = uuid()
        // debug('------------------ SESSION genid ' + guid)
        return guid
      },
      cookie: config.cookieSettings,
      name: 'EdEhr.cookie',
      store: app.sessionStore,
      secret: config.cookieSecret,
      resave: false,
      saveUninitialized: false
    })
  )
  if (config.traceApiCalls) {
    app.use(function (req, res, next) {
      debug(moment().format('YYYY/MM/DD, h:mm:ss.SSS a'), req.method, ' Url:', req.url)
      next()
    })
  }

  const corsOptions = setupCors(config)
  const admin = new AdminController()
  const act = new ActivityController()
  const acc = new ActivityDataController()
  const as = new AssignmentController(config)
  const auth = new AuthController(config)
  const fc = new FeedbackController(config)
  const look = new LookaheadController()
  const vc = new VisitController()
  const cc = new ConsumerController()
  const uc = new UserController(config)
  const lcc = {
    activityController: act,
    assignmentController : as,
    authController: auth,
    consumerController : cc,
    userController: uc,
    visitController: vc
  }
  const lti = new LTIController(config, lcc)
  const ic = new IntegrationController()
  const pc = new PlaygroundController()
  const sd = new SeedDataController()
  const demo = new DemoController()
  const middleWare = [
    cors(corsOptions),
    validatorMiddlewareWrapper(auth)
  ]
  const adminMiddleware = [
    cors(corsOptions),
    adminLimiter,
    validatorMiddlewareWrapper(auth),
    isAdmin
  ]

  const localhostOnlyAdminMiddleware = [
    cors(corsOptions),
    localhostOnly,
    // adminLimiter,
    validatorMiddlewareWrapper(auth),
    isAdmin
  ]

  return Promise.resolve()
    .then(() => {
      demoSeeder()
      if (config.seedDB) {
        debug('seeding is enabled')
        return dbSeeder()
      }
    })
    .then(() => {
      if (config.seedDB) {
        debug('demo seeding done')
      }
    })
    .then(admin.initializeApp(app))
    .then(lti.initializeApp(app))
    .then(cc.initializeApp(config.defaultConsumerKey))
    .then(() => {
      const api = Router()
      // for local and dev only
      api.use('/admin', adminMiddleware, admin.route())
      api.use('/integrations', adminMiddleware, ic.route())
      // Admin playground, for localhost-only tests  
      api.use('/playground', localhostOnlyAdminMiddleware, pc.route())
      // External API
      api.use('/launch_lti', lti.route())
      api.use('/api/launch_lti', lti.route())
      api.use('/api/demo', cors(corsOptions), demo.route())
      // Inside API
      api.use('/activities', middleWare, act.route())
      api.use('/activity-data', middleWare, acc.route())
      api.use('/assignments', middleWare, as.route())
      api.use('/feedback', middleWare, fc.route())
      api.use('/consumers', middleWare, cc.route())
      api.use('/lookahead', middleWare, look.route())
      api.use('/users', middleWare, uc.route())
      api.use('/visits', middleWare, vc.route())
      api.use('/seed-data', middleWare, sd.route())
      // for use behind a proxy:
      api.use('/api/activities', middleWare, act.route())
      api.use('/api/activity-data', middleWare, acc.route())
      api.use('/api/assignments', middleWare, as.route())
      api.use('/api/consumers', middleWare, cc.route())
      api.use('/api/feedback', middleWare, fc.route())
      api.use('/api/lookahead', middleWare, look.route())
      api.use('/api/users', middleWare, uc.route())
      api.use('/api/visits', middleWare, vc.route())
      api.use('/api/seed-data', middleWare, sd.route())
      api.use('/api/auth', cors(corsOptions), auth.route())
      return api
    })
}
  
export function apiError (app, config) {
  // error handlers
  app.use(logErrors)
  app.use(clientErrorHandler)
  app.use(errorHandler)
  
  function logErrors (err, req, res, next) {
    console.error(`Error name: ${err.name} message: ${err.message}`)
    next(err)
  }
  
  function clientErrorHandler (err, req, res, next) {
    // import {AssignmentMismatchError, ParameterError, SystemError} from '../utils/errors'
    if (err.name === AssignmentMismatchError.NAME()) {
      err.message += ' -- AssignmentMismatchError'
      let status = 400
      res.status(status)
      res.render('server-errors/error', {message: err.message, status: status, errorData: JSON.stringify(err.errorData)})
    } else {
      next(err)
    }
  }

  function errorHandler (err, req, res, next) {
    let status = err.status || 500
    let errorData = err.errorData || {}
    res.status(status)
    res.render('server-errors/error', {message: err.message, status: status, errorData: JSON.stringify(errorData)})
  }
}

function setupCors (config) {
  var whitelist = [] // 'http://localhost:28000', 'http://localhost:27000']
  whitelist.push(config.clientUrl)
  whitelist.push(config.apiUrl)
  var corsOptionsDelegate = function (req, callback) {
    var corsOptions
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
      corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
      corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
  }
  return corsOptionsDelegate
}
