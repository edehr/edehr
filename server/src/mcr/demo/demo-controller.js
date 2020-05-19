import { Router } from 'express'
import axios from 'axios'
import ConsumerController from '../consumer/consumer-controller'
import { demoUsers } from '../../helpers/demo-users'
import { demoLimiter, validatorMiddlewareWrapper } from '../../helpers/middleware'
const {ltiVersions} = require('../../mcr/lti/lti-defs')

const HMAC_SHA1 = require('ims-lti/src/hmac-sha1')

const DEMO_CONSUMER_SECRET = process.env.DEMO_CONSUMER_SECRET || 'demosecret'
const DEMO_CONSUMER_KEY = process.env.DEMO_CONSUMER_KEY || 'demokey'
const DEMO_ASSIGNMENT = process.env.DEMO_ASSIGNMENT || 'demoAssignment'
const TOOL_CONSUMER_NAME = process.env.TOOL_CONSUMER_NAME || 'EdEHRDemo'
const DEMO_CONTEXT_ID = process.env.DEMO_CONTEXT_ID || 'demoContext'

const debug = true

export default class DemoController {
  constructor (auth) {
    this.auth = auth
  }
  /**
  * @method _createDemoToolConsumer
  * 
  * @description 
  * 1. Create a tool consumer using the unique id as the key and secret. Flag this consumer as a demo.  Create assignments, seeds as needed.
  * 2. Create the four sample user personae records.  Hard code id, names, etc. 
  * @returns: JWT token with the information the client will need to compose a LTI request.
  *  
  */
  _createDemoToolConsumer (req, res) {
    console.log('req.body.id >> ', req.body.id)
    const cc = new ConsumerController()
    const def = {
      oauth_consumer_key: req.body.id,
      oauth_consumer_secret: req.body.id,
      lti_version: ltiVersions()[0],
      tool_consumer_info_product_family_code: 'EdEHR Demo',
      tool_consumer_info_version: 'moodle',
      tool_consumer_instance_description: 'Demo instance of Moodle for prototyping - seeded',
      tool_consumer_instance_guid: 'Moodle-Demo-Local-EdEHRPrototype',
      tool_consumer_instance_name: 'EdEHRDemo'
    }
    const seedData = {
      name: 'Demo seed data',
      description: 'This a demo-only seed data',
      version: '1',
      isDefault: true,
      ehrData: {}
    }
    let ltiData = []

    cc.createWithSeed(def, seedData, true)
      .then((response, reject) => {
        ltiData = demoUsers.map(user => {
          return this._createUserLTIData(user)
        })
        // Generate token and return it
        try {
          const demoToken = this.auth.createToken({ltiData})
          if (debug) {
            console.log('ltiData, generating token', ltiData)
            console.log('generatedToken >> ', demoToken)
          }
          res.status(200).json({ demoToken })
  
        } catch (err) {
          if(debug) console.log('generate token caught ', err)
          res.status(500).send(err)
        }
        
      })

  }

  /**
 * @method createDemoUser
 * @param {*} req The Express request object
 * @param {*} res The Express response object
 * @description This is an overall wrapper method for creating
 * the user and it gets triggered when the /createUser endpoint is called.
 * The whole process of creating a demo user consists of
 * 
 * 1. It unwraps the role from req.body and the host from req.hostname;
 * 2. It calls the findOrCreateToolConsumer so that it asserts that the tool consumer exists;
 * 3. Then it runs the generateUniqueName wrapper, which resolves into a userData object 
 * (containing first, last and full names and an email address);
 * 4. It prepares the ltiData object with the generated data. 
 * 5. It then runs _signAndPrepareLTIRequest which prepares a req object 
 * with the HMAC_SHA1 signature.
 * 6. It calls _LTIPost which runs a LTI post request and from it it gets the returnUrl and refreshToken
 * 7. Both the returnUrl and refreshToken are resolved to the client.
 *
 */

  _createUserLTIData (user) {
    const names = user.name.split(' ')
    const [ firstName, lastName ] = names
    const ltiData = {
      user_id: user.id,
      lis_person_name_given: firstName,
      lis_person_name_family: lastName,
      lis_person_name_full: user.name,
      lis_person_contact_email_primary: user.email,
      lti_version: 'LTI-1p0',
      lti_message_type: 'basic-lti-launch-request',
      roles: user.role,
      oauth_consumer_key: DEMO_CONSUMER_KEY,
      oauth_consumer_secret: DEMO_CONSUMER_SECRET,
      context_id: DEMO_CONTEXT_ID,
      tool_consumer_instance_name: TOOL_CONSUMER_NAME,
      // Return to demopage
      launch_presentation_return_url: 'http://some.place.org',
      resource_link_title: 'Resource Link Title',
      resource_link_id: 'http://link-to-resource.com/resource',
      oauth_signature_method: 'HMAC-SHA1',
      oauth_timestamp: Math.round(Date.now() / 1000),
      oauth_nonce: Date.now() + Math.random() * 100,
      custom_assignment: DEMO_ASSIGNMENT
    }
    return ltiData
  }

  submitLTIData (req, res) {
    const host = req.hostname === 'localhost' ? 'localhost:27000' : req.hostname
    const { ltiData } = req.data
    const _req = this._signAndPrepareLTIRequest(ltiData, host)
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
  _signAndPrepareLTIRequest  (ltiData, base) {
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
      body: Object.assign({}, ltiData, { debug: true })
    }
    const signer = new HMAC_SHA1()
    req.body.oauth_signature = signer.build_signature(req, req.body, ltiData.oauth_consumer_secret)
    return req
  }

  route () {
    const middlewareWrapper = [ validatorMiddlewareWrapper(this.auth) ]
    const router = new Router()

    router.post('/', 
      demoLimiter,
      (req, res) => {
        this._createDemoToolConsumer(req, res)
      })

    router.post('/fetch', middlewareWrapper, (req, res) => {
      console.log('req >> ', req)
      console.log('req >> ', req.authPayload)
      res.status(200).json(req.authPayload)
    }
    )

    router.post('/set', middlewareWrapper, (req, res) => {
      this.submitLTIData(req, res)
    })



    return router
  }
}