import { Router } from 'express'
// import ToolConsumer from '../consumer/consumer'
// import Visit from '../visit/visit'
import axios from 'axios'

const HMAC_SHA1 = require('ims-lti/src/hmac-sha1')

const DEMO_CONSUMER_SECRET = 'demosecret'
const DEMO_CONSUMER_KEY = 'demokey'
const DEMO_ASSIGNMENT = 'demoAssignment'
const TOOL_CONSUMER_NAME = 'EdEHRDemo'

const debug = true

export default class DemoController {


  //   isUniqueDemoUsername (req, res) {
  //     const { username } = req.body
  //     if (username) {
  //       ToolConsumer.findOne({ oauth_consumer_secret: DEMO_CONSUMER_SECRET })
  //         .then(tc => {
  //           if (tc) {
  //             Visit.findOne({username, toolConsumer: tc._id})
  //               .then(visit => {
  //                 res.status(200).json({isUnique: !!visit})
  //               })
  //           } else {
  //             res.status(500).send('An error occurred when trying to find the Consumer')
  //           }
  //         })
  //     } else {
  //       res.status(400).send('Invalid username')
  //     }
  //   }

  createDemoUser (req, res) {
    const { fullName, role, email } = req.body
    const host = req.hostname
    console.log('hostname >> ', host)
    if (fullName && role) {
      const names = fullName.split(' ')
      const [firstName, lastName] = names
      const ltiData = {
        user_id: `${Math.floor(Date.now() / 1000)}`,
        lis_person_name_given: firstName,
        lis_person_name_family: lastName,
        lis_person_name_full: fullName,
        lis_person_contact_email_primary: email,
        lti_version: 'LTI-1p0',
        lti_message_type: 'basic-lti-launch-request',
        roles: role,
        oauth_consumer_key: DEMO_CONSUMER_KEY,
        oauth_consumer_secret: DEMO_CONSUMER_SECRET,
        tool_consumer_instance_name: TOOL_CONSUMER_NAME,
        launch_presentation_return_url: 'http://some.place.org',
        resource_link_id: 'http://link-to-resource.com/resource',
        oauth_signature_method: 'HMAC-SHA1',
        oauth_timestamp: Math.round(Date.now() / 1000),
        oauth_nonce: Date.now() + Math.random() * 100,
        custom_assignment: DEMO_ASSIGNMENT,
      }

      const req = this._signAndPrepareLTIRequest(ltiData, host)
      this._LTIPost(req)
        .then((res) => {
          console.log('res.data >> ', res.data)
          res.status(200).json({ refreshToken: res.data.refreshToken })
        })
        .catch(err => {
          if (debug) {
            console.log('LTIPOST caught >> ', err.message)
          }
        })
    } else {
      res.status(400).send('Invalid parameters')   
    }
  }
  _LTIPost (req) {
    return axios.post(req.url, req.body)
  }


  _signAndPrepareLTIRequest  (ltiData, base) {
    const req = {
      url: `${base}/api/launch_lti`,
      method: 'POST',
      connection: {
        encrypted: undefined
      },
      headers: {
        accept: 'application/json, text/plain, */*',
        'content-type': 'application/json;charset=utf-8',
        host: 'localhost:27000',
      },
      body: Object.assign({}, ltiData, { debug: true })
    }
    const signer = new HMAC_SHA1()
    req.body.oauth_consumer_secret = signer.build_signature(req, req.body, ltiData.oauth_consumer_secret)
    return req
  }


  route () {
    const router = new Router()
    // router.post('/isUniqueUsername', (req, res) => {
    //   this.isUniqueDemoUsername(req, res)
    // })

    router.post('/create', (req, res) => {
      this.createDemoUser(req, res)
    })

    return router
  }
}