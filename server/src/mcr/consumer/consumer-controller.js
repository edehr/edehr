import { ParameterError } from '../common/errors'
import BaseController from '../common/base'
import { Text }  from '../../config/text'
import Consumer from '../consumer/consumer'
import SeedDataController from '../seed/seedData-controller'
import {ok, fail} from '../common/utils'
import { isAdmin } from '../../helpers/middleware'


const debug = require('debug')('server')
const sd = new SeedDataController()

export default class ConsumerController extends BaseController {
  constructor () {
    super(Consumer, '_id')
  }


  createToolConsumer (def) {
    if (!def.oauth_consumer_key || !def.oauth_consumer_secret) {
      throw new ParameterError(Text.SYSTEM_REQUIRE_KEY_AND_SECRET)
    }
    return this.createWithSeed(def)
  }

  createWithSeed (data) {
    let theConsumer
    return this.model
      .create(data)
      .then((toolConsumer) => {
        theConsumer = toolConsumer
        let seedDef = {
          toolConsumer: toolConsumer._id,
          name: Text.DEFAULT_SEED_NAME,
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
      const def = {
        oauth_consumer_key: req.body.oauth_consumer_key,
        oauth_consumer_secret: req.body.oauth_consumer_secret
      }
      this.createToolConsumer(def)
        .then(ok(res))
        .then(null, fail(res))
    })

    return router
  }

}
