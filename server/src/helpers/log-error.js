import { configuration } from '../config/config'
import * as Sentry from '@sentry/node'
const debugError = require('debug')('error')

export function logError (msg, ...data) {
  if (configuration.sentryDsn) {
    Sentry.captureMessage(msg,data)
  }
  debugError(msg,data)
}
