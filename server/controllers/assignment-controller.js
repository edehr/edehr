import BaseController from './base'
import Assignment from '../models/assignment'
const debug = require('debug')('server')

export const DEFAULT_ASSIGNMENT_EXTERNAL_ID = 'defaultNonAssignment'


export default class AssignmentController extends BaseController {
  constructor () {
    super(Assignment, '_id')
  }

  locateAssignmentByExternalId (externalId) {
    const _this = this
    var query = { externalId: externalId }
    debug('Assignment search for ' + externalId)
    return this.findOne(query)
    .then((result) => {
      if (!result) {
        query = { externalId: DEFAULT_ASSIGNMENT_EXTERNAL_ID }
        console.log('Could not find assignment for ' + externalId + '. Search for ' + DEFAULT_ASSIGNMENT_EXTERNAL_ID)
        return _this.findOne(query)
      }
      return result
    })
  }
}
