'use strict'
import { Text } from '../text'
const path = require('path')
const pkgPath = path.join(process.cwd(), 'package.json')
// console.log('get package file contents from ', pkgPath)
const pkg = require(pkgPath)
// console.log('package', pkg)
const KEYWORDS = pkg.keywords.join(',')
const TITLE = pkg.title
const DESCRIPTION = pkg.description
// provide defaults for development.  Override for production.
// server port is the port the node js app listens on
const SERVER_PORT = process.env.SERVER_PORT || 27000
//api port is the port number, if any, to use when constructing the API url
const API_PORT = process.env.API_PORT || undefined // 2700
const CLIENT_PORT = process.env.CLIENT_PORT || undefined // 28000
const API_HOST =   process.env.API_HOST
const AUTH_TOKEN_SECRET = process.env.AUTH_TOKEN_SECRET || 'defaultTokenSecretForJWT'
const CLIENT_HOST =   process.env.CLIENT_HOST
const EHR_FILES_DIRECTORY = process.env.EHR_FILES_DIRECTORY  || 'ehr-files'
const EHR_MAX_FILE_SIZE = process.env.EHR_MAX_FILE_SIZE  || 1024 * 1024 * 3
const MONGODB_PORT = process.env.MONGODB_PORT || 27018
const MONGODB_HOST = process.env.MONGODB_HOST || 'localhost'
const MONGODB_DEBUG = process.env.MONGODB_DEBUG || false
const MONGODB_NAME = process.env.MONGODB_NAME || 'edehr-dev'
const MONGODB_USER = process.env.MONGODB_USER
const MONGODB_PWORD = process.env.MONGODB_PWORD
const SEED_DB = process.env.SEED_DB || true
const DEFAULT_CONSUMER_KEY = process.env.DEFAULT_CONSUMER_KEY || 'edehrkey'
// For sessionTTL see https://www.npmjs.com/package/session-file-store
const TIME_TO_LIVE = process.env.TIME_TO_LIVE || 3600
const SESSION_DIR = process.env.SESSION_DIR || '.session'
const FAVICON = process.env.FAVICON || 'favicon.ico'

module.exports = function() {
  return {
    app: {
      title: TITLE,
      description: DESCRIPTION,
      keywords: KEYWORDS
    },
    port: API_PORT,
    apiHost: API_HOST,
    apiPort: API_PORT,
    authTokenSecret: AUTH_TOKEN_SECRET,
    serverPort: SERVER_PORT,
    clientPort: CLIENT_PORT,
    clientHost: CLIENT_HOST,
    ehrFilesDirectory: EHR_FILES_DIRECTORY,
    ehrMaxFileSize: EHR_MAX_FILE_SIZE,
    seedDB: SEED_DB,
    database: {
      name: MONGODB_NAME,
      host: MONGODB_HOST,
      port: MONGODB_PORT,
      user: MONGODB_USER,
      password: MONGODB_PWORD,
      options: {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      },
      debug: MONGODB_DEBUG
    },
    defaultConsumerKey: DEFAULT_CONSUMER_KEY,
    ehr: {
      defaultAssignmentDescription: Text.DEFAULT_ASSIGNMENT_DESCRIPTION
    },
    sessionTTL: TIME_TO_LIVE,
    sessionPath: SESSION_DIR,
    favicon: FAVICON,
  }
}
