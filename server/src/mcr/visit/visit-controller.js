import {ok, fail} from '../common/utils'
import BaseController from '../common/base'
import Visit from './visit'
import ActivityData from '../activity-data/activity-data'
import Role from '../roles/roles'
import mongoose from 'mongoose'
import { SystemError } from '../common/errors'
import { ObjectId as ObjectID } from 'mongodb'

// const debug = require('debug')('server')
function debugvc (msg) {
  // if (true)
  //   debug('VisitController: ' + msg)
}

export default class VisitController extends BaseController {
  constructor () {
    super(Visit, '_id')
  }

  findUserVisitList (userId) {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      throw new SystemError('Invalid user id used to retrieve visit records')
    }
    let filter = {user: new ObjectID(userId)}
    return this.model.find(filter)
      .populate('activity')
      .populate('activityData')
      .populate('user', 'givenName familyName fullName emailPrimary')
  }

  findVisit (id) {
    return this.baseFindOneQuery(id)
      .populate('activity')
      .populate('toolConsumer', {
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
   * @param activity
   * @param ltiData
   * @return {*}
   */
  updateCreateVisit (user, toolConsumer, activity, /* assignment, */ ltiData) {
    let role = new Role(ltiData.roles)
    let filter = {
      $and: [
        {user: user._id},
        {role: role.asText()},
        {activity: activity._id}
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
          visit.returnUrl = ltiData.launch_presentation_return_url
          return visit.save()
        } else {
          debugvc('Create a new visit record')
          let data = {
            toolConsumer: toolConsumer._id,
            consumerKey: toolConsumer.oauth_consumer_key,
            user: user._id,
            userName: user.fullName,
            activity: activity._id,
            role: role.asText(),
            isStudent: role.isStudent,
            isInstructor: role.isInstructor,
            // TODO use the actual incoming role to set isDeveloper
            isDeveloper: role.isInstructor,
            // ltiData: [JSON.stringify(ltiData)],
            // isDeveloper: role.isDeveloper,
            returnUrl: ltiData.launch_presentation_return_url
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

  route () {
    const router = super.route()
    router.get('/flushed/:key', (req, res) => {
      this
        .findVisit(req.params.key)
        .then(ok(res))
        .then(null, fail(res))
    })
    router.get('/user/:key', (req, res) => {
      this
        .findUserVisitList(req.params.key)
        .then(ok(res))
        .then(null, fail(res))
    })

    return router
  }
}
