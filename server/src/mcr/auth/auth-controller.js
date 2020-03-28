import { Router } from 'express'
import { TOKEN_SECRET } from './auth-defs'
const jwt = require('jsonwebtoken')
const debug = false


export default class AuthController {
  constructor () {
    if(debug){
      console.log('authController')
    }
  }
  _authenticate (token) { 
    if(debug) console.log('_authenticate')
    const sliced = token.replace('Bearer ', '')
    return this.validateToken(sliced)
  }

  createAuthToken (data) {
    if(debug) console.log('createAuthToken')
    return jwt.sign(data, TOKEN_SECRET)
  }

  createRefreshToken (token) {
    if(debug) console.log('createRefreshToken')
    //set to expire in 1 minute
    return jwt.sign({token}, TOKEN_SECRET, { expiresIn: '1m'})
  }

  _getAuthToken (req, res) {
    if (debug) console.log('_getAuthToken')
    if(req.body.refreshToken) {
      try {
        const result = this.validateToken(req.body.refreshToken)
        const { token } = result
        res.status(200).json({token})
      } catch(err) {
        res.status(401).send(`AuthController -- Invalid token ${err}`)
      }
    } else {
      if(debug){
        console.log('Token is required!', req.body)
      }
      res.status(401).send('Token is required!')
    }
  }

  _getTokenContent (req, res) {
    if (debug) console.log('_getTokenContent')
    if(req.headers.authorization) {
      try {
        const result = this._authenticate(req.headers.authorization)
        res.status(200).json(result)
      } catch(err) {
        res.status(401).send(err)
      }
    } else {
      res.status(401).send('AuthController._getTokenContent --- Token is required!')
    }
  }
  

  validateToken (token) {
    if (debug) console.log('validateToken')
    return jwt.verify(token, TOKEN_SECRET)
  }

  route () {
    const router = new Router()
    router.post('/refresh', (req, res) => {
      this._getAuthToken(req, res)
    })
    router.post('/', (req, res) => {
      this._getTokenData(req, res)
    })
    return router
  }

} 