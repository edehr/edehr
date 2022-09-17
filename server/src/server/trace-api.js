import  *  as  winston  from  'winston'
import  'winston-daily-rotate-file'
import path from 'path'

import { logError } from '../helpers/log-error'

const responseTime = require('response-time')
const uaParser = require('ua-parser-js')
const trace = require('debug')('trace')

export function apiTrace (app, config) {
  const apiLogPath = path.resolve(config.apiLogFile)

  const transport = new winston.transports.DailyRotateFile({
    filename: path.join(apiLogPath,  'api-trace-%DATE%.log'),
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
  })
  const traceLogger = winston.createLogger({
    transports: [
      transport
    ]
  })
  function isNotEmpty (obj) {
    return obj && Object.keys(obj).length > 0
      && Object.getPrototypeOf(obj) === Object.prototype
  }

  app.use(responseTime( function (req, res, time) {
    try {
      if (req.method !== 'OPTIONS') {
        const ts = Date.now()
        const tsStr = (new Date(ts)).toISOString()
        const url = req.baseUrl || req.url
        const key = (req.method + url).toLowerCase()
          .replace(/[:.]/g, '')
          .replace(/\//g, '_')
        const elapsedMs = Math.round(time * 10) / 10
        const rec = {
          ts: tsStr,
          key: key,
          elapsedMs: elapsedMs,
          status: res.statusCode,
        }
        let origin = req.headers['origin'] || req.url
        rec.origin = origin
        if (req.method === 'GET') {
          rec.params = isNotEmpty(req.params) ? req.params : undefined
          rec.query = isNotEmpty(req.query) ? req.query : undefined
        }
        if (req.method === 'POST' || req.method === 'PUT') {
          rec.params = isNotEmpty(req.params) ? req.params : undefined
          rec.body = Object.assign({}, req.body)
          // console.log('-=-=-=-=-=-=-=-=-')
          // console.log(JSON.stringify(rec.body,null,2))
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
          // console.log(JSON.stringify(rec.body,null,2))
          // console.log('-=-=-=-=-=-=-=-=-')
        }
        if (req.method === 'DELETE') {
          rec.params = isNotEmpty(req.params) ? req.params : undefined
          rec.query = isNotEmpty(req.query) ? req.query : undefined
        }
        const ua = (new uaParser(req.headers['user-agent'])).getResult()
        rec.os = ua.os
        rec.device = ua.device
        rec.browser = ua.browser
        const recStr = JSON.stringify(rec)
        trace(recStr)
        rec.ts = ts // store in ms format
        traceLogger.info(rec)
      }
    } catch (err) {
      logError('Error in tracing', err.message)
    }
  }))
}
