import BaseController from '../common/base'
import User from './user'
import Visit from '../visit/visit'
import { ok, fail } from '../common/utils'
import Activity from '../activity/activity'
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

  listAsInstructorCourses (id) {
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
