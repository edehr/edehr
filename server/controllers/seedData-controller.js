import BaseController from './base'
import SeedData from '../models/seed-data'
import {ok, fail} from './utils'
const debug = require('debug')('server')

export default class SeedDataController extends BaseController {
  constructor () {
    super(SeedData, '_id')
  }
  updateSeedEhrProperty (id, data) {
    var propertyName = data.propertyName
    var value = data.value
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
        model.markModified('ehrData');
        return model.save()
      }
    })
  }

  route () {
    const router = super.route()
    router.put('/updateSeedEhrProperty/:key/', (req, res) => {
      let id = req.params.key
      /*
      For example in caller:
      let data = {
        property: 'progressNotes',
        value: model.ehrData.progressNotes || []
      }
      */
      let data = req.body
      debug('seed-data updateSeedEhrProperty with key', id)
      this.updateSeedEhrProperty(id, data)
      .then(ok(res))
      .catch(fail(res))
    })
    return router
  }
}
