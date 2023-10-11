import { Router } from 'express'
import { fail, ok } from '../common/utils'
import Activity from '../activity/activity'
import ActivityData from '../activity-data/activity-data'
import Assignment from '../assignment/assignment'
import Consumer from '../consumer/consumer'
import SeedData from '../seed/seed-data'
import User from '../user/user'
import Visit from '../visit/visit'
import { Text } from '../../config/text'
import rateLimit from 'express-rate-limit'
import { ParameterError } from '../common/errors'
import { logError} from '../../helpers/log-error'
const debug = require('debug')('server')

const MODELS = [Activity, ActivityData, Assignment, SeedData, User, Visit]
const MODEL_NAMES = ['Activity', 'ActivityData', 'Assignment', 'SeedData', 'User', 'Visit']

const UTIL_MAX_REQUEST_LIMIT = 10
const UTIL_LIMIT_TIME = 1000 * 60 * 15 // minutes
export const utilLimiter = rateLimit({
  windowMs: UTIL_LIMIT_TIME,
  max: UTIL_MAX_REQUEST_LIMIT,
  skipSuccessfulRequests: true,
  message: Text.TOO_MANY_REQUESTS_ERROR
})
debug(`Util Controller rate limiter will prevent ${UTIL_MAX_REQUEST_LIMIT} failed requests in ${UTIL_LIMIT_TIME} ms`)

function utilMiddlewareWrapper (apiToken) {
  return (req, res, next) => {
    if (!apiToken) {
      logError('utilMiddlewareWrapper', Text.SERVER_TOKEN_REQUIRED)
      return res.status(401).send(Text.SERVER_TOKEN_REQUIRED)
    }
    const { authorization } = req.headers
    if (!authorization) {
      logError('utilMiddlewareWrapper', Text.TOKEN_REQUIRED)
      return res.status(401).send(Text.TOKEN_REQUIRED)
    }
    // debug('utilController authorization:', authorization)
    try {
      const asSent = authorization.replace('Bearer ', '')
      if (asSent === apiToken) {
        next()
      } else {
        logError('utilMiddlewareWrapper', Text.NOT_PERMITTED)
        res.status(401).send(Text.NOT_PERMITTED)
      }
    } catch (err) {
      logError('utilMiddlewareWrapper caught ', err.message)
      res.status(401).send(err)
    }
  }
}

const demoIndictors = ['x', 'ehrdemo']
// exclude DEMO consumers
const realConsumers = { tool_consumer_info_version: { $nin: demoIndictors } }
// only DEMO consumers
const demoConsumers = { tool_consumer_info_version: { $in: demoIndictors } }
// filter results
const shortConsumer = {
  oauth_consumer_key: true,
  oauth_consumer_secret: true,
  tool_consumer_info_version: true,
  tool_consumer_instance_description: true,
  tool_consumer_instance_guid: true,
  tool_consumer_instance_name: true
}

function groupBy (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}

function getDateMinusMonths (months) {
  const thresholdDate = new Date()
  thresholdDate.setMonth(thresholdDate.getMonth() - months)
  thresholdDate.setUTCHours(0, 0, 0, 0)
  // debug('utilController thresholdDate ', thresholdDate.toISOString())
  return thresholdDate
}

export default class UtilController {

  /**
   * Support the two api end points that list consumers. Demo or real.
   * See the notes for the end point below for more details.
   *
   * @param realOnly
   * @returns {*}
   */
  listConsumers (realOnly) {
    let filter = realOnly ? realConsumers : demoConsumers
    return Consumer.find(filter, shortConsumer)
  }

  /**
   * Support the two api end points that list seeds. Demo or real.
   * See the notes for the end point below for more details.
   *
   * @param realOnly
   * @returns {*}
   */
  listSeeds (realOnly) {
    let filter = realOnly ? realConsumers : demoConsumers
    return Consumer.find(filter, { _id: true })
      .then((consumers) => {
        return SeedData.find({ toolConsumer: { $in: consumers } })
      })
  }

  async getDocsToBeDeleted (type, typeName, consumerIds) {
    return await type.find({ toolConsumer: { $nin: consumerIds } }, {})// {_id: true})
  }

