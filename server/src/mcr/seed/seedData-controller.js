import BaseController from '../common/base'
import Assignment from '../assignment/assignment'
import SeedData from './seed-data'
import { Text }  from '../../config/text'
import { NotAllowedError } from '../common/errors'
import {ok, fail} from '../common/utils'
const debug = require('debug')('server')

export default class SeedDataController extends BaseController {
  constructor () {
    super(SeedData, '_id')
  }

  /**
   * Update a property inside the EHR seed data.
   * Also see updateSeedEhrData
   * @param id of the seed db doc
   * @param data containing propertyName and value
   * @return {*} updated doc
   */
  updateSeedEhrProperty (id, data) {
    let propertyName = data.propertyName
    let value = data.value
    debug(`SeedData updateSeedEhrProperty ${id} ehrData[${data.propertyName}] with data:`)
    debug('updateSeedEhrProperty ' + JSON.stringify(value))
    return this.baseFindOneQuery(id).then(model => {
      debug('updateSeedEhrProperty search ' + model ? 'ok' : 'fail')
      if (model) {
        if (model.isDefault) {
          throw new NotAllowedError(Text.SEED_NOT_ALLOWED_TO_EDIT_DEFAULT)
        }
        if (!model.ehrData) {
          model.ehrData = {}
        }
        model.lastUpdateDate = Date.now()
        model.ehrData[propertyName] = value
        model.markModified('ehrData')
        return model.save()
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
    debug('SeedData updateSeedEhrData '+ id +' ehrData with data: ' + JSON.stringify(data))
    return this.baseFindOneQuery(id).then(model => {
      debug('updateSeedEhrData search ' + model ? 'ok' : 'fail')
      if (model) {
        if (model.isDefault) {
          throw new NotAllowedError(Text.SEED_NOT_ALLOWED_TO_EDIT_DEFAULT)
        }
        model.lastUpdateDate = Date.now()
        model.ehrData = data
        model.markModified('ehrData')
        return model.save()
      }
    })
  }

  deleteSeed (id) {
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
      console.log('delete seed data', req.params)
      this
        .deleteSeed(req.params.key)
        .then(ok(res))
        .then(null, fail(res))
    })
    return router
  }
}
