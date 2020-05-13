import { Router } from 'express'
import ToolConsumer from '../consumer/consumer'
import axios from 'axios'
import Visit from '../visit/visit'
import demoSeeder from '../../config/lib/demoSeeder'

const HMAC_SHA1 = require('ims-lti/src/hmac-sha1')

const DEMO_CONSUMER_SECRET = process.env.DEMO_CONSUMER_SECRET || 'demosecret'
const DEMO_CONSUMER_KEY = process.env.DEMO_CONSUMER_KEY || 'demokey'
const DEMO_ASSIGNMENT = process.env.DEMO_ASSIGNMENT || 'demoAssignment'
const TOOL_CONSUMER_NAME = process.env.TOOL_CONSUMER_NAME || 'EdEHRDemo'
const DEMO_CONTEXT_ID = process.env.DEMO_CONTEXT_ID || 'demoContext'

const debug = false

export default class DemoController {

  /**
  * @method findOrCreateToolConsumer
  * 
  * @description Looks for the Demo Tool Consumer based on 
  * the DEMO constants. If the tool consumer exists, it returns
  * it. Or else, it uses de demoSeeder function to seed the Demo DB
  * and then it recursively calls itself again so that, it returns the newly
  * created tool consumer.
  * 
  * @returns Either a call to itself or a Promise.resolve() with 
  *  the tool consumer which was fetched
  * 
  * 
  */
  findOrCreateToolConsumer () {
    return new Promise((resolve, reject) => {
      return ToolConsumer.findOne({ 
        oauth_consumer_key: DEMO_CONSUMER_KEY,
        oauth_consumer_secret: DEMO_CONSUMER_SECRET
      })
        .then(consumer => {
          // console.log('findOrcreateToolCOnsumer', consumer)
          if (!consumer) {
            demoSeeder()
              .then(() => {
                return this.findOrCreateToolConsumer()
              })
          } else {
            resolve(consumer)
          }
        })
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

  createDemoUser (req, res) {
    // const { fullName, role, email } = req.body
    const { role } = req.body
    const host = req.hostname === 'localhost' ? 'localhost:27000' : req.hostname
    if (role) {
      // const names = fullName.split(' ')
      // const [firstName, lastName] = names
      this.findOrCreateToolConsumer()
        .then(consumer => {
          if (debug) console.log('consumer >> ', consumer)
          this.generateUniqueName()
            .then(userData => {
              const ltiData = {
                user_id: `${Math.floor(Date.now() / 1000)}`,
                lis_person_name_given: userData.firstName,
                lis_person_name_family: userData.lastName,
                lis_person_name_full: userData.fullName,
                lis_person_contact_email_primary: userData.email,
                lti_version: 'LTI-1p0',
                lti_message_type: 'basic-lti-launch-request',
                roles: role,
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
                custom_assignment: DEMO_ASSIGNMENT,
              }
      
              const _req = this._signAndPrepareLTIRequest(ltiData, host)
              this._LTIPost(_req)
                .then((r) => {
                  res.status(200).json({ refreshToken: r.data.refreshToken, url: r.data.url })
                })
                .catch(err => {
                  if (debug) console.log('LTIPOST caught >> ', err.message)
                  res.status(500).send(err)
                })
            })
        })
      
       
      // })
     
    } else {
      res.status(400).send('Invalid parameters')   
    }
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

  /**
   * @method _generateRandomName
   * @description By consuming a random user API, it gets a user object and returns it.
   * @return axios-based Promise, if the request doesn't fail, it returns the results (containing a user object)
   * if not, it Rejects the promise, resulting in an error. 
   * 
   */
  _generateRandomName () {
    return axios.get('https://randomuser.me/api?nat=us,dk,fr,gb')
      .then(res => {
        return res.data.results
      })
      .catch(err => {
        if (debug) console.log('error fetching names >> ', err)
        Promise.reject(err)
      })
  }
  /**
 * @method generateUniqueName
 * @description This method is a wrapper for _generateRandomName. 
 * It recursively triggers it until the data consumed from the API is unique 
 * among the visit records
 */
  generateUniqueName () {
    return new Promise((resolve, reject) => {
      this._generateRandomName() 
        .then(results => {
          const [r] = results
          const fullName = `${r.name.first} ${r.name.last}`
          const firstName = r.name.first
          const lastName = r.name.last
          const email = r.email
          if (fullName && firstName && lastName && email ) {
            Visit.findOne({
              consumerKey: DEMO_CONSUMER_KEY,
              userName: fullName,
            }).then((visit => {
              if (!visit) {
                resolve({
                  fullName,
                  firstName,
                  lastName, 
                  email,
                })
              } else {
                this.generateUniqueName()
              }
            }))
          } else {
            reject('Name is not complete')
          }         
        }).catch(err => {
          reject(err)
        })
    })
  }


  route () {
    const router = new Router()
    router.post('/createUser', (req, res) => {
      this.createDemoUser(req, res)
    })

    return router
  }
}