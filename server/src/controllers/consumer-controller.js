import BaseController from './base'
import { Text }  from '../config/text'
import Consumer from '../models/consumer'
import SeedDataController from './seedData-controller'

const debug = require('debug')('server')
const sd = new SeedDataController()

export default class ConsumerController extends BaseController {
  constructor () {
    super(Consumer, '_id')
  }

  createWithSeed (data) {
    let theConsumer
    return this.model
      .create(data)
      .then((toolConsumer) => {
        theConsumer = toolConsumer
        let seedDef = {
          toolConsumer: toolConsumer._id,
          name: Text.DEFAULT_SEED_NAME(toolConsumer.oauth_consumer_key),
          description: Text.DEFAULT_SEED_DESCRIPTION,
          version: '1',
          isDefault: true,
          ehrData: {}
        }
        return sd.create(seedDef)
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
}
