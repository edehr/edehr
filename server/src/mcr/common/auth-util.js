const jwt = require('jsonwebtoken')
const debug = false

// set to expire in 1 minute
const REFRESH_TOKEN_EXPIRES_IN = '1m'
export default class AuthUtil { 
  constructor (config) {
    this.tokenSecret = config.authTokenSecret
    if(debug) console.log('authUtils -- tokenSecret', this.tokenSecret)
  }

  /**
   * @method authenticate
   * Unwraps the request and attempts to validate its token
   * @param {*} token 
   * @description unwraps the token from the Bearer ${token} structure and then 
   * passes it to validateToken
   * 
   * @returns {*} a function call to validateToken
   * @throws {*} token validation errors from jwt.verify
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
    return jwt.sign({ token }, this.tokenSecret, { expiresIn: REFRESH_TOKEN_EXPIRES_IN })
  }
  
  
  /**
   * @method validateToken
   * Validates the given token
   * @param {String} token 
   * @description this is a wrapper for jwt.verify. 
   * Which is a way of validating the token upon the jwt package.
   * This function, however, can throw several errors; a good example would be whether the token 
   * is expired, which commonly happens for the refresh token. 
   * @returns {*} the results of calling jwt.verify on the token string.
   * This may throw errors if the token is invalid or expired.
   * 
   * @throws {*} token validation errors from jwt.verify
   * @inheritdoc Upon the (Synchronous) If a callback is not supplied, function acts synchronously.
   * Returns the payload decoded if the signature is valid and optional expiration, audience, or issuer are valid.
   * If not, it will throw the error. 
   * (See more in https://github.com/auth0/node-jsonwebtoken)
   */
  validateToken (token) {
    const results = jwt.verify(token, this.tokenSecret)
    if (debug) console.log('authController -- validateToken', results)
    return results
  }
}