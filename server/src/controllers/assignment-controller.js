import BaseController from './base'
import Assignment from '../models/assignment'
import SeedDataController from '../controllers/seedData-controller'
import { SystemError } from '../utils/errors'

const debug = require('debug')('server')
const sd = new SeedDataController()

export default class AssignmentController extends BaseController {
  constructor () {
    super(Assignment, '_id')
  }

  _composeQuery (externalId, toolConsumerId) {
    return {$and: [{externalId: externalId}, {toolConsumer: toolConsumerId}]}

  }

  locateAssignmentForStudent (externalId, toolConsumerId) {
    const _this = this
    // let externalId = ltiData.custom_assignment
    let query = this._composeQuery(externalId, toolConsumerId)
    debug('Assignment search for ' + JSON.stringify(query))
    return this.findOne(query)
  }

  createAssignment (externalId, toolConsumerId, resource_link_title, resource_link_description) {
    return sd.findOne({toolConsumer: toolConsumerId})
      .then((seed) => {
        if (!seed) {
          throw new SystemError('Could not find any seed data object for toolConsumer ' + toolConsumerId)
        }
        const data = {
          toolConsumer: toolConsumerId,
          externalId: externalId,
          name: resource_link_title,
          description: resource_link_description,
          ehrRoutePath: '',
          seedDataId: seed._id
        }
        return this.create(data)
      })
  }
}
