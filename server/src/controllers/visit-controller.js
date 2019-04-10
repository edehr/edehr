import {ok, fail} from './utils'
import BaseController from './base'
import Visit from '../models/visit'
import ActivityData from '../models/activity-data'
import Role from './roles'

const debug = require('debug')('server')
function debugvc (msg) {
  debug('VisitController: ' + msg)
}

export default class VisitController extends BaseController {
  constructor () {
    super(Visit, '_id')
  }

  findVisit (id) {
    return this.baseFindOneQuery(id)
    .populate('activity')
    .populate('assignment')
    .populate('toolConsumer')
    .populate('user')
  }

  /**
   * Called from LTI controller
   * @param user
   * @param toolConsumer
   * @param activity
   * @param assignment
   * @param ltiData
   * @return {*}
   */
  updateCreateVisit (user, toolConsumer, activity, assignment, ltiData) {
    debugvc('Update Create Visit')
    var role = new Role(ltiData.roles)
    let filter = {
      $and: [
        {user: user._id},
        {activity: activity._id},
        {toolConsumer: toolConsumer._id},
        {isStudent: role.isStudent},
        {isInstructor: role.isInstructor},
        {isDeveloper: role.isDeveloper}
      ]
    }
    var theVisit
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
          user: user._id,
          activity: activity._id,
          assignment: assignment._id,
          isStudent: role.isStudent,
          isInstructor: role.isInstructor,
          // TODO use the actual incoming role to set isDeveloper
          isDeveloper: role.isInstructor,
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
            visit: visit._id,
            seedData: assignment.seedData
          })
        })
        .then((activityData) => {
          theVisit.activityData = activityData
          return theVisit.save()
        })
        .then((visit) => {
          // return the updated visit
          theVisit = visit
          if (role.isInstructor) {
            debugvc('Push visit record into user as instructor visit')
            user.asInstructorVisits.push(visit)
          }
          if (role.isStudent) {
            debugvc('Push visit record into user as student visit')
            user.asStudentVisits.push(visit)
          }
          return user.save()
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

    return router
  }
}
