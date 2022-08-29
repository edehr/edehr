'use strict'

const mongoose = require('mongoose')

const schemas = [
  'activities',
  'visits',
  'visitdatas',
  'consumers',
  'users'
]

const dropSchema = function (name) {
  return new Promise(((resolve, reject) => {
    const col = mongoose.connection.collections[name]
    if (col) {
      col.drop((/* err */) => {
        //
        // do not care about errors
        //
        resolve(true)
      })
    }
  }))
}

function dropSchemas (doDrop) {
  return new Promise(((resolve, reject) => {
    if (!doDrop) {
      return resolve(true)
    }

    console.log('Warning:  Dropping Schemas !!!')
    const allDropPromises = schemas.map(schemaName => {
      return dropSchema(schemaName)
    })
    Promise.all(allDropPromises).then(resolve, reject)
  }))
}

module.exports = dropSchemas