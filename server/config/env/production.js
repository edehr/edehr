'use strict'

module.exports = {
  secure: {
    ssl: false
  },
  port: process.env.PORT || 27004,
  apiUrl: 'http://edehr.mac/api',
  clientUrl: 'http://142.93.148.22',
  databaseName: 'ed-prod',
  db: {
    uri: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.MONGODB_SERVICE_HOST || process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/' + (process.env.MONGODB_DATABASE || 'esm'),
    acluri: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.MONGODB_SERVICE_HOST || process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/esm-acl',
    options: {
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
