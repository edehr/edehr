import AppLmsUser from './models/app-lms-user'
import AppLmsLink from './models/app-lms-link'
import AppLmsLms from './models/app-lms-lms'
import Activity from '../activity/activity'
import ActivityData from '../activity-data/activity-data'
import Assignment from '../assignment/assignment'
import Consumer from '../consumer/consumer'
import Course from '../course/course'
import SeedData from '../seed/seed-data'
import User from '../user/user'
import Visit from '../visit/visit'
import { ObjectId as ObjectID } from 'mongodb'
import { Router } from 'express'
import { demoLimiter } from '../../helpers/middleware'
import { generateAccessCode } from '../../ehr-definitions/app-lms/app-lms-utils'
import { logError } from '../../helpers/log-error'
import { ltiVersions } from '../lti/lti-defs'
import { isSendGridActive, sendEdEHRAccessCode } from '../../helpers/send-email-helper'
import mongoose from 'mongoose'
import { Text } from '../../config/text'
import { ParameterError, NetworkError } from '../common/errors'
import { fail, ok } from '../common/utils'
import {
  activity1, activity2,
  activity3, activity4, activity5,
  activity6,
  activityEhrOrientation,
  activityMedComplex, activityMentalHealth, activityMP1,
  activitySimExpo2023
} from '../common/assignment-defs'
import qs from 'qs'
import axios from 'axios'
const HMAC_SHA1 = require('ims-lti/src/hmac-sha1')

const debug = require('debug')('server')

const inviteCodeWords = [
  'Beige','Black','Blue','Bronze','Brown','Coral','Cyan','Gold','Gray','Green','Indigo','Khaki','Lavender','Lime','Magenta','Maroon','Mint','Navy','Olive','Orange','Peach','Pink','Purple','Red','Silver','Teal','Turquoise','Violet','White','Yellow'
]
let codeWordCnt = 0
function popAndPushCodeWord () {
  let firstElement = inviteCodeWords.shift()
  inviteCodeWords.push(firstElement)
  // if we have wrapped around the list once (or just started)
  if ('Beige' === firstElement) {
    codeWordCnt++
  }
  return firstElement + '_' + codeWordCnt
}
const appLmsMiddlewareWrapper = (authUtil) => {
  return async (req, res, next) => {
    // console.log('In appLmsMiddlewareWrapper ', req.headers)
    if (req && req.headers.authorization) {
      // console.log('In middle ', req.headers.authorization)
      try {
        // console.log('In middle tokenData ', tokenData)
        req.authPayload = authUtil.authenticate(req.headers.authorization)
        next()
      } catch (err) {
        if (err.name === 'TokenExpiredError') {
          res.status(401).send(Text.EXPIRED_TOKEN)
        } else {
          logError('validatorMiddleware jwt verify threw error ', err)
          res.status(400).send(err)
        }
      }
    } else {
      logError('validatorMiddleware no auth header ', req.originalUrl)
      res.status(400).send('Authorization token is required')
    }
  }
}

const IS_DEV = process.env.NODE_ENV !== 'production'
const APP_LMS_OFFLINE = IS_DEV && process.env.APP_LMS_OFFLINE
if (IS_DEV) {
  console.log('\n************************\n')
  if (!APP_LMS_OFFLINE) {
    console.log('Can set env APP_LMS_OFFLINE to any value and the LMS APP will work without internet')
  } else {
    console.log('APP_LMS_OFFLINE is enabled so the LMS APP will work without internet')
  }
  console.log('\n************************\n')
}

export default class AppLmsController {
  constructor (config) {
    this.config = config
  }
  setSharedControllers (cc) {
    this.comCon = cc
    this.middleWare = [
      appLmsMiddlewareWrapper(cc.authUtil)
    ]
  }

  async getAppLmsLinks () {
    return { lmsLinks: await AppLmsLink.find() }
  }

