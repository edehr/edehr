import { Router } from 'express'
import axios from 'axios'
import qs from 'qs'
import { demoPersonae } from '../../helpers/demo-personae'
import { demoLimiter, validatorMiddlewareWrapper } from '../../helpers/middleware'
import { activity1, activity2, activity3, activity4, activity5, activityMP1 } from '../common/assignment-defs'
import { fail, ok } from '../common/utils'
import Consumer from '../consumer/consumer'
const {ltiVersions} = require('../../mcr/lti/lti-defs')
const HMAC_SHA1 = require('ims-lti/src/hmac-sha1')
const debugDC = false
const debug = require('debug')('server')
import { logError} from '../../helpers/log-error'
import { APP_TYPE_LIS } from '../../helpers/appType'

// match the same version as in the client side demo-store-helper.js
export const   DEMO_CONSUMER_FAMILY_CODE = 'EdEHR Demo'
const consumerBaseDef = {
  lti_version: ltiVersions()[0],
  tool_consumer_info_product_family_code: DEMO_CONSUMER_FAMILY_CODE,
  tool_consumer_info_version: 'ehrdemo',
  tool_consumer_instance_description: 'Virtual LMS for demonstration',
  tool_consumer_instance_guid: 'Demo-EdEHR',
  tool_consumer_instance_name: 'EdEHR Demo',
  oauth_signature_method: 'HMAC-SHA1',
  lti_message_type: 'basic-lti-launch-request',
}

export default class DemoController {

  constructor (config) {
    this.config = config
  }

  setSharedControllers (cc) {
    this.comCon = cc
  }

  async createSampleSeedAndObj (activity, toolC) {
    console.log('---- activityDef', activity)
    const lObjDef = activity.lObjDef // has title, description
    lObjDef.toolConsumer = toolC // just needs toolConsumer and seed to be ready to create db object
    let seedId
    let appType = APP_TYPE_LIS // default to medLab; the first profession that wanted this feature
    if (!activity.multiPatient) {
      const seedDef = activity.seedDef
      seedDef.toolConsumer = toolC._id
      let seed = await this.comCon.seedController.create(seedDef)
      seedId = seed._id
      appType = seed.appType
    }
    const lBbj = await this.comCon.assignmentController.createAssignment(lObjDef, seedId)
    return {
      title: lObjDef.title, // provide name and app type without need to query
      appType: appType,
      demo_lobjId: lBbj._id // can get seed or mPatient filters from lObj
    }
  }

  async _createDemoToolConsumer (req, res, next) {
    let theId = req.body.id
    if (debugDC) debug('DemoController create tool. Call provided this id:', theId)
    if (!theId) {
      let error = new Error('Caller must provide a new id for the demonstration to work.')
      error.status = 400
      return next(error)
    }
    theId = 'Demo-' + Date.now() + '-' + theId
    if (debugDC) debug('DemoController create tool. Create tool with this id:', theId)
    const consumerDef = Object.assign({}, consumerBaseDef, { oauth_consumer_key: theId, oauth_consumer_secret: theId })
    consumerDef.is_primary = false
    let toolC = await this.comCon.consumerController.createToolConsumer(consumerDef)
    if (debugDC) debug('DemoController tool consumer ready', toolC)
    const demoData = {
      toolConsumerKey: theId,
      toolConsumerId: toolC._id,
      personaList: demoPersonae,
      lObjList: []
    }
    // see comment below about lObjList
    const activities = [ activity1, activity2, activity3, activity4, activity5, activityMP1 ]
    await Promise.all(
      activities.map(async (activity) => {
        demoData.lObjList.push(await this.createSampleSeedAndObj(activity, toolC))
      })
    )
    console.log('Demo data is ready', demoData)
    if (debugDC) debug('DemoController generate token')
    try {
      // the demo token contains information about the demo system.  It doesn't need
      // any expiry since it's not a user log in control, it's just information.
      const demoToken = this.comCon.authUtil.createToken({ demoData: demoData }, undefined /* no expiry */)
      if (debugDC) debug('DemoController _createDemoToolConsumer generated token')
      res.status(200).json({ demoToken })
    } catch (err) {
      logError('DemoController _createDemoToolConsumer ERROR ', err)
      res.status(500).send(err)
    }
  }

