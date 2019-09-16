'use strict'

var defaultEnvConfig = require('./default')
const databaseName = 'edehr-test'
module.exports = {
  scheme: process.env.SCHEME || 'http',
  host: process.env.HOST || 'localhost',
  apiPort: 27000,
  serverPort: 27000,
  clientPort: 28000,
  defaultConsumerKey: 'edehrkey',
  databaseName: databaseName,
  database: {
    uri: 'mongodb://localhost:27018/' + databaseName,
    options: {useNewUrlParser: true, useCreateIndex: true},
    // Enable mongoose debug mode
    debug: process.env.MONGODB_DEBUG || false
  },
  traceApiCalls: true,
  app: {
    title: defaultEnvConfig.app.title + ' - Test Environment'
  },
  seedDB: process.env.MONGO_SEED || true
}