  async getAppLmsUsers () {
    return {lmsUsers : await AppLmsUser.find() }
  }
  async getAppLmsConsumers () {
    return { lmsConsumers: await Consumer.find({appLms: {$ne: null}})}
  }
  async fetchConsumerById (toolId) {
    const consumer = await Consumer.findById(toolId)
    let results = { consumer }
    return Promise.resolve(results)
  }
  async fetchAppLmsById (appLmsId) {
    // console.log('get app lms by id ', appLmsId)
    const appLms = await AppLmsLms.findById(appLmsId).populate('owner')
    let results = { appLms }
    return Promise.resolve(results)
  }
  async fetchAppLmsForUser (userId) {
    // console.log('get links for user ', userId)
    const userData = await AppLmsUser.findById(userId)
    const userLinkList = await AppLmsLink.find({ appLmsUser: new ObjectID(userId) })
    // .populate('appLms')
    // .populate('appLmsUser')
    const appLmsList = await AppLmsLms.find({}).populate('owner')
    let results = { userId, userData, userLinkList, appLmsList }
    return Promise.resolve(results)
  }
  async fetchUserData (userId) {
    return AppLmsUser.findById(userId)
  }

  /**
   * Connect the AppLms consumer's LObjs to the activities.  NB these activities may not
   * yet exist in the consumer. We only have a title/name to match on. For now.  Ideally there
   * will be a custom parameter with a simple key for making the connection
   * @param toolConsumerId
   * @returns {Promise<{courses: [{courseTitle: string, activities: *[]},{courseTitle: string, activities: *[]}]}>}
   */
  async fetchCourses (toolConsumerId) {
    const lObjList = await this.comCon.assignmentController.justLobjList(toolConsumerId)
    function connectDots (aDef) {
      aDef = JSON.parse(JSON.stringify(aDef))
      aDef.lObjDef = lObjList.find(obj => obj.name === aDef.lObjDef.title)
      return aDef
    }
    const response = {
      courses: [
        {
          courseTitle: 'Intro to EHR',
          activities: [
            connectDots(activityEhrOrientation),
            connectDots(activitySimExpo2023),
            connectDots(activity3),
            connectDots(activity6),
            connectDots(activityMedComplex),
            connectDots(activityMentalHealth),
            connectDots(activity1),
            connectDots(activity2)
          ]
        },
        {
          courseTitle: 'Intro to MedLab',
          activities: [
            connectDots(activity4),
            connectDots(activity5),
            connectDots(activityMP1)
          ]
        }
      ]
    }
    return Promise.resolve(response)
  }

  async _userDataUpdate (req, res, next) {
    const { givenName, familyName, _id } = req.body
    // console.log('UPDATE user', req.body, givenName, familyName, _id)
    if (!givenName || !familyName || !_id) {
      let error = new Error('Caller must provide user id, given and family names.')
      error.status = 400
      return next(error)
    }
    try {
      let appUser = await AppLmsUser.findById(_id)
      if (!appUser) {
        const msg = 'Can not update user data because there is no record for the given id. ' + _id
        logError(msg)
        res.status(400).send(msg)
      } else {
        appUser.givenName = givenName
        appUser.familyName = familyName
        appUser = await appUser.save()
        res.status(200).json({ appUser })
      }
    } catch (err) {
      let msg = err.toString()
      logError('AppLMS _userDataUpdate ERROR "' + msg + '"')
      res.status(500).send(msg)
    }
  }

  async _sendAccessCodeEmail (toEmail, inviteCode) {
    // uncomment to force a error response
    // return res.status(400).send('_sendAccessCode. Test send error message')
    debug('AppLmsCont /send-access-code ' + toEmail + ' optional inviteCode' + inviteCode)
    if (!toEmail) {
      throw new ParameterError('Caller must provide the to email')
    }
    let accessCode = generateAccessCode()
    const aData = { toEmail: toEmail, accessCode: accessCode, timeStamp: Date.now() }
    inviteCode ? aData.inviteCode = inviteCode : null
    console.log('SEND EMAIL with inviteCode', inviteCode)
    const results = { accessToken: this.comCon.authUtil.createToken(aData, '30m') }
    IS_DEV ? results.accessCode = accessCode : null
    return sendEdEHRAccessCode(toEmail, accessCode)
      .then( () => {
        console.log('_sendAccessCodeEmail. access code has been sent by email.')
        return results
      })
      .catch( (err) => {
        const NO_NETWORK = err.code === 'ENOTFOUND'
        if (APP_LMS_OFFLINE && NO_NETWORK) {
          console.log('_sendAccessCodeEmail. On DEV on NO NETWORK return RESULTS.')
          return results
        }
        console.error('_sendAccessCodeEmail error: ', err.message)
        throw new NetworkError(NO_NETWORK ? 'No network' : err)
      })
  }

