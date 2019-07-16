'use strict'
const databaseName = 'edehr-prod'
module.exports = {
  port: process.env.PORT || 27004,
  // To run prod locally with a dev client server
  //
  // API_URL=http://localhost:27004 CLIENT_URL=http://localhost:28000 node index.js
  apiUrl: process.env.API_URL || 'http://142.93.148.22/api',
  clientUrl: process.env.CLIENT_URL || 'http://142.93.148.22',
  databaseName: databaseName,
  database: {
    uri: 'mongodb://localhost:27018/' + databaseName,
    options: {
      useNewUrlParser: true,
      useCreateIndex: true,
      user: process.env.MONGODB_USER || '',
      pass: process.env.MONGODB_PASSWORD || ''
    },
    // Enable mongoose debug module
    debug: process.env.MONGODB_DEBUG || false
  },
  log: {
    // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
    format: 'combined',
    // Stream defaults to process.stdout
    // Uncomment to enable logging to a log on the file system
    options: {
      // stream: 'access.log'
    }
  },
  seedDB: process.env.MONGO_SEED || true
}
