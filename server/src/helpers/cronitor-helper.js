// Cronitor monitoring
import { API_CALL_EVENT, API_EVENT_BUS } from '../server/trace-api'
import { logError } from './log-error'
import percentile from 'percentile'
const schedule = require('node-schedule')

let cronitorConfigured = false


export function isCronitorActive () {
  return cronitorConfigured
}

export function setUpCronitor (config) {
  const host = config.apiHost
  if (!config.cronitorApiKey || !config.cronitorMonitorKey) {
    cronitorConfigured = false
    console.error('To use the Cronitor requires the api key to be defined in configuration')
    return // STOP HERE
  }
  cronitorConfigured = true
  // GOOD TO GO ....
  const cronitor = require('cronitor')(config.cronitorApiKey)
  const cronitorMonitor = new cronitor.Monitor(config.cronitorMonitorKey)
  let tMonitor = new TimeMonitor()
  const PERIOD = 3 * 1000 /// every minute
  const pingHandler = () => {
    const stats = tMonitor.getStats()
    tMonitor.resetStats()
    const pingData = {
      state: 'ok', // 'run|complete|fail|ok',
      host: host,
      message: JSON.stringify(stats),
      metrics: {
        duration: stats.p95,
        count: stats.responseCount,
        error_count: stats.errorCount
      }
    }
    cronitorMonitor.ping(pingData)
    let dt = new Date()
    dt = dt.toISOString()
    console.log('Send PING to Cronitor', dt, pingData)
  }
  // run once on startup
  pingHandler()
  // run once every period
  setInterval(pingHandler, PERIOD)
  // listen for API events
  API_EVENT_BUS.on(API_CALL_EVENT, (rec) => {
    try {
      tMonitor.update(rec)
    } catch (err) {
      logError(err)
    }
  })
}

/* ****************
      Monitor
 */
const WINDOW_SIZE = 1000 // last N responses
class TimeMonitor {
  constructor () {
    this.windowSize = WINDOW_SIZE
    this.responseTimes = []
    this.responseCount = 0
    this.errorCount = 0
  }
  resetStats () {
    this.errorCount = 0
    this.responseCount = 0
    this.responseTimes = []
  }
  getStats () {
    let rt = this.responseTimes
    let average = rt.length > 0 ? rt.reduce((a, b) => a + b, 0) / rt.length : 0
    let p95 = rt.length > 0 ? percentile(95, rt) : 0
    return {
      avg: average,
      // p90: percentile(90, rt),
      p95: p95,
      errorRatio: this.errRatio,
      errorCount: this.errorCount,
      responseCount: this.responseCount,
      windowSize: WINDOW_SIZE
    }
  }
  get errRatio () {
    let ratio = 0
    if (this.errorCount > 0 && this.responseCount > 0) {
      ratio = this.errorCount / this.responseCount
    }
    return ratio.toFixed(2)
  }
  update (rec) {
    this.updateErrorCount(rec.status)
    let newTime = rec.elapsedMs
    if (this.responseTimes.length >= this.windowSize) {
      this.responseTimes.shift()
    }
    this.responseTimes.push(newTime)

  }
  updateErrorCount (status) {
    this.responseCount++
    if (status >= 400) {
      this.errorCount++
    }
  }
}