  async _validateAccessCode (req, res, next) {
    let { accessToken, accessCode } = req.body
    debug('AppLmsCont /verify-access-code ' + accessCode + ', token: ' + accessToken)
    let accessData
    try {
      accessData = this.comCon.authUtil.validateToken(accessToken)
    } catch (err) {
      let msg = err.toString()
      msg = 'AppLmsCont _validateAccessCode ERROR "' + msg + '"'
      let error = new Error(msg)
      error.status = 401
      return next(error)
    }
    if (accessData.accessCode !== accessCode) {
      let error = new Error('Access code validation failed.')
      error.status = 400
      return next(error)
    }
    let userEmail = accessData.toEmail
    let inviteCode = accessData.inviteCode
    let user = await AppLmsUser.findOne({ userEmail: userEmail })
    // console.log('_validateAccessCode valid now work with user record ', user)
    if (user) {
      user.lastUpdateDate = Date.now()
      user = await user.save()
    } else {
      user = await AppLmsUser.create({ userEmail: userEmail })
    }
    const tokenData = Object.assign({}, user.toJSON())
    tokenData.userId = tokenData._id
    delete tokenData._id
    if (inviteCode) {
      tokenData.inviteCode = inviteCode
      let foundInstructor = await AppLmsLms.findOne({inviteCodeWordTeacher: inviteCode})
      let foundStudent = await AppLmsLms.findOne({inviteCodeWordStudent: inviteCode})
      let role = foundStudent ? 'Student' : foundInstructor ? 'Instructor' : undefined
      let id = foundStudent ? foundStudent._id : foundInstructor ? foundInstructor._id : undefined
      if(role) {
        const linkData = {
          appLms: id,
          appLmsUser: user._id,
          role: role
        }
        await AppLmsLink.create(linkData)
      }
    }

    /*
    Sample token contents:
    { "userEmail": "abody@example.com", "createDate": "2024-05-12T00:18:06.366Z", "lastUpdateDate": "2024-05-13T15:03:26.543Z", "__v": 0, "userId": "66400abe7fa28d6bd17454b8", "iat": 1715612606, "exp": 1715785406, "secondsRemaining": 172799, "timeRemaining": "47 hours, 59 minutes, 59 seconds" }
     */
    const results = { appLmsUserToken: this.comCon.authUtil.createToken(tokenData, '2d') }
    // console.log('_validateAccessCode complete finish by returning token on data: ', appLmsUserData)
    res.status(200).json( results )
  }

  _composeConsumerData (displayName, ltiKey, ltiSecret) {
    return {
      is_primary: true,
      lti_version: ltiVersions()[0],
      lti_message_type: 'basic-lti-launch-request',
      oauth_signature_method: 'HMAC-SHA1',
      tool_consumer_info_product_family_code: 'EdEHR App LMS',
      tool_consumer_info_version: 'ehrAppLms',
      tool_consumer_instance_description: 'A EdEHR App LMS',
      tool_consumer_instance_guid: 'AppLms-EdEHR',
      tool_consumer_instance_name: displayName,
      display_name: displayName,
      oauth_consumer_key: ltiKey,
      oauth_consumer_secret: ltiSecret
    }
  }

