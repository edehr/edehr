import BaseController from './base'
import Activity from '../models/activity'
import Visit from '../models/visit'
import {AssignmentMismatchError} from '../utils/errors'
import {ok, fail} from './utils'
const debug = require('debug')('server')

export default class ActivityController extends BaseController {
  constructor () {
    super(Activity, '_id')
  }

  updateCreateActivity (ltiData, toolConsumerId, assignment) {
    const _this = this
    debug('updateCreateActivity search for existing activity ' + ltiData.resource_link_id)
    return new Promise(function (resolve, reject) {
      var data = _this._extractLtiData(ltiData)
      _this.findOne({$and: [{resource_link_id: ltiData.resource_link_id}, {toolConsumer: toolConsumerId}]})
      .then((activity) => {
        if (activity) {
          if (!activity.assignment.equals(assignment._id)) {
            // console.log('was ', activity.assignment, 'seeking', assignment._id)
            var msg = 'Changing assignment for this activity.'
            debug('updateCreateActivity ' + msg)
            activity.assignment = assignment._id
            // console.log('adasd',activity)
          }
          debug('updateCreateActivity update activity ' + activity._id)
          return _this._updateHelper(activity, data)
        } else {
          data.toolConsumer = toolConsumerId
          data.assignment = assignment._id
          debug('updateCreateActivity create activity')
          return _this._createHelper(activity, data)
        }
      })
      .then((activity) => {
        resolve(activity)
      })
    })
  }

  listClassList (_id) {
    // TODO elide the student's scratch pad
    /*
      .findOne({personcode: code})
      .select('-_id -__v')
      .populate('bookids', '-_id -__v')
     */
    return Visit.find({ $and: [ {isStudent: true }, {activity: _id} ] })
    // .populate('activityData')
    .populate('assignment')
    .populate('user')
    .then((visits) => {
      return {classList: visits}
    })
  }

  findActivity (id) {
    return this.baseFindOneQuery(id)
    .populate('assignment')
  }

  _createHelper (activity, data) {
    debug('updateCreateActivity create new activity record ' + JSON.stringify((data)))
    return this.create(data)
    .then((newActivity) => {
      debug('updateCreateActivity new activity ' + newActivity._id)
      return newActivity
    })
  }
  _updateHelper (activity, data) {
    let current = JSON.stringify(activity)
    Object.assign(activity, data)
    let updated = JSON.stringify(activity)
    if (current !== updated) {
      debug('updateCreateActivity there is something different in the activity. Saving new activity data ' + updated)
      return activity.save()
    } else {
      debug('updateCreateActivity  no change in activity')
      return activity
    }
  }

  _extractLtiData (ltiData, toolConsumerId) {
    var data = {
      context_id: ltiData.context_id,
      context_label: ltiData.context_label,
      context_title: ltiData.context_title,
      context_type: ltiData.context_type,
      resource_link_id: ltiData.resource_link_id,
      resource_link_title: ltiData.resource_link_title,
      resource_link_description: ltiData.resource_link_description
    }
    return data
  }

  route () {
    const router = super.route()

    router.get('/class/:key', (req, res) => {
      this
      .listClassList(req.params.key)
      .then(ok(res))
      .then(null, fail(res))
    })
    router.get('/flushed/:key', (req, res) => {
      this
      .findActivity(req.params.key)
      .then(ok(res))
      .then(null, fail(res))
    })
    return router
  }
}
