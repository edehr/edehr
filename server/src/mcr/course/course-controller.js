import BaseController from '../common/base'
import Course from './course'
import { fail, ok } from '../common/utils'
import { logError } from '../../helpers/log-error'
import { ObjectId as ObjectID } from 'mongodb'
import Visit from '../visit/visit'
import Activity from '../activity/activity'
import { ParameterError } from '../common/errors'
import { Text } from '../../config/text'
const debug = require('debug')('server')

export default class CourseController extends BaseController {
  constructor () {
    super(Course)
  }
  setSharedControllers (cc) {
    this.comCon = cc
  }

  async createCourse (ltiData, toolConsumerId) {
    const data = {
      toolConsumer: toolConsumerId,
      context_id: ltiData.context_id,
      context_label: ltiData.context_label,
      context_title: ltiData.context_title,
      context_type: ltiData.context_type
    }
    return this.create(data)
  }

  findCourseByLti (lti_course_id, toolConsumerId) {
    return this.findOne({$and: [{context_id: lti_course_id}, {toolConsumer: toolConsumerId}]})
  }

  async findOrCreateCourse (ltiData, toolConsumerId) {
    const ltiCourseId = ltiData.context_id
    let course = await this.findCourseByLti(ltiCourseId, toolConsumerId)
    if (!course) {
      course = await this.createCourse(ltiData, toolConsumerId)
    }
    return course
  }

  async getBasicCourseRecord (cId) {
    let full = await Course.findById(cId)
    const d = full.custom_description
    return {
      _id: full._id,
      toolConsumer: full.toolConsumer,
      title: full.custom_title || full.context_title || 'Unknown',
      description: d === undefined ? full.context_label : d,
      id: full._id,
      skillsAssessmentMode: full.skillsAssessmentMode,
      skillsAssessmentActivity: full.skillsAssessmentActivity
    }
  }

  async getCourseRecord (cId) {
    let theCourse = await Course.findById(cId)
    theCourse = JSON.parse(JSON.stringify(theCourse))
    theCourse.courseActivities = []
    return theCourse
  }

  async getCourseRecordWithActivities (courseId, userId, consumerId, isInstructor, sortKey, sortDir) {
    let theCourse = await this.getCourseRecord(courseId)
    theCourse.courseActivities = await this.activitiesForCourse(courseId, userId, consumerId, isInstructor, sortKey, sortDir)
    return Promise.resolve({ course: theCourse })
  }

  async activitiesForCourse (courseId, userId, consumerId, isInstructor, sortKey = 'title', sortDir = 'asc') {
    const courseActivities = []
    if (!(sortDir && (sortDir === 'asc' || sortDir === 'desc') )) {
      throw new ParameterError(`Invalid sort direction for pagination. Must be asc or desc. Got '${sortDir}'`)
    }
    let filter
    if (isInstructor) {
      filter = { $and: [{ isInstructor: true }, { user: new ObjectID(userId) }] }
    } else {
      filter = { $and: [{ isStudent: true }, { user: new ObjectID(userId) }] }
    }
    const visits = await Visit.find(filter)
      .populate('activity')
      .populate('activityData')
    const courseVisits = visits.filter( v => v.activity.course.toString() === courseId)
    // collect user's activities corresponding to each of the user's visits.
    for await (const visit of courseVisits) {
      let userActivity = await this.comCon.activityController.getActivityRecord(visit)
      courseActivities.push(userActivity)
    }
    if(sortKey === 'title') {
      if(sortDir === 'asc') {
        courseActivities.sort((a, b) => a.title.localeCompare(b.title))
      }
      else {
        courseActivities.sort((a, b) => b.title.localeCompare(a.title))
      }
    }
    if(sortKey === 'createDate') {
      if(sortDir === 'asc') {
        courseActivities.sort((a, b) => a.createDate - b.createDate)
      }
      else {
        courseActivities.sort((a, b) => b.createDate - a.createDate)
      }
    }
    if(sortKey === 'lastUpdate') {
      if(sortDir === 'asc') {
        courseActivities.sort((a, b) => a.lastUpdate - b.lastUpdate)
      }
      else {
        courseActivities.sort((a, b) => b.lastUpdate - a.lastUpdate)
      }
    }
    return courseActivities
  }

