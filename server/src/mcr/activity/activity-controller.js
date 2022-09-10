import BaseController from '../common/base'
import Visit from '../visit/visit'
import Activity from './activity'
import {ok, fail} from '../common/utils'
import { Text } from '../../config/text'
const debug = require('debug')('server')
const debugAC = false
/*
resource_link_id 	required 	unique id referencing the link, or "placement", of the app in the consumer. If an app was added twice to the same class, each placement would send a different id, and should be considered a unique "launch". For example, if the provider were a chat room app, then each resource_link_id would be a separate room.

 */
export default class ActivityController extends BaseController {
  constructor () {
    super(Activity, '_id')
  }
  setSharedControllers (cc) {
    this.comCon = cc
  }

  closeOpenActivity (id, direction) {
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

  /**
   * Called by the LTI controller when a user comes to this system.
   *
   * @param ltiData
   * @param toolConsumerId
   * @param assignment
   * @return {Promise<any>}
   */
  updateCreateActivity (ltiData, toolConsumerId) {
    const _this = this
    if (debugAC) debug('updateCreateActivity search for existing activity ' + ltiData.resource_link_id)
    return new Promise(function (resolve, reject) {
      const data = _this._extractLtiData(ltiData)
      _this.findOne({$and: [{resource_link_id: ltiData.resource_link_id}, {toolConsumer: toolConsumerId}]})
        .then((activity) => {
          if (activity) {
            activity.lastDate = Date.now()
            return _this._updateHelper(activity, data)
          } else {
            data.toolConsumer = toolConsumerId
            if (debugAC) debug('updateCreateActivity create activity')
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
      .populate('assignment', 'name description seedDataId')
      .populate('user', 'givenName familyName fullName user_id')
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
    if (debugAC) debug('createHelper create new activity record ' + JSON.stringify((data)))
    return this.create(data)
      .then((newActivity) => {
        if (debugAC) debug('createHelper new activity ' + newActivity._id)
        return newActivity
      })
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
    let learningObjectName = ltiData.resource_link_title.replace('LOA-','AC-')
    var data = {
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
        .closeOpenActivity(req.params.key, 'close')
        .then(ok(res))
        .then(null, fail(res))
    })

    router.put('/open-activity/:key', (req, res) => {
      this
        .closeOpenActivity(req.params.key, 'open')
        .then(ok(res))
        .then(null, fail(res))
    })

    return router
  }
}