  async deleteDocs (type, ids) {
    return await type.deleteMany({ _id: { $in: ids } })
  }

  /**
   * Support the api end point that cleans up orphan objects.
   * See the notes for the end point below for more details.

   * @param showDetails
   * @param doDelete
   * @returns {Promise<{cleanUpCount: {}, cleanUpData: {}}>}
   */
  async cleanUpAllOrphanedDocs (showDetails, doDelete) {
    let toKeepConsumers = await Consumer.find({})
    const record = {}
    for (let i = 0; i < MODELS.length; i++) {
      record[MODEL_NAMES[i]] = await this.getDocsToBeDeleted(MODELS[i], MODEL_NAMES[i], toKeepConsumers)
    }
    if (doDelete) {
      for (let i = 0; i < MODELS.length; i++) {
        await this.deleteDocs(MODELS[i], record[MODEL_NAMES[i]])
      }
    }
    const result = {
      cleanUpCount: {},
      cleanUpData: {}
    }
    if (showDetails) {
      result.cleanUpData = record
    }
    for (let i = 0; i < MODELS.length; i++) {
      result.cleanUpCount[MODEL_NAMES[i]] = record[MODEL_NAMES[i]].length
    }
    return result
  }

  /**
   * Support the api end point that removes stale demo consumers.
   * See the notes for the end point below for more details.
   *
   * @param months required
   * @param showDetails
   * @param doDelete
   * @returns {Promise<{deleted: (string), consumerDeleteCount, cleanUpData: (*|undefined)}>}
   */
  async cleanOldDemoConsumers (months, showDetails, doDelete) {
    // debug('cleanOldDemoConsumers months, showDetails, doDelete', months, showDetails, doDelete)
    const mParam = parseInt(months)
    if (!(Number.isInteger(mParam) && mParam > 0 && mParam <= 60)) {
      const err = Text.INVALID_MONTH(months)
      logError('cleanOldDemoConsumers', err)
      throw new ParameterError(err)
    }
    // get all visit records, group by consumer, select records prior to threshold date
    let results = await Visit.find({}, { toolConsumer: true, lastVisitDate: true })
    let groups = groupBy(results, 'toolConsumer')
    // console.log('groups', Object.keys(groups).length)
    const toDeleteConsumerIds = []
    const thresholdDate = getDateMinusMonths(months)
    Object.keys(groups).forEach(key => {
      const group = groups[key]
      const dates = group.map((a) => a.lastVisitDate)
      const mostRecentVisitDate = Math.max(...dates)
      if (mostRecentVisitDate <= thresholdDate) {
        // console.log('mrd', key, mostRecentVisitDate, thresholdDate)
        toDeleteConsumerIds.push(key)
      }
    })
    // debug('utilController toDeleteConsumerIds', toDeleteConsumerIds.length)
    const toDeleteConsumers = await Consumer.find({
      _id: { $in: toDeleteConsumerIds },
      tool_consumer_info_version: { $in: demoIndictors }
    })
    // debug('utilController toDeleteConsumers', toDeleteConsumers.length)
    if (doDelete) {
      await this.deleteDocs(Consumer, toDeleteConsumers)
    }
    return {
      consumerDeleteCount: toDeleteConsumers.length,
      deleted: doDelete ? ( toDeleteConsumers.length ? 'deleted consumers' : 'nothing to delete') : 'dry run nothing deleted',
      cleanUpData: showDetails ? toDeleteConsumers : undefined
    }
  }

