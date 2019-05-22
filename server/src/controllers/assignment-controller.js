import BaseController from './base'
import Assignment from '../models/assignment'
import SeedDataController from '../controllers/seedData-controller'
import { SystemError } from '../utils/errors'

const debug = require('debug')('server')
const sd = new SeedDataController()

export default class AssignmentController extends BaseController {
  constructor (config) {
    super(Assignment, '_id')
    this.config = config
    this.description = config.ehr.defaultAssignmentDescription
  }

  _composeQuery (externalId, toolConsumerId) {
    return {$and: [{externalId: externalId}, {toolConsumer: toolConsumerId}]}

  }

  locateAssignmentForStudent (externalId, toolConsumerId) {
    // let externalId = ltiData.custom_assignment
    let query = this._composeQuery(externalId, toolConsumerId)
    debug('Assignment search for ' + JSON.stringify(query))
    return this.findOne(query)
  }

  createAssignment (externalId, toolConsumerId, resource_link_title) {
    return sd.findOne({toolConsumer: toolConsumerId})
      .then((seed) => {
        if (!seed) {
          throw new SystemError('Could not find any seed data object for toolConsumer ' + toolConsumerId)
        }
        const data = {
          toolConsumer: toolConsumerId,
          externalId: externalId,
          name: resource_link_title,
          description: this.description,
          ehrRoutePath: '',
          seedDataId: seed._id
        }
        return this.create(data)
      })
  }
}
