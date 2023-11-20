import moment from 'moment'
import BaseController from '../common/base'
import Assignment from '../assignment/assignment'
import SeedData from './seed-data'
import { Text } from '../../config/text'
import { NotAllowedError, ParameterError } from '../common/errors'
import { fail, ok } from '../common/utils'
import { logError } from '../../helpers/log-error'
import EhrDataModel from '../../ehr-definitions/EhrDataModel'
import { EHR_EVENT_BUS, EHR_SEED_EVENT } from '../../server/trace-ehr'
import { decoupleObject } from '../../ehr-definitions/common-utils'
import mongoose from 'mongoose'
import { ObjectId } from 'mongodb'

const debug = require('debug')('server')

export default class SeedDataController extends BaseController {
  constructor () {
    super(SeedData)
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
    // debug('SeedData. Create seed with', JSON.stringify(data))
    // put the data into an EhrDataModel to get the data transformed to the latest version, if needed
    const ehrDataModel = new EhrDataModel(data.ehrData)
    data.ehrData = ehrDataModel.ehrData
    return super.create(data)
  }

  fetchSeedSelectionList (tool, appType, searchTerm) {
    let query = { isDefault: false, toolConsumer: new ObjectId(tool)}
    if (appType) {
      query.appType = appType
    }
    if (searchTerm) {
      query['$or'] = [
        { name: { $regex: searchTerm, $options : 'i' } },
        { description: { $regex: searchTerm, $options : 'i' } }
      ]
    }
    return this.model
      .find(query, {name: 1, description: 1})
      .sort({name:1})
      .then((modelInstances) => {
        return {
          seedList: modelInstances
        }
      })
  }

  async searchForPatients (toolConsumerId, qname, qmrn, qappType) {
    if (!mongoose.Types.ObjectId.isValid(toolConsumerId)) {
      throw new ParameterError(Text.INVALID_CONSUMER_ID(toolConsumerId))
    }
    if (!(qname || qmrn)) {
      throw new ParameterError(Text.INVALID_PATIENT_SEARCH)
    }
    let andParts = []
    andParts.push({ toolConsumer: new ObjectId(toolConsumerId)})
    // Search both the name, description and the kedata family name
    if (qname) {
      // search in name, description and keydata family name.
      let namePart = { $or : [
        { name: { $regex: qname, $options: 'i' } },
        { description: { $regex: qname, $options: 'i' } },
        { 'keyData.familyName': { $regex: qname, $options: 'i' } }
      ]}
      andParts.push(namePart)
    }
    if (qmrn) {
      let mrnPart = {mrn:  { $regex: qmrn, $options : 'i' }}
      andParts.push(mrnPart)
    }
    if (qappType) {
      let appTypePart = {appType: { $eq: qappType }}
      andParts.push(appTypePart)
    }
    let query = { $and: andParts}
    const patientList = await this.model.find(query)
    console.log('patient search query', JSON.stringify(query))
    console.log('search results', patientList.length)
    return { patientList: patientList }
  }

  async collectAllTags (toolConsumerId) {
    // use set to get unique tags
    let tagSet = new Set()
    if (!mongoose.Types.ObjectId.isValid(toolConsumerId)) {
      throw new ParameterError(Text.INVALID_CONSUMER_ID(toolConsumerId))
    }
    // collect all the seeds with tagLists
    const seedList = await this.model.find({ toolConsumer: toolConsumerId, tagList: { $ne: null} }, { tagList: 1 })
    seedList.forEach(seed => {
      let tagList = seed.tagList
      if (tagList.length > 0) {
        tagList.forEach(tag => {
          tagSet.add(tag)
        })
      }
    })
    // convert set to array and then sort tags
    return { tagList: Array.from(tagSet).sort() }
  }

  paginateInitialFieldSet () {
    return { _id: 1, name:1, appType: 1 }
  }
  paginateInitialFilter (resultSet, options) {
    if(options.appTypes) {
      return resultSet.filter(item => options.appTypes.includes(item.appType))
    }
    return resultSet
  }
  paginateQuery (options) {
    let query = super.paginateQuery(options)
    query.isDefault = false
    if (options.tagList) {
      const tagList = options.tagList.split(',')
      query.tagList = { $in: tagList }
    }
    if (options.searchTerm) {
      let searchTerm = options.searchTerm
      query['$or'] = [
        { name: { $regex: searchTerm, $options : 'i' } },
        { description: { $regex: searchTerm, $options : 'i' } }
      ]
      // console.log(' seed data paginate search query ', searchTerm, JSON.stringify(query))
    }
    return query
  }
  paginateResultFields () {
    return {
      appType: 1,
      contributors: 1,
      name: 1,
      description: 1,
      createDate: 1,
      lastUpdateDate: 1,
      mrn: 1,
      tagList: 1,
      ehrData: 1, // need ehrData to compute the seed stats
      version: 1,
      draftRows: 1
    }
  }
  paginateFinalPopulate () {
    return 'assignmentCount'
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
    if (!id) {
      console.error('updateSeedEhrProperty throw no id', id )
      throw new Error(Text.INVALID_BASE_ID(id,'seed data'))
    }
    let propertyName = payload.propertyName // pageKey
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
    if (!id) {
      console.error('updateAndSaveSeedEhrData throw no id', id )
      throw new Error(Text.INVALID_BASE_ID(id,'seed data'))
    }
    const model = await this.baseFindOneQuery(id)
    // const previous = decoupleObject(model.seedData)
    const doc = await this._saveSeedEhrData(model, ehrData)
    const payload = {
      toolConsumer: doc.toolConsumer,
      sourceId: 'system',
      userId: 'system',
      objId: id,
      action: 'update',
      // previous: previous,
      updated: doc.ehrData
    }
    EHR_EVENT_BUS.emit(EHR_SEED_EVENT, payload)
    return doc
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

    router.get('/patientSearch', (req, res) => {
      const { toolConsumerId } = req.authPayload
      let mrn = req.query.mrn
      let name = req.query.name
      let appType = req.query.appType
      let mx = mrn ? mrn.length : 0
      mx = Math.max(mx, name ? name.length : 0)
      mx = Math.max(mx, appType ? appType.length : 0)
      if (mx > 100) {
        return res.status(400).send('Search parameters must be less than 100 characters in length')
      }
      this.searchForPatients(toolConsumerId, name, mrn, appType)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.get('/allTags/:toolConsumerId', (req, res) => {
      let toolConsumerId = req.params.toolConsumerId
      this.collectAllTags(toolConsumerId)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.get('/seedSelectionList/:tool', (req, res) => {
      this
        .fetchSeedSelectionList(req.params.tool, req.query.appType, req.query.searchTerm)
        .then(ok(res))
        .then(null, fail(req, res))
    })

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
        .then(null, fail(req, res))
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
        .then(null, fail(req, res))
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
        .catch(fail(req, res))
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
        .then(null, fail(req, res))
    })
    return router
  }
}
