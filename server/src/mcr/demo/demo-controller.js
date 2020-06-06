import { Router } from 'express'
import axios from 'axios'
import { demoPersonae } from '../../helpers/demo-personae'
import { demoLimiter, validatorMiddlewareWrapper } from '../../helpers/middleware'

const {ltiVersions} = require('../../mcr/lti/lti-defs')
const HMAC_SHA1 = require('ims-lti/src/hmac-sha1')

const debugDC = true
const debug = require('debug')('server')

const consumerBaseDef = {
  lti_version: ltiVersions()[0],
  tool_consumer_info_product_family_code: 'EdEHR Demo',
  tool_consumer_info_version: 'ehrdemo',
  tool_consumer_instance_description: 'Virtual LMS for demonstration',
  tool_consumer_instance_guid: 'Demo-EdEHR',
  tool_consumer_instance_name: 'EdEHR Demo',
  oauth_signature_method: 'HMAC-SHA1',
  lti_message_type: 'basic-lti-launch-request',
}

const seedData = {
  toolConsumer: '',
  name: 'Demonstration seed data',
  description: 'This a demonstration empty seed data',
  version: '1',
  isDefault: true,
  ehrData: {}
}

const a1 = {
  externalId: 'demoAssignment1',
  description: 'This demonstration EdEHR assignment is based on Case Study #1 from  "Health Case Studies - Toward Closing the Healthcare Communication Gap".\n' +
  'Case 1 describes a patient\’s experience of chronic obstructive pulmonary disease (COPD) with a history of asthma. The interprofessional collaboration is role modelled between nursing, medical radiology, medical laboratory, and healthcare workers in the emergency department. ' +
  'The focus for this assignment is help the student complement their assessment and monitoring skills with accurate and careful recording within an electronic health record system.'

  , title: 'Demonstration Case Study #1: COPD'
}

const a2 = {
  externalId: 'demoAssignment2',
  description: 'This demonstration EdEHR assignment is based on Case Study #2 from "Health Case Studies - Toward Closing the Healthcare Communication Gap".\n' +

  'Case 2 describes a patient\’s experience of COPD exacerbation due to community acquired pneumonia. The patient in this case study has a complicated health history. The interprofessional collaboration is role modelled between nursing, medical radiology, medical laboratory, and health care workers in the emergency department. ' +
  'The focus for this assignment is help the student complement their assessment and monitoring skills with accurate and careful recording within an electronic health record system.'

  , title: 'Demonstration Case Study #2: Pneumonia'
}

export default class DemoController {

  constructor (config, cc) {
    this.config = config
    this.cc = cc
  }

  _createDemoToolConsumer (req, res) {
    const theId = req.body.id
    if (debugDC) debug('DemoController create tool. Id:', theId)
    const consumerDef = Object.assign({}, consumerBaseDef, {  oauth_consumer_key: theId, oauth_consumer_secret: theId })
    let theToolConsumer
    this.cc.consumerController.createWithSeed(consumerDef, seedData)
      .then((toolConsumer) => {
        theToolConsumer = toolConsumer
        if (debugDC) debug('DemoController create assignment ')
        return this.cc.assignmentController.createAssignment(a1.externalId, theToolConsumer, a1.title, a1.description)
      })
      .then(() => {
        return this.cc.assignmentController.createAssignment(a2.externalId, theToolConsumer, a2.title, a2.description)
      })
      .then(() => {
        // Generate token and return it
        try {
          const demoData = {
            toolConsumerKey: theId,
            toolConsumerId: theToolConsumer._id,
            personaList: demoPersonae
          }
          const demoToken = this.cc.authUtil.createToken({demoData: demoData})
          if (debugDC) debug('DemoController _createDemoToolConsumer generated token')
          res.status(200).json({demoToken})
        } catch (err) {
          debug('DemoController _createDemoToolConsumer ERROR ', err)
          res.status(500).send(err)
        }
      })

  }


  deleteDemoData (consumerKey) {
    let toolConsumer
    debug('Ready deleteDemoData demo consumer along with all of its data: ' + consumerKey)
    return this.cc.consumerController.findOneConsumerByKey(consumerKey)
      .then((tc) => {
        if (!tc) {
          throw new Error('Attempt to clean up a demo consumer that does not exist ' + consumerKey)
        }
        debug('Ready to remove a demo consumer along with all of its data: ' + tc.tool_consumer_instance_name)
        toolConsumer = tc._id
      })
      .then(() => {
        debug('deleteDemoData delete consumer ' + toolConsumer)
        return this.cc.consumerController.delete(toolConsumer)
      })
      .then(() => {
        debug('deleteDemoData delete visits ' + toolConsumer)
        return this.cc.visitController.clearConsumer(toolConsumer)
      })
      .then(() => {
        debug('deleteDemoData delete activities ' + toolConsumer)
        return this.cc.activityController.clearConsumer(toolConsumer)
      })
      .then(() => {
        debug('deleteDemoData delete seeds ' + toolConsumer)
        return this.cc.seedController.clearConsumer(toolConsumer)
      })
      .then(() => {
        debug('deleteDemoData delete assignments ' + toolConsumer)
        return this.cc.assignmentController.clearConsumer(toolConsumer._id)
      })
      .then(() => {
        debug('deleteDemoData delete users ' + toolConsumer)
        return this.cc.userController.clearConsumer(toolConsumer._id)
      })
  }

  submitLTIData (req, res) {
    const {host} = req.headers
    let {demoData, assignment} = req.body
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
        res.status(200).json({refreshToken: r.data.refreshToken, url: r.data.url})
      })
      .catch(err => {
        if (debugDC) console.log('LTIPOST caught >> ', err.message)
        res.status(500).send(err)
      })
  }

  getDemoPayload (req, res) {
    res.status(200).json({result: req.result})
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
  _signAndPrepareLTIRequest (ltiData, base, debug = true) {
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
      body: Object.assign({}, ltiData, {debug})
    }
    const signer = new HMAC_SHA1()
    req.body.oauth_signature = signer.build_signature(req, req.body, ltiData.oauth_consumer_secret)
    return req
  }

  route () {
    const validatorMiddleware = [validatorMiddlewareWrapper(this.cc.authUtil)]
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
      // The result of authentication is the parsed token. Return this parsed token as the demo data.
      res.status(200).json(req.authPayload)
    )

    router.post('/logout', validatorMiddleware, (req, res) => {
      if (debugDC) debug('DemoController logout', req.authPayload)
      this.deleteDemoData(req.authPayload.demoData.toolConsumerKey)
        .then( () => {
          if (debugDC) debug('DemoController logout, return 200')
          res.status(200).send('success')
        })
        .catch( (err) => {
          debug('DemoController logout ERROR ', err)
          res.status(500).send(err)
        })
    })

    /**
     *
     * @description Receives a more complete and robust LTI object from the persona, containing the assignment, and the selected persona.
     * It then signs the LTI request and then it completes the LTI post,
     * returning the returnUrl and the refreshToken, which were obtained in the POST request.
     */
    router.post('/set', (req, res) => {
      this.submitLTIData(req, res)
    })

    return router
  }
}