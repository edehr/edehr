import mongoose from 'mongoose'
import { ObjectId } from 'mongodb'
import { Router } from 'express'
import pluralize from 'pluralize'
import { fail, ok } from './utils'
import { ParameterError } from './errors'
import { Text } from '../../config/text'

const MAX_RESULTS = 1000

/**
  Generic controller that provides CRUD operations for a given Mongoose model
*/
export default class BaseController {
  /**
    @param model Mongoose model
    @param key primary key of the model that will be used for searching, removing
    and reading
  */
  constructor (model, key = '_id') {
    this.model = model
    this.modelName = model.modelName.toLowerCase()
    this.key = key
  }

  create (data) {
    return this.model
      .create(data)
  }

  baseFilter (id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new ParameterError(Text.INVALID_BASE_ID(id, this.modelName))
    }
    const filter = {}
    filter[this.key] = id
    return filter
  }

  baseFindOneQuery (id) {
    var filter = this.baseFilter(id)
    return this.model.findOne(filter)
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
    return this.baseFindOneQuery(id)
      .then((modelInstance) => {
        const response = {}
        response[this.modelName] = modelInstance
        return response
      })
  }

  list (filter={}, projection={}) {
    console.error('Not an error but important. Need to know who uses list. Model is', this.modelName)
    return this.model
      .find(filter, projection)
      .then((modelInstances) => {
        const response = {}
        response[pluralize(this.modelName)] = modelInstances
        return response
      })
  }

  paginateQuery (options) {
    return { toolConsumer: new ObjectId(options.toolConsumerId)}
  }

  /**
   * Return set to populate after final page selection has taken place. For example, the
   * SeedData has a virtual property 'assignmentCount'.  This is only populated with a value
   * if 'assignmentCount' is given in the call to populate().
   * @returns {string}
   */
  paginateFinalPopulate () {
    return ''
  }
  paginateInitialFindPopulate () {
    return ''
  }
  paginateInitialFieldSet () {
    return { _id: 1, name:1 }
  }
  paginateInitialFilter (resultSet, options) {
    return resultSet
  }
  paginateResultFields () {
    return {name: 1, description: 1, createDate: 1, lastUpdateDate: 1, seedStats: 1  }
  }

  async paginate (options) {
    let { toolConsumerId, offset, limit, sortKey, sortDir } = options
    if (!(sortDir && (sortDir === 'asc' || sortDir === 'desc') )) {
      throw new ParameterError(`Invalid sort direction for pagination. Must be asc or desc. Got '${sortDir}' from ${JSON.stringify(options)}`)
    }
    if (!mongoose.Types.ObjectId.isValid(toolConsumerId)) {
      throw new ParameterError(Text.INVALID_CONSUMER_ID(toolConsumerId))
    }
    offset = parseInt(offset)
    limit = parseInt(limit)
    if (isNaN(offset) || offset < 0) {
      throw new ParameterError(`Invalid offset for pagination. Must be a positive integer. Got ${offset}. From ${JSON.stringify(options)}`)
    }
    if (isNaN(limit) || limit <= 0) {
      throw new ParameterError(`Invalid limit for pagination. Must be an integer greater than zero. Got ${limit}. From ${JSON.stringify(options)}`)
    }
    const query = this.paginateQuery(options)
    const finalPopulate = this.paginateFinalPopulate()
    const initialPopulate = this.paginateInitialFindPopulate()
    const resultSetFields = this.paginateResultFields()
    const minFldSet = this.paginateInitialFieldSet()
    const collationDef = {locale:'en',strength: 1} // TODO allow for other languages
    const sortField = {}
    sortKey = sortKey || '_id'
    sortField[sortKey] = sortDir || 'asc'
    // console.log('------------ query', JSON.stringify(query))
    // console.log('------------ minFldSet', minFldSet)
    // console.log('------------ resultSetFields', resultSetFields)
    // console.log('------------ sortField', sortField)
    // GET INITIAL RESULTS
    let totalSetSorted = await this.model
      .find(query, minFldSet)
      .populate(initialPopulate)
      .collation(collationDef)
      .sort(sortField)
    totalSetSorted = this.paginateInitialFilter(totalSetSorted, options)
    // console.log('------------ totalSetSorted', totalSetSorted.slice(0,2))
    const maxCnt = totalSetSorted.length
    if(offset > maxCnt) {
      const msg = `Requested offset of ${offset} is larger than result set size of ${maxCnt}`
      throw new ParameterError(msg)
    }
    // GET DESIRED PAGE
    const idPageList = totalSetSorted.slice(offset, offset + limit)
    let resultSet = await this.model
      .find({ _id: { $in: idPageList } }, resultSetFields)
      .populate(finalPopulate)
      .collation(collationDef)
      .sort(sortField) // sort results
    // console.log('------------ resultSet', resultSet.slice(0, 2))
    const metadata = {
      totalCount: totalSetSorted.length,
      offset: offset,
      limit: limit
    }
    // console.log('------------ metadata', metadata)
    return {
      list: resultSet,
      metadata: metadata
    }
  }
  listForTool (tool) {
    return this.model
      .find({toolConsumer: tool})
      .limit(MAX_RESULTS)
      .then((modelInstances) => {
        const response = {}
        response[pluralize(this.modelName)] = modelInstances
        return response
      })
  }

  delete (id) {
    const filter = this.baseFilter(id)
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
        // console.log('clearConsumer for model', this.modelName, ' consumer', toolConsumerId)
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
        for (let attribute in data) {
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
        const response = {}
        response[this.modelName] = modelInstance
        return response
      })
  }

  findOne (query, fields) {
    query = query || {}
    return this.model.findOne(query)
      .select(fields)
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

    router.get('/paginate', (req, res) => {
      // const { toolConsumerId, offset, limit, sortKey, sortDirection } = req.query
      // console.log('req.query', req.query)
      this
        .paginate (req.query)
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