  async _deleteAppUser (req, res, next) {
    const userId = req.body.userId
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      let error = new Error('Caller must provide a valid id of the User to delete.')
      error.status = 400
      return next(error)
    }
    const appUser = await AppLmsUser.findById(userId)
    if (!appUser) {
      let error = new Error('Can not find the User to delete. (' + userId + ')')
      error.status = 400
      return next(error)
    }
    await AppLmsUser.deleteOne({ _id: userId })
    const results = { msg: 'successful deletion' }
    console.log('DELETION of User is Complete', userId)
    return res.status(200).json(results)
  }

  async _deleteAppLmsWithConsumer (req, res, next) {
    const appLmsId = req.body.appLmsId
    if (!appLmsId || !mongoose.Types.ObjectId.isValid(appLmsId)) {
      let error = new Error('Caller must provide a valid id of the of the AppLms to delete.')
      error.status = 400
      return next(error)
    }
    const appLms = await AppLmsLms.findById(appLmsId)
    if (!appLms) {
      let error = new Error('Can not find the AppLms to delete. (' + appLmsId + ')')
      error.status = 400
      return next(error)
    }
    const toolConsumer = appLms.toolConsumer
    await AppLmsLink.deleteMany({ appLms: new ObjectID(appLmsId) })
    await AppLmsLms.deleteOne({ _id: appLmsId })
    const filter = { toolConsumer: toolConsumer }
    await Visit.deleteMany(filter)
    await Activity.deleteMany(filter)
    await ActivityData.deleteMany(filter)
    await Assignment.deleteMany(filter)
    await SeedData.deleteMany(filter)
    await Course.deleteMany(filter)
    await User.deleteMany(filter)
    await this.comCon.filesController.clearConsumer(toolConsumer)
    // Always do consumer last
    await Consumer.deleteOne({ _id: toolConsumer })

    const appLmsAfter = await AppLmsLms.findById(appLmsId)
    const results = { msg: 'successful deletion' }
    if (appLmsAfter) {
      results.msg = 'Failed to delete LMS Consumer ' + toolConsumer
      console.error(results.msg)
      return res.status(500).json(results)
    }
    console.log('DELETION Complete', appLmsId, toolConsumer)
    return res.status(200).json(results)
  }

  async _createAppLmsToolConsumer (ltiKey, userId) {
    console.log('-------- create App LMS (displayName, ltiKey, ltiSecret, userId).', ltiKey, userId)
    if ( !ltiKey  || !userId) {
      let msg = 'Caller must provide a display name, and LTI key/secret pair, plus the app lms user id.'
      throw new ParameterError(msg)
    }
    let existingTool = await this.comCon.consumerController.findOneConsumerByKey(ltiKey)
    if (existingTool) {
      const msg = 'Can not create consumer because the lti key (' + ltiKey + ') is already in use.'
      throw new ParameterError(msg)
    }
    // ----------- Create App LMS
    let displayName = ltiKey
    let ltiSecret = ltiKey + 'P12_apple' // TODO replace with env var
    const consumerDef = this._composeConsumerData(displayName, ltiKey, ltiSecret)
    const toolC = await this.comCon.consumerController.createToolConsumer(consumerDef)

    const activities = [ activity1, activity2, activity3, activity4, activity5, activity6, activityMP1, activityMedComplex, activityMentalHealth, activityEhrOrientation, activitySimExpo2023]
    for (let i = 0; i< activities.length; i++ ) {
      await this.comCon.demoController.createSampleSeedAndObj(activities[i], toolC)
    }

    const appLmsData = {
      appLmsName: displayName,
      owner: userId,
      inviteCodeWordStudent: popAndPushCodeWord(),
      inviteCodeWordTeacher: popAndPushCodeWord(),
      toolConsumer: toolC._id
    }
    const appLmsLms = await AppLmsLms.create(appLmsData)
    // ----------- back link the consumer to the App LMS
    await this.comCon.consumerController.appLmsLink(toolC._id, appLmsLms._id )
    // ----------- LINKS
    const linkData = {
      appLms: appLmsLms._id,
      appLmsUser: userId,
      role: 'Owner'
    }
    await AppLmsLink.create(linkData)
    // ----------- results
    const createData = {
      appLmsLmsId: appLmsLms._id,
      displayName: displayName,
      toolConsumerKey: ltiKey,
      toolConsumerId: toolC._id,
    }
    console.log('_createAppLmsToolConsumer createData', createData)
    return Promise.resolve( createData )
  }

  async _updateLmsInviteCode (appLmsId, role, code) {
    let appLms = await AppLmsLms.findById(appLmsId)
    if (appLms) {
      if (role === 'student') {
        appLms.inviteCodeWordStudent = code
      }
      if (role === 'instructor') {
        appLms.inviteCodeWordTeacher = code
      }
      appLms = await appLms.save()
    }
    return appLms
  }

  _signAndPrepareLTIRequest (ltiData, host, scheme) {
    const signedRequest = {
      url: `${scheme}://${host}/api/launch_lti`,
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
    // console.log('App LMS object to be signed', signedRequest)
    const debugSignature = false
    let withDetailsCallback = debugSignature ?
      function (signingDetails) {
        console.log('AppLmsController HMAC_SHA1 details:', signingDetails)
      } : undefined
    const signer = new HMAC_SHA1(withDetailsCallback)
    signedRequest.body.oauth_signature = signer.build_signature(
      signedRequest,
      signedRequest.body,
      ltiData.oauth_consumer_secret)
    return signedRequest
  }

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
    // but this controller is not a demo. it is a real one
    ltiData.isDemoLti = false
    const scheme = this.config.scheme
    const signedRequest = this._signAndPrepareLTIRequest(ltiData, host, scheme)
    return axios.post(signedRequest.url, signedRequest.body)
      .then((_results) => {
        // console.log('DC.submitLtiData after post')
        res.status(200).json({refreshToken: _results.data.refreshToken, url: _results.data.url})
      })
      .catch(err => {
        logError(`App LMS Controller submitLtiData caught >> ${err.message}`)
        let { status, data } = err.response
        // console.log('DC.submitLtiData', data)
        res.status(status).send(data)
      })
  }

  async isKeyInUse ( ltiKey ) {
    let existingTool = await this.comCon.consumerController.findOneConsumerByKey(ltiKey)
    return Promise.resolve({ ltiKey: ltiKey, isKeyInUse : !!existingTool })
  }
  routePath () { return '/app-lms'}

  route () {
    const router = new Router()

    router.get('/isSendGridActive', this.middleWare, async (req, res) => {
      let enabled = isSendGridActive()
      return res.status(200).json({isSendGridActive: enabled})
    })

    router.get('/isKeyInUse/:ltiKey', this.middleWare, async (req, res) => {
      this
        .isKeyInUse(req.params.ltiKey)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.get('/app-lms-links', this.middleWare, async (req, res) => {
      this
        .getAppLmsLinks()
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.get('/app-lms-users', this.middleWare, async (req, res) => {
      this
        .getAppLmsUsers()
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.get('/app-lms-consumers', this.middleWare, async (req, res) => {
      this
        .getAppLmsConsumers()
        .then(ok(res))
        .then(null, fail(req, res))
    })

    router.get('/fetchTokenData', async (req, res) => {
      if (req && req.headers.authorization) {
        let authorization = req.headers.authorization
        try {
          const tokenData = this.comCon.authUtil.authenticate(authorization)
          res.status(200).json({ tokenData })
        } catch (err) {
          if (err.name === 'TokenExpiredError') {
            res.status(401).send(Text.EXPIRED_TOKEN)
          } else {
            res.status(400).send(err)
          }
        }
      } else {
        res.status(400).send('Missing auth header')
      }
    })
    router.get('/fetchAppLmsById/:appLmsId', this.middleWare, async (req, res) => {
      this
        .fetchAppLmsById(req.params.appLmsId)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.get('/fetchAppLmsForUser/:userId', this.middleWare, async (req, res) => {
      this
        .fetchAppLmsForUser(req.params.userId)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.get('/fetchUserData/:userId', this.middleWare, async (req, res) => {
      this
        .fetchUserData(req.params.userId)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.get('/fetchCourses/:toolId', this.middleWare, async (req, res) => {
      this
        .fetchCourses(req.params.toolId)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.get('/fetchConsumerById/:toolC', this.middleWare, async (req, res) => {
      this
        .fetchConsumerById(req.params.toolC)
        .then(ok(res))
        .then(null, fail(req, res))
    })

    router.delete ('/delete-app-lms', this.middleWare, (req, res, next) => {
      return this._deleteAppLmsWithConsumer(req, res, next)
    })
    router.delete ('/delete-app-user', this.middleWare, (req, res, next) => {
      return this._deleteAppUser(req, res, next)
    })

    router.post('/create-app-lms', demoLimiter, this.middleWare, (req, res, next) => {
      const { ltiKey, userId} = req.body
      this
        ._createAppLmsToolConsumer(ltiKey, userId)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.post('/send-access-code-email', demoLimiter, (req, res, next) => {
      let { toEmail, inviteCode } = req.body
      this
        ._sendAccessCodeEmail(toEmail, inviteCode)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.post('/verify-access-code', demoLimiter, (req, res, next) => {
      return this._validateAccessCode(req, res, next)
    })

    router.get('/updateLmsInviteCode/:appLmsId/:role/:code', this.middleWare, async (req, res) => {
      const { appLmsId, role, code } = req.params
      this
        ._updateLmsInviteCode(appLmsId, role, code)
        .then(ok(res))
        .then(null, fail(req, res))
    })

    router.put('/user-data-update', demoLimiter, this.middleWare, (req, res, next) => {
      return this._userDataUpdate(req, res, next)
      // this
      //   ._userDataUpdate(req.params.key, req.body)
      //   .then(ok(res))
      //   .then(null, fail(req, res))
    })

    router.post('/app-lms-lti-submit', (req, res) => {
      this.submitLTIData(req, res)
    })

    return router
  }
}
