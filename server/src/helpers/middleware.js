import AuthController from '../mcr/auth/auth-controller'
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
  
export const adminValidationMiddleware = (req, res, next) => {
  const authController = new AuthController()
  const { authorization } = req.headers
  if(req && authorization) {
    try {
      const result = authController.authenticate(authorization)
      const { adminPassword } = result
      const adminToken = getAdminPassword()
      if (debug) console.log('result >> ', result)
      if (adminPassword) {
        if(adminPassword === adminToken) {
          if (debug) console.log('adminValidationMiddleware passingNext!!!', adminPassword)
          next()
        } else {
          res.status(401).send('Admin password has expired. Please check you have the latest one.')
        }
      } else {
        if (debug) console.log(' adminValidationMiddleware not an admin token!')
        res.status(403).send('You don\'t have permission to view this')
      }
    } catch (err) {
      if (debug) console.log('adminValidationMiddleware caught ', err)
      res.status(500).send('An error occurred when validating the access')
    }
  } else {
    if (debug) console.log('adminValidationMiddleware no token ', req)
    res.status(401).send('An admin token is required')
  }
  

}

export const adminLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: ADMIN_MAX_REQUEST_LIMIT,
  message: 'Too many requests triggered. Please, try again later!'
})
