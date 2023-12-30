import { Router } from 'express'
import { API_EVENT_BUS, API_CALL_EVENT } from '../../server/trace-api'
import { logError} from '../../helpers/log-error'
import Monitor from './monitor'
import System from './system'
import { cronRegisterHourTask } from '../../server/cronTask'
import ConsumerController from '../consumer/consumer-controller'
import Consumer from '../consumer/consumer'

const metricData = {
}

export default class MetricController {
  constructor (config) {
    this.monitor = new Monitor()
    this.system = new System()
    metricData.host = config.apiHost
    metricData.version = config.appVersion
    metricData.appTitle = config.appTitle
    metricData.env = config.env
    metricData.startDate = Date.now()
    metricData.startDate= (new Date(metricData.startDate)).toISOString()
    metricData.last= Date.now()
    metricData.lastDate= ''
    metricData.runTime = 0
    metricData.maxApi = ''
    metricData.points = {}
    metricData.monitor = {}
    metricData.visitCounts = []
    API_EVENT_BUS.on(API_CALL_EVENT, (rec) => {
      try {
        this.monitor.apiEvent(rec)
        this.recordApi(rec)
      } catch (err) {
        logError(err)
      }
    })
    cronRegisterHourTask(async () => {
      await this.getVisitCounts()
      // console.log('Metric data updated visit counts', metricData.visitCounts)
    })
  }
  async getVisitCounts () {
    let consumers = await Consumer.find({})
    let cc = new ConsumerController()
    let counts = []
    for (const consumer of consumers) {
      let stats = await cc.recentVisitCounts(consumer._id)
      stats.consumerKey = consumer.oauth_consumer_key
      consumer.featureFlags ? stats.featureFlags = consumer.featureFlags : null
      counts.push(stats)
    }
    metricData.visitCounts = counts
  }

  async getMetrics () {
    metricData.monitor = this.monitor.getData()
    metricData.system = await this.system.getData()
    return Promise.resolve(metricData)
  }

  route () {
    const router = new Router()
    router.get('/', (req, res) => {
      this
        .getMetrics()
        .then(data => {
          res.json(data)
        })
        .catch(error => {
          let message = 'Unknown error:' + error.name + ' ' + error.message
          console.error('Metric get api end point fail unknown error return 500.', message)
          res.status(500).send(message) // .end(message)
        })
    })
    return router
  }

  recordApi (rec) {
    const N = 10
    const key = rec.key
    if(key.includes('auth')) {
      return
    }
    if(key.includes('admin')) {
      return
    }
    if (! metricData.points[key] ) {
      metricData.points[key] = {
        lastN: [],
        max: 0,
        maxRec: {},
        avg: 0,
        cnt: 0,
        cnt50: 0, // 0 to 50 ms
        cnt200: 0, // 51 to 200ms
        cntInf: 0, // over 200ms
        slow200: [],
        slowInf: [],
      }
    }
    const elidedRec = {
      key: rec.key,
      elapsed: rec.elapsed,
      status: rec.status,
      tsStr: rec.tsStr,
    }
    this._recordApiCall(key, elidedRec, N)
    metricData.maxApi = this.findMax(metricData.points)
    metricData.last= Date.now()
    metricData.lastDate= (new Date()).toISOString()
    metricData.runTime = metricData.last - metricData.startDate
  }

  findMax (points) {
    const keys = Object.keys(points)
    let mx = 0
    let mk = ''
    keys.forEach( k => {
      const pt = points[k]
      if (pt.max > mx) {
        mx = pt.max
        mk = k
      }
    })
    return {maxKey: mk, maxElapsed: mx }
  }

  _recordApiCall (key, rec, N) {
    const pt = metricData.points[key]
    const lastN = pt.lastN
    this._addRec(lastN, rec, N)
    pt.sum = lastN.length === 1 ? lastN[0].elapsedMs : lastN.reduce((a, b) => {
      return a.elapsedMs + b.elapsedMs
    })
    pt.avg = Math.round(pt.sum / lastN.length)
    const ts = rec.elapsedMs
    if (ts <= 50) {
      pt.cnt50++
    } else if (ts <= 200) {
      pt.cnt200++
      this._addRec(pt.slow200, rec, N)
    } else {
      pt.cntInf++
      this._addRec(pt.slowInf, rec, N)
    }
    pt.cnt++
    if (ts >= pt.max) {
      pt.max = ts
      pt.maxRec = rec
    }
  }

  _addRec (lastN, rec, N) {
    lastN.push(rec)
    if (lastN.length > N) {
      lastN.shift()
    }
  }
}

