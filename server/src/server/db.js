import mongoose from 'mongoose'
import { getDbUri } from '../config/config'
const debug = require('debug')('server')
import { logError} from '../helpers/log-error'

function connectWithRetry (uri, options, sanitized, retriesLeft = 3) {
  debug('DB: Will attempt ' + retriesLeft + ' times to connect to ' + sanitized)
  return new Promise((resolve, reject) => {
    mongoose
      .connect(uri, options)
      .then(conn => {
        debug('DB: Connected to ' + sanitized)
        resolve(conn)
      })
      .catch(error => {
        logError(`DB: connect error:  ${error}`)
        if (retriesLeft === 0) {
          logError('DB: Failed to connect, retries exhausted')
          reject(error)
        } else {
          debug(`DB: Connection attempt failed, ${retriesLeft} retries left. Retrying in 5 seconds...`)
          setTimeout(() => {
            connectWithRetry(uri, options, sanitized, retriesLeft - 1)
              .then(resolve)
              .catch(reject)
          }, 5000) // Retry after 5 seconds
        }
      })
  })
}
export default function (config) {
  return new Promise((resolve, reject) => {
    let uri = getDbUri(config)
    const dbc = config.database
    const sanitized = uri.includes('auth') ? uri.replace(dbc.password, 'aPassword') : uri
    connectWithRetry(uri, dbc.options, sanitized)
    // mongoose
    //   .connect(uri, dbc.options)
    //   .then(conn => {
    //     debug('DB: Connected to ' + sanitized)
    //     resolve(conn)
    //   })
    //   .catch(error => {
    //     logError(`DB: connect error:  ${error}`)
    //     reject(error)
    //   })

  })
}
