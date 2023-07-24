import *  as  winston from 'winston'
import 'winston-daily-rotate-file'
import path from 'path'
const debug = require('debug')('server')
const ehrTrace = require('debug')('ehr')
const EventEmitter = require('events')
let traceSeedLogger
let traceAdLogger

const isTestEnv = 'test' === process.env.NODE_ENV
/*
Usage
EHR_EVENT_BUS.emit(EHR_SEED_EVENT, sourceId, userId, action, previousEhrData, updatedEhrData)
 */

export const EHR_EVENT_BUS = new EventEmitter()
export const EHR_SEED_EVENT = 'EHR_SEED_EVENT'
export const EHR_AD_EVENT = 'EHR_AD_EVENT'

export const FOR_TEST_LAST_EVENT = { lastAction: '', lastType: '' }

EHR_EVENT_BUS.on(EHR_AD_EVENT, (payload) => {
  if(isTestEnv) {
    debug(payload.action, 'update AD updated:', payload.updated)
    FOR_TEST_LAST_EVENT.lastAction = payload.action
    FOR_TEST_LAST_EVENT.lastType = 'AD'
    return
  }
  ehrTrace(JSON.stringify(payload))
  traceAdLogger.info(payload)
})

EHR_EVENT_BUS.on(EHR_SEED_EVENT, (payload) => {
  if(isTestEnv) {
    // debug(payload.action, 'update Seed updated:', payload.updated)
    FOR_TEST_LAST_EVENT.lastAction = payload.action
    FOR_TEST_LAST_EVENT.lastType = 'SEED'
    return
  }
  if ('properties' === payload.action) {
    // someone is using the Properties dialog. We only want to track changes to ehrData
    if (JSON.stringify(payload.previous) === (JSON.stringify(payload.updated)) ) {
      // skip no change
      // debug('Skip seed update event. new is same as old')
      return
    }
  }
  // debug('Seed update event.', payload.action)
  ehrTrace(JSON.stringify(payload))
  traceSeedLogger.info(payload)
})

function createTransport (pathSpec, fileSpec) {
  return new winston.transports.DailyRotateFile({
    filename: path.join(pathSpec, fileSpec),
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
  })
}

export function setUpEhrTraceLogger (config) {
  const pathSpec = path.resolve(config.ehrLogFile)
  const seedTransport = createTransport(pathSpec, 'ehr-trace-seed-%DATE%.log')
  const adTransport = createTransport(pathSpec, 'ehr-trace-ad-%DATE%.log')
  traceSeedLogger = winston.createLogger({ transports: [ seedTransport] })
  traceAdLogger = winston.createLogger({ transports: [ adTransport] })
}
