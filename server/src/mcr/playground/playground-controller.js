import { Router } from 'express'
const HMAC_SHA1 = require('ims-lti/src/hmac-sha1')

const logError = require('debug')('error')
const debug = require('debug')('server')

export default class PlaygroundController {
  /**
   * @method _makeSignature
   * @param {*} req request
   * @param {*} res response
   * @description Responsible for generating the LTI body data for testing
   * the LTI request flow on Postman. It basically creates the nonce and timestamp
   * from the given req.body.req.data and then signs it, returning the signed body data.
   * 
   * @requires AdminToken an admin-authenticated token
   * @requires localhostConnection only localhost connections are allowed
   */
  _makeSignature (req, res) {
    if(req.body) {
      debug('req.body >>', req.body)
      const _req = req.body.req
      try {
        let signer = new HMAC_SHA1()
        const mergedBody = Object.assign({}, _req.body, { 
          oauth_timestamp: Math.round(Date.now() / 1000),
          oauth_nonce: Date.now() + Math.random() * 100
        })
        const oauth_signature = signer.build_signature(
          _req, 
          mergedBody,
          mergedBody.oauth_consumer_secret
        )
        const body = Object.assign({}, mergedBody, { oauth_signature }) 
        res.status(200).json({ body, _req })
      }
      catch (err) {
        logError(`err >>  ${err}`)
        res.status(500).send(err)
      }
    }
  }

  
  route () {
    const router = new Router()

    router.post('/make-HMAC_SHA1' ,(req, res) => {
      return this._makeSignature(req, res)
    })

    return router
  }

}