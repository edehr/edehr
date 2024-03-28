import BaseController from '../common/base'
import User from './user'
import Visit from '../visit/visit'
import { fail, ok } from '../common/utils'
import Activity from '../activity/activity'
import { NotAllowedError, ParameterError } from '../common/errors'
import { Text } from '../../config/text'
import { logError } from '../../helpers/log-error'
import SeedData from '../seed/seed-data'
import Role from '../roles/roles'

const ObjectID = require('mongodb').ObjectId

export default class UserController extends BaseController {
  constructor (config) {
    super(User)
  }
  setSharedControllers (cc) {
    this.courseController = cc.courseController
  }

  getUser ( userId ) {
    return this.baseFindOneQuery(userId)
      .then((modelInstance) => {
        const response = {}
        response[this.modelName] = modelInstance
        return response
      })
  }
  async updateUserSettings (userId, data) {
    let userRec = await this.baseFindOneQuery(userId)
    userRec.userSettings = data
    await userRec.save()
    return this.getUser(userId)
  }


  /*
  listAsInstructorCourses will collect all visits the current user has made with the role of instructor.
  For each visit get the activity and associated assignment information. Collect all into a course collection.
  */
  async listAsInstructorCourses (userId, consumerId) {
    let role = new Role('instructor')
    return this.listAsRoleCourses(userId, consumerId, role)
  }

  async listAsStudentCourses (id, consumerId) {
    let role = new Role('student')
    return this.listAsRoleCourses(id, consumerId, role)
  }

  async listAsRoleCourses (userId, consumerId, role) {
    if (!this.courseController) {
      console.error('Coding error set up UserController with access to CourseController')
      throw new Error('Coding error set up UserController with access to CourseController')
    }
    let seedList = await SeedData.find({ toolConsumer: consumerId }, { name: true })
    // seedList contains array of objects with id and name only
    // normalize to convert ObjectId to strings for comparison
    seedList = JSON.parse(JSON.stringify(seedList))
    // console.log('in listing courses with seedList', seedList)
    let filter
    if (role.isInstructor) {
      filter = { $and: [{ isInstructor: true }, { user: new ObjectID(userId) }] }
    } else {
      filter = { $and: [{ isStudent: true }, { user: new ObjectID(userId) }] }
    }
    const visits = await Visit.find(filter).populate('activityData')
    const courses = await this._collectCoursesForVisits(visits)
    // console.log('in listing courses with courses', courses)
    // collect user's activities corresponding to each of the user's visits.
    for await (const visit of visits) {
      const activityId = visit.activity
      // Each visit is for one Activity. Each Activity is related to the LMS Activity.
      // Activity may have one assignment (aka LearningObject)
      const activity = await Activity.findById(activityId)
        .populate('assignment', 'name description seedDataId')
        .populate('activityData')
      // compose a record to return to the API client
      // console.log('in listing courses with activity', activity)
      const userActivity = {
        id: activity._id,
        title: activity.custom_title || activity.resource_link_title || 'Unknown',
        description: activity.custom_description || activity.resource_link_description || 'Please describe me',
      }
      const assignment = activity.assignment
      // console.log('in listing courses with assignment', assignment)
      userActivity.hasLinkedLearningObject = !!assignment
      if (assignment) {
        userActivity.learningObjectId = assignment._id
        userActivity.learningObjectName = assignment.name
        userActivity.learningObjectDescription = assignment.description
        // convert ObjectId to string for searching
        const sId = assignment.seedDataId.toString()
        // console.log('in listing courses with sId', sId)
        const caseStudy = seedList.find(item => item._id === sId)
        if(!caseStudy) {
          console.error('Coding error. Should have caseStudy for activity. ', activity)
          throw new Error('Coding error. Should have caseStudy for activity. ' + activity._id)
        }
        userActivity.caseStudyId = caseStudy._id
        userActivity.caseStudyName = caseStudy.name
        userActivity.appType = caseStudy.appType
      }
      // push userActivity into the correct course's activity list
      const cId = activity.course
      // console.log('in listing courses with cId', cId)
      let course = courses.find(c => c.id === cId.toString())
      if(!course) {
        console.error('Coding error. Should have course for activity. ', activity)
        throw new Error('Coding error. Should have course for activity. ' + activity._id)
      }
      if(!course.courseActivities) {
        console.error('Coding error. Should have courseActivities for course. ', course)
        throw new Error('Coding error. Should have courseActivities for course. ' + course.id)
      }
      course.courseActivities.push(userActivity)
    }
    courses.forEach(course => {
      course.courseActivities.sort( ( a, b ) => a.title.localeCompare(b.title) )
    })
    return Promise.resolve({ courses: courses })
  }

  async _collectCoursesForVisits (visits) {
    const courses = []
    for await (const visit of visits) {
      const activityId = visit.activity
      const activity = await Activity.findById(activityId).populate('assignment', 'name description seedDataId')
      const cId = activity.course
      let course = courses.find(c => c.id === cId.toString())
      if (!course) {
        let theCourse = await this.courseController.getCourseRecord(cId)
        if (!theCourse) {
          console.error('Coding error. Should have record with course information for activity', activity)
          throw new Error('Coding error. Should have record with course information for activity: course id is:', activity.course)
        }
        courses.push(theCourse)
      }
    }
    return courses
  }

  route () {
    const router = super.route()
    router.get('/instructor/courses/:key', (req, res) => {
      const id = req.params.key
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
      this.listAsInstructorCourses(id, consumerId)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.get('/student/courses/:key', (req, res) => {
      const id = req.params.key
      if (!id || id === 'undefined') {
        throw new ParameterError(Text.REQUIRES_USER_ID)
      }
      const authPayload = req.authPayload
      if (authPayload.userId !== id) {
        logError('Attempt to get instructor course list by user who is not authorized to see it')
        throw new NotAllowedError(Text.NOT_AUTH_TO_SEE_USER_DATA)
      }
      if (!authPayload.isStudent) {
        throw new NotAllowedError(Text.MUST_BE_STUDENT)
      }
      const consumerId = authPayload.toolConsumerId
      this.listAsStudentCourses(id, consumerId)
        .then(ok(res))
        .then(null, fail(req, res))
    })

    router.get('/getUser/:key', (req, res) => {
      this
        .getUser(req.params.key)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.put('/user-settings/:userId', (req, res) => {
      this
        .updateUserSettings(req.params.userId, req.body)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    return router
  }
}
