'use strict'

let defaultEnvConfig = require('./default')
const databaseName = 'edehr-dev'

module.exports = {
  scheme: process.env.SCHEME || 'http',
  host: process.env.HOST || 'localhost',
  apiPort: 27000,
  serverPort: 27000,
  clientPort: 28000,
  cookieSecret: 'this is the secret for the session cookie',
  cookieSettings: cookieSettings(),
  defaultConsumerKey: 'edehrkey',
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
  traceApiCalls: true,
  // // TODO set up to use some means to configure logging here
  // log: {
  //   // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
  //   format: 'dev'
  // },
  app: {
    title: defaultEnvConfig.app.title + ' - Development Environment'
  },
  seedDB: process.env.MONGO_SEED || true
}

/*
Set cookie security options

Set the following cookie options to enhance security:
    secure - Ensures the browser only sends the cookie over HTTPS.
    httpOnly - Ensures the cookie is sent only over HTTP(S), not client JavaScript, helping to protect against cross-site scripting attacks.
    domain - indicates the domain of the cookie; use it to compare against the domain of the server in which
    the URL is being requested. If they match, then check the path attribute next.
    By default, no domain is set, and most clients will consider the cookie to apply to only the current domain.
    path - indicates the path of the cookie; use it to compare against the request path. If this and domain match, then send the cookie in the request.
    expires - use to set expiration date for persistent cookies.

 */
function cookieSettings() {
  return {
    secure: false,
    sameSite: 'lax',
    httpOnly: true,
    maxAge: 60000 * 24
  }
}