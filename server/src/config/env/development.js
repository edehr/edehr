'use strict'

/*
API_URL=http://42.93.148.22/api CLIENT_URL=http://142.93.148.22 PORT=27004  npm run start-server
API_URL=http://edehr.mac/api CLIENT_URL=http://edehr.mac npm run start-server
 */
var defaultEnvConfig = require('./default')
const databaseName = 'edehr-dev'
module.exports = {
  port: process.env.PORT || 27000,
  apiUrl: process.env.API_URL || 'http://localhost:27000',
  // clientUrl is the url for this server that the Ed EHR client uses to make API calls
  clientUrl:  process.env.CLIENT_URL || 'http://localhost:28000',
  defaultConsumerKey: 'edehrkey',
  traceApiCalls: true,

  databaseName: databaseName,
  database: {
    uri: 'mongodb://localhost:27018/' + databaseName,
    options: {
      useNewUrlParser: true,
      useCreateIndex: true,
      user: process.env.MONGODB_USER || '',
      pass: process.env.MONGODB_PASSWORD || ''
    },
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
