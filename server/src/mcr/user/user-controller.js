import BaseController from '../common/base'
import User from './user'
import Visit from '../visit/visit'
import { fail, ok } from '../common/utils'
import Activity from '../activity/activity'
import { NotAllowedError, ParameterError } from '../common/errors'
import { Text } from '../../config/text'
import { logError } from '../../helpers/log-error'
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
    let seedList = await SeedData.find({ toolConsumer: consumerId }, { name: true })
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
                const seed = seedList.find(item => item._id === sId)
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
            courses.forEach(course => {
              course.activities.sort( ( a, b ) => {
                let t1 = a.resource_link_title || ''
                let t2 = b.resource_link_title || ''
                return t1.localeCompare(t2)
              })
            })
            resolve({ courses: courses })
          })
        })
    })
  }

  /**
   * Support student user getting all their courses etc.  The structure returned looks like this.
   list = [
   {
    id: 'Demo-Course',
    label: 'Mock EdEHR Demonstration Course',
    name: 'Mock EdEHR Demonstration Course',
    type: 'Demonstration',
    courseActivities: [
      {
        visit: {
          _id: 'abcde318492371857a129de',
          activity: 'abcde238492371857a129ab',
          activityData: 'abcde318492371857a129e0',
          consumerKey: 'Demo-1673801716740-dop5vpc',
          createDate: '2023-01-18T03:32:01.846Z',
          isDeveloper: false,
          isInstructor: false,
          isStudent: true,
          lastVisitDate: '2023-01-18T03:32:38.435Z',
          returnUrl: 'http://localhost:28000/demo-course',
          role: 'student',
          toolConsumer: 'abcdeff4ad5dec5106ff71a3',
          user: '63c43005ad5dec5106ff71f5',
        },
        activityData: {
          _id: 'abcde318492371857a129e0',
          createDate: '2023-01-18T03:32:01.855Z',
          evaluationData: 'Instructor says this about the student\'s work.',
          lastDate: '2023-01-19T00:04:22.939Z',
          scratchData: 'Some notes',
          submitted: true,
          toolConsumer: 'abcdeff4ad5dec5106ff71a3',
          visit: 'abcde318492371857a129de',
        },
        activity: {
          _id: 'abcde238492371857a129ab',
          assignment: 'abcdeff4ad5dec5106ff71b2',
          context_id: 'Demo-Course',
          context_label: 'Demonstration Course',
          context_title: 'Demonstration Course',
          context_type: 'Demonstration',
          createDate: '2023-01-18T03:31:47.001Z',
          lastDate: '2023-01-18T03:31:47.001Z',
          resource_link_description: 'This ....',
          resource_link_id: 'lms-link-to-resource',
          resource_link_title: 'title ....',
          toolConsumer: 'abcdeff4ad5dec5106ff71a3',
        },
        assignment: {
          _id: 'abcdeff4ad5dec5106ff71b2',
          name: 'Demonstration Assignment #2: Pneumonia',
          description: 'This ....',
          seedDataId: 'abcdeff4ad5dec5106ff71af'
        }
      }
    ]
  }
   ]

   * @param id
   * @param req
   * @returns {Promise<{courses: *[]}>}
   */
  async listAsStudentCourses (id, req) {
    if (!id || id === 'undefined') {
      throw new ParameterError(Text.REQUIRES_USER_ID)
    }
    const authPayload = req.authPayload
    if (authPayload.userId !== id) {
      logError('Attempt to get student course list by user who is not authorized to see it')
      throw new NotAllowedError(Text.NOT_AUTH_TO_SEE_USER_DATA)
    }
    if (!authPayload.isStudent) {
      throw new NotAllowedError(Text.MUST_BE_STUDENT)
    }
    const visits = await Visit.find({ $and: [{ isStudent: true }, { user: new ObjectID(id) }] })
      .populate('activityData')
    const courses = []
    for await (const visit of visits) {
      const activityId = visit.activity
      const activity = await Activity.findById(activityId)
        .populate('assignment', 'name description seedDataId')
        .populate('activityData')
      const cId = activity.context_id
      let course = courses.find(c => c.id === cId)
      if (!course) {
        course = {
          id: activity.context_id,
          label: activity.context_label,
          name: activity.context_title,
          type: activity.context_type,
          courseActivities: []
        }
        courses.push(course)
      }
      const studentActivity = {
        visit: visit,
        activityData: visit.activityData,
        assignmentData: visit.activityData.assignmentData,
        activity: activity,
        assignment: activity.assignment
      }
      studentActivity.visit.activityData = visit.activityData._id
      studentActivity.activity.assignment = activity.assignment._id
      course.courseActivities.push(studentActivity)
    }
    // console.log('Return this course list', JSON.stringify(courses, null, 2))
    return Promise.resolve({ courses: courses })
  }


  route () {
    const router = super.route()
    router.get('/instructor/courses/:key', (req, res) => {
      this.listAsInstructorCourses(req.params.key, req)
        .then(ok(res))
        .then(null, fail(res))
    })
    router.get('/student/courses/:key', (req, res) => {
      this.listAsStudentCourses(req.params.key, req)
        .then(ok(res))
        .then(null, fail(res))
    })

    return router
  }
}
