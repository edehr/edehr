// import moment from 'moment'
import { Router } from 'express'

const metricData = {
  gets: {}
}

export const metricMiddle = (req, res, next) => {
  // if (req.hostname === 'localhost') {
  if (req && req.method == 'GET') {
    // const body = req.body? JSON.stringify(req.body) : 'empty'
    const host = req.headers['host']
    const url = req.url
    const parts = url.split('/')
    parts.shift()
    parts.shift()
    const key = parts[0]
    if (! metricData.gets[key] ) {
      metricData.gets[key] = 0
    }
    metricData.gets[key]++
    console.log('metrics middle request from ', url, parts, req.method, host)
    metricData.getDate1 = Date.now()
    // metricData.getDate2 = moment().format()
    metricData.runTime = metricData.getDate1 - metricData.startDate1
    metricData.getCount++
    metricData.lastRequestUrl = req.url
    metricData.host = host
  }
  next()
  // } else {
  //   res.status(400).send('This is a localhost-only request. Please, make sure your host is correct')
  // }
}

export default class MetricController {
  constructor(config) {
    metricData.host = config.host
    metricData.title = config.app.title
    metricData.startDate1 = Date.now()
    // startDate2: moment().format(),
    // getDate1: Date.now(),
    // getDate2: moment().format(),
    // lastRequestUrl: '',
    metricData.getCount = 0
  }

  getMetrics() {
    // metricData.userAgent = userAgent
    return Promise.resolve(metricData)
  }

  route() {
    const router = new Router()
    router.get('/', (req, res) => {
      const requestUrl = req.url
      // TODO add check that request is coming from another server in our network
      this
        .getMetrics()
        .then(data => {
          res.json(data)
        })
        .catch(error => {
          let code, message
          switch (error.name) {
          case 'NotAllowedError':
            code = 400
            message = 'Not allowed'
            break
          default:
            code = 500
            message = 'Unknown error:' + error.name + ' ' + error.message
            console.error('Server utils fail unknown error return 500.', message)
          }
          res.status(code).send(message) // .end(message)
        })
    })
    return router
  }
}
