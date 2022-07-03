import { ParameterError } from '../common/errors'
import BaseController from '../common/base'
import { Text }  from '../../config/text'
import Consumer from '../consumer/consumer'
import {ok, fail} from '../common/utils'
import { isAdmin } from '../../helpers/middleware'
import { assignment1, assignment2, wound1 } from '../../resources/assignment-defs'
import { ej0SeedDef, ej2SeedDef, wound1SeedDef } from '../../resources/assignment-defs'

const debugCC = false
const debug = require('debug')('server')

export default class ConsumerController extends BaseController {
  constructor () {
    super(Consumer, '_id')
  }

  setSharedControllers (cc) {
    this.comCon = cc
  }

  createToolConsumer (def) {
    if (!def.oauth_consumer_key || !def.oauth_consumer_secret) {
      throw new ParameterError(Text.SYSTEM_REQUIRE_KEY_AND_SECRET)
    }
    const seedDef = {
      toolConsumer: '',
      name: Text.DEFAULT_SEED_NAME,
      description: Text.DEFAULT_SEED_DESCRIPTION,
      version: '1',
      isDefault: true,
      ehrData: {}
    }
    return this.createWithSeed(def, seedDef)
  }

  /**
   * Replace method in base because to remove the actual consumer record
   * @param toolConsumerId
   * @return {*}
   */
  clearConsumer (toolConsumerId) {
    debug('ConsumerController clearConsumer for toolConsumerId ' + toolConsumerId)
    return this.delete(toolConsumerId)
  }

  createWithSeed (data, seedData) {
    let theConsumer
    if (debugCC) debug('ConsumerController create oauth_consumer_key:', data.oauth_consumer_key)
    return this.model
      .create(data)
      .then((toolConsumer) => {
        theConsumer = toolConsumer
        const seedDef = Object.assign({}, seedData, { toolConsumer: theConsumer._id })
        if (debugCC) debug('ConsumerController created tool', theConsumer._id, ' create seed next ', seedDef)
        return this.comCon.seedController.create(seedDef)
      })
      .then( () => {
        return theConsumer
      })
  }

  initializeApp (KEY) {
    const _this = this
    return new Promise(function (resolve /* reject */) {
      _this.findOneConsumerByKey(KEY)
        .then((found) => {
          debug('Initialize consumer and look for default '+ KEY)
          if (found) {
            debug('found default consumer'+ found.tool_consumer_instance_name)
          } else {
            debug('No default found so create one')
          }
          resolve()
        })
    })
  }

  findOneConsumerByKey (key) {
    return Consumer.find({oauth_consumer_key: key})
      .then((found) => {
        if (found && found.length > 0) {
          const consumer = found[0]
          // console.log('Consumer key ', key, 'found consumer', consumer.tool_consumer_instance_name)
          return consumer
        }
        return null
      })
  }

  read (id) {
    let self = this
    return this.baseFindOneQuery(id)
      .select('-oauth_consumer_secret')
      .then((modelInstance) => {
        console.log('read(id)  ', id, 'this.modelName', this.modelName, 'modelInstance', modelInstance, 'populate', self.populate)
        var response = {}
        response[this.modelName] = modelInstance
        return response
      })
  }

  async addLearningObject (seedDef, assignmentDef,  tcId) {
    const seedDefTooled = Object.assign({}, seedDef, { toolConsumer:  tcId })
    const assignmentDefTooled = Object.assign({}, assignmentDef, { toolConsumer:  tcId })
    const theSeed = await  this.comCon.seedController.create(seedDefTooled)
    await this.comCon.assignmentController.createAssignment(assignmentDefTooled, theSeed._id)
  }

  async createToolConsumerWithSeeds (oauth_consumer_key, oauth_consumer_secret) {
    if (!oauth_consumer_key || !oauth_consumer_secret) {
      throw new ParameterError(Text.SYSTEM_REQUIRE_KEY_AND_SECRET)
    }
    const defaultSeed = {
      toolConsumer: '',
      name: Text.DEFAULT_SEED_NAME,
      description: Text.DEFAULT_SEED_DESCRIPTION,
      version: '1',
      isDefault: true,
      ehrData: {}
    }
    const consumerDef = {
      oauth_consumer_key: oauth_consumer_key,
      oauth_consumer_secret: oauth_consumer_secret,
      is_primary: true
    }
    const toolConsumer = await this.model.create(consumerDef)
    const tcId = toolConsumer._id
    defaultSeed.toolConsumer = tcId
    await this.comCon.seedController.create(defaultSeed)
    await this.addLearningObject(ej0SeedDef, assignment1,  tcId)
    await this.addLearningObject(ej2SeedDef, assignment2,  tcId)
    await this.addLearningObject(wound1SeedDef, wound1  ,  tcId)
  }

  route () {
    const adminMiddleware = [
      isAdmin
    ]
    const router = super.route()

    router.post('/create', adminMiddleware, (req, res) => {
      /* Create a new tool consumer with key/secret pair (the key must be unique in the system) */
      if (!req.body) {
        throw new ParameterError(Text.SYSTEM_REQUIRE_REQUEST_BODY)
      }
      const key = req.body.oauth_consumer_key
      const secret = req.body.oauth_consumer_secret
      this.createToolConsumerWithSeeds(key, secret)
        .then(ok(res))
        .then(null, fail(res))
    })

    return router
  }

}
