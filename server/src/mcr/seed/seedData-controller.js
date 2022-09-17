import moment from 'moment'
import BaseController from '../common/base'
import Assignment from '../assignment/assignment'
import SeedData from './seed-data'
import { Text }  from '../../config/text'
import { NotAllowedError } from '../common/errors'
import {ok, fail} from '../common/utils'
import { updateAllVisitTime, updateEhrDataMeta } from '../../ehr-definitions/ehr-def-utils'
import EhrDefs from '../../ehr-definitions/ehr-page-defs'
import { logError} from '../../helpers/log-error'
const debug = require('debug')('server')

export default class SeedDataController extends BaseController {
  constructor () {
    super(SeedData, '_id')
  }

  /**
   * Override base method to ensure the ehr meta is updated
   * @param data
   * @returns {*}
   */
  create (data) {
    updateEhrDataMeta(data.ehrData)
    // seeds can be uploaded from files. Or created by the server with an older resource
    // update visitTime to be sure it is ok
    // Once created we depend on the client to only store '0000' formated visit times.
    updateAllVisitTime(data.ehrData, EhrDefs)
    return super.create(data)
  }

  /**
   * Update a property inside the EHR seed data.
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
        this._updateSeed(model, data)
      }
    })
  }

  /**
   * Update the entire ehr seed data
   * Also see updateSeedEhrProperty
   * @param id of the seed db doc
   * @param data containing propertyName and value
   * @return {*} updated doc
   */
  updateSeedEhrData (id, data) {
    // debug('SeedData updateSeedEhrData '+ id +' ehrData with data: ' + JSON.stringify(data))
    return this.baseFindOneQuery(id).then(model => {
      // debug('updateSeedEhrData search ' + model ? 'ok' : 'fail')
      if (model) {
        if (model.isDefault) {
          throw new NotAllowedError(Text.SEED_NOT_ALLOWED_TO_EDIT_DEFAULT)
        }
        this._updateSeed(model, data)
      }
    })
  }

  _updateSeed (model, data) {
    updateEhrDataMeta(data)
    model.lastUpdateDate = Date.now()
    model.ehrData = data
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
      let id = req.params.key
      let data = req.body
      this.updateSeedEhrProperty(id, data)
        .then(ok(res))
        .catch(fail(res))
    })
    router.put('/updateSeedEhrData/:key/', (req, res) => {
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