  /*
  A lengthy comment about the lObjList.
  Tip: search for 'demo_lobjId' on both client and server to find the main parts to support this feature.

  Normally, when a user first clicks a link in an LMS the activity does not have a link to EdEHR content (Learning Object/Assignment). It is "unlinked" and an instructor user must make the connection on the UnlinkedActivity page.

  But this is too complex for a demonstration. So we want to automatically link activities to content.  The lObjList contains the activity name and the id to the context.  This data has a long and convoluted path to when it gets used.

  First it is sent to the client in the demo token, as data. The client used demo data to flush out the demo LMS page. The user clicks one of these activity links and the client needs to send the LObj id along with the other demo data to the server.
  The server composes the LTI post on behalf of the client, and sends it to the LTI endpoint (just like all other clients). But this post includes the LObj id.
  The LTI process looks for this custom LObj id and includes it in the query port of the url when it redirects.
  The page-controller client gets the lti redirect and the refresh token. It sends the refresh token back to the server for verification and then redirects to the same page. But when the page controller has that LObj id it includes that in the redirect.
  Finally, the page controller gets the LObj id and gets to the point it looks at the current activity to find it is unlinked. It then uses the LObj id to create the link and refreshes its copy of the activity data.

  Generally, this code base strives to make the code tell the story so that when code is changed the story is immediately changed too. But sometimes the story is too complex so documentation is needed. But that risks confusion when code is eventually changed and the documentation is not kept in sync.
   */

  listDemoActivities () {
    const response = {
      courses: [
        {
          courseTitle: 'Intro to EHR',
          activities: [activity1, activity2, activity3]
        },
        {
          courseTitle: 'Intro to MedLab',
          activities: [activity4, activity5, activityMP1]
        }
      ]
    }
    return Promise.resolve(response)
  }

  async deleteDemoData (toolConsumerId) {
    const tc = await Consumer.findById(toolConsumerId)
    if (!tc) {
      throw new Error('Attempt to clean up a demo consumer that does not exist ' + toolConsumerId)
    }
    if (tc.is_primary) {
      console.error('No action taken. Attempt to clean a non-demo consumer ' + toolConsumerId)
    }
    debug('Ready to remove a demo consumer along with all of its data: ' + tc.tool_consumer_instance_name)
    let toolConsumer = tc._id
    await this.comCon.visitController.clearConsumer(toolConsumer)
    await this.comCon.activityController.clearConsumer(toolConsumer)
    await this.comCon.activityDataController.clearConsumer(toolConsumer)
    await this.comCon.courseController.clearConsumer(toolConsumer)
    await this.comCon.seedController.clearConsumer(toolConsumer)
    await this.comCon.assignmentController.clearConsumer(toolConsumer)
    await this.comCon.userController.clearConsumer(toolConsumer)
    await this.comCon.filesController.clearConsumer(toolConsumer)
    // remove the consumer record last in case it is needed to remove the dependants
    // for example the files controller needs to look up the existing controller
    await this.comCon.consumerController.delete(toolConsumer)
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
    /*
    * NOTE We set a boolean in the lti data to pass this to the lti controller.  When it composes
    * the url that goes to the application we add this flag to the query.  The client can then
    * know that this LTI request is from a demo.
    * Note we don't give any of the standard lti fields a double meaning. E.g. we don't depend on,
    * for example, the fact that tool_consumer_info_version will contain edehrdemo. Using an
    * explicit field lets another coder follow the chain.  See lit next.
     */
    ltiData.isDemoLti = true
    const signedRequest = this._signAndPrepareLTIRequest(ltiData, host)
    return axios.post(signedRequest.url, signedRequest.body)
      .then((_results) => {
        if (debugDC) debug('DC.submitLtiData after post')
        res.status(200).json({refreshToken: _results.data.refreshToken, url: _results.data.url})
      })
      .catch(err => {
        logError(`Demo Controller submitLtiData caught >> ${err.message}`)
        let { status, data } = err.response
        // console.log('DC.submitLtiData', data)
        res.status(status).send(data)
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
    const validatorMiddleware = [validatorMiddlewareWrapper(this.comCon)]
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
    router.get('/fetch', validatorMiddleware, (req, res) => {
      // The result of authentication is the parsed token. Return this parsed token as the demo data.
      res.status(200).json(req.authPayload)
    })

    router.get('/demo-activities/', (req, res) => {
      this
        .listDemoActivities()
        .then(ok(res))
        .then(null, fail(req, res))
    })

    router.post('/logout', validatorMiddleware, (req, res) => {
      const { toolConsumerId } = qs.parse(req.body)
      debug('DemoController POST logout toolConsumerId', toolConsumerId)
      this.deleteDemoData(toolConsumerId)
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
