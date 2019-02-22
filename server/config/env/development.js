'use strict'

var defaultEnvConfig = require('./default')
const databaseName = 'edehr-dev'
module.exports = {
  port: process.env.PORT || 27000,
  apiUrl: 'http://localhost:27000',
  // clientUrl is the url for this server that the Ed EHR client uses to make API calls
  clientUrl: 'http://localhost:28000',
  defaultConsumerKey: 'edehrkey',
  traceApiCalls: true,

  databaseName: databaseName,
  database: {
    uri: 'mongodb://localhost:27018/' + databaseName,
    options: {useNewUrlParser: true, useCreateIndex: true},
    // Enable mongoose debug mode
    debug: process.env.MONGODB_DEBUG || false
  },
  // TODO set up to use some means to configure logging here
  log: {
    // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
    format: 'dev'
  },
  app: {
    title: defaultEnvConfig.app.title + ' - Development Environment'
  },
  seedDB: process.env.MONGO_SEED || true
}
