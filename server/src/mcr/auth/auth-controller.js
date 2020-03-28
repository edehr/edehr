import { Router } from 'express'
import { TOKEN_SECRET } from './auth-defs'
const jwt = require('jsonwebtoken')
const debug = true


export default class AuthController {
  route () {
    const router = new Router()
    router.post('/refresh', (req, res) => {
      if(req.body.refreshToken) {
        try {
          const result = this.validateToken(req.body.refreshToken)
          const { token } = result
          res.status(200).json({token})
          
          
        } catch(err) {
          res.status(401).send(`Invalid token ${err}`)
        }
      } else {
        if(debug){
          console.log('Token is required!', req.body)
        }
        res.status(500).send('Token is required!')
      }
    })
    router.post('/', (req, res) => {
      console.log('headers >> ', req.headers)
      if(req.headers.authorization) {
        try {
          const result = this._authenticate(req.headers.authorization)
          res.status(200).json(result)
        } catch(err) {
          res.status(401).send(err)
        }
      } else {
        res.status(500).send('Token is required!')
      }
    })
    return router
  }

  _authenticate (token) { 
    const sliced = token.replace('Bearer ', '')
    console.log('token, sliced >> ', token, sliced)
    return this.validateToken(sliced)
  }

  createAuthToken (data) {
    return jwt.sign(data, TOKEN_SECRET)
  }

  createRefreshToken (token) {
    //set to expire in 1 minute
    return jwt.sign({token}, TOKEN_SECRET, { expiresIn: '1m'})
  }

  validateToken (token) {
    return jwt.verify(token, TOKEN_SECRET)
  }

} 