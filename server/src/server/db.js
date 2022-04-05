import mongoose from 'mongoose'
import { getDbUri } from '../config/config'
const debug = require('debug')('server')
const logError = require('debug')('error')

export default function (config) {
  return new Promise((resolve, reject) => {
    let uri = getDbUri(config)
    const dbc = config.database
    const sanitized = uri.includes('auth') ? uri.replace(dbc.password, 'aPassword') : uri

    mongoose
      .connect(uri, dbc.options)
      .then(conn => {
        debug('DB: Connected to ' + sanitized)
        resolve(conn)
      })
      .catch(error => {
        logError(`DB: connect error:  ${error}`)
        reject(error)
      })
  })
}
