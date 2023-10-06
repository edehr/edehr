import {ok, fail} from '../common/utils'
import BaseController from '../common/base'
import Visit from './visit'
import ActivityData from '../activity-data/activity-data'
import Role from '../roles/roles'
import mongoose from 'mongoose'
import { SystemError } from '../common/errors'
import { ObjectId as ObjectID } from 'mongodb'
import { logError } from '../../helpers/log-error'

const debug = require('debug')('server')
function debugvc (msg) {
  // if (true)
  //   debug('VisitController: ' + msg)
}

export default class VisitController extends BaseController {
  constructor (config) {
    super(Visit)
    this.config = config
  }
  setSharedControllers (cc) {
    this.authUtil = cc.authUtil
  }

  findUserVisitList (userId) {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      throw new SystemError('Invalid user id used to retrieve visit records')
    }
    let filter = {user: new ObjectID(userId)}
    return this.model.find(filter)
      .populate('activity')
      .populate('activityData')
      .populate('user', 'givenName familyName fullName')
  }

  findVisit (id) {
    return this.baseFindOneQuery(id)
      .populate('activity')
      .populate('toolConsumer', {
        oauth_consumer_key: 1,
        tool_consumer_instance_name: 1,
        tool_consumer_instance_description: 1,
        tool_consumer_info_product_family_code: 1,
        tool_consumer_info_version: 1
      })
      .populate('user')
  }

  /**
   * Called from LTI controller
   * @param user
   * @param toolConsumer
   * @param activityId
   * @param ltiRole - LMS role: student, instructor, etc
   * @param ltiReturnUrl - if LMS provides a return URL
   * @return {*}
   */
  updateCreateVisit (user, toolConsumer, activityId, ltiRole, ltiReturnUrl) {
    let role = new Role(ltiRole)
    let filter = {
      $and: [
        {user: user._id},
        {role: role.asText()},
        {activity: activityId}
      ]
    }
    debugvc('Update Create Visit ' + JSON.stringify(filter, null, 2))
    let theVisit
    return Visit.findOne(filter)
      .then((visit) => {
        if (visit) {
          theVisit = visit
          debugvc('Update previous visit')
          visit.lastVisitDate = Date.now()
          // update the return URL for this visit in case it has changed
          visit.returnUrl = ltiReturnUrl
          return visit.save()
        } else {
          debugvc('Create a new visit record')
          let data = {
            toolConsumer: toolConsumer._id,
            consumerKey: toolConsumer.oauth_consumer_key,
            user: user._id,
            userName: user.fullName,
            activity: activityId,
            role: role.asText(),
            isStudent: role.isStudent,
            isInstructor: role.isInstructor,
            returnUrl: ltiReturnUrl
          }
          return Visit.create(data)
            .then((visit) => {
              // save the reference to the return value
              debugvc('New visit record  ' + visit._id)
              theVisit = visit
              // create and add the activity data to the visit
              debugvc('Create activity data for the visit')
              return ActivityData.create({
                toolConsumer: toolConsumer._id,
                visit: visit._id
              })
            })
            .then((activityData) => {
              theVisit.activityData = activityData
              return theVisit.save()
            })
        }
      })
      .then(() => {
        debugvc('UpdateCreateVisit returns the visit record')
        return theVisit
      })
  }

  async visitAsStudent (instructorTokenData, activityId) {
    debug('visitAsStudent begin for activityId', activityId)
    const visitId = instructorTokenData.visitId
    const visit = await this.findVisit(visitId)
    const toolConsumer = visit.toolConsumer
    const returnUrl = visit.returnUrl
    const user = visit.user
    // debug('visitAsStudent user record', user)
    const asStudentVisit = await this.updateCreateVisit(user, toolConsumer, activityId, 'student', returnUrl)
    // debug('visitAsStudent data', asStudentVisit)
    const instructorAsStudentPayload = Object.assign({}, instructorTokenData)
    instructorAsStudentPayload.isStudent = true
    instructorAsStudentPayload.instructorAsStudent = true
    instructorAsStudentPayload.isInstructor = false
    instructorAsStudentPayload.visitId = asStudentVisit.id
    // debug('visit as student new token data', JSON.stringify(instructorAsStudentPayload))
    debug('visitAsStudent done')
    return instructorAsStudentPayload
  }
  route () {
    const router = super.route()
    router.get('/user/:key', (req, res) => {
      this
        .findUserVisitList(req.params.key)
        .then(ok(res))
        .then(null, fail(res))
    })

    router.post('/restoreAsInstructor', async (req, res, next) =>  {
      const authHeader = req.headers.authorization
      return await this.authUtil.getTokenAndProcessChange(authHeader, res, (tokenData) => {
        // console.log('Current token contents', payload)
        return tokenData.instructorToken
      })
    })

    router.post('/visitAsStudent', async (req, res, next) =>  {
      // instructor user is working as a student user
      if (!req.body || !req.body.activityId) {
        logError('Visit as student requires activity id in body')
        return res.status(400).send('Visit as student requires activity id in body')
      }
      const activityId = req.body.activityId
      const authHeader = req.headers.authorization
      return await this.authUtil.getTokenAndProcessChange(authHeader, res, async (tokenData) => {
        // debug('visitAsStudent callback start with activityId', activityId)
        const instructorAsStudentPayload = await this.visitAsStudent(tokenData, activityId)
        // place previous token inside the new token data. Will use this to restore role back to instructor.
        instructorAsStudentPayload.instructorToken = this.authUtil.extractTokenFromAuthHeader(authHeader)
        return this.authUtil.createToken(instructorAsStudentPayload /*no expires, payload already has expires*/)
      })
    })


    router.post('/change-visit', async (req, res, next) =>  {
      if (!req.body || !req.body.visitId) {
        const msg = 'Change visit requires new visit id in request body.'
        logError(msg)
        return res.status(400).send(msg)
      }
      const authHeader = req.headers.authorization
      const visitId = req.body.visitId
      return await this.authUtil.getTokenAndProcessChange(authHeader, res, async (tokenData) => {
        debug('change-visit to visitId', visitId)
        tokenData.visitId = visitId
        if (!tokenData.history) {
          tokenData.history = []
        }
        tokenData.history.push( { v: visitId, t: Date.now() })
        return this.authUtil.createToken(tokenData /*no expires, payload already has expires*/)
      })
    })

    return router
  }

}
