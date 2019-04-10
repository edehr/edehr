'use strict'

var mongoose = require('mongoose')
var chalk = require('chalk')

var schemas = [
  'activities',
  'visits',
  'visitdatas',
  'consumers',
  'users'
]

var dropSchema = function (name) {
  return new Promise(function (resolve, reject) {
    let col = mongoose.connection.collections[name]
    if(col) {
      col.drop(function (/* err */) {
        //
        // do not care about errors
        //
        resolve(true)
      })
    }
  })
}

module.exports = function (doDrop) {
  return new Promise(function (resolve, reject) {
    if (!doDrop) return resolve(true)
    else {
      console.log(chalk.bold.red('Warning:  Dropping Schemas !!!'))
      var allDropPromises = schemas.map(function (schemaName) {
        return dropSchema(schemaName)
      })
      Promise.all(allDropPromises).then(resolve, reject)
    }
  })
}
