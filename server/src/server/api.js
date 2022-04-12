import { Router } from 'express'
import moment from 'moment'
import cors from 'cors'
import dbSeeder from '../config/lib/dbSeeder'
import { AssignmentMismatchError } from '../mcr/common/errors'
import {
  validatorMiddlewareWrapper,
  adminLimiter,
  localhostOnly,
  isAdmin
} from '../helpers/middleware'
import ActivityController from '../mcr/activity/activity-controller'
import ActivityDataController from '../mcr/activity-data/activity-data-controller'
import AdminController from '../mcr/admin/admin-controller'
import AssignmentController from '../mcr/assignment/assignment-controller'
import AuthController from '../mcr/auth/auth-controller'
import AuthUtil from '../mcr/common/auth-util'
import ConsumerController from '../mcr/consumer/consumer-controller'
import DemoController from '../mcr/demo/demo-controller'
import FeedbackController from '../mcr/feedback/feedback-controller'
import FilesController from '../mcr/files/files-controller'
import IntegrationController from '../mcr/integration/integration-controller'
import LookaheadController from '../mcr/lookahead/lookahead-controller'
import LTIController from '../mcr/lti/lti'
import MetricController, { metricMiddle } from '../mcr/metric/metric-controller'
import PlaygroundController from '../mcr/playground/playground-controller'
import SeedDataController from '../mcr/seed/seedData-controller'
import UserController from '../mcr/user/user-controller.js'
import VisitController from '../mcr/visit/visit-controller'
import UtilController from '../mcr/util/util-controller'
// Sessions and session cookies
// express-session stores session data here on the server and only puts session id in the cookie
const session = require('express-session')
const FileStore = require('session-file-store')(session)
// const uuid = require('uuid/v4')
import { v4 as uuidv4 } from 'uuid'

const debug = require('debug')('server')
const logError = require('debug')('error')

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
        let guid = uuidv4()
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
  app.use(metricMiddle)

  // const corsOptions = setupCors(config)
  const corsOptions = {
    origin: [ config.clientUrl, config.apiUrl ]
  }
  debug('corsOptions', corsOptions)
  const authUtil = new AuthUtil(config)
  const admin = new AdminController(authUtil)
  const act = new ActivityController()
  const acc = new ActivityDataController()
  const as = new AssignmentController(config)
  const auth = new AuthController(authUtil)
  const fc = new FeedbackController(config)
  const fileC = new FilesController(config)
  const look = new LookaheadController()
  const vc = new VisitController()
  const cc = new ConsumerController()
  const uc = new UserController(config)
  const sd = new SeedDataController()
  const lti = new LTIController(config)
  const ic = new IntegrationController()
  const pc = new PlaygroundController()
  const demo = new DemoController(config)
  const metric = new MetricController(config)
  const utils = new UtilController()

  const lcc = {
    activityController: act,
    activityDataController: acc,
    assignmentController : as,
    authUtil,
    consumerController : cc,
    filesController: fileC,
    seedController: sd,
    userController: uc,
    visitController: vc
  }
  lti.setSharedControllers(lcc)
  cc.setSharedControllers(lcc)
  demo.setSharedControllers(lcc)

  const middleWare = [
    cors(corsOptions),
    validatorMiddlewareWrapper(authUtil)
  ]
  const adminMiddleware = [
    cors(corsOptions),
    adminLimiter,
    validatorMiddlewareWrapper(authUtil),
    isAdmin
  ]

  const localhostOnlyAdminMiddleware = [
    cors(corsOptions),
    localhostOnly,
    // adminLimiter,
    validatorMiddlewareWrapper(authUtil),
    isAdmin
  ]

  return Promise.resolve()
    .then(() => {
      if (config.seedDB) {
        debug('seeding is enabled')
        return dbSeeder()
      }
    })
    .then(() => {
      if (config.seedDB) {
        debug('seeding done')
      }
    })
    .then(lti.initializeApp(app))
    .then(cc.initializeApp(config.defaultConsumerKey))
    .then(() => {
      const api = Router()
      // for local and dev only
      api.use('/integrations', adminMiddleware, ic.route())
      // Admin playground, for localhost-only tests  
      api.use('/playground', localhostOnlyAdminMiddleware, pc.route())
      // External API
      api.use('/launch_lti', lti.route())
      api.use('/api/launch_lti', lti.route())
      api.use('/api/demo', cors(corsOptions), demo.route())
      api.use('/api/files/public', cors(corsOptions), fileC.publicRoute())

      api.use('/api/metric', cors(corsOptions), metric.route())
      api.use('/metric', cors(corsOptions), metric.route())

      // Inside API
      api.use('/activities', middleWare, act.route())
      api.use('/activity-data', middleWare, acc.route())
      api.use('/assignments', middleWare, as.route())
      api.use('/feedback', middleWare, fc.route())
      api.use('/files', middleWare, fileC.route())
      api.use('/consumers', middleWare, cc.route())
      api.use('/lookahead', middleWare, look.route())
      api.use('/users', middleWare, uc.route())
      api.use('/visits', middleWare, vc.route())
      api.use('/seed-data', middleWare, sd.route())
      // for use behind a proxy:
      api.use('/utils', cors(corsOptions), utils.route(config))
      api.use('/api/utils', cors(corsOptions), utils.route(config))

      api.use('/api/activities', middleWare, act.route())
      api.use('/api/activity-data', middleWare, acc.route())
      api.use('/api/assignments', middleWare, as.route())
      api.use('/api/consumers', middleWare, cc.route())
      api.use('/api/feedback', middleWare, fc.route())
      api.use('/api/files', middleWare, fileC.route())
      api.use('/api/lookahead', middleWare, look.route())
      api.use('/api/users', middleWare, uc.route())
      api.use('/api/visits', middleWare, vc.route())
      api.use('/api/seed-data', middleWare, sd.route())
      api.use('/api/auth', cors(corsOptions), auth.route())
      api.use('/api/admin', cors(corsOptions), admin.route())
      api.use('/api/home', cors(corsOptions), homeRoute(config))

      return api
    })
}

