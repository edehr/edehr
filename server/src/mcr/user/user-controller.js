import BaseController from '../common/base'
import User from './user'
import Activity from '../activity/activity'
import Visit from '../visit/visit'
import { ok, fail } from '../common/utils'
const ObjectID = require('mongodb').ObjectID
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

  listAsInstructorCourses (id) {
    debug('listAsInstructorCourses for ' + id)
    return Visit.find({ $and: [ {isInstructor: true }, {user: new ObjectID(id)} ] })
      .populate('activity', 'context_id context_label context_title resource_link_title resource_link_description')
      // .populate('assignment', 'name description seedDataId')
      // .select('lastVisitDate activityData')
      .then(visits => {
        let courses = []
        visits.forEach(visit => {
          const activity = visit.activity
          // console.log('activity', activity)
          let cId = activity.context_id
          let course = courses.find(c => c.id === cId)
          if (!course) {
            course = {
              id: cId,
              name: activity.context_title,
              label: activity.context_label,
              activities: []
            }
            courses.push(course)
          }
          course.activities.push(activity)
        })
        return { courses: courses }
      })
  }

  route () {
    const router = super.route()
    router.get('/instructor/courses/:key', (req, res) => {
      this.listAsInstructorCourses(req.params.key)
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
