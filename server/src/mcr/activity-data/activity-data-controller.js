import moment from 'moment'
import { ok, fail } from '../common/utils'
import BaseController from '../common/base'
import ActivityData from './activity-data'

const debug = require('debug')('server')

export default class ActivityDataController extends BaseController {
  constructor () {
    super(ActivityData, '_id')
  }

  /**
   *
   * @param id
   * @param data
       let data = {
        property: 'progressNotes',
        value: activityData.assignmentData.progressNotes || []
   * @return {*}
   * @see updateSeedEhrProperty in seedData-controller
   */
  updateAssignmentData (id, data) {
    const propertyName = data.propertyName
    const value = data.value
    // place date into the ehr data's page element
    value.lastUpdate = moment().format()
    // debug(`ActivityData update ${id} assignmentData[${data.propertyName}] with data:`)
    // debug(JSON.stringify(value))
    return this.baseFindOneQuery(id).then(activityData => {
      if (activityData) {
        if (!activityData.assignmentData) {
          activityData.assignmentData = {}
        }
        // set last update date into the overall activity data record.
        activityData.lastDate = Date.now()
        activityData.assignmentData[propertyName] = value
        // tell the db to see a change on this subfield
        activityData.markModified('assignmentData')
        return activityData.save()
      }
    })
  }

  /**
   *
   * @param id
   * @param data  Expects data.value to contain the scratch pad content
   * @return {*}
   */
  updateScratchData (id, data) {
    debug(`ActivityData update ${id} scratch data [${JSON.stringify(data)}]`)
    const value = data.value
    return this.baseFindOneQuery(id).then(activityData => {
      if (activityData) {
        activityData.lastDate = Date.now()
        activityData.scratchData = value
        activityData.markModified('scratchData')
        return activityData.save()
      }
    })
  }

  /**
   *
   * @param id
   * @param data  Expects data.value to contain the evaluation pad content
   * @return {*}
   */
  updateEvaluationData (id, data) {
    debug(`ActivityData update ${id} evaluationData [${JSON.stringify(data)}]`)
    var value = data.value
    return this.baseFindOneQuery(id).then(activityData => {
      if (activityData) {
        // only set the last date when the student is updating the record
        // activityData.lastDate = Date.now()
        activityData.evaluationData = value
        activityData.markModified('evaluationData')
        return activityData.save()
      }
    })
  }

  helperBoolVal (id, property, value, isStudentAction) {
    return this.baseFindOneQuery(id).then(activityData => {
      if (activityData) {
        if (isStudentAction) {
          activityData.lastDate = Date.now()
        }
        activityData[property] = value
        return activityData.save()
      }
    })
  }

  assignmentSubmitted (id, data) {
    let value = data.value === true
    return this.helperBoolVal(id, 'submitted', value, true)
  }

  assignmentEvaluated (id, data) {
    let value = data.value === true
    return this.helperBoolVal(id, 'evaluated', value, false)
  }

  route () {
    const router = super.route()
    router.put('/submitted/:key/', (req, res) => {
      const id = req.params.key
      const data = req.body
      this.assignmentSubmitted(id, data)
        .then(ok(res))
        .then(null, fail(res))
    })
    router.put('/evaluated/:key/', (req, res) => {
      const id = req.params.key
      const data = req.body
      this.assignmentEvaluated(id, data)
        .then(ok(res))
        .then(null, fail(res))
    })
    router.put('/assignment-data/:key/', (req, res) => {
      const id = req.params.key
      const data = req.body
      this.updateAssignmentData(id, data)
        .then(ok(res))
        .then(null, fail(res))
    })
    router.put('/scratch-data/:key/', (req, res) => {
      const id = req.params.key
      const data = req.body
      this.updateScratchData(id, data)
        .then(ok(res))
        .then(null, fail(res))
    })
    router.put('/evaluation-data/:key', (req, res) => {
      const id = req.params.key
      const data = req.body
      this.updateEvaluationData(id, data)
        .then(ok(res))
        .then(null, fail(res))
    })
    return router
  }
}
