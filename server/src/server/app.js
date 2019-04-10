import express from 'express'
import bodyParser from 'body-parser'
import db from './db'
import { apiMiddle, apiError } from './api.js'
const debug = require('debug')('server')

export default class EhrApp {
  constructor() {
    this.app = express()
  }

  setup(config) {
    let app = this.app
    app.set('view engine', 'ejs')
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    return db(config)
      .then(connection => {
        app.connection = connection
        return apiMiddle(app, config)
      })
      .then(api => {
        debug('api middle is set up next set up the final routing')
        app.use('/', api)
        return EhrApp._setupFinalMiddle(app, config)
      })
    .then(api => {
      debug('EhrApp setup complete')
    })
  }

  get application() {
    return this.app
  }

  static _setupFinalMiddle(app, config) {
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
      EhrApp._fourOhFour(req, res)
    })
    apiError(app, config)
  }

  static _fourOhFour(req, res) {
    let { url } = req
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
    var env = process.env.NODE_ENV
    if (url.includes('favicon')) {
      debug('Another request for the favicon')
      res.status(404).send('No favicon')
    } else {
      var msg = 'Could not find "' + fullUrl + '". Environment: ' + env
      debug(msg)
      res.status(404).send(msg)
    }
  }
}
