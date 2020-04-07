import { Router } from 'express'
import { TOKEN_SECRET } from './auth-defs'
const jwt = require('jsonwebtoken')
const debug = false


export default class AuthController {
  constructor () {
    if(debug) console.log('authController')
    
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

  createAuthToken (data) {
    if(debug) console.log('authController -- createAuthToken')
    return jwt.sign(data, TOKEN_SECRET)
  }

  createRefreshToken (token) {
    if(debug) console.log('authController -- createRefreshToken')
    //set to expire in 1 minute
    return jwt.sign({token}, TOKEN_SECRET, { expiresIn: '1m'})
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
    return jwt.verify(token, TOKEN_SECRET)
  }

  route () {
    const router = new Router()
    router.post('/refresh', (req, res) => {
      this._getAuthToken(req, res)
    })
    router.post('/', (req, res) => {
      this._getTokenContent(req, res)
    })
    return router
  }
}
