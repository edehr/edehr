import { getAdminPassword } from './admin'

const rateLimit = require('express-rate-limit')

const ADMIN_MAX_REQUEST_LIMIT = 5

const debug = false

export const validatorMiddlewareWrapper = (authController) => {
  return (req, res, next) => {
    if (req && req.headers.authorization) {
      try {
        const result = authController.authenticate(req.headers.authorization)
        const {visitId} = result
        if (debug) console.log('result >> ', result)
        if (visitId) {
          if (debug) console.log('passingNext!!!')
          req.authPayload = result
          next()
        } else {
          res.status(401).send('Invalid token!')
        }
      } catch (err) {
        if (debug) console.log('validatorMiddleware caught ', err)
        res.status(401).send(err)
      }
    } else {
      if (debug) console.log('validatorMiddleware else ', req)
      res.status(401).send('A token is required')
    }
  }
}

export const isAdmin = (req, res, next) => {
  const { authPayload } = req
  if (req.authPayload.adminPassword) {
    const passwd = getAdminPassword()
    if (authPayload.adminPassword === passwd) {
      next()
    } else {
      return res.status(403).send('You don\'t have permission to do this!')
    }
  } else {
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
  message: 'Too many requests triggered. Please, try again later!'
})
