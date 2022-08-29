import BaseController from '../common/base'
import Assignment from '../assignment/assignment'
import Activity from '../activity/activity'

import Visit from '../visit/visit'
import ActivityData from '../activity-data/activity-data'
import SeedDataController from '../seed/seedData-controller'
import { SystemError } from '../common/errors'
import { Text } from '../../config/text'
import {ok, fail} from '../common/utils'
import { isAdmin } from '../../helpers/middleware'
import pluralize from 'pluralize'

const debug = require('debug')('server')
const logError = require('debug')('error')
const debugAC = true

const sd = new SeedDataController()

export default class AssignmentController extends BaseController {
  constructor (config) {
    super(Assignment, '_id')
    this.config = config
    this.defaultAssignmentDescription = config.ehr.defaultAssignmentDescription
  }

  _composeQuery (externalId, toolConsumerId) {
    return {$and: [{externalId: externalId}, {toolConsumer: toolConsumerId}]}

  }

  delete (assignmentId) {
    if (debugAC) debug('Assignment. delete')
    if (!assignmentId) {
      throw new SystemError('AssignmentId is missing!')
    } else {
      return Visit.find( { assignment: assignmentId } )
        .then(visits => {
          const promises = visits.map(v => {
            return ActivityData.remove(
              { visit: v._id }
            )
          })
          if (debugAC) debug('Assignment. delete visits associated with assignment')
          return Promise.all(promises)
            .then(() => {
              return Visit.remove(
                { assignment: assignmentId }
              )
            })
            .then(() => {
              return Assignment.findOneAndDelete(
                { _id: assignmentId }
              )
            })
        })
    }
  }

  async deleteUnused (assignmentId) {
    if (debugAC) debug('Assignment delete unused', assignmentId)
    if (!assignmentId || assignmentId ==='undefined') {
      throw new SystemError('Id is missing for delete unused assignment')
    } else {
      const activities = await Activity.find({ assignment: assignmentId })
      if(activities.length > 0 ) {
        throw new SystemError('Can not delete an assignment that is used by an activity.')
      }
      console.log('delete unused activities using assignment', activities)
      return Assignment.findOneAndDelete(
        { _id: assignmentId }
      )
    }
  }

  /**
   * Get all assignments for the given tool but also get a count of the number of activities,
   * within the same tool, that reference each assignment.
   * It is not feasible for the client to just get the list of assignments
   * and then filter them because the client user only gets their assignments.
   * This count needs to go across all users.
   * TODO must develop a push notification system for this property to handle real time changes.
   *
   * @param tool
   * @returns {Promise<{}>}
   */
  async assignmentsWithActivityUsageCount (tool) {
    const query = {toolConsumer: tool}
    const results = []
    const assignmentsList = await this.model.find(query)
    const activities = await Activity.find(query, {assignment: true})
    assignmentsList.forEach( assignment => {
      const temp = JSON.parse(JSON.stringify(assignment))
      const countable = activities.filter( activity => {
        return activity.assignment.toString() === assignment._id.toString()
      })
      temp.activityCount = countable.length
      results.push(temp)
    })
    const response = {}
    response[pluralize(this.modelName)] = results
    return response
  }

  // override the method that GET uses to add in the activity count
  async read (id) {
    let modelInstance = await this.baseFindOneQuery(id)
    const thisId = modelInstance._id.toString()
    const query = {toolConsumer: modelInstance.toolConsumer}
    const activities = await Activity.find(query)
    const countable = activities.filter( activity => {
      return activity.assignment.toString() === thisId
    })
    const temp = JSON.parse(JSON.stringify(modelInstance))
    temp.activityCount = countable.length
    let response = {}
    response[this.modelName] = temp
    return response
  }
  /* *****
  TODO ... verify the next two methods are needed and working
   */
  locateAssignmentForStudent (externalId, toolConsumerId) {
    // let externalId = ltiData.custom_assignment
    let query = this._composeQuery(externalId, toolConsumerId)
    if (debugAC) debug('Assignment. search for ' + JSON.stringify(query))
    return this.findOne(query)
  }

  /**
   * Create a learning object / assignment.
   * These are wrappers for case studies (seeds) which set out the learning objectives and the
   * tasks the student can do with the case study in the EdEHR.
   *
   * Learning objects have a title and description.
   * In contrast, activities are associated with LMS activities and they have resource_link_title
   * and resource_link_description
   * @param data
   * @param seedId
   * @returns {Promise<*>}
   */
  createAssignment (data, seedId=undefined) {
    // console.log('creating assignment with data >> ', data)
    const { 
      externalId,
      title,
      description,
      persona, 
      profession, 
      day, 
      time,
      toolConsumer
    } = data
    if (!externalId) {
      logError(Text.ASSIGNMENT_REQUIRE_EXTERNAL_ID(toolConsumer.oauth_consumer_key, toolConsumer._id), data)
      throw new SystemError(Text.ASSIGNMENT_REQUIRE_EXTERNAL_ID(toolConsumer.oauth_consumer_key, toolConsumer._id))
    }
    if (!title) {
      logError(Text.ASSIGNMENT_REQUIRE_RESOURCE(toolConsumer.oauth_consumer_key, toolConsumer._id), data)
      throw new SystemError(Text.ASSIGNMENT_REQUIRE_RESOURCE(toolConsumer.oauth_consumer_key, toolConsumer._id))
    }
    if (!description) {
      logError('Creating an assignment with no description. This is not an error. It is just unusual', data)
      // throw new SystemError(Text.ASSIGNMENT_REQUIRE_RESOURCE(toolConsumer.oauth_consumer_key, toolConsumer._id))
    }
    const query = {toolConsumer: toolConsumer._id}
    if (seedId) {
      query._id = seedId
    }
    return sd.findOne(query)
      .then((seed) => {
        if (!seed) {
          throw new SystemError(Text.ASSIGNMENT_MISSING_SEED(toolConsumer.oauth_consumer_key, toolConsumer._id))
        }
        const data = {
          toolConsumer: toolConsumer._id,
          externalId: externalId,
          name: title,
          description: description || this.defaultAssignmentDescription,
          ehrRoutePath: '',
          persona, 
          profession, 
          day: day || 0, 
          time,
          seedDataId: seed._id
        }
        if (debugAC) debug('Assignment. create from def', data.name)
        return this.create(data)
      })
  }

  /*
{  
   "roles":"Instructor",
   "context_id":"4",
   "context_label":"EdEhr Poc",
   "context_title":"A Proof of Concept Course",
   "resource_link_title":"Poc EdEhr Assignment 1",
   "resource_link_description":"POC assignment 1. No description available because this is just a POC",
   "resource_link_id":"1",
   "context_type":"CourseSection",
   "lis_course_section_sourcedid":"9876",
   "custom_assignment":"assignment1",
   "custom_poc":"true",
   "custom_POC":"true",
}
    var externalId = req.ltiData.custom_assignment
    req.externalId = externalId

 */

  route () {
    const router = super.route()
    router.get('/withActivityCount/:tool', (req, res) => {
      this
        .assignmentsWithActivityUsageCount(req.params.tool)
        .then(ok(res))
        .then(null, fail(res))
    })

    router.delete('/unused/:key', async (req, res) => {
      const { key } = req.params
      if (debugAC) debug('Assignment delete unused query ', key)
      this.deleteUnused(key)
        .then(() => {
          if (debugAC) debug('Assignment delete unused done')
          res.status(200).json({success: true})
        })
        .catch(err => {
          logError('Assignment. Delete Unused Error', err)
          res.status(500).send(err)
        })
    })
    router.delete('/:key', isAdmin, (req, res) => {
      const { key } = req.query
      if (debugAC) debug('Assignment. delete query')
      this.delete(key)
        .then(res => {
          if (debugAC) debug('Assignment. delete results', res)
          res.status(200).json({success: true})
        })
        .catch(err => {
          logError('Assignment. Delete Error', err)
          return req.status(500).send(err)
          // fail(res)
        })
    })
    router.get('/consumer/:tool/externalId/:key', (req, res) => {
      console.log('locateAssignmentForStudent(req.params.key, req.params.tool)', req.params.key, req.params.tool)
      this
        .locateAssignmentForStudent(req.params.key, req.params.tool)
        .then(ok(res))
        .then(null, fail(res))
    })
    return router
  }
}
