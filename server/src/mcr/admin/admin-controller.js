import UserController from '../user/user-controller.js'
import ActivityController from '../activity/activity-controller'
import ConsumerController from '../consumer/consumer-controller'
import VisitController from '../visit/visit-controller'
import { ParameterError } from '../common/errors'
import { Router } from 'express'
import {ok, fail} from '../common/utils'
import { Text } from '../../config/text'

const debug = require('debug')('server')

const UserModel = new UserController()
const ActivityModel = new ActivityController()
const Visit = new VisitController()
const consumer = new ConsumerController()

var uuid = require('uuid/v4')

// For proof of concept we protect access to the admin via this token.
export const adminToken = process.env.ADMIN_TOKEN || uuid()
console.log('adminToken ', adminToken)

export default class AdminController {

  // To skip the rest of the router’s middleware functions, call next('router') to pass control back out of the router instance.

  // curl -H "Authorization: Bearer 7a6e0540-a23d-4474-80ad-c37e211f9079" http://localhost:27000/admin
  headerCheck (req) {
    let db = false
    if (!req || !req.headers || !req.headers['authorization']) {
      if (db) console.log('No authorization in header')
      return 'router'
    }
    try {
      const authHeader = req.headers['authorization']
      if (db) console.log('authHeader \'' + authHeader + '\'')
      const parts = authHeader.split(' ')
      if (db) console.log('the parts \'', parts, '\'')
      const scheme = parts[0]
      if (scheme !== 'Bearer') {
        if (db) console.log('authHeader invalid scheme')
        return 'router'
      }
      const token = parts[1]
      if (!token || token !== adminToken) {
        if (db) console.log('authHeader invalid token')
        return 'router'
      }
    } catch (err) {
      if (db) console.log('Auth header could not be parsed', err.message)
      return 'router'
    }
    return undefined
  }

  initializeApp (app) {
    this.app = app
    const _this = this
    app.admin = this
    return Promise.resolve()
      .then(() => {
        /*
        This api end point is registered on the /admin root path in main api setup.
        All calls that begin with that path will come here. They can only proceed if
        the request is a valid admin request.  In this case 'r' will be undefined.
         */
        app.use('/admin/', function (req, res, next) {
          let r = _this.headerCheck(req)
          if (r) {
            // go to r
            // If 'r' is defined then it says where to go. If 'r' is 'router' then the request is routed
            // to the next middleware at the root level which will likely go to the error handlers.
            next(r)
          }
          else {
            // go to next route in this router
            next('route')
          }
        })
      })
  }

  listConsumerUsers (toolKey) {

  }

  reset (consumerKey) {
    if (!consumerKey) {
      throw new ParameterError('Invalid consumer id: ' + consumerKey)
    }
    let toolConsumer
    return ConsumerController.findOneConsumerByKey(consumerKey)
      .then((tc) => {
        if (!tc) {
          let message = 'Unsupported consumer key ' + consumerKey
          throw new ParameterError(message)
        }
        toolConsumer = tc
        debug('working with consumer ' + toolConsumer.tool_consumer_instance_name)
      })
      .then(() => {
        return Visit.clearConsumer(toolConsumer._id)
      })
      .then(() => {
        return ActivityModel.clearConsumer(toolConsumer._id)
      })
      .then(() => {
        return UserModel.clearConsumer(toolConsumer._id)
      })
  }


  route () {
    const router = new Router()

    router.get('/', (req, res) => {
      /*
      This is a testing route. It does nothing and yet provides an end point for testing an admin request
       */
      console.log('in root admin get set result status 200 and send simple message')
      res.status(200).send('hello admin')
    })

    router.get('/reset', (req, res) => {
      console.log('in root admin reset')
      this.reset(req.query.key)
        .then(ok(res))
        .then(null, fail(res))
    })
    return router
  }
}
