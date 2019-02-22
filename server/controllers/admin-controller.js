import UserController from '../controllers/user-controller.js'
import ActivityController from '../controllers/activity-controller'
import ConsumerController from '../controllers/consumer-controller'
import VisitController from '../controllers/visit-controller'
const debug = require('debug')('server')

const UserModel = new UserController()
const ConsumerModel = new ConsumerController()
const ActivityModel = new ActivityController()
const Visit = new VisitController()

const { Router } = require('express')

var uuid = require('uuid/v4')

// TODO for proof of concept we protect access to the admin via this token.
// Later must either remove the admin route or install property authentication
const adminToken = process.env.ADMIN_TOKEN || uuid()
console.log('adminToken ', adminToken)

export default class AdminController {
  initializeApp (app) {
    this.app = app
    app.admin = this
    return Promise.resolve()
    .then(() => {
      app.use('/admin', function (req, res, next) {
        console.log('headers ', req.headers['authorization'])
        if (!req.headers['authorization']) {
          console.log('No authorization in header')
          return next('router')
        }
        var authHeader = req.headers['authorization']
        try {
          console.log("authHeader '" + authHeader + "'")
          var parts = authHeader.split(' ')
          console.log("the parts '", parts, "'")
          var scheme = parts[0]
          if (scheme !== 'Bearer') {
            return next('router')
          }
          var token = parts[1]
          if (!token || token !== adminToken) {
            return next('router')
          }
        } catch (err) {
          console.log('Auth header could not be parsed', err.message)
          return next('router')
        }
        next()
      })
    })
  }

  route () {
    const router = new Router()
    const _this = this

    router.get('/', function (req, res) {
      res.status(200).send('hello admin')
    })

    router.get('/reset', function (req, res) {
      let consumerKey = req.query.key
      if (!consumerKey) {
        res.send('no consumerKey')
        return
      }
      ConsumerController.findOneConsumerByKey(consumerKey)
      .then((toolConsumer) => {
        if (!toolConsumer) {
          let message = 'Unsupported consumer key ' + consumerKey
          debug('strategyVerify ' + message)
          res.send('no consumerKey')
          return
        }
        debug('working with consumer ' + toolConsumer.tool_consumer_instance_name)
        Visit.clearConsumer(toolConsumer._id)
        ActivityModel.clearConsumer(toolConsumer._id)
        UserModel.clearConsumer(toolConsumer._id)

        // _this.app.sessionStore.clear()
      })
      res.send('RESET')
    })
    return router
  }
}
