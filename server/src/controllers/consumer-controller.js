import BaseController from './base'
import Consumer from '../models/consumer'
const debug = require('debug')('server')

export default class ConsumerController extends BaseController {
  constructor () {
    super(Consumer, '_id')
  }

  initializeApp (KEY) {
    return new Promise(function (resolve /* reject */) {
      ConsumerController.findOneConsumerByKey(KEY)
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

  static findOneConsumerByKey (key) {
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