  /**
   * Create and return an express router to handle the API calls for this module
   * @param config
   * @returns {Router}
   */
  route (config) {
    /** Create middleware for this router.
     * 1. Limit failed attempts to prevent malicious users from repeat attempts.
     * 2. Validate the api token is correct. This api token is passed into this service
     * from the process environment. Any caller needs to know the exact token to use any of these
     * api end points.
     */
    const middleware = [
      utilLimiter,
      utilMiddlewareWrapper(config.apiToken)
    ]

    // two flags for code clarity
    const REAL_ONLY = true
    const DEMO_ONLY = !REAL_ONLY
    // create the express router to be returned
    const router = new Router()

    /**
     * Clean up all older demo consumers.  Parameters are:
     *
     * months: (required) a number between 1 and 60. Any demo consumer that is older than 'months' will be removed.
     * The algorithm that finds such consumers examines all visits for all demo consumers. If the
     * most recent visit is older than the threshold then the demo consumer can be removed.
     *
     * delete: (optional) If 'true' then api call will delete the consumers. Otherwise the call is a dry run.
     *
     * details: (optional) If 'true' then return value will contain a json dump of all the deleted objects. Use
     * this to save a copy of what was deleted.
     *
     * Sample curl call
     *
     export token=<api token>
     curl -H "Authorization: Bearer ${token}"  "http://localhost:27000/utils/clean/demos/?delete=true&details=true&months=19"

     * This next sample actually deletes the demo consumers (if any) and respons with the data for backup.
     * Can add redirect to file to record the results.
     curl -H "Authorization: Bearer ${token}"  "http://localhost:27000/utils/clean/demos/?delete=true&details=true&months=19"
     */
    router.get('/clean/demos', middleware, (req, res) => {
      const { months } = req.query
      const doDelete = req.query.delete === 'true'
      const showDetails = req.query.details === 'true'
      this
        .cleanOldDemoConsumers(months, showDetails, doDelete)
        .then(ok(res))
        .then(null, fail(req, res))
    })


    /**
     * After consumers have been deleted (by any means) that will leave many other objects orphaned.
     * This api end point cleans up all objects for which there is no longer a consumer.
     *
     * delete: (optional) If 'true' then api call will delete the consumers. Otherwise the call is a dry run.
     *
     * details: (optional) If 'true' then return value will contain a json dump of all the deleted objects. Use
     * this to save a copy of what was deleted.
     *
     * Sample curl
     export token=<api token>
     curl -H "Authorization: Bearer ${token}" "http://localhost:27000/utils/clean/orphans"
     *
     * This call actually deletes the orphans and returns a result with all the json data
     * Can add redirect to file to record the results.
     curl -H "Authorization: Bearer ${token}" "http://localhost:27000/utils/clean/orphans?delete=true&details=true"
     */
    router.get('/clean/orphans', middleware, (req, res) => {
      const showDetails = req.query.details === 'true'
      const doDelete = req.query.delete === 'true'
      this
        .cleanUpAllOrphanedDocs(showDetails, doDelete)
        .then(ok(res))
        .then(null, fail(req, res))
    })

    /**
     * Api end point to get list of all real (non demo) consumers.
     *
     * Sample curl
     export token=<api token>
     curl -H "Content-Type: application/json" -H "Authorization: Bearer ${token}" "http://localhost:27000/utils/consumers"
     */
    router.get('/consumers', middleware, (req, res) => {
      this
        .listConsumers(REAL_ONLY)
        .then(ok(res))
        .then(null, fail(req, res))
    })


    /**
     * Api end point to get list of all seeds for all non-demo consumers.
     *
     * Sample curl
     export token=<api token>
     curl -H "Content-Type: application/json" -H "Authorization: Bearer ${token}" "http://localhost:27000/utils/seeds"
     */
    router.get('/seeds', middleware, (req, res) => {
      this
        .listSeeds(REAL_ONLY)
        .then(ok(res))
        .then(null, fail(req, res))
    })

    /**
     * Api end point to get list of all real non-demo consumers.
     *
     * Sample curl
     export token=<api token>
     curl -H "Content-Type: application/json" -H "Authorization: Bearer ${token}" "http://localhost:27000/utils/consumers"
     */
    router.get('/demo/consumers', middleware, (req, res) => {
      this
        .listConsumers(DEMO_ONLY)
        .then(ok(res))
        .then(null, fail(req, res))
    })

    /**
     * Api end point to get list of all seeds for all demo consumers.
     *
     * Sample curl
     export token=<api token>
     curl -H "Content-Type: application/json" -H "Authorization: Bearer ${token}" "http://localhost:27000/utils/demo/seeds"
     */
    router.get('/demo/seeds', middleware, (req, res) => {
      this
        .listSeeds(DEMO_ONLY)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    return router
  }
}
