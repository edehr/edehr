import *  as  winston from 'winston'
import 'winston-daily-rotate-file'
import path from 'path'
import { logError } from '../helpers/log-error'
const responseTime = require('response-time')
const uaParser = require('ua-parser-js')
const trace = require('debug')('trace')
const EventEmitter = require('events')
let traceLogger

export const API_EVENT_BUS = new EventEmitter()
export const API_CALL_EVENT = 'API_CALL'

API_EVENT_BUS.on(API_CALL_EVENT, (rec) => {
  const recStr = JSON.stringify(rec)
  trace(recStr)
  traceLogger.info(rec)
})

function setUpTraceLogger (config) {
  const apiLogPath = path.resolve(config.apiLogFile)
  const transport = new winston.transports.DailyRotateFile({
    filename: path.join(apiLogPath, 'api-trace-%DATE%.log'),
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
  })
  traceLogger = winston.createLogger({
    transports: [
      transport
    ]
  })
}

export function apiTrace (app, config) {
  setUpTraceLogger(config)

  app.use(responseTime( function (req, res, time) {
    try {
      if (req.method !== 'OPTIONS') {
        const rec = composeData(req,res.statusCode, time)
        API_EVENT_BUS.emit(API_CALL_EVENT, rec)
      }
    } catch (err) {
      logError('Error in tracing', err.message, err)
    }
  }))
}

function composeData (req, statusCode, time) {
  const ts = Date.now()
  const url = req.baseUrl || req.url
  const key = (req.method + url).toLowerCase()
    .replace(/[:.]/g, '')
    .replace(/\//g, '_')
  const elapsedMs = Math.round(time)
  const rec = { }
  rec.consumerKey = req.consumerKey
  rec.userId = req.userId
  rec.visitId = req.visitId // req.authPayload ? req.authPayload.visitId : undefined
  rec.key = key
  rec.elapsedMs = elapsedMs
  rec.isPrimary = req.isPrimary
  rec.status = statusCode
  rec.origin = req.headers['origin'] || req.url
  rec.params = isNotEmpty(req.params) ? req.params : undefined
  rec.query = isNotEmpty(req.query) ? req.query : undefined
  rec.tsStr = (new Date(ts)).toISOString()
  rec.ts = ts
  const includeBody = false
  if (includeBody && isNotEmpty(req.body)) {
    rec.body = Object.assign({}, req.body)
    // console.log('-=-=-=-=-=-=-=-=-')
    // console.log(JSON.stringify(rec.body,null,2))
    // do not send sensitive information to the trace log
    delete rec.body.refreshToken
    delete rec.body.oauth_consumer_secret
    delete rec.body.oauth_signature
    delete rec.body.oauth_nonce
    delete rec.body.lis_person_name_family
    delete rec.body.lis_person_name_given
    delete rec.body.lis_person_name_full
    delete rec.body.user_id
    delete rec.body['ltiData[oauth_consumer_secret]']
    delete rec.body['ltiData[oauth_nonce]']
    delete rec.body['ltiData[lis_person_name_family]']
    delete rec.body['ltiData[lis_person_name_given]']
    delete rec.body['ltiData[lis_person_name_full]']
    delete rec.body['ltiData[user_id']
  }
  const includeOs = true
  if (includeOs) {
    const ua = (new uaParser(req.headers['user-agent'])).getResult()
    rec.os = ua.os ? ua.os.name : undefined
    rec.device = ua.device ? ua.device.model : undefined
    rec.browser = ua.browser ? ua.browser.name : undefined
  }
  return rec
}

function isNotEmpty (obj) {
  return obj && Object.keys(obj).length > 0
    && Object.getPrototypeOf(obj) === Object.prototype
}
