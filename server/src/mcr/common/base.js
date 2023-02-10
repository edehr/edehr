import mongoose from 'mongoose'
import { Router } from 'express'
import pluralize from 'pluralize'
import {ok, fail} from './utils'
import {SystemError} from './errors'
import { Text } from '../../config/text'

const MAX_RESULTS = 1000
// var emptyPromise = function (t) {return new Promise (function (r, e) { r (t); }); };

/**
  Generic controller that provides CRUD operations for a given Mongoose model
*/
export default class BaseController {
  /**
    @param model Mongoose model
    @param key primary key of the model that will be used for searching, removing
    and reading
  */
  constructor (model, key) {
    this.model = model
    this.modelName = model.modelName.toLowerCase()
    this.key = key
    this.baseQ = {}
    this.populate = ''
    this.fields = undefined
  }

  // Not used
  // setFields (fieldList) {
  //   this.fields = fieldList
  // }

  create (data) {
    return this.model
      .create(data)
      .then((modelInstance) => {
        // var response = {}
        // response[this.modelName] = modelInstance
        return modelInstance
      })
  }

  baseFilter (id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      let ee = new Error('baseFilter here')
      console.log(ee)
      throw new SystemError(Text.INVALID_BASE_ID(id, this.modelName))
    }
    var filter = {}
    filter[this.key] = id
    return filter
  }

  baseFindOneQuery (id) {
    var filter = this.baseFilter(id)
    let query = this.model.findOne(filter)
    // console.log('baseFindOneQuery for ', filter, 'query', query)
    return query
  }

  /**
   * findOneById is a wrapper around the more obscurely name 'baseFindOneQuery. It is also an async
   * method that returns the results of awaiting on baseFindOneQuery.
   * @param id
   * @returns {Promise<*>}
   */
  async findOneById (id) {
    return await this.baseFindOneQuery(id)
  }

  read (id) {
    let self = this
    return this.baseFindOneQuery(id)
      .populate(self.populate)
      .then((modelInstance) => {
      // console.log('read(id)  ', id, 'this.modelName', this.modelName, 'modelInstance', modelInstance)
        var response = {}
        response[this.modelName] = modelInstance
        return response
      })
  }

  list (filter={}, projection={}) {
    return this.model
      .find(filter, projection)
      // .limit(MAX_RESULTS)
      .then((modelInstances) => {
        var response = {}
        response[pluralize(this.modelName)] = modelInstances
        return response
      })
  }

  listForTool (tool) {
    return this.model
      .find({toolConsumer: tool})
      .limit(MAX_RESULTS)
      .then((modelInstances) => {
        var response = {}
        response[pluralize(this.modelName)] = modelInstances
        return response
      })
  }

  delete (id) {
    var filter = this.baseFilter(id)
    return this.model
      .deleteMany(filter)
      .then(() => {
        return {}
      })
  }

  clearConsumer (toolConsumerId) {
    const filter = {}
    filter['toolConsumer'] = toolConsumerId
    return this.model
      .deleteMany(filter)
      .then(() => {
        console.log('clearConsumer for model', this.modelName, ' consumer', toolConsumerId)
        return {}
      })
  }

  clearAll () {
    console.log('Warning removing all documents from collection ', this.model.modelName)
    return this.model
      .deleteMany({})
      .then(() => {
        return {}
      })
  }

  /**
   */
  update (id, data) {
    return this.baseFindOneQuery(id)
      .then((modelInstance) => {
        // Note that data.hasOwnProperty(attribute) does not work in nodejs See https://github.com/hapijs/hapi/issues/3280
        for (var attribute in data) {
          if (Object.prototype.hasOwnProperty.call(data, attribute) &&
            attribute !== this.key && attribute !== '_id') {
            modelInstance[attribute] = data[attribute]
          }
        }
        if (modelInstance.lastUpdateDate) {
          modelInstance.lastUpdateDate = Date.now()
        }
        // THe activity model, unfortunately, used a different field name
        if (modelInstance.lastDate) {
          modelInstance.lastDate = Date.now()
        }

        return modelInstance.save()
      })
      .then((modelInstance) => {
        var response = {}
        response[this.modelName] = modelInstance
        return response
      })
  }

  findOne (query, fields) {
    // console.log('base.findOne:', query, fields)
    var self = this
    query = query || {}
    return new Promise(function (resolve, reject) {
      if (self.err) return reject(self.err)
      var q = Object.assign({}, self.baseQ, query)
      // console.log('base.findOne q = ', q)
      self.model.findOne(q)
        .populate(self.populate)
        .select(fields)
        .exec()
      // .then(self.sanitizeData)
        .then((results) => {
          resolve(results)
        })
        .catch(() => self.complete(reject, 'findone'))
    })
  }

  complete (reject, funct) {
    return function (err) {
      console.log('dbmodel.' + funct + ': ' + err.message)
      reject(new Error('dbmodel.' + funct + ': ' + err.message))
    }
  }

  route () {
    const router = new Router()

    router.get('/', (req, res) => {
      this
        .list()
        .then(ok(res))
        .then(null, fail(res))
    })

    router.get('/consumer/:tool', (req, res) => {
      this
        .listForTool(req.params.tool)
        .then(ok(res))
        .then(null, fail(res))
    })

    router.post('/', (req, res) => {
      this
        .create(req.body)
        .then(ok(res))
        .then(null, fail(res))
    })

    router.get('/get/:key', (req, res) => {
      this
        .read(req.params.key)
        .then(ok(res))
        .then(null, fail(res))
    })

    router.put('/:key', (req, res) => {
      this
        .update(req.params.key, req.body)
        .then(ok(res))
        .then(null, fail(res))
    })

    return router
  }
}
