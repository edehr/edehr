import moment from 'moment'
import { ok, fail } from '../common/utils'
import BaseController from '../common/base'
import ActivityData from './activity-data'
import EhrDataModel from './../../ehr-definitions/EhrDataModel'
import { EHR_AD_EVENT, EHR_EVENT_BUS } from '../../server/trace-ehr'
import { decoupleObject } from '../../ehr-definitions/common-utils'

const debug = require('debug')('server')

export default class ActivityDataController extends BaseController {
  constructor () {
    super(ActivityData, '_id')
  }

  /**
   * place date into the ehr data's page element
   * @param visitId
   * @param id
   * @param dataPayload
   let data = {
        property: 'progressNotes',
        value: activityData.assignmentData.progressNotes || []
   * @param action
   * @return {*}
   * @see updateSeedEhrProperty in seedData-controller
   */
  async putAssignmentData (visitId, id, dataPayload, action) {
    // console.log('PUT AD', visitId, id, action)
    const ad = await this.baseFindOneQuery(id)
    if (ad) {
      const propertyName = dataPayload.propertyName
      const value = dataPayload.value
      value.lastUpdate = moment().format()
      let ehrData = ad.assignmentData || {}
      const previous = decoupleObject(ehrData)
      ehrData[propertyName] = value
      const doc = await this._saveEhrData(ad, ehrData)
      EHR_EVENT_BUS.emit(EHR_AD_EVENT, visitId, action, previous, doc.assignmentData)
      return doc
    }
  }

  async updateAndSaveAssignmentEhrData (id, ehrData) {
    if (!ehrData) {
      return Promise.resolve()
    }
    const ad = await this.baseFindOneQuery(id)
    if (ad) {
      const previous = decoupleObject(ad.assignmentData)
      const doc = await this._saveEhrData(ad, ehrData)
      EHR_EVENT_BUS.emit(EHR_AD_EVENT, 'system', 'update', previous, doc.assignmentData)
      return doc
    }
  }

  async _saveEhrData (activityData, ehrData) {
    ehrData = EhrDataModel.PrepareForDb(ehrData)
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
    router.put('/assignment-data/:key/:action', (req, res) => {
      const id = req.params.key
      let action = req.params.action
      const data = req.body
      const authPayload = req.authPayload
      const visitId = authPayload.visitId
      this.putAssignmentData(visitId, id, data, action)
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
