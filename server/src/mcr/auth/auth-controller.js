import { Router } from 'express'
import { getAdminPassword, generateAdminPassword } from '../../helpers/admin'
import { adminLimiter } from '../../helpers/middleware'

const jwt = require('jsonwebtoken')
const debug = true


export default class AuthController {

  constructor (config) {
    this.tokenSecret = config.authTokenSecret
    if(debug) console.log('authController -- tokenSecret', this.tokenSecret)
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
    if (debug) console.log('authController -- _adminLogin')
    const { adminPass } = req.body
    let adminToken = getAdminPassword()
    const { authorization } = req.headers
    if (!adminPass && !authorization) {
      res.status(401).send('A password and the token are required')
    } else {
      if (debug) console.log('adminPass >> adminToken', adminPass,adminToken)
      try {
        if (adminToken) {
          if (adminPass === adminToken) {
            const payload = this.authenticate(authorization)
            const adminPayload = Object.assign({}, payload, { adminPassword : adminToken})
            const newToken = this.createToken(adminPayload)
            res.status(200).json({token: newToken})
          } else {
            res.status(401).send('The password you\'ve entered is no longer valid. Please, try again. If the problem persists, please, contact an administrator')
          }
        } else {
          generateAdminPassword()
          res.status(201).send('The password has been created')
        }

        
      }
      catch (err) {
        if (debug) console.log('_adminLogin threw', err)
        res.status(201).send('The password you\'ve entered is no longer valid. Please, try again. If the problem persists, please, contact an administrator')
      }
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
    if (debug) console.log('authController -- _getAuthToken')
    const { refreshToken } = req.body
    if(refreshToken) {
      try {
        const result = this.validateToken(refreshToken)
        const { token } = result
        if (debug) console.log('tokenValidated >> ', token)
        res.status(200).json({token})
      } catch(err) {
        if (debug) console.log('validate token threw >> ', err)
        // This arguably returns 401 in this case. As the validateToken can throw if the token has expired,
        // which is a use case of the refresh token.
        res.status(401).send('Invalid token. Please,   try again!')
      }
    } else {
      if(debug) console.log('Token is required!', req.body)
      res.status(401).send('Token is required!')
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
    if (debug) console.log('authController -- _getTokenContent')
    if(req.headers.authorization) {
      try {
        const result = this.authenticate(req.headers.authorization)
        res.status(200).json(result)
      } catch(err) {
        if (debug) console.log('_getTokenContent threw >> ', err)
        // Here this can be 500, since it catches and error from the jwt.verify function
        res.status(500).send('There was a problem validating the token. If it persists, please contact an administrator')
      }
    } else {
      if(debug) console.log('AuthController ._getTokenContent --- Token is required!')
      res.status(401).send('Token is required!')
    }
  }

  /**
   * @method authenticate
   * Unwraps the request and attempts to validate its token
   * @param {*} token 
   * @description unwraps the token from the Bearer ${token} structure and then 
   * passes it to validateToken
   * 
   * @returns {*} a function call to validateToken
   * 
   */
  authenticate (token) { 
    if(debug) console.log('authController -- authenticate')
    const sliced = token.replace('Bearer ', '')
    return this.validateToken(sliced)
  }

  createToken (data) {
    if(debug) console.log('authController -- createToken')
    return jwt.sign(data, this.tokenSecret)
  }

  createRefreshToken (token) {
    if(debug) console.log('authController -- createRefreshToken')
    //set to expire in 1 minute
    return jwt.sign({token}, this.tokenSecret, { expiresIn: '1m'})
  }
  
  
  /**
   * @method validateToken
   * Validates the given token
   * @param {String} token 
   * @description this is a wrapper for jwt.verify. 
   * Which is a way of validating the token upon the jwt package.
   * This function, however, can throw several errors; a good example would be whether the token 
   * is expired, which commonly happens for the refresh token. 
   * @returns {*} a synchronous function call to jwt.verify which may throw errors regarding the token
   * verification. An error may occur if the token is invalid or expired. 
   * 
   * @throws {*} token validation errors from jwt.verify
   * @inheritdoc Upon the (Synchronous) If a callback is not supplied, function acts synchronously. Returns the payload decoded if the signature is valid and optional expiration, audience, or issuer are valid. 
   * If not, it will throw the error. 
   * (See more in https://github.com/auth0/node-jsonwebtoken)
   */
  validateToken (token) {
    if (debug) console.log('authController -- validateToken')
    return jwt.verify(token, this.tokenSecret)
  }

  route () {
    const router = new Router()
    router.post('/', (req, res) => {
      this._getTokenContent(req, res)
    })
    router.post('/admin', adminLimiter, (req, res) => {
      this._adminLogin(req, res)
    })
    router.post('/refresh', (req, res) => {
      this._getAuthToken(req, res)
    })  
    return router
  }
}
