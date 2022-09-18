import * as Sentry from '@sentry/node'
import {configuration} from '../config/config'
const debugError = require('debug')('error')

export function logError (msg, ...data) {
  if (configuration && configuration.sentryDsn) {
    Sentry.captureMessage(msg,data)
  }
  debugError(msg,data)
}