function homeRoute (config) {
  const router = new Router()
  router.get('/', (req, res) => {
    const homeData = {}
    homeData.appTitle = config.appTitle
    homeData.appVersion = config.appVersion
    homeData.ehrMaxFileSize = config.ehrMaxFileSize
    homeData.ehrFileTypes = config.ehrFileTypes
    homeData.host = config.host
    homeData.isDevelop = config.isDevelop
    homeData.isProduction = config.isProduction
    homeData.date = Date.now()
    res.json(homeData)
  })
  return router
}
export function apiError (app, config) {
  // error handlers
  app.use(logErrors)
  app.use(clientErrorHandler)
  app.use(errorHandler)
  
  function logErrors (err, req, res, next) {
    logError(`EdEHR server error name: "${err.name}" message: "${err.message}" on path: ${req.path}`)
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
    debug('API errorHandler ', err.message, err.status, err.errorData, res.status)
    let status = err.status || 500
    let errorData = err.errorData || {}
    let json =  {message: err.message, status: status, errorData: JSON.stringify(errorData)}
    res.status = status
    res.json(json)
    // Returning a rendered html page is awkward for ajax clients. Return json and let the client decide how to format it.
    // res.render('server-errors/error',json)
  }
}

// TODO can remove setupCors
// eslint-disable-next-line no-unused-vars
function setupCors (config) {
  // From https://expressjs.com/en/resources/middleware/cors.html
  const allowedList = [] // 'http://localhost:28000', 'http://localhost:27000']
  allowedList.push(config.clientUrl)
  allowedList.push(config.apiUrl)
  debug('Setup CORS with allowedList:', allowedList)
  return function (req, callback) {
    let corsOptions
    if (allowedList.indexOf(req.header('Origin')) !== -1) {
      corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
      console.log('CORS request rejected for req.path', req.path, 'req.header', req.header('Origin'))
      corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
  }
}
