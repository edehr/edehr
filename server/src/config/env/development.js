'use strict'

const TRACE_CALLS = true
const API_HOST =   process.env.API_HOST || 'localhost'
const CLIENT_HOST =   process.env.CLIENT_HOST || 'localhost'
const API_PORT = process.env.API_PORT || 27000
const CLIENT_PORT = process.env.CLIENT_PORT || 28000
const SCHEME = process.env.SCHEME || 'http'
const COOKIE_SECRET = process.env.COOKIE_SECRET || 'this is the secret for the session cookie'

module.exports = function (cfg) {
  cfg.isDevelop = true
  cfg.isProduction = false
  cfg.traceApiCalls = TRACE_CALLS
  cfg.scheme = SCHEME
  cfg.apiHost =  API_HOST
  cfg.apiPort = API_PORT
  cfg.clientPort = CLIENT_PORT
  cfg.clientHost = CLIENT_HOST

  cfg.cookieSecret = COOKIE_SECRET
  cfg.cookieSettings = cookieSettings()
  cfg.app.title = cfg.app.title + ' - Development Environment'
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
function cookieSettings () {
  return {
    secure: false,
    sameSite: 'lax',
    httpOnly: true,
    maxAge: 60000 * 24
  }
}