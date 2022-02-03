import mongoose from 'mongoose'

const debug = require('debug')('server')
const logError = require('debug')('error')

export default function (config) {
  return new Promise((resolve, reject) => {
    const dbc = config.database
    const sanitizedConfig = Object.assign( {} , dbc)
    sanitizedConfig.password = sanitizedConfig.password ? 'aPassword' : undefined
    // debug('DB: Configuration: %s', JSON.stringify(sanitizedConfig,null,2))
    let auth = false
    let uri = []
    // https://mongodb.github.io/node-mongodb-native/driver-articles/mongoclient.html
    // mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
    uri.push('mongodb://')
    if (dbc.user && dbc.password) {
      auth = true
      uri.push(dbc.user)
      uri.push(':')
      uri.push(dbc.password)
      uri.push('@')
    }

    uri.push(dbc.host)
    uri.push(':')
    uri.push(dbc.port)
    uri.push('/')
    uri.push(dbc.name)
    // https://stackoverflow.com/questions/40608669/what-does-authsource-means-in-mongo-database-url/55779444#55779444
    if (auth) uri.push('?authSource=admin')
    uri = uri.join('')
    const sanitized = auth ? uri.replace(dbc.password, 'aPassword') : uri
    debug('DB: URN sanitized: ====  %s', sanitized)
    debug('DB: Options: %o', dbc.options)
    debug('DB: ehrApp', uri)

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
