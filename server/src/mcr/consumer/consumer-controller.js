import { NotAllowedError, ParameterError, SystemError } from '../common/errors'
import BaseController from '../common/base'
import { Text }  from '../../config/text'
import Consumer from '../consumer/consumer'
import {ok, fail} from '../common/utils'
import { isAdmin } from '../../helpers/middleware'
import { isAdminRequest } from '../../helpers/admin'
import { activity1, activity2, activity3 } from '../common/assignment-defs'
import Visit from '../visit/visit'
import Activity from '../activity/activity'
import Assignment from '../assignment/assignment'
import SeedData from '../seed/seed-data'
import User from '../user/user'
// const ObjectID = mongoose.Schema.Types.ObjectId
const ObjectID = require('mongodb').ObjectID
const debugCC = false
const debug = require('debug')('server')
import { logError} from '../../helpers/log-error'

export default class ConsumerController extends BaseController {
  constructor () {
    super(Consumer)
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
          debug('Consumer controller. App initialization. Look for consumer '+ KEY)
          if (found) {
            debug('Consumer controller. Found default consumer'+ found.tool_consumer_instance_name)
          } else {
            debug('Consumer controller. No default found so need to create one')
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
    return this.baseFindOneQuery(id)
      .select('-oauth_consumer_secret')
      .then((modelInstance) => {
        // console.log('read(id)  ', id, 'this.modelName', this.modelName, 'modelInstance', modelInstance, 'populate', self.populate)
        var response = {}
        response[this.modelName] = modelInstance
        return response
      })
  }
  async getDetails (id, req) {
    if (!id || id === 'undefined') {
      throw new ParameterError(Text.REQUIRES_CONSUMER_ID)
    }
    const authPayload = req.authPayload
    if (authPayload.toolConsumerId !== id) {
      logError('Attempt to get details about a consumer the user is not authorized to see. User can access', authPayload.toolConsumerId,'. Requested to see', id)
      throw new NotAllowedError(Text.NOT_AUTH_TO_SEE_CONSUMER)
    }
    if (!authPayload.isInstructor) {
      throw new NotAllowedError(Text.MUST_BE_INSTRUCTOR)
    }
    const isAdmin = isAdminRequest(req)
    // use the .lean() option to get a plain object we can add properties to
    let consumer = await this.baseFindOneQuery(id).lean()
    try {
      let consumerId = new ObjectID(consumer._id)
      let visits = await Visit.find({ toolConsumer: consumerId })
      consumer.visitCount = visits.length
      let visitStudents = visits.filter(v => v.isStudent)
      let visitInstructors = visits.filter(v => v.isInstructor)
      consumer.visitStudentCount = visitStudents.length
      consumer.lastStudentVisit = ''
      consumer.lastStudentReturnUrl = ''
      // console.log('visitStudents',JSON.stringify(visitStudents, null ,2))
      if (visitStudents.length > 0) {
        let mostRecent = visitStudents.sort((a, b) => b.lastVisitDate - a.lastVisitDate)[0]
        consumer.lastStudentVisit = mostRecent.lastVisitDate
        consumer.lastStudentReturnUrl = mostRecent.returnUrl
      }
      consumer.visitInstructorCount = visitInstructors.length
      if ( visitInstructors.length > 0) {
        let mostRecent = visitInstructors.sort((a, b) => b.lastVisitDate - a.lastVisitDate)[0]
        consumer.lastInstructorVisit = mostRecent.lastVisitDate
        consumer.lastInstructorReturnUrl = mostRecent.returnUrl
      }
      let activities = await Activity.find({ toolConsumer: consumerId })
      consumer.activityCount = activities.length
      let assignments = await Assignment.find({ toolConsumer: consumerId })
      consumer.assignmentCount = assignments.length
      let seeds = await SeedData.find({ toolConsumer: consumerId })
      consumer.seedCount = seeds.length
      let users = await User.find({ toolConsumer: consumerId }, {fullName: 1})
      consumer.userCount = users.length
      if (isAdmin) {
        users.sort((a, b) => a.fullName.localeCompare(b.fullName))
        consumer.users = users
      }
    } catch( err) {
      logError(err)
      throw new SystemError('Encountered problem getting consumer details. ' + err.message)
    }

    let response = {}
    response[this.modelName] = consumer
    return response
  }

  async addLearningObject (activity,  tcId) {
    const seedDef = activity.seedDef
    const assignmentDef = activity.learningObject
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
    await this.addLearningObject(activity1,  tcId)
    await this.addLearningObject(activity2,  tcId)
    await this.addLearningObject(activity3,  tcId)
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

    router.get('/get/:key/details', (req, res) => {
      this
        .getDetails(req.params.key, req)
        .then(ok(res))
        .then(null, fail(res))
    })
    return router
  }

}
