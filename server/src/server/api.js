import { Router } from 'express'
import cors from 'cors'
// To Do refactor dbSeeder to export named function
import dbSeeder from '../db/dbSeeder'
import { AssignmentMismatchError } from '../mcr/common/errors'
import {
  validatorMiddlewareWrapper,
  // adminLimiter,
  localhostOnly,
  isAdmin
} from '../helpers/middleware'
import ActivityController from '../mcr/activity/activity-controller'
import ActivityDataController from '../mcr/activity-data/activity-data-controller'
import AssignmentController from '../mcr/assignment/assignment-controller'
import AuthController from '../mcr/auth/auth-controller'
import AuthUtil from '../mcr/common/auth-util'
import ConsumerController from '../mcr/consumer/consumer-controller'
import DemoController from '../mcr/demo/demo-controller'
import FeedbackController from '../mcr/feedback/feedback-controller'
import FilesController from '../mcr/files/files-controller'
import LookaheadController from '../mcr/lookahead/lookahead-controller'
import LTIController from '../mcr/lti/lti'
import MetricController  from '../mcr/metric/metric-controller'
import PlaygroundController from '../mcr/playground/playground-controller'
import SeedDataController from '../mcr/seed/seedData-controller'
import UserController from '../mcr/user/user-controller.js'
import VisitController from '../mcr/visit/visit-controller'
import UtilController from '../mcr/util/util-controller'
import { apiTrace } from './trace-api'
// Sessions and session cookies
// express-session stores session data here on the server and only puts session id in the cookie
const session = require('express-session')
const FileStore = require('session-file-store')(session)
// const uuid = require('uuid/v4')
import { v4 as uuidv4 } from 'uuid'

const debug = require('debug')('server')
import { logError} from '../helpers/log-error'

export function apiMiddle (app, config) {
  const fileStoreOptions = {}
  if (config.sessionPath) {
    fileStoreOptions.path = config.sessionPath
  }
  if (config.sessionTTL) {
    fileStoreOptions.ttl = config.sessionTTL
  }
  app.sessionStore = new FileStore(fileStoreOptions)

  app.use(session({
    // TODO Remove the session and cookie stuff because it is not used
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
  }))

  apiTrace(app, config)

  // const corsOptions = setupCors(config)
  const corsOptions = {
    origin: [ config.clientUrl, config.apiUrl ]
  }
  debug('corsOptions', corsOptions)
  const authUtil = new AuthUtil(config)
  const act = new ActivityController()
  const acc = new ActivityDataController()
  const as = new AssignmentController(config)
  const auth = new AuthController(config)
  const fc = new FeedbackController(config)
  const fileC = new FilesController(config)
  const look = new LookaheadController()
  const vc = new VisitController()
  const cc = new ConsumerController()
  const uc = new UserController(config)
  const sd = new SeedDataController()
  const lti = new LTIController(config)
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
  auth.setSharedControllers(lcc)
  lti.setSharedControllers(lcc)
  cc.setSharedControllers(lcc)
  demo.setSharedControllers(lcc)
  act.setSharedControllers(lcc)

  const justCors = [
    cors(corsOptions)
  ]
  const allCors = [
    cors()
  ]

  const middleWare = [
    cors(corsOptions),
    validatorMiddlewareWrapper(lcc)
  ]

  const localhostOnlyAdminMiddleware = [
    cors(corsOptions),
    localhostOnly,
    // adminLimiter,
    validatorMiddlewareWrapper(lcc),
    isAdmin
  ]

  return Promise.resolve()
    .then(() => {
      if (config.seedDB) {
        console.log('Warning:  Database seeding is turned on')
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
      api.use('/lookahead', allCors, look.route())
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
      api.use('/api/lookahead', allCors, look.route())
      api.use('/api/users', middleWare, uc.route())
      api.use('/api/visits', middleWare, vc.route())
      api.use('/api/seed-data', middleWare, sd.route())
      api.use('/api/auth', cors(corsOptions), auth.route())
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
      debug('API clientErrorHandler ', err.message, err.status, err.errorData, res.status)
      err.message += ' -- AssignmentMismatchError'
      let status = 400
      let json =  {message: err.message, status: status, errorData: JSON.stringify(err.errorData)}
      res.status(status).json(json)
    } else {
      next(err)
    }
  }

  function errorHandler (err, req, res, next) {
    // debug('API errorHandler ', err.message, err.status, err.errorData, res.status)
    let status = err.status || 500
    let errorData = err.errorData || {}
    // The Sentry error id is attached to `res.sentry` if sentry is active
    errorData.sentry = res.sentry
    let json =  {message: err.message, status: status, errorData: JSON.stringify(errorData)}
    debug('API errorHandler json', json)
    res.status(status).json(json)
  }
}
