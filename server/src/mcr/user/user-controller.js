import BaseController from '../common/base'
import User from './user'
import Visit from '../visit/visit'
import { ok, fail } from '../common/utils'
import Activity from '../activity/activity'
import { NotAllowedError, ParameterError } from '../common/errors'
import { Text } from '../../config/text'
import { logError } from '../../helpers/log-error'
import SeedDataController from '../seed/seedData-controller'
import SeedData from '../seed/seed-data'
const ObjectID = require('mongodb').ObjectId
const debug = require('debug')('server')

export default class UserController extends BaseController {
  constructor (config) {
    super(User, '_id')
    this.config = config
  }
  /*
  listAsInstructorCourses will collect all visits the current user has made with the role of instructor.
  For each visit get the activity and associated assignment information. Collect all into a course collection.
  */

  async listAsInstructorCourses (id, req) {
    if (!id || id === 'undefined') {
      throw new ParameterError(Text.REQUIRES_USER_ID)
    }
    const authPayload = req.authPayload
    if (authPayload.userId !== id) {
      logError('Attempt to get instructor course list by user who is not authorized to see it')
      throw new NotAllowedError(Text.NOT_AUTH_TO_SEE_USER_DATA)
    }
    if (!authPayload.isInstructor) {
      throw new NotAllowedError(Text.MUST_BE_INSTRUCTOR)
    }
    const consumerId = authPayload.toolConsumerId
    let seedList = await SeedData.find({ toolConsumer: consumerId }, {name: true})
    // normalize to convert ObjectId to strings for comparison
    seedList = JSON.parse(JSON.stringify(seedList))

    return new Promise((resolve) => {
      debug('listAsInstructorCourses for ' + id)
      Visit.find({ $and: [{ isInstructor: true }, { user: new ObjectID(id) }] })
        .then(visits => {
          let courses = []
          const promiseList = visits.map(visit => {
            const activityId = visit.activity
            return Activity.findById(activityId)
              .populate('assignment', 'name description seedDataId')
              .then(activity => {

                // decouple from mongoose so we can add in case study
                activity = JSON.parse(JSON.stringify(activity))
                const assignment = activity.assignment
                const sId = assignment.seedDataId
                const seed = seedList.find( item => item._id === sId )
                activity['caseStudy'] = seed

                // group by course
                let cId = activity.context_id
                let course = courses.find(c => c.id === cId)
                if (!course) {
                  course = {
                    id: activity.context_id,
                    label: activity.context_label,
                    name: activity.context_title,
                    type: activity.context_type,
                    activities: []
                  }
                  courses.push(course)
                }
                course.activities.push(activity)
              })
          })
          Promise.all(promiseList).then(() => {
            resolve({ courses: courses })
          })
        })
    })
  }

  route () {
    const router = super.route()
    router.get('/instructor/courses/:key', (req, res) => {
      this.listAsInstructorCourses(req.params.key, req)
        .then(ok(res))
        .then(null, fail(res))
    })
    /*
    router.get('/asStudent/:key', (req, res) => {
      this.listActivitiesAsStudent(req.params.key)
        .then(ok(res))
        .then(null, fail(res))
    })
    */
    return router
  }
}
