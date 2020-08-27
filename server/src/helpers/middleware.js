import { Text } from '../config/text'

const rateLimit = require('express-rate-limit')
const debug = require('debug')('server')
const logError = require('debug')('error')

const debugMW = false

const ADMIN_MAX_REQUEST_LIMIT = 5
const DEMO_MAX_REQUEST_LIMIT = process.env.NODE_ENV === 'development' ? 10 : 2
if(debugMW) debug('validatorMiddlewareWrapper ADMIN_MAX_REQUEST_LIMIT', ADMIN_MAX_REQUEST_LIMIT)
if(debugMW) debug('validatorMiddlewareWrapper DEMO_MAX_REQUEST_LIMIT', DEMO_MAX_REQUEST_LIMIT)

/**
 *
 * @param authUtil
 * @return Function(req, res, next) If req's auth header contains a valid token then place the parsed data into reg.authPayload
 */
export const validatorMiddlewareWrapper = (authUtil) => {
  return (req, res, next) => {
    if (req && req.headers.authorization) {
      if (debugMW) debug('validatorMiddlewareWrapper has header')
      try {
        const result = authUtil.authenticate(req.headers.authorization)
        const { visitId, demoData } = result
        if (debugMW) debug('validatorMiddlewareWrapper has result? ', !!result, 'has demoData?', !!demoData)
        if (visitId || demoData) {
          if (debugMW) debug('validatorMiddlewareWrapper onto next')
          req.authPayload = result
          next()
        } else {
          logError('validatorMiddleware', Text.INVALID_TOKEN)
          res.status(401).send(Text.INVALID_TOKEN)
        }
      } catch (err) {
        logError('validatorMiddleware caught ', err.message)
        res.status(401).send(err)
      }
    } else {
      logError('validatorMiddleware no auth header ', req.originalUrl)
      res.status(401).send('A token is required')
    }
  }
}

export const isAdmin = (req, res, next) => {
  const { authPayload } = req
  debug('authPayload >> ', authPayload)
  if (debugMW) debug('validatorMiddlewareWrapper isAdmin  authPayload:', authPayload)
  if (authPayload) {
    if (authPayload.isAdmin) {
      if (debugMW) debug('validatorMiddlewareWrapper isAdmin  pass test')
      next()
    } else {
      logError('isAdmin not authorized')
      return res.status(403).send('You don\'t have permission to do this!')
    }
  } else {
    logError('isAdmin invalid token')
    return res.status(401).send('Invalid token')
  }
}

export const localhostOnly = (req, res, next) => {
  if (req.hostname === 'localhost') {
    next()
  } else {
    res.status(400).send('This is a localhost-only request. Please, make sure your host is correct')
  }
}

export const adminLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: ADMIN_MAX_REQUEST_LIMIT,
  message: Text.TOO_MANY_REQUESTS_ERROR
})

export const demoLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: DEMO_MAX_REQUEST_LIMIT,
  message: Text.TOO_MANY_REQUESTS_ERROR
})
