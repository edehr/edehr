'use strict'

const TRACE_CALLS = true
// BC Campus server: edehrapp-dev.bccampus.ca
// Digital Ocean server provided by Bryan https://edehr.org
const HOST =   process.env.HOST || 'edehr.org'
const SCHEME = process.env.SCHEME || 'https'
const COOKIE_SECRET = process.env.COOKIE_SECRET

// default overrides
//api port is the port number, if any, to use when constructing the API url
const MONGODB_NAME = process.env.MONGODB_NAME || 'edehr-prod'

module.exports = function (cfg) {
  cfg.isDevelop = false
  cfg.isProduction = true
  cfg.traceApiCalls = TRACE_CALLS
  cfg.scheme = SCHEME
  cfg.host = HOST
  cfg.cookieSecret = COOKIE_SECRET
  cfg.cookieSettings = cookieSettings()
  cfg.app.title = cfg.app.title + ' - Development Environment'
  cfg.database.name =  MONGODB_NAME
  return cfg
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