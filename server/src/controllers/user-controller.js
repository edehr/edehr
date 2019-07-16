import BaseController from './base'
import User from '../models/user'
import Activity from '../models/activity'
import { ok, fail } from './utils'
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
    return this.baseFindOneQuery(id)
      .populate([
        {
          path: 'asInstructorVisits',
          model: 'Visit',
          populate: { path: 'activity', model: 'Activity' }
        }
      ])
      .select('asInstructorVisits')
      .then(modelInstance => {
        var list = modelInstance ? modelInstance.asInstructorVisits : []
        var asInstructorActivityIdList = list.map(visit => {
          return visit.activity._id
        })
        return Activity.find({ _id: { $in: asInstructorActivityIdList } }).populate('assignment')
      })
      .then(activities => {
        var courses = []
        activities.forEach(activity => {
          var cId = activity.context_id
          var course = courses.find(c => {
            return c.id === cId
          })
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
