import { Router } from 'express'
import axios from 'axios'
import ConsumerController from '../consumer/consumer-controller'
import { demoPersonae } from '../../helpers/demo-personae'
import { demoLimiter, validatorMiddlewareWrapper } from '../../helpers/middleware'
const {ltiVersions} = require('../../mcr/lti/lti-defs')

const HMAC_SHA1 = require('ims-lti/src/hmac-sha1')

const debug = false

export default class DemoController {
  // TODO: create further method documentation after potential changes
  constructor (auth) {
    this.auth = auth
  }
 
  _createDemoToolConsumer (req, res) {
    const cc = new ConsumerController()
    const def = {
      oauth_consumer_key: req.body.id,
      oauth_consumer_secret: req.body.id,
      lti_version: ltiVersions()[0],
      tool_consumer_info_product_family_code: 'EdEHR Demo',
      tool_consumer_info_version: 'ehrdemo',
      tool_consumer_instance_description: 'Demo instance of Moodle for prototyping - seeded',
      tool_consumer_instance_guid: 'Demo-EdEHR',
      tool_consumer_instance_name: 'EdEHR Demo',
      oauth_signature_method: 'HMAC-SHA1',
      lti_message_type: 'basic-lti-launch-request',
    }
    const seedData = {
      name: 'Demo seed data',
      description: 'This a demo-only seed data',
      version: '1',
      isDefault: true,
      ehrData: {}
    }
    // demoData contains information regarding a mock LTI request which combines data from
    // the newly created Tool Consumer and all the seed personae, in order to generate a sample
    // LTIData object which will be potentially used later in the demo flow.
    let demoData = []

    cc.createWithSeed(def, seedData, true)
      .then((response, reject) => {
        demoData = demoPersonae.map(persona => {
          return this._createDemoData(persona, def, req.hostname)
        })
        // Generate token and return it
        try {
          const demoToken = this.auth.createToken({ demoData })
          if (debug) {
            console.log('ltiData, generating token', demoData)
            console.log('generatedToken >> ', demoToken)
          }
          res.status(200).json({ demoToken })
  
        } catch (err) {
          if(debug) console.log('generate token caught ', err)
          res.status(500).send(err)
        }
        
      })

  }


  _createDemoData (persona, toolConsumer, host) {
    const names = persona.name.split(' ')
    const [ firstName, lastName ] = names
    const clientUrl = host === 'localhost' ? 'http://localhost:28000' : 'https://www.edehr.org'
    const demoData = {
      user_id: persona.id,
      lis_person_name_given: firstName,
      lis_person_name_family: lastName,
      lis_person_name_full: persona.name,
      lis_person_contact_email_primary: persona.email,
      lti_version: toolConsumer.lti_version,
      lti_message_type: toolConsumer.lti_message_type,
      roles: persona.role,
      oauth_consumer_key: toolConsumer.oauth_consumer_key,
      oauth_consumer_secret: toolConsumer.oauth_consumer_secret,
      context_id: toolConsumer.context_id,
      tool_consumer_instance_name: toolConsumer.tool_consumer_instance_name,
      // Return to demopage
      launch_presentation_return_url: `${clientUrl}/demo-course`,
      oauth_signature_method:  toolConsumer.oauth_signature_method,
    }
    return demoData
  }

  submitLTIData (req, res) {
    const { host } = req.headers
    let { demoData, assignment } = req.body
    demoData = Object.assign({}, demoData, {
      oauth_timestamp: Math.round(Date.now() / 1000),
      oauth_nonce: Date.now() + Math.random() * 100,
      custom_assignment: assignment,
      // TODO: change this once the assignment seed is done.
      // Please, refer to https://github.com/BCcampus/edehr/issues/691
      // for further detail
      resource_link_id: 'resource_link_id',
      context_id: Math.floor(Date.now() / 1000)
    })
    const _req = this._signAndPrepareLTIRequest(demoData, host)
    this._LTIPost(_req)
      .then((r) => {
        res.status(200).json({ refreshToken: r.data.refreshToken, url: r.data.url })
      })
      .catch(err => {
        if (debug) console.log('LTIPOST caught >> ', err.message)
        res.status(500).send(err)
      })
  }

  getDemoPayload (req, res) {
    res.status(200).json({ result: req.result })
  }

  /**
   * @method _LTIPost
   * @param {*} req The signed req object for the LTIPost
   * @description this method acts as a wrapper for an Axios post request
   * containing the signed LTIData as well as the other needed attributes
   */
  _LTIPost (req) {
    return axios.post(req.url, req.body)
  }

  /**
 * @method _signAndPrepareLTIRequest
 * @param {*} ltiData the ltiData object, containing metadata for the new connection
 * @param {*} base The base for the request, extracted from req.host
 * @description It prepares the request object within the needed parameters
 * for signing and making a POST to the Lti logic
 * @returns req the generated and signed req object
 */
  _signAndPrepareLTIRequest  (ltiData, base, debug = true) {
    const req = {
      url: `http://${base}/api/launch_lti`,
      method: 'POST',
      connection: {
        encrypted: undefined
      },
      headers: {
        accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=utf-8',
        host: base,
      },
      body: Object.assign({}, ltiData, { debug })
    }
    const signer = new HMAC_SHA1()
    req.body.oauth_signature = signer.build_signature(req, req.body, ltiData.oauth_consumer_secret)
    return req
  }

  route () {
    const validatorMiddleware = [ validatorMiddlewareWrapper(this.auth) ]
    const router = new Router()

    /**
     * @description Implements the tool consumer creation upon receiving a random id which is generated in the frontend.
     * It gets the persona data which is defined and then it returns a token with a combined personae object, containing personae
     * data, which will be later used on the LTI request.
     */

    router.post('/', 
      demoLimiter,
      (req, res) => {
        this._createDemoToolConsumer(req, res)
      })


    /**
     * @description Fetches the auth data which is contained in the demoToken payload,
     * (the data returned from the /demo route). 
     *
     */
    router.get('/fetch', validatorMiddleware, (req, res) =>
      res.status(200).json(req.authPayload)
    )

    /**
     * 
     * @description Receives a more complete and robust LTI object from the persona, containing the assignment, and the selected persona.
     * It then signs the LTI request and then it completes the LTI post, returning the returnUrl and the refreshToken, which were obtained in the POST request.
     */
    router.post('/set', (req, res) => {
    
      this.submitLTIData(req, res)
    })



    return router
  }
}