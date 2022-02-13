import BaseController from '../common/base'
import Assignment from '../assignment/assignment'
import Visit from '../visit/visit'
import ActivityData from '../activity-data/activity-data'
import SeedDataController from '../seed/seedData-controller'
import { SystemError } from '../common/errors'
import { Text } from '../../config/text'
import {ok, fail} from '../common/utils'
import { isAdmin } from '../../helpers/middleware'

const debug = require('debug')('server')
const logError = require('debug')('error')
const debugAC = false

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

  /* *****
  TODO ... verify the next two methods are needed and working
   */
  locateAssignmentForStudent (externalId, toolConsumerId) {
    // let externalId = ltiData.custom_assignment
    let query = this._composeQuery(externalId, toolConsumerId)
    if (debugAC) debug('Assignment. search for ' + JSON.stringify(query))
    return this.findOne(query)
  }

  createAssignment (data, seedId=undefined) {
    // console.log('creating assignment with data >> ', data)
    const { 
      externalId, 
      resource_link_title, 
      description, 
      persona, 
      profession, 
      day, 
      time,
      toolConsumer
    } = data
    if (!externalId) {
      throw new SystemError(Text.ASSIGNMENT_REQUIRE_EXTERNAL_ID(toolConsumer.oauth_consumer_key, toolConsumer._id))
    }
    if (!resource_link_title) {
      throw new SystemError(Text.ASSIGNMENT_REQUIRE_RESOURCE(toolConsumer.oauth_consumer_key, toolConsumer._id))
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
          name: 'LOA- ' + resource_link_title,
          description: description || this.defaultAssignmentDescription,
          ehrRoutePath: '',
          persona, 
          profession, 
          day: day || 0, 
          time,
          seedDataId: seed._id
        }
        if (debugAC) debug('Assignment. create from def', data)
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
      this
        .locateAssignmentForStudent(req.params.key, req.params.tool)
        .then(ok(res))
        .then(null, fail(res))
    })
    return router
  }
}
