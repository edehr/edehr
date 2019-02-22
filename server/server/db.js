import mongoose from 'mongoose'
const debug = require('debug')('server')

export default function (config) {
  return new Promise(function (resolve, reject) {
    const uri = config.database.uri
    const options = config.database.options
    debug('DB URN', uri)
    mongoose
    .connect(uri, options)
    .then((conn) => {
      debug('MongoDB Connected to ' + uri)
      resolve(conn)
    })
    .catch(err => {
      console.log(err)
      reject(err)
    })
  })
}
