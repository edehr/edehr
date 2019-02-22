import { ok, fail } from './utils'
import BaseController from './base'
import ActivityData from '../models/activity-data'

const debug = require('debug')('server')

export default class VisitController extends BaseController {
  constructor () {
    super(ActivityData, '_id')
  }
    updateAssignmentData (id, data) {
    var propertyName = data.propertyName
    var value = data.value
    debug(`ActivityData update ${id} assignmentData[${data.propertyName}] with data:`)
    debug(JSON.stringify(data))
    return this.baseFindOneQuery(id).then(activityData => {
      if (activityData) {
        if (!activityData.assignmentData) {
          activityData.assignmentData = {}
        }
        activityData.lastDate = Date.now()
        activityData.assignmentData[propertyName] = value
        activityData.markModified('assignmentData');
        return activityData.save()
      }
    })
  }
  updateScratchData (id, data) {
    debug(`ActivityData update ${id} scratch data [${data}]`)
    var value = data.value
    return this.baseFindOneQuery(id).then(activityData => {
      if (activityData) {
        activityData.lastDate = Date.now()
        activityData.scratchData = value
        return activityData.save()
      }
    })
  }
  updateEvaluationData (id, data) {
    debug(`ActivityData update ${id} evaluationData [${JSON.stringify(data)}]`)
    var value = data.value
    return this.baseFindOneQuery(id).then(activityData => {
      if (activityData) {
        // only set the last date when the student is updating the record
        // activityData.lastDate = Date.now()
        activityData.evaluationData = value
        return activityData.save()
      }
    })
  }

  route () {
    const router = super.route()
    router.put('/assignment-data/:key/', (req, res) => {
      var id = req.params.key
      /*
      For example in caller:
      let data = {
        property: 'progressNotes',
        value: activityData.assignmentData.progressNotes || []
      }
      */
      var data = req.body
      this.updateAssignmentData(id, data)
        .then(ok(res))
        .then(null, fail(res))
    })
    router.put('/scratch-data/:key/', (req, res) => {
      var id = req.params.key
      var data = req.body
      this.updateScratchData(id, data)
      .then(ok(res))
      .then(null, fail(res))
    })
    router.put('/evaluation-data/:key', (req, res) => {
      var id = req.params.key
      var data = req.body
      this.updateEvaluationData(id, data)
        .then(ok(res))
        .then(null, fail(res))
    })
    return router
  }
}
