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
  if (!config.cronitorApiKey) {
    cronitorConfigured = false
    console.error('To use the Cronitor requires the api key to be defined in configuration')
    return // STOP HERE
  }
  cronitorConfigured = true
  // GOOD TO GO ....
  const cronitor = require('cronitor')(config.cronitorApiKey)
  const cronitorMonitor = new cronitor.Monitor('WXA0QS')
  let tMonitor = new TimeMonitor()
  const PERIOD = 3 * 1000 /// every minute
  const pingHandler = () => {
    const stats = tMonitor.stats
    const pingData = {
      state: 'ok', // 'run|complete|fail|ok',
      host: host,
      // env: 'dev',
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
  pingHandler()
  setInterval(pingHandler, PERIOD)
  schedule.scheduleJob('0 0 * * *', () => {
    if (tMonitor) {
      tMonitor.resetMidnight()
    }
  })
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
    this.avgTime = 0
    this.percentile95 = 0
    this.percentile90 = 0
    this.responseCount = 0
    this.errorCount = 0
  }
  resetMidnight () {
    this.errorCount = 0
    this.responseCount = 0
  }
  get stats () {
    return {
      avg: this.avgTime,
      p90: this.percentile90,
      p95: this.percentile95,
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
    return ratio
  }
  update (rec) {
    this.updateErrorCount(rec.status)
    this.updateTime(rec.elapsedMs)
  }
  updateErrorCount (status) {
    this.responseCount++
    if (status >= 400) {
      this.errorCount++
    }
  }
  updateTime (newTime) {
    if (this.responseTimes.length === 0) {
      this.avgTime = newTime
      this.percentile90 = newTime
      this.percentile95 = newTime
      return
    }
    if (this.responseTimes.length >= this.windowSize) {
      this.responseTimes.shift()
    }
    this.responseTimes.push(newTime)
    let rt = this.responseTimes
    this.avgTime = rt.reduce((a, b) => a + b, 0) / rt.length
    this.percentile90 = percentile(90, rt)
    this.percentile95 = percentile(95, rt)
  }
}
