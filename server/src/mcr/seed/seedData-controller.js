import moment from 'moment'
import BaseController from '../common/base'
import Assignment from '../assignment/assignment'
import SeedData from './seed-data'
import { Text }  from '../../config/text'
import { NotAllowedError } from '../common/errors'
import {ok, fail} from '../common/utils'
import { logError} from '../../helpers/log-error'
import EhrDataModel from '../../ehr-definitions/EhrDataModel'
import { EHR_EVENT_BUS, EHR_SEED_EVENT } from '../../server/trace-ehr'
import { decoupleObject } from '../../ehr-definitions/common-utils'
const debug = require('debug')('server')

export default class SeedDataController extends BaseController {
  constructor () {
    super(SeedData, '_id')
  }

  /**
   * Override base method to ensure the ehr meta is updated
   * @param data
   *       let seedData = {
   *         name: this.name,
   *         version: this.version,
   *         description: this.description,
   *         contributors: this.contributors,
   *         ehrData: this.ehrData,
   *         toolConsumer: StoreHelper.getAuthdConsumerId()
   *       }
   * @returns {*}
   */
  create (data) {
    debug('SeedData. Create seed with', JSON.stringify(data))
    // put the data into an EhrDataModel to get the data transformed to the latest version, if needed
    const ehrDataModel = new EhrDataModel(data.ehrData)
    data.ehrData = ehrDataModel.ehrData
    return super.create(data)
  }

  /**
   * Update a property inside the EHR seed data.  Invoked when client saves data while user is editing a seed.
   * Also see saveSeedEhrData
   * @param visitId
   * @param userId
   * @param id of the seed db doc
   * @param payload containing propertyName and the new element of ehrData in the value field
   * @param action - optional -- used for tracing changes to seed data. See traceApi
   * @return {*} updated doc
   * @see updateAssignmentData in activity-data-controller
   */
  async updateSeedEhrProperty (visitId, userId, id, payload, action) {
    let propertyName = payload.propertyName
    let value = payload.value
    const model = await this.baseFindOneQuery(id)
    // debug('upsehrprop search ' + model ? 'ok' : 'fail')
    if (model) {
      if (model.isDefault) {
        throw new NotAllowedError(Text.SEED_NOT_ALLOWED_TO_EDIT_DEFAULT)
      }
      let ehrData = model.ehrData || {}
      const previous = decoupleObject(ehrData)
      value.lastUpdate = moment().format()
      // place date into the ehr data's page element
      ehrData[propertyName] = value
      const doc = await this._saveSeedEhrData(model, ehrData)
      const payload = {
        toolConsumer: doc.toolConsumer,
        sourceId: visitId,
        userId: userId,
        objId: id,
        action: action,
        previous: previous,
        updated: doc.ehrData
      }
      EHR_EVENT_BUS.emit(EHR_SEED_EVENT, payload)
      return doc
    }
  }

  _saveSeedEhrData (model, ehrData) {
    model.lastUpdateDate = Date.now()
    model.ehrData = EhrDataModel.PrepareForDb(ehrData)
    // tell the db to see a change on this subfield
    model.markModified('ehrData')
    return model.save()
  }
  async updateAndSaveSeedEhrData (id, ehrData) {
    const model = await this.baseFindOneQuery(id)
    const previous = decoupleObject(model.seedData)
    const doc = await this._saveSeedEhrData(model, ehrData)
    const payload = {
      toolConsumer: doc.toolConsumer,
      sourceId: 'system',
      userId: 'system',
      objId: id,
      action: 'update',
      previous: previous,
      updated: doc.ehrData
    }
    EHR_EVENT_BUS.emit(EHR_SEED_EVENT, payload)
  }

  deleteSeed (id) {
    if(!id || id === 'undefined') {
      const msg = 'Must provide seed id to delete'
      logError(msg)
      throw new NotAllowedError(msg)
    }
    console.log('Delete seed if there are no assignments using it', id)
    return Assignment.find ( {seedDataId: id})
      .then ( (assignments) => {
        if (assignments.length > 0 ) {
          console.log('will reject work?')
          throw new NotAllowedError(Text.SEED_IN_USE_NO_DELETE)
        }
        let filter = this.baseFilter(id)
        return this.model
          .deleteMany(filter)
          .then(() => {
            return {}
          })
      })
  }

  route () {
    const router = super.route()
    router.post('/createSeed', (req, res) => {
      const authPayload = req.authPayload
      const { visitId, userId } = authPayload
      const previous = undefined
      this
        .create(req.body)
        .then(res => {
          const newData = res.ehrData
          const payload = {
            toolConsumer: res.toolConsumer,
            sourceId: visitId,
            userId: userId,
            objId: res._id,
            action: 'create',
            previous: previous,
            updated: newData
          }
          EHR_EVENT_BUS.emit(EHR_SEED_EVENT, payload)
          return res
        })
        .then(ok(res))
        .then(null, fail(res))
    })
    router.put('/updateSeed/:key', (req, res) => {
      const id = req.params.key
      const authPayload = req.authPayload
      const { visitId, userId } = authPayload
      let previous
      let toolConsumer
      this
        .baseFindOneQuery(id)
        .then(model => {
          // get previous ehrData for event below
          previous = model.ehrData
          toolConsumer = model.toolConsumer
          return this.update(id, req.body)
        })
        .then(res => {
          // note all lowercase seeddata
          const newData = res && res.seeddata ? res.seeddata.ehrData : undefined
          // with action 'properties' the event handler will only process change if the prev != new
          const payload = {
            toolConsumer: toolConsumer,
            sourceId: visitId,
            userId: userId,
            objId: id,
            action: 'properties',
            previous: previous,
            updated: newData
          }
          EHR_EVENT_BUS.emit(EHR_SEED_EVENT, payload)
          return res
        })
        .then(ok(res))
        .then(null, fail(res))
    })
    router.put('/updateSeedEhrProperty/:key/:action', (req, res) => {
      debug('SeedController API updateSeedEhrProperty')
      let id = req.params.key
      let action = req.params.action
      let data = req.body
      const authPayload = req.authPayload
      const { visitId, userId } = authPayload
      this.updateSeedEhrProperty(visitId, userId, id, data, action)
        .then(ok(res))
        .catch(fail(res))
    })

    router.delete('/:key', (req, res) => {
      const authPayload = req.authPayload
      const { visitId, userId } = authPayload
      const seedId = req.params.key
      let previous
      let toolConsumer
      // TODO For DELETE seed (a) user is admin or (b) ...
      //  (1) check no assignments use seed
      //  (2) check user is at least instructor
      //  (3) match tool consumer too
      debug('Delete seed api endpoint with id: ', seedId)
      this
        .baseFindOneQuery(seedId)
        .then(model => {
          // get previous ehrData for event below
          previous = model.ehrData
          toolConsumer = model.toolConsumer
          // then do the action of deletion
          return this.deleteSeed(seedId)
        })
        .then(res => {
          const payload = {
            toolConsumer: toolConsumer,
            sourceId: visitId,
            userId: userId,
            objId: seedId,
            action: 'delete',
            previous: previous,
            updated: undefined
          }
          EHR_EVENT_BUS.emit(EHR_SEED_EVENT, payload)
          return res
        })
        .then(ok(res))
        .then(null, fail(res))
    })
    return router
  }
}
