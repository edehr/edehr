import { getAdminPassword } from './admin'
import { Text } from '../config/text'

const rateLimit = require('express-rate-limit')

const ADMIN_MAX_REQUEST_LIMIT = 5

const debug = require('debug')('server')
const debugErrs = true

export const validatorMiddlewareWrapper = (authUtil) => {
  return (req, res, next) => {
    if (req && req.headers.authorization) {
      try {
        const result = authUtil.authenticate(req.headers.authorization)
        const {visitId} = result
        debug('result >> ', result)
        if (visitId) {
          debug('passingNext!!!')
          req.authPayload = result
          next()
        } else {
          if (debugErrs) debug('validatorMiddleware', Text.INVALID_TOKEN)
          res.status(401).send(Text.INVALID_TOKEN)
        }
      } catch (err) {
        if (debugErrs) debug('validatorMiddleware caught ', err)
        res.status(401).send(err)
      }
    } else {
      if (debugErrs) debug('validatorMiddleware no auth header ', req.originalUrl)
      res.status(401).send('A token is required')
    }
  }
}

export const isAdmin = (req, res, next) => {
  const { authPayload } = req
  debug('authPayload >> ', req, authPayload)
  if (authPayload.adminPassword) {
    const passwd = getAdminPassword()
    if (authPayload.adminPassword === passwd) {
      next()
    } else {
      if (debugErrs) debug('isAdmin not authorized')
      return res.status(403).send('You don\'t have permission to do this!')
    }
  } else {
    if (debugErrs) debug('isAdmin invalid token')
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
