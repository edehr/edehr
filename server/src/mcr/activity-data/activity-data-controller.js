import moment from 'moment'
import { fail, ok } from '../common/utils'
import BaseController from '../common/base'
import ActivityData from './activity-data'
import EhrDataModel from './../../ehr-definitions/EhrDataModel'
import { EHR_AD_EVENT, EHR_EVENT_BUS, EHR_PatientFromSeedEVENT } from '../../server/trace-ehr'
import { decoupleObject } from '../../ehr-definitions/common-utils'

const debug = require('debug')('server')

export default class ActivityDataController extends BaseController {
  constructor () {
    super(ActivityData)
  }

  async getActivityAssignmentData (id) {
    const activityData = await this.baseFindOneQuery(id)
    return { activityData: activityData }
  }

  async addPatientWithSeedToAssignmentData (toolConsumer, visitId, userId, id, dataPayload) {
    debug('PUT addPatientWithSeedToAssignmentData', visitId, id, dataPayload)
    const ad = await this.baseFindOneQuery(id)
    if (ad) {
      const seedId = dataPayload.seedId
      let assignmentData = decoupleObject(ad.assignmentData)
      assignmentData = assignmentData || {}
      assignmentData.patients = assignmentData.patients || []
      if (assignmentData.patients.find(p => p.seedId === seedId)) {
        debug('Patient for this seed already is in the set.')
        return ad
      }
      assignmentData.patients.push ({
        _id: seedId,
        seedId: seedId,
        ehrData: {}
      })
      const doc = await this._saveEhrData(ad, assignmentData)
      const payload = {
        toolConsumer: toolConsumer,
        sourceId: visitId,
        userId: userId,
        objId: id,
        seedId: seedId
      }
      EHR_EVENT_BUS.emit(EHR_PatientFromSeedEVENT, payload)
      return doc
    }
  }

  async resetAssignmentData (toolConsumer, visitId, userId, id) {
    // console.log('PUT AD', visitId, id, action)
    const ad = await this.baseFindOneQuery(id)
    if (ad) {
      const doc = await this._saveEhrData(ad, {})
      const payload = {
        toolConsumer: toolConsumer,
        sourceId: visitId,
        userId: userId,
        objId: doc._id,
        updated: doc.assignmentData
      }
      EHR_EVENT_BUS.emit(EHR_AD_EVENT, payload)
      return doc
    }
  }


  /**
   * place date into the ehr data's page element
   * @param toolConsumer
   * @param visitId
   * @param userId
   * @param id
   * @param dataPayload
   let data = {
        seedId --- the patient
        property: 'progressNotes',
        value: activityData.assignmentData.progressNotes || []
   * @return {*}
   * @see updateSeedEhrProperty in seedData-controller
   */
  async putAssignmentData (toolConsumer, visitId, userId, id, dataPayload) {
    // console.log('PUT AD', visitId, id, action)
    const ad = await this.baseFindOneQuery(id)
    if (ad) {
      const patientObjectId = dataPayload.patientObjectId
      const action = dataPayload.action
      const pageKey = dataPayload.propertyName
      const pageData = dataPayload.value
      pageData.lastUpdate = moment().format()
      let assignmentData = decoupleObject(ad.assignmentData)
      const patient = assignmentData.patients.find( p => p._id === patientObjectId)
      patient.ehrData[pageKey] = pageData
      const doc = await this._saveEhrData(ad, assignmentData)
      const payload = {
        toolConsumer: toolConsumer,
        sourceId: visitId,
        userId: userId,
        objId: doc._id,
        action: action,
        previous: assignmentData,
        updated: doc.assignmentData
      }
      EHR_EVENT_BUS.emit(EHR_AD_EVENT, payload)
      return doc
    }
  }

  async updateAndSaveAssignmentData (ad) {
    if (!ad.assignmentData || !ad.assignmentData.patients) {
      // ActivityData records for instructor visits do not have assignment data
      return
    }
    // here we have both assignmentData and assignment.patients
    const assignmentData = decoupleObject(ad.assignmentData)
    let needsSave = false // true if at least one set of ehrData needed to be updated/
    for (const patient of assignmentData.patients) {
      if (!EhrDataModel.IsUpToDate(patient.ehrData)) {
        patient.ehrData = EhrDataModel.PrepareForDb(patient.ehrData)
        needsSave = true
      }
    }
    if (needsSave) {
      await this._saveEhrData(ad, assignmentData)
    }
  }

  async _saveEhrData (activityData, assignmentData) {
    activityData.assignmentData = assignmentData
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
    // debug(`ActivityData update ${id} scratch data [${JSON.stringify(data)}]`)
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
    const value = data.value
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
    router.get('/activity-assignment-data/:key', (req, res) => {
      this
        .getActivityAssignmentData(req.params.key)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.put('/submitted/:key/', (req, res) => {
      const id = req.params.key
      const data = req.body
      this.assignmentSubmitted(id, data)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.put('/add-patient-with-seed/:key/', (req, res) => {
      const id = req.params.key
      const dataPayload = req.body
      const authPayload = req.authPayload
      const { consumerKey, visitId, userId } = authPayload
      this.addPatientWithSeedToAssignmentData(consumerKey, visitId, userId, id, dataPayload)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.put('/assignment-data/:key/', (req, res) => {
      const id = req.params.key
      const dataPayload = req.body
      const authPayload = req.authPayload
      const { consumerKey, visitId, userId } = authPayload
      this.putAssignmentData(consumerKey, visitId, userId, id, dataPayload)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.put('/reset-assignment-data/:key/', (req, res) => {
      const id = req.params.key
      const authPayload = req.authPayload
      const { consumerKey, visitId, userId } = authPayload
      this.resetAssignmentData(consumerKey, visitId, userId, id)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.put('/scratch-data/:key/', (req, res) => {
      const id = req.params.key
      const data = req.body
      this.updateScratchData(id, data)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.put('/evaluation-data/:key', (req, res) => {
      const id = req.params.key
      const data = req.body
      this.updateEvaluationData(id, data)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    return router
  }
}
