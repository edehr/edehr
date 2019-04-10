'use strict'

var defaultEnvConfig = require('./default')
const databaseName = 'edehr-test'
module.exports = {
  port: process.env.PORT || 27000,
  apiUrl: 'http://localhost:27000',
  // clientUrl is the url for this server that the Ed EHR client uses to make API calls
  clientUrl: 'http://localhost:28000',
  defaultConsumerKey: 'edehrkey',

  databaseName: databaseName,
  database: {
    uri: 'mongodb://localhost:27018/' + databaseName,
    options: {useNewUrlParser: true, useCreateIndex: true},
    // Enable mongoose debug mode
    debug: process.env.MONGODB_DEBUG || false
  },
  app: {
    title: defaultEnvConfig.app.title + ' - Test Environment'
  },
  seedDB: process.env.MONGO_SEED || true
}
