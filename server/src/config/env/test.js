'use strict'

const TRACE_CALLS = true
const API_HOST =   process.env.API_HOST || 'localhost'
const CLIENT_HOST =   process.env.CLIENT_HOST || 'localhost'
const API_PORT = process.env.API_PORT || 27001
const CLIENT_PORT = process.env.CLIENT_PORT || 28000
const SCHEME = process.env.SCHEME || 'http'
const COOKIE_SECRET = process.env.COOKIE_SECRET || 'this is the secret for the session cookie'

// default overrides
//api port is the port number, if any, to use when constructing the API url
const MONGODB_NAME = process.env.MONGODB_NAME || 'edehr-test'

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
  cfg.app.title = cfg.app.title + ' - Test Environment'
  cfg.database.name =  MONGODB_NAME
  return cfg
}

function cookieSettings () {
  return {
    secure: false,
    sameSite: 'lax',
    httpOnly: true,
    maxAge: 60000 * 24
  }
}