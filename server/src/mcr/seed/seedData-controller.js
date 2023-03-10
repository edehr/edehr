import moment from 'moment'
import BaseController from '../common/base'
import Assignment from '../assignment/assignment'
import SeedData from './seed-data'
import { Text }  from '../../config/text'
import { NotAllowedError } from '../common/errors'
import {ok, fail} from '../common/utils'
import { logError} from '../../helpers/log-error'
import EhrDataModel from '../../ehr-definitions/EhrDataModel'
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
   * @param id of the seed db doc
   * @param payload containing propertyName and the new element of ehrData in the value field
   * @return {*} updated doc
   * @see updateAssignmentData in activity-data-controller
   */
  updateSeedEhrProperty (id, payload) {
    let propertyName = payload.propertyName
    let value = payload.value
    return this.baseFindOneQuery(id).then(model => {
      debug('upsehrprop search ' + model ? 'ok' : 'fail')
      if (model) {
        if (model.isDefault) {
          throw new NotAllowedError(Text.SEED_NOT_ALLOWED_TO_EDIT_DEFAULT)
        }
        let ehrData = model.ehrData || {}
        value.lastUpdate = moment().format()
        // place date into the ehr data's page element
        ehrData[propertyName] = value
        debug(`SeedData upsehrprop ${id} ehrData[${propertyName}] with data:`)
        // debug('upsehrprop ' + JSON.stringify(value))
        return this._saveSeedEhrData(model, ehrData)
      }
    })
  }

  _saveSeedEhrData (model, ehrData) {
    model.lastUpdateDate = Date.now()
    model.ehrData = EhrDataModel.PrepareForDb(ehrData)
    // tell the db to see a change on this subfield
    model.markModified('ehrData')
    return model.save()
  }
  updateAndSaveSeedEhrData (id, ehrData) {
    return this.baseFindOneQuery(id).then(model => {
      return this._saveSeedEhrData(model, ehrData)
    })
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
    router.put('/updateSeedEhrProperty/:key/', (req, res) => {
      debug('SeedController API updateSeedEhrProperty')
      let id = req.params.key
      let data = req.body
      this.updateSeedEhrProperty(id, data)
        .then(ok(res))
        .catch(fail(res))
    })
    router.put('/importSeedEhrData/:key/', (req, res) => {
      let id = req.params.key
      let data = req.body
      this.updateAndSaveSeedEhrData(id, data)
        .then(ok(res))
        .catch(fail(res))
    })

    router.delete('/:key', (req, res) => {
      const seedId = req.params.key
      debug('Delete seed api endpoint with id: ', seedId)
      this
        .deleteSeed(seedId)
        .then(ok(res))
        .then(null, fail(res))
    })
    return router
  }
}
