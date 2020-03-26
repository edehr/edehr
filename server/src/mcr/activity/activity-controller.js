import BaseController from '../common/base'
import Visit from '../visit/visit'
import Activity from './activity'
import {ok, fail} from '../common/utils'
const debug = require('debug')('server')

/*
resource_link_id 	required 	unique id referencing the link, or "placement", of the app in the consumer. If an app was added twice to the same class, each placement would send a different id, and should be considered a unique "launch". For example, if the provider were a chat room app, then each resource_link_id would be a separate room.

 */
export default class ActivityController extends BaseController {
  constructor () {
    super(Activity, '_id')
  }

  closeActivity (id, direction) {
    return this.baseFindOneQuery(id).then(activity => {
      if (activity) {
        activity.closedDate = Date.now()
        activity.open = direction
        return activity.save()
      }
    })
  }

  /**
   * Called by the LTI controller when a user comes to this system.
   *
   * @param ltiData
   * @param toolConsumerId
   * @param assignment
   * @return {Promise<any>}
   */
  updateCreateActivity (ltiData, toolConsumerId, assignment) {
    const _this = this
    debug('updateCreateActivity search for existing activity ' + ltiData.resource_link_id)
    return new Promise(function (resolve, reject) {
      const data = _this._extractLtiData(ltiData)
      _this.findOne({$and: [{resource_link_id: ltiData.resource_link_id}, {toolConsumer: toolConsumerId}]})
        .then((activity) => {
          if (activity) {
            activity.lastDate = Date.now()
            if (!activity.assignment.equals(assignment._id)) {
            // console.log('was ', activity.assignment, 'seeking', assignment._id)
              const msg = 'Changing assignment for this activity.'
              debug('updateCreateActivity ' + msg)
              activity.assignment = assignment._id
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
    return Visit.find({ $and: [ {isStudent: true }, {activity: _id} ] })
      .populate('activityData', 'submitted evaluated assignmentData evaluationData')
      .populate('assignment', 'externalId name description seedDataId ehrRoutePath')
      .populate('user', 'givenName familyName fullName emailPrimary')
      .select('userName lastVisitDate')
      .then((visits) => {
        return {classList: visits}
      })
  }

  findActivity (id) {
    return this.baseFindOneQuery(id)
      .populate('assignment')
  }

  _createHelper (activity, data) {
    debug('createHelper create new activity record ' + JSON.stringify((data)))
    return this.create(data)
      .then((newActivity) => {
        debug('createHelper new activity ' + newActivity._id)
        return newActivity
      })
  }
  _updateHelper (activity, data) {
    let current = JSON.stringify(activity)
    Object.assign(activity, data)
    let updated = JSON.stringify(activity)
    if (current !== updated) {
      debug('updateHelper there is something different in the activity. Saving new activity data ' + updated)
      return activity.save()
    } else {
      debug('updateHelper  no change in activity')
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

    router.get('/class-list/:key', (req, res) => {
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

    // PUT
    router.put('/close-activity/:key', (req, res) => {
      this
        .closeActivity(req.params.key, true)
        .then(ok(res))
        .then(null, fail(res))
    })

    router.put('/open-activity/:key', (req, res) => {
      this
      .closeActivity(req.params.key, false)
      .then(ok(res))
      .then(null, fail(res))
    })

    return router
  }
}
