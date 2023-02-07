import moment from 'moment'
import BaseController from '../common/base'
import Assignment from '../assignment/assignment'
import SeedData from './seed-data'
import { Text }  from '../../config/text'
import { NotAllowedError } from '../common/errors'
import {ok, fail} from '../common/utils'
import { updateAllVisitTime } from '../../ehr-definitions/ehr-def-utils'
import { logError} from '../../helpers/log-error'
import EhrDataModel from '../../ehr-definitions/EhrDataModel'
const debug = require('debug')('server')

export default class SeedDataController extends BaseController {
  constructor () {
    super(SeedData, '_id')
  }

  /**
   * Perform updates on the ehrData to transform older versions of an ehr data record into the latest
   * version.  This is performed whenever a new seed is created or the client is importing a file.
   * @param ehrData
   * @private
   */
  _updateEhrDataToLatestFormat (ehrData) {
    if(ehrData) {
      debug('SeedData update ehr format', Object.keys(ehrData).length, 'pages incl meta')
      EhrDataModel.updateEhrDataMeta(ehrData)
      // seeds can be uploaded from files. Or created by the server with an older resource
      // update visitTime to be sure it is ok
      // Once created we depend on the client to only store '0000' formated visit times.
      updateAllVisitTime(ehrData)
    }
    else {
      debug('SeedData update ehr format without ehr data. Curious?')
    }
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
    this._updateEhrDataToLatestFormat(data.ehrData)
    return super.create(data)
  }

  /**
   * Update a property inside the EHR seed data.  Invoked when client saves data while user is editing a seed.
   * Also see updateSeedEhrData
   * @param id of the seed db doc
   * @param data containing propertyName and value
   * @return {*} updated doc
   * @see updateAssignmentData in activity-data-controller
   */
  updateSeedEhrProperty (id, data) {
    let propertyName = data.propertyName
    let value = data.value
    // place date into the ehr data's page element
    value.lastUpdate = moment().format()
    debug(`SeedData updateSeedEhrProperty ${id} ehrData[${data.propertyName}] with data:`)
    // debug('updateSeedEhrProperty ' + JSON.stringify(value))
    return this.baseFindOneQuery(id).then(model => {
      debug('updateSeedEhrProperty search ' + model ? 'ok' : 'fail')
      if (model) {
        if (model.isDefault) {
          throw new NotAllowedError(Text.SEED_NOT_ALLOWED_TO_EDIT_DEFAULT)
        }
        let data = model.ehrData || {}
        data[propertyName] = value
        return this._saveSeedEhrData(model, data)
      }
    })
  }

  /**
   * Update the entire ehr seed data.
   * 1. This is invoked when the client imports EHRdata from a file.
   * 2. This is used by the database seeding to update existing seed records.
   * IN BOTH CASES, we wish to update the content to the latest EHR format
   * Also see updateSeedEhrProperty
   * @param id of the seed db doc
   * @return {*} updated doc
   */
  updateSeedEhrData (id, data) {
    return this.baseFindOneQuery(id).then(model => {
      debug('SeedData updateSeedEhrData ', id, model ? 'found' : 'fail')
      // debug('SeedData updateSeedEhrData with data: ' + JSON.stringify(data))
      // debug('updateSeedEhrData search ' + model ? 'ok' : 'fail')
      if (model) {
        if (model.isDefault) {
          throw new NotAllowedError(Text.SEED_NOT_ALLOWED_TO_EDIT_DEFAULT)
        }
        this._updateEhrDataToLatestFormat(data)
        this._saveSeedEhrData(model, data)
      }
    })
  }

  _saveSeedEhrData (model, ehrData) {
    // Be sure both the seed and activity-data controllers do similar things when they save
    // ehr data. For example, they both update the metadata
    EhrDataModel.updateEhrDataMeta(ehrData)
    model.lastUpdateDate = Date.now()
    model.ehrData = ehrData
    // tell the db to see a change on this subfield
    model.markModified('ehrData')
    return model.save()
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
      this.updateSeedEhrData(id, data)
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
