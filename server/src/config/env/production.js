'use strict'
const databaseName = 'edehr-prod'

if (!process.env.COOKIE_SECRET) {
  throw new Error('For production you must set COOKIE_SECRET env ')
}

module.exports = {
  scheme: process.env.SCHEME || 'https',
  // BC Campus server: edehrapp-dev.bccampus.ca
  // Digital Ocean server provided by Bryan https://edehr.org
  host: process.env.HOST || 'edehr.org',
  apiPort: undefined,
  serverPort: 27004,
  clientPort: undefined,
  cookieSecret: process.env.COOKIE_SECRET,
  cookieSettings: cookieSettings(),
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
  traceApiCalls: true,
  // log: {
  //   // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
  //   format: 'combined',
  //   // Stream defaults to process.stdout
  //   // Uncomment to enable logging to a log on the file system
  //   options: {
  //     // stream: 'access.log'
  //   }
  // },
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
    secure: true,
    sameSite: 'strict',
    httpOnly: true,
    maxAge: 60000 * 24
  }
}