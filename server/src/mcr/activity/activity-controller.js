import BaseController from '../common/base'
import Visit from '../visit/visit'
import Activity from './activity'
import {ok, fail} from '../common/utils'
import Assignment from '../assignment/assignment'
import SeedData from '../seed/seed-data'
import ActivityData from '../activity-data/activity-data'
import { isAdmin } from '../../helpers/middleware'
import { ParameterError } from '../common/errors'
import { Text } from '../../config/text'
const debug = require('debug')('server')
const debugAC = false
/*
resource_link_id 	required 	unique id referencing the link, or "placement", of the app in the consumer. If an app was added twice to the same class, each placement would send a different id, and should be considered a unique "launch". For example, if the provider were a chat room app, then each resource_link_id would be a separate room.

 */
export default class ActivityController extends BaseController {
  constructor () {
    super(Activity)
  }
  setSharedControllers (cc) {
    this.comCon = cc
  }

  async getActivityRecord (visit) {
    // Each visit is for one Activity. Each Activity is related to the LMS Activity.
    // Activity may have one assignment (aka LearningObject)
    const activity = await Activity.findById(visit.activity)
    const courseRecord = await this.comCon.courseController.getBasicCourseRecord(activity.course)

    let userActivity = {
      id: activity._id,
      courseId: activity.course,
      courseTitle: courseRecord.title,
      courseDescription: courseRecord.description,
      skillsAssessmentMode: courseRecord.skillsAssessmentMode,
      skillsAssessmentActivity: courseRecord.skillsAssessmentActivity,
      feedbackViewable: activity.feedbackViewable,
      createDate: activity.createDate,
      lastUpdate: activity.lastDate,
      visitId: visit._id,
      isStudent: visit.isStudent,
      isInstructor: visit.isInstructor,
      title: activity.custom_title || activity.resource_link_title || 'Unknown',
      description: activity.custom_description || activity.resource_link_description || undefined,
      resource_link_title: activity.resource_link_title,
      resource_link_description: activity.resource_link_description
    }
    const assignmentId = activity.assignment
    const assignment = assignmentId ? await Assignment.findById(assignmentId) : undefined
    userActivity.hasLinkedLearningObject = !!assignment
    if (assignment) {
      userActivity.learningObjectId = assignment._id
      userActivity.learningObjectName = assignment.name
      userActivity.learningObjectDescription = assignment.description

      // convert ObjectId to string for searching
      // note that learning objects (assignment) may not have seed
      const sId = assignment.seedDataId ? assignment.seedDataId.toString() : undefined
      const caseStudy = await SeedData.findById(sId) || {}
      userActivity.caseStudyId = caseStudy._id
      userActivity.caseStudyName = caseStudy.name
      userActivity.appType = caseStudy.appType

      const activityData = await ActivityData.findById(visit.activityData)
      userActivity.activityDataId = activityData._id
      userActivity.evaluationData = activityData.evaluationData
      userActivity.scratchData = activityData.scratchData
      userActivity.submitted = activityData.submitted
      userActivity.activityLastDate = activityData.lastDate
    } else {
      // console.error('Coding error? should there always be an assignment if we are here?', activity)
    }
    // console.log('user rec', userActivity)
    return userActivity
  }

  findActivityByLti (lti_activity_id, toolConsumerId) {
    return this.findOne({$and: [{resource_link_id: lti_activity_id}, {toolConsumer: toolConsumerId}]})
  }

  closeOpenActivity (id, direction) {
    // TODO change this to async and use for loop for each visit
    return this.baseFindOneQuery(id).then(async (activity) => {
      if (activity) {
        const aId = activity._id
        const closing = direction === 'close'
        const visits = await Visit.find({activity: aId}, {activityData:true})
        const data = { value: closing}
        visits.forEach( async (v) => {
          this.comCon.activityDataController.assignmentSubmitted(v.activityData, data)
        })
        // activity.closedDate = closing ? Date.now() : null
        // activity.closed = closing
        return activity.save()
      }
    })
  }
  linkAssignment (id, assignmentId) {
    debug('linkAssignment  activity:', id, 'assignment:', assignmentId)
    return this.baseFindOneQuery(id).then(async (activity) => {
      if (activity) {
        activity.assignment = assignmentId
        return activity.save()
      }
    })
  }
  /**
   * Called by the LTI controller when a user comes to this system.
   *
   * @param ltiData
   * @param toolConsumerId
   * @return {Promise<any>}
   */
  async updateCreateActivity (ltiData, toolConsumerId) {
    // resource_link_id is required
    const ltiActivityId = ltiData.resource_link_id
    if (debugAC) debug('updateCreateActivity search for existing activity ' + ltiActivityId)
    const activity = await this.findActivityByLti(ltiActivityId, toolConsumerId)
    if (activity) {
      activity.lastDate = Date.now()
      return activity.save()
    } else {
      const course = await this.comCon.courseController.findOrCreateCourse(ltiData, toolConsumerId)
      const activityData = {
        toolConsumer: toolConsumerId,
        course: course._id,
        context_id: ltiData.context_id,
        context_label: ltiData.context_label,
        context_title: ltiData.context_title,
        context_type: ltiData.context_type,
        resource_link_id: ltiActivityId,
        resource_link_title: ltiData.resource_link_title,
        resource_link_description: ltiData.resource_link_description
      }
      return this.create(activityData)
    }
  }
  async updateActivityVisit (activityId, visitId) {
    const activity = await Activity.findById(activityId)
    // activity.visitors.push({ visitId: visitId})
    // console.log('updateActivityVisit', activityId, visitId)
    await activity.save()
  }
  async updateText (activityId, custom_title, custom_description) {
    const activity = await Activity.findById(activityId)
    activity.custom_title = custom_title
    activity.custom_description = custom_description
    // console.log('activity-controller update text ', activity)
    return await activity.save()
  }
  async updateViewableFeedback (activityId, viewable) {
    if(!activityId) {
      throw new ParameterError(Text.REQUIRES_ACTIVITY_ID)
    }
    if (typeof viewable !== 'boolean') {
      throw new ParameterError(Text.INVALID_PARAMETER_NOT_BOOLEAN)
    }
    const activity = await Activity.findById(activityId)
    activity.feedbackViewable = viewable
    return await activity.save()
  }
  async listAdminActivities (consumerId) {
    let list = await Activity.find({ toolConsumer: consumerId })
      .populate('assignment', {name:1, description: 1, seedDataId: 1})
      .populate('course', {context_title: 1, context_label: 1, title: 1, description: 1}) // must query for context_title context_label to get virtual values title and description

    // decouple so we can add properties
    list = JSON.parse(JSON.stringify(list))
    list.forEach( activity => {
      activity.title = activity.custom_title || activity.resource_link_title || 'Unknown'
      activity.description = activity.custom_description || activity.resource_link_description || undefined
    })
    list.sort( (a,b) => a.course.title.localeCompare(b.course.title))
    const results = []
    list.forEach( activity => {
      const ct = activity.course.title
      let cs = results.find( c => c.title === ct)
      if(!cs) {
        cs = {
          title: ct,
          activities: []
        }
        results.push(cs)
      }
      cs.activities.push(activity)
    })
    console.log('----------------',results)
    return { activities: results }
  }

