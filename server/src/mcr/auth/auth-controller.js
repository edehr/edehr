import { Router } from 'express'
import { Text } from '../../config/text'

const debug = require('debug')('server')

export default class AuthController {

  constructor (authUtil) {
    this.authUtil = authUtil
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
        debug('tokenValidated >> ', token)
        res.status(200).json({token})
      } catch(err) {
        debug('validate token threw >> ', err)
        // This arguably returns 401 in this case. As the validateToken can throw if the token has expired,
        // which is a use case of the refresh token.
        res.status(401).send(Text.EXPIRED_TOKEN)
      }
    } else {
      debug(Text.TOKEN_REQUIRED, req.body)
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
        debug('_getTokenContent threw >> ', err)
        // Here this can be 500, since it catches and error from the jwt.verify function
        res.status(500).send(Text.SYS_ERROR)
      }
    } else {
      debug('AuthController ._getTokenContent --- Token is required!')
      res.status(401).send(Text.TOKEN_REQUIRED)
    }
  }

  route () {
    const router = new Router()
    router.post('/', (req, res) => {
      this._getTokenContent(req, res)
    })
  

    router.post('/refresh', (req, res) => {
      this._getAuthToken(req, res)
    }) 
    return router
  }
}
