const jwt = require('jsonwebtoken')
const debug = require('debug')('server')
const logAuth = require('debug')('auth')
// let Debug = require('debug')
// Debug.enable('auth')

// set to expire in 1 minute
const REFRESH_TOKEN_EXPIRES_IN = process.env.NODE_ENV === 'production' ? '1m' : '10s'
logAuth('REFRESH_TOKEN_EXPIRES_IN', REFRESH_TOKEN_EXPIRES_IN)
logAuth('process.env.NODE_ENV', process.env.NODE_ENV)

export default class AuthUtil {
  constructor (config) {
    this.tokenSecret = config.authTokenSecret
    logAuth('authUtils -- tokenSecret', this.tokenSecret)
  }

  hashToken (token) {
    if (!token) return 0
    const str = token
    // from https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
    let hash = 0
    if (str.length === 0) return hash
    for (let i = 0; i < str.length; i++) {
      const chr = str.charCodeAt(i)
      hash = ((hash << 5) - hash) + chr
      hash |= 0 // Convert to 32bit integer
    }
    return hash
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
    const sliced = token.replace('Bearer ', '')
    // logAuth('authController -- authenticate bearer token', this.hashToken(sliced))
    return this.validateToken(sliced)
  }

  extractTokenFromAuthHeader (authHeader) {
    return authHeader.replace('Bearer ', '')
  }

  createToken (data, expiry) {
    const options = expiry ?  { expiresIn: expiry } : undefined
    logAuth.enabled ? logAuth('authController -- createToken', options, data) : debug('authUtils -- createToken')
    const token = jwt.sign(data, this.tokenSecret, options)
    logAuth('authController -- created this token', this.hashToken(token))
    return token
  }

  createRefreshToken (data) {
    const options = { expiresIn: REFRESH_TOKEN_EXPIRES_IN }
    logAuth('authController -- createRefreshToken wrapping token', options, this.hashToken(data))
    const token = jwt.sign({ data }, this.tokenSecret, options)
    logAuth('authController -- created this refresh token', this.hashToken(token))
    return token
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
    // jwt.verify
    // If a callback is not supplied, function acts synchronously.
    // Returns the payload decoded if the signature is valid and optional
    // expiration, audience, or issuer are valid.
    logAuth('authUtils -- validateToken', this.hashToken(token))
    const results = jwt.verify(token, this.tokenSecret)
    // Here only if token was valid. Otherwise it's thrown an error already
    const now = Math.round((new Date()).getTime() / 1000)
    const { exp } = results
    results.secondsRemaining = now < exp ? exp - now : 0
    results.timeRemaining = timeRemaining(results.secondsRemaining)
    logAuth('authUtils -- token is valid')
    return results
  }
}

function timeRemaining (epoch) {
  //We are assuming that the epoch is in seconds
  const hours = epoch / 3600,
    minutes = (hours % 1) * 60,
    seconds = (minutes % 1) * 60
  return Math.floor(hours) + ' hours, ' + Math.floor(minutes) + ' minutes, ' + Math.round(seconds) + ' seconds'
}