  updateSkillsAssessment (id, data) {
    debug(`enableSkillsAssessment course ${id} data: [${JSON.stringify(data)}]`)
    return this.baseFindOneQuery(id).then(course => {
      if (course) {
        course.skillsAssessmentMode = data.skillsAssessmentMode
        course.skillsAssessmentActivity = data.skillsAssessmentActivity
        return course.save()
      } else {
        logError('Coding error, possibility. Could not find course by id ' + id + ' to perform update')
      }
    })
  }
  updateCourse (id, data) {
    debug(`Update course ${id} data: [${JSON.stringify(data)}]`)
    return this.baseFindOneQuery(id).then(course => {
      if (course) {
        course.custom_title = data.custom_title
        course.custom_description = data.custom_description
        return course.save()
      } else {
        logError('Coding error, possibility. Could not find course by id ' + id + ' to perform update')
      }
    })
  }

  async _collectCoursesForVisits (visits) {
    const courses = []
    for await (const visit of visits) {
      const activity = await Activity.findById(visit.activity, {course: 1})
      const cId = activity.course
      let course = courses.find(c => c.id === cId.toString())
      if (!course) {
        let theCourse = await this.getCourseRecord(cId)
        if (!theCourse) {
          console.error('Coding error. Should have record with course information for activity', activity)
          throw new Error('Coding error. Should have record with course information for activity: course id is: ' + activity.course)
        }
        courses.push(theCourse)
      }
    }
    return courses
  }

  async listCoursesOnly (userId, consumerId, isInstructor) {
    let filter
    if (isInstructor) {
      filter = { $and: [{ isInstructor: true }, { user: new ObjectID(userId) }] }
    } else {
      filter = { $and: [{ isStudent: true }, { user: new ObjectID(userId) }] }
    }
    const visits = await Visit.find(filter).populate('activityData')
    const courses = await this._collectCoursesForVisits(visits)
    courses.forEach(course => {
      course.courseActivities.sort( ( a, b ) => a.title.localeCompare(b.title) )
    })
    return Promise.resolve({ courseList: courses })
  }

  route () {
    const router = super.route()
    router.get('/courseList', (req, res) => {
      const authPayload = req.authPayload
      const userId = authPayload.userId
      const isInstructor = authPayload.isInstructor
      const consumerId = authPayload.toolConsumerId
      this.listCoursesOnly(userId, consumerId, isInstructor)
        .then(ok(res))
        .then(null, fail(res))
    })


    router.get('/course/:key', (req, res) => {
      const courseId = req.params.key
      if (!courseId || courseId === 'undefined') {
        throw new ParameterError(Text.REQUIRES_COURSE_ID)
      }
      const { sortKey, sortDir } = req.query
      const authPayload = req.authPayload
      const userId = authPayload.userId
      const isInstructor = authPayload.isInstructor
      const consumerId = authPayload.toolConsumerId
      this.getCourseRecordWithActivities(courseId, userId, consumerId, isInstructor, sortKey, sortDir)
        .then(ok(res))
        .then(null, fail(res))
    })

    router.put('/updateCourse/:key', (req, res) => {
      this
        .updateCourse(req.params.key, req.body)
        .then(ok(res))
        .then(null, fail(res))
    })

    router.put('/enable-skills-assessment/:id', (req, res) => {
      if (!req.authPayload.isInstructor) {
        return res.status(401).send(Text.MUST_BE_INSTRUCTOR)
      }
      this
        .updateSkillsAssessment(req.params.key, req.body)
        .then(ok(res))
        .then(null, fail(res))
    })
    return router
  }
}
