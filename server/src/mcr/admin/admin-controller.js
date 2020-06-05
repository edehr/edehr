import { Router } from 'express'
import { getAdminPassword, generateAdminPassword } from '../../helpers/admin'
import { adminLimiter } from '../../helpers/middleware'
const debug = false

export default class adminController {
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
    if (debug) console.log('authController -- _adminLogin')
    const { adminPass } = req.body
    let adminToken = getAdminPassword()
    const { authorization } = req.headers
    if (!adminPass && !authorization) {
      res.status(401).send(Text.REQUIRED_ADMIN)
    } else {
      if (debug) console.log('adminPass >> adminToken', adminPass, adminToken)
      try {
        if (adminToken) {
          if (adminPass === adminToken) {
            const payload = this.authUtil.authenticate(authorization)
            const adminPayload = Object.assign({}, payload, { adminPassword : adminPass})
            const newToken = this.authUtil.createToken(adminPayload)
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
        if (debug) console.log('_adminLogin threw', err)
        return res.status(401).send(Text.EXPIRED_ADMIN)
      }
    }
  }

  _adminValidate (req, res) {
    const { authorization } = req.headers
    console.log('req.headers >> ', req.headers)
    if (debug) console.log('_adminValidate', authorization)
    if (authorization) {
      if(debug) console.log('auth >> ', authorization)
      try {
        const result = this.authUtil.authenticate(authorization)
        if (debug) console.log('result >> ', result)
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



  route () {
    const router = new Router()
    
    router.post('/', adminLimiter, (req, res) => {
      this._adminLogin(req, res)
    })

    router.post('/validate', (req, res) => {
      this._adminValidate(req, res)
    })
    return router
  }
}