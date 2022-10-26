import moment from 'moment'
import { ok, fail } from '../common/utils'
import BaseController from '../common/base'
import ActivityData from './activity-data'
import EhrDataModel from './../../ehr-definitions/EhrDataModel'

const debug = require('debug')('server')

export default class ActivityDataController extends BaseController {
  constructor () {
    super(ActivityData, '_id')
  }

  /**
   * place date into the ehr data's page element
   * @param id
   * @param dataPayload
       let data = {
        property: 'progressNotes',
        value: activityData.assignmentData.progressNotes || []
   * @return {*}
   * @see updateSeedEhrProperty in seedData-controller
   */
  updateAssignmentData (id, dataPayload) {
    // debug('ActivityData updateAssignmentData '+ id +' ehrData with data: ' + JSON.stringify(dataPayload))
    return this.baseFindOneQuery(id).then(activityData => {
      if (activityData) {
        const propertyName = dataPayload.propertyName
        const value = dataPayload.value
        value.lastUpdate = moment().format()
        let ehrData = activityData.assignmentData || {}
        ehrData[propertyName] = value
        return this._updateEhrData(activityData, ehrData)
      }
    })
  }

  updateAssignmentEhrData (id, ehrData) {
    // debug('ActivityData updateAssignmentData '+ id +' ehrData with data: ' + JSON.stringify(ehrData))
    return this.baseFindOneQuery(id).then(activityData => {
      if (activityData) {
        return this._updateEhrData(activityData, ehrData)
      }
    })
  }

  _updateEhrData (activityData, ehrData) {
    EhrDataModel.updateEhrDataMeta(ehrData)
    activityData.lastDate = Date.now()
    activityData.assignmentData = ehrData
    // tell the db to see a change on this subfield
    activityData.markModified('assignmentData')
    return activityData.save()
  }

  /**
   *
   * @param id
   * @param data  Expects data.value to contain the scratch pad content
   * @return {*}
   */
  updateScratchData (id, data) {
    debug(`ActivityData update ${id} scratch data [${JSON.stringify(data)}]`)
    const value = data.value
    return this.baseFindOneQuery(id).then(activityData => {
      if (activityData) {
        activityData.lastDate = Date.now()
        activityData.scratchData = value
        activityData.markModified('scratchData')
        return activityData.save()
      }
    })
  }

  /**
   *
   * @param id
   * @param data  Expects data.value to contain the evaluation pad content
   * @return {*}
   */
  updateEvaluationData (id, data) {
    debug(`ActivityData update ${id} evaluationData [${JSON.stringify(data)}]`)
    var value = data.value
    return this.baseFindOneQuery(id).then(activityData => {
      if (activityData) {
        // only set the last date when the student is updating the record
        // activityData.lastDate = Date.now()
        activityData.evaluationData = value
        activityData.markModified('evaluationData')
        return activityData.save()
      }
    })
  }

  assignmentSubmitted (id, data) {
    let value = data.value === true
    return this.baseFindOneQuery(id).then(activityData => {
      if (activityData) {
        activityData.submitted = value
        return activityData.save()
      }
    })
  }

  route () {
    const router = super.route()
    router.put('/submitted/:key/', (req, res) => {
      const id = req.params.key
      const data = req.body
      this.assignmentSubmitted(id, data)
        .then(ok(res))
        .then(null, fail(res))
    })
    router.put('/assignment-data/:key/', (req, res) => {
      const id = req.params.key
      const data = req.body
      this.updateAssignmentData(id, data)
        .then(ok(res))
        .then(null, fail(res))
    })
    router.put('/scratch-data/:key/', (req, res) => {
      const id = req.params.key
      const data = req.body
      this.updateScratchData(id, data)
        .then(ok(res))
        .then(null, fail(res))
    })
    router.put('/evaluation-data/:key', (req, res) => {
      const id = req.params.key
      const data = req.body
      this.updateEvaluationData(id, data)
        .then(ok(res))
        .then(null, fail(res))
    })
    return router
  }
}
