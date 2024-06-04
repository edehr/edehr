import { Text } from '../config/text'

const rateLimit = require('express-rate-limit')
const debug = require('debug')('server')
const logAuth = require('debug')('auth')
import { logError} from './log-error'

const debugMW = false

const LIMIT_MINUTES = process.env.NODE_ENV === 'production' ? 120 : 2
const LIMIT_TRIES = process.env.NODE_ENV === 'production' ? 15 : 30
const ADMIN_MAX_REQUEST_LIMIT = LIMIT_TRIES
const DEMO_MAX_REQUEST_LIMIT = LIMIT_TRIES
logAuth('validatorMiddlewareWrapper ADMIN_MAX_REQUEST_LIMIT', ADMIN_MAX_REQUEST_LIMIT)
logAuth('validatorMiddlewareWrapper DEMO_MAX_REQUEST_LIMIT', DEMO_MAX_REQUEST_LIMIT)
logAuth('LIMIT_MINUTES', LIMIT_MINUTES)
logAuth('process.env.NODE_ENV', process.env.NODE_ENV)

/**
 *
 * @param commonControllers has the authUtil and the visitController
 * @return Function(req, res, next) If req's auth header contains a valid token then place the parsed data into reg.authPayload
 */
export const validatorMiddlewareWrapper = (commonControllers) => {
  const { authUtil, visitController } = commonControllers
  return async (req, res, next) => {
    console.log('--------------- ' , req.headers.authorization)
    if (req && req.headers.authorization) {
      // logAuth('validatorMiddlewareWrapper has header')
      try {
        const tokenData = authUtil.authenticate(req.headers.authorization)
        // logAuth('validatorMiddlewareWrapper authenticate result ', authUtil.hashToken(tokenData))
        const { visitId, demoData, isPrimary, userId } = tokenData
        // don't just verify the token.  Also verify the token contains a visitId that still exists.
        const visit = visitId ? await visitController.findOneById(visitId) : undefined
        if (debugMW && visitId) debug('validatorMiddlewareWrapper has visit', visitId, visit)
        if (debugMW && demoData) debug('validatorMiddlewareWrapper has demoData.', demoData)
        if (visit || demoData) {
          req.authPayload = tokenData
          if (visit) {
            // loading key data into the req for use downstream. See tracing for an example.
            req.visitId = visitId
            req.consumerKey = visit.consumerKey
            req.isPrimary = isPrimary
            req.userId = userId
          }
          next()
        } else {
          debug('validatorMiddleware', Text.INVALID_TOKEN)
          res.status(401).send(Text.INVALID_TOKEN)
        }
      } catch (err) {
        debug('validatorMiddleware jwt validate threw ', err.message)
        if (err.name === 'TokenExpiredError') {
          logAuth('validatorMiddleware jwt has expired ')
          res.status(401).send(Text.EXPIRED_TOKEN)
        } else {
          logError('validatorMiddleware jwt verify threw error ', err)
          res.status(400).send(err)
        }
      }
    } else {
      logError('validatorMiddleware no auth header ', req.originalUrl)
      res.status(400).send('Authorization token is required')
    }
  }
}

export const isAdmin = (req, res, next) => {
  const authPayload = req.authPayload
  logAuth('middleware isAdmin  authPayload:', authPayload)
  if (authPayload) {
    if (authPayload.isAdmin) {
      logAuth('validatorMiddlewareWrapper isAdmin  pass test')
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
  windowMs: LIMIT_MINUTES * 60 * 1000,
  limit: ADMIN_MAX_REQUEST_LIMIT,
  standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: Text.TOO_MANY_REQUESTS_ERROR
})

export const demoLimiter = rateLimit({
  windowMs: LIMIT_MINUTES * 60 * 1000,
  limit: DEMO_MAX_REQUEST_LIMIT,
  standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: Text.TOO_MANY_REQUESTS_ERROR
})

export const sentryDebugLimiter = rateLimit({
  windowMs: LIMIT_MINUTES * 60 * 1000,
  limit: ADMIN_MAX_REQUEST_LIMIT,
  standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: Text.TOO_MANY_REQUESTS_ERROR
})
