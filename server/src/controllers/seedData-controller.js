import BaseController from './base'
import SeedData from '../models/seed-data'
import {ok, fail} from './utils'
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
        model.lastUpdateDate = Date.now()
        model.ehrData = data
        model.markModified('ehrData')
        return model.save()
      }
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
    return router
  }
}
