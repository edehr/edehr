import { Router } from 'express'
import { getAdminPassword, generateAdminPassword } from '../../helpers/admin'
import { adminLimiter } from '../../helpers/middleware'
import { Text } from '../../config/text'

const debug = require('debug')('server')
const logError = require('debug')('error')
let debugAC = true

export default class AuthController {

  constructor (authUtil) {
    this.authUtil = authUtil
  }

  /**
 * @method _adminLogin 
 * Receives the admin's password and, if it is valid, it returns a new token which is
 * authenticated for an admin. Handles the /admin end point
 * @param {*} req 
 * @param {*} res 
 * 
 * @description The adminPass is received in the request's Body
 * and it also receives the authorization in the headers. If adminPass is a match with the adminToken,
 * then it generates a new token and responds with it.
 * 
 * @returns {JSON} token - if the request is successful (200 status).
 * @returns {String} missingTokenError - if either the token or password is missing (401 status)
 * @returns {String} passwordMismatch - if adminPass doesn't match with adminToken. (201 status)
 * 
 */
  _adminLogin (req, res) {
    if (debugAC) debug('authController -- _adminLogin')
    const { adminPass } = req.body
    let adminToken = getAdminPassword()
    const { authorization } = req.headers
    if (!adminPass && !authorization) {
      res.status(401).send(Text.REQUIRED_ADMIN)
    } else {
      if (debugAC) debug(`_adminLogin >> adminPass: '${adminPass}' adminToken: '${adminToken}'`)
      try {
        if (adminToken) {
          if (adminPass === adminToken) {
            const payload = this.authenticate(authorization)
            const adminPayload = Object.assign({}, payload, { adminPassword : adminPass})
            const newToken = this.createToken(adminPayload)
            return res.status(200).json({token: newToken})
          } else {
            return res.status(401).send(Text.EXPIRED_ADMIN)
          }
        } else {
          generateAdminPassword()
          return res.status(201).send('The password has been created')
        }
      }
      catch (err) {
        logError('_adminLogin threw', err)
        return res.status(401).send(Text.EXPIRED_ADMIN)
      }
    }
  }

  _adminValidate (req, res) {
    const { authorization } = req.headers
    debug('req.headers >> ', req.headers)
    if (debugAC) debug('_adminValidate', authorization)
    if (authorization) {
      if(debugAC) debug('auth >> ', authorization)
      try {
        const result = this.authenticate(authorization)
        if (debugAC) debug('result >> ', result)
        if (result.adminPassword) {
          const adminPassword = getAdminPassword()
          if (result.adminPassword === adminPassword) {
            return res.status(200).send(/*success*/)
          }
          return res.status(401).send(Text.INVALID_TOKEN)
        }
        return res.status(403).send(Text.NOT_PERMITTED)
        
      } catch (err) {
        return res.status(500).send(err)
      }

    } else {
      return res.status(401).send(Text.TOKEN_REQUIRED)
    }
  }

  /**
 * @method _getAuthToken
 * Retrieves the authToken from the refreshToken (handles the /refresh end point)
 * @param {*} req - handler's request object
 * @param {*} res - handler's response object
 *  
 * @description This function receives the request and response objects from the API call 
 * and it returns 200 with the  if the request is 
 * 
 * @returns {JSON} token -  if the refreshToken is valid (200 status)
 * @returns {String} error -  if any error occurs (401 status), which includes the 
 * refresh token being expired.
 * 
 */
  _getAuthToken (req, res) {
    debug('authController -- _getAuthToken')
    const { refreshToken } = req.body
    if(refreshToken) {
      try {
        const result = this.authUtil.validateToken(refreshToken)
        const { token } = result
        // debug('tokenValidated >> ', token)
        res.status(200).json({token})
      } catch(err) {
        logError('validate token threw >> ', err.message)
        // This arguably returns 401 in this case. As the validateToken can throw if the token has expired,
        // which is a use case of the refresh token.
        res.status(401).send(Text.EXPIRED_TOKEN)
      }
    } else {
      logError(Text.TOKEN_REQUIRED, req.body)
      res.status(401).send(Text.TOKEN_REQUIRED)
    }
  }

  /**
 * @method _getTokenContent
 * Gets the payload from the authToken (handles the / end point)
 * @param {*} req 
 * @param {*} res 
 * 
 * @description it gets the authenticator token in req.headers.authorization
 * and it unwraps it using authenticate and, if the token is properly validated, it returns the payload 
 * (currently visitId)
 * 
 * @returns {Object} result - the result of getting the token data (status 200)
 * @returns {String} missingTokenError - an error message whether the token is missing (status 401)
 * @returns {String} tokenVerificationError - if an error occurs when verifying the token (status 500)
 */
  _getTokenContent (req, res) {
    debug('authController -- _getTokenContent')
    if(req.headers.authorization) {
      try {
        const result = this.authUtil.authenticate(req.headers.authorization)
        res.status(200).json(result)
      } catch(err) {
        logError('_getTokenContent threw >> ', err)
        // Here this can be 500, since it catches and error from the jwt.verify function
        res.status(500).send(Text.SYS_ERROR)
      }
    } else {
      logError('AuthController ._getTokenContent --- Token is required!')
      res.status(401).send(Text.TOKEN_REQUIRED)
    }
  }

  route () {
    const router = new Router()
    router.post('/', (req, res) => {
      this._getTokenContent(req, res)
    })
    router.post('/admin', adminLimiter, (req, res) => {
      this._adminLogin(req, res)
    })

    router.post('/admin/validate', (req, res) => {
      this._adminValidate(req, res)
    })

    router.post('/refresh', (req, res) => {
      this._getAuthToken(req, res)
    }) 
    return router
  }
}
