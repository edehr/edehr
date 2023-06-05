import *  as  winston from 'winston'
import 'winston-daily-rotate-file'
import path from 'path'
const trace = require('debug')('actions')
const EventEmitter = require('events')
let traceLogger

const isDevEnv = process.env.NODE_ENV !== 'production'
export const ACTION_EVENT_BUS = new EventEmitter()
export const ACTION_EVENT = 'ACTION_EVENT'

ACTION_EVENT_BUS.on(ACTION_EVENT, (rec) => {
  const sRec = {
    consumer: rec.consumerId ? rec.consumerId.slice(-7) : 'no cons',
    user: rec.userId ? rec.userId.slice(-7) : 'no user',
    role: rec.role ? rec.role.slice(0,7).padEnd(7, ' ') : 'no role',
    action: rec.action,
    tsStr: (new Date()).toISOString(),
  }
  const recStr = JSON.stringify(sRec)
  trace(recStr)
  traceLogger.info(rec)
})

export function setUpActionLogger (config) {
  const actionLogPath = path.resolve(config.actionLogFile)
  const transport = new winston.transports.DailyRotateFile({
    filename: path.join(actionLogPath, 'action-trace-%DATE%.log'),
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