  listClassList (_id) {
    return Visit.find({ $and: [ {isStudent: true }, {activity: _id} ] })
      .populate('activityData', 'submitted assignmentData evaluationData lastDate')
      .populate('user', 'givenName familyName fullName user_id')
      .select('userName lastVisitDate')
      .then((visits) => {
        return {classList: visits}
      })
  }

  async findActivity (id) {
    let activity = await this.baseFindOneQuery(id)
    if (activity) {
      activity = JSON.parse(JSON.stringify(activity))
      activity.course = await this.comCon.courseController.getBasicCourseRecord(activity.course)
    }
    return Promise.resolve({ activity: activity })
  }

  _updateHelper (activity, data) {
    let current = JSON.stringify(activity)
    Object.assign(activity, data)
    let updated = JSON.stringify(activity)
    if (current !== updated) {
      if (debugAC) debug('updateHelper there is something different in the activity. Saving new activity data ' + updated)
      return activity.save()
    } else {
      if (debugAC) debug('updateHelper  no change in activity')
      return activity
    }
  }

  _extractLtiData (ltiData, toolConsumerId) {
    let learningObjectName = ltiData.resource_link_title ? ltiData.resource_link_title.replace('LOA-','AC-') : 'LTI did not provide property: resource_link_title'
    var data = {
      // TODO stop using context (course) data here once the Course object is fully functional
      context_id: ltiData.context_id,
      context_label: ltiData.context_label,
      context_title: ltiData.context_title,
      context_type: ltiData.context_type,
      resource_link_id: ltiData.resource_link_id,
      resource_link_title: learningObjectName,
      resource_link_description: ltiData.resource_link_description
    }
    return data
  }

  route () {
    const router = super.route()
    const adminMiddleware = [
      isAdmin
    ]
    router.get('/admin-activities/:consumerId', adminMiddleware, (req, res) => {
      let consumerId = req.params.consumerId
      this.listAdminActivities(consumerId)
        .then(ok(res))
        .then(null, fail(req, res))
    })

    router.get('/getActivityRecord/:visitId', (req, res) => {
      let visitId = req.params.visitId
      Visit.findById(visitId)
        .then(visit => {
          return this.getActivityRecord(visit)
        })
        .then(activityRecord => {
          return { activityRecord: activityRecord }
        })
        .then(ok(res))
        .then(null, fail(req, res))
    })

    router.get('/class-list/:key', (req, res) => {
      this
        .listClassList(req.params.key)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.get('/flushed/:key', (req, res) => {
      this
        .findActivity(req.params.key)
        .then(ok(res))
        .then(null, fail(req, res))
    })

    // PUT
    // open and close toggle the submit state of all visit records for this activity.
    router.put('/close-activity/:key', (req, res) => {
      this
        .closeOpenActivity(req.params.key, 'close')
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.put('/open-activity/:key', (req, res) => {
      this
        .closeOpenActivity(req.params.key, 'open')
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.put('/link-assignment/:id/', (req, res) => {
      let id = req.params.id
      let assignmentId = req.body.assignmentId
      debug('router path link-assignment req.params:', req.params, 'req.body:', req.body)
      this.linkAssignment(id, assignmentId)
        .then(ok(res))
        .catch(fail(req, res))
    })

    router.put('/update-text/:id/', (req, res) => {
      let id = req.params.id
      let {custom_title, custom_description } = req.body
      // console.log('activity-controller route update text body contains', req.body)
      this.updateText(id, custom_title, custom_description)
        .then(ok(res))
        .catch(fail(req, res))
    })

    router.put('/update-viewable-feedback/:id', (req, res) => {
      if (!req.authPayload.isInstructor) {
        return res.status(401).send(Text.MUST_BE_INSTRUCTOR)
      }
      let id = req.params.id
      let {isViewable } = req.body
      // console.log('activity-controller update-viewable-feedback', req.body)
      this.updateViewableFeedback(id, isViewable)
        .then(ok(res))
        .catch(fail(req, res))
    })
    return router
  }
}
