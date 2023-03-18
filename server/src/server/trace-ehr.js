import *  as  winston from 'winston'
import 'winston-daily-rotate-file'
import path from 'path'
const ehrTrace = require('debug')('ehr')
const EventEmitter = require('events')
let traceSeedLogger
let traceAdLogger

/*
Usage
EHR_EVENT_BUS.emit(EHR_SEED_EVENT, sourceId, previousEhrData, updatedEhrData)
 */


export const EHR_EVENT_BUS = new EventEmitter()
export const EHR_SEED_EVENT = 'EHR_SEED_EVENT'
export const EHR_AD_EVENT = 'EHR_AD_EVENT'

function composeStr (sourceId, action, previous, updated) {
  return {
    action: action,
    sourceId: sourceId,
    previous: previous,
    updated: updated
  }
}

EHR_EVENT_BUS.on(EHR_AD_EVENT, (sourceId, action, previous, updated) => {
  const rec = composeStr(sourceId, action, previous, updated)
  // console.log('EHR_AD_EVENT activity change')
  ehrTrace(JSON.stringify(rec))
  traceAdLogger.info(rec)
})

EHR_EVENT_BUS.on(EHR_SEED_EVENT, (sourceId, action, previous, updated) => {
  const rec = composeStr(sourceId, action, previous, updated)
  ehrTrace(JSON.stringify(rec))
  traceSeedLogger.info(rec)
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
