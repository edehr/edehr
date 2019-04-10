import { Router } from 'express'
import cors from 'cors'
import dbSeeder from '../config/lib/dbSeeder'
import {AssignmentMismatchError} from '../utils/errors'
import ActivityController from '../controllers/activity-controller'
import ActivityDataController from '../controllers/activity-data-controller'
import AdminController from '../controllers/admin-controller'
import AssignmentController from '../controllers/assignment-controller'
import ConsumerController from '../controllers/consumer-controller'
import IntegrationController from '../controllers/integration-controller'
import LTIController from '../controllers/lti'
import UserController from '../controllers/user-controller.js'
import VisitController from '../controllers/visit-controller'

// Sessions and session cookies
// express-session stores session data here on the server and only puts session id in the cookie
const session = require('express-session')
// store session in files for now. Later could scale and store in the database
const FileStore = require('session-file-store')(session)
const COOKIE_SECRET = process.env.COOKIE_SECRET
  ? process.env.COOKIE_SECRET
  : 'this is the secret for the session cookie'
// session ids
const uuid = require('uuid/v4')
const debug = require('debug')('server')

export function apiMiddle (app, config) {
  console.log('api middle with ', config)
  if (config.seedDB) {
    console.log('seeding')
    dbSeeder()
  }

  const fileStoreOptions = {}

  if (process.env.SESSION_DIR) {
    fileStoreOptions.path = process.env.SESSION_DIR
  }
  if (process.env.TIMETOLIVE) {
    fileStoreOptions.ttl = process.env.TIMETOLIVE
  }
  app.sessionStore = new FileStore(fileStoreOptions)

  app.use(
    session({
      genid: req => {
        debug('Foo Inside the session middleware req.sessionID ' + req.sessionID)
        return uuid()
      },
      cookie: { sameSite: 'lax' },
      store: app.sessionStore,
      secret: COOKIE_SECRET,
      resave: false,
      saveUninitialized: false
    })
  )

  const corsOptions = setupCors(config)
  const admin = new AdminController()
  const act = new ActivityController()
  const acc = new ActivityDataController()
  const as = new AssignmentController()
  const cc = new ConsumerController()
  const lti = new LTIController(config)
  const ic = new IntegrationController()
  const uc = new UserController(config)
  const vc = new VisitController()

  return Promise.resolve()
    .then(admin.initializeApp(app))
    .then(lti.initializeApp(app))
    .then(cc.initializeApp(config.defaultConsumerKey))
    .then(() => {
      console.log('prepare to install middle api routes')
      const api = Router()
      // for local and dev only
      api.use('/admin', admin.route())
      api.use('/integrations', cors(corsOptions), ic.route())
      // External API
      api.use('/launch_lti', lti.route())
      api.use('/api/launch_lti', lti.route())
      // Inside API
      api.use('/activities', cors(corsOptions), act.route())
      api.use('/activity-data', cors(corsOptions), acc.route())
      api.use('/assignments', cors(corsOptions), as.route())
      api.use('/consumers', cors(corsOptions), cc.route())
      api.use('/users', cors(corsOptions), uc.route())
      api.use('/visits', cors(corsOptions), vc.route())
      // for use behind a proxy:
      api.use('/api/activities', cors(corsOptions), act.route())
      api.use('/api/activity-data', cors(corsOptions), acc.route())
      api.use('/api/assignments', cors(corsOptions), as.route())
      api.use('/api/consumers', cors(corsOptions), cc.route())
      api.use('/api/users', cors(corsOptions), uc.route())
      api.use('/api/visits', cors(corsOptions), vc.route())
      console.log('all middle api routes installed')
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
      var url = config.clientUrl + '/assignments-listing?user=' + req.user._id
      url += '&error=' + err.message
      res.redirect(url)
    } else {
      next(err)
    }
  }

  function errorHandler (err, req, res, next) {
    res.status(err.status || 500)
    res.send(err.message)
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
