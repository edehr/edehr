import { Router } from 'express'
import axios from 'axios'
import qs from 'qs'
import { demoPersonae } from '../../helpers/demo-personae'
import { demoLimiter, validatorMiddlewareWrapper } from '../../helpers/middleware'
import { assignment1, assignment2, wound1 } from './assignment-defs'

const ej0Seed = require('../../../resources/erin-johns-seed-day0-mid.json')
const ej2Seed = require('../../../resources/erin-johns-seed-day2-end.json')
const wound1Seed = require('../../../resources/wound-case-1.json')

const {ltiVersions} = require('../../mcr/lti/lti-defs')
const HMAC_SHA1 = require('ims-lti/src/hmac-sha1')

const debugDC = true
const debug = require('debug')('server')
const logError = require('debug')('error')

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

const seedTemplate = {
  toolConsumer: '',
  name: 'Demonstration seed data',
  description: 'This a demonstration empty seed data',
  version: '1',
  ehrData: {}
}

export default class DemoController {

  constructor (config) {
    this.config = config
  }

  setSharedControllers(cc) {
    this.comCon = cc
  }

  addSample(theSeed, assignmentData, toolC) {
  Promise.resolve().then(() => {
      const data = theSeed
      if (debugDC) debug('DemoController create', data.name)
      const aSeed = Object.assign({}, seedTemplate, { toolConsumer: toolC._id })
      aSeed.name = data.name
      aSeed.description = data.description
      aSeed.ehrData = data.ehrData
      return this.comCon.seedController.create(aSeed)
    })
    .then((seed) => {
      if (debugDC) debug('DemoController create assignment')
      const ass = Object.assign({}, assignmentData, { toolConsumer: toolC })
      return this.comCon.assignmentController.createAssignment(ass, seed._id)
    })
  }

_createDemoToolConsumer (req, res, next) {
    let theId = req.body.id
    if (debugDC) debug('DemoController create tool. Call provided this id:', theId)
    if (!theId) {
      let error = new Error('Caller must provide a new id for the demonstration to work.')
      error.status = 400
      return next(error)
    }
    theId = 'Demo-' + Date.now() + '-' + theId
    if (debugDC) debug('DemoController create tool. Create tool with this id:', theId)
    const consumerDef = Object.assign({}, consumerBaseDef, {  oauth_consumer_key: theId, oauth_consumer_secret: theId })
    let toolC
    this.comCon.consumerController.createToolConsumer(consumerDef)
      .then((toolConsumer) => {
        toolC = toolConsumer
        if (debugDC) debug('DemoController tool consumer ready', toolC)
      })
      .then(() => {
        return this.addSample(ej0Seed, assignment1, toolC)
      })
      .then(() => {
        return this.addSample(ej2Seed, assignment2, toolC)
      })
      .then(() => {
        return this.addSample(wound1Seed, wound1  , toolC)
      })
      .then(() => {
        if (debugDC) debug('DemoController generate token')
        try {
          const demoData = {
            toolConsumerKey: theId,
            toolConsumerId: toolC._id,
            personaList: demoPersonae
          }
          const demoToken = this.comCon.authUtil.createToken({demoData: demoData})
          if (debugDC) debug('DemoController _createDemoToolConsumer generated token')
          res.status(200).json({demoToken})
        } catch (err) {
          logError('DemoController _createDemoToolConsumer ERROR ', err)
          res.status(500).send(err)
        }
      })
  }


  deleteDemoData (consumerKey) {
    let toolConsumer
    debug('Ready deleteDemoData demo consumer along with all of its data: ' + consumerKey)
    return this.comCon.consumerController.findOneConsumerByKey(consumerKey)
      .then((tc) => {
        if (!tc) {
          throw new Error('Attempt to clean up a demo consumer that does not exist ' + consumerKey)
        }
        debug('Ready to remove a demo consumer along with all of its data: ' + tc.tool_consumer_instance_name)
        toolConsumer = tc._id
        let promises = []
        promises.push(this.comCon.consumerController.delete(toolConsumer))
        promises.push(this.comCon.visitController.clearConsumer(toolConsumer))
        promises.push(this.comCon.activityController.clearConsumer(toolConsumer))
        promises.push(this.comCon.seedController.clearConsumer(toolConsumer))
        promises.push(this.comCon.assignmentController.clearConsumer(toolConsumer))
        promises.push(this.comCon.userController.clearConsumer(toolConsumer))
        promises.push(this.comCon.filesController.clearConsumer(toolConsumer))
        return Promise.all(promises)
      })
  }

  /**
   * Request body needs to contain the lti data
   * Good resource for LTI parameters and what they mean and do
   *   https://developer.itslearning.com/LTI_standard_parameters.html
   * @param req
   * @param res
   */
  submitLTIData (req, res) {
    const {host} = req.headers
    const {ltiData} = qs.parse(req.body)
    // console.log('ltidata', ltiData, req.body)
    const signedRequest = this._signAndPrepareLTIRequest(ltiData, host)
    return axios.post(signedRequest.url, signedRequest.body)
      .then((_results) => {
        if (debugDC) debug('DC.submitLtiData after post')
        res.status(200).json({refreshToken: _results.data.refreshToken, url: _results.data.url})
      })
      .catch(err => {
        logError(`DC.submitLtiData caught >> ${err.message}`)
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
   * @param {*} host The host for the request
   * @description Create a signed request object containing the LTI data
   * @returns a generated and signed request object
   */
  _signAndPrepareLTIRequest (ltiData, host) {
    const signedRequest = {
      url: `${this.config.scheme}://${host}/api/launch_lti`,
      method: 'POST',
      connection: {
        encrypted: this.config.scheme === 'https'
      },
      headers: {
        accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=utf-8',
        host: host,
      },
      body: Object.assign({}, ltiData, { demoRedirect: true})
    }
    const debugSignature = false
    let withDetailsCallback = debugSignature ?
      function (signingDetails) {
        debug('DemoController HMAC_SHA1 details:', signingDetails)
      } : undefined
    const signer = new HMAC_SHA1(withDetailsCallback)
    signedRequest.body.oauth_signature = signer.build_signature(
      signedRequest,
      signedRequest.body,
      ltiData.oauth_consumer_secret)
    return signedRequest
  }

  route () {
    const validatorMiddleware = [validatorMiddlewareWrapper(this.comCon.authUtil)]
    const router = new Router()

    /**
     * @description Implements the tool consumer creation upon receiving a random id which is generated in the frontend.
     * It gets the persona data which is defined and then it returns a token with a combined personae object, containing personae
     * data, which will be later used on the LTI request.
     */
    router.post('/',
      demoLimiter,
      (req, res, next) => {
        this._createDemoToolConsumer(req, res, next)
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
