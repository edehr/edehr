import {ok, fail} from '../common/utils'
import BaseController from '../common/base'
import Visit from './visit'
import ActivityData from '../activity-data/activity-data'
import Role from '../roles/roles'
import mongoose from 'mongoose'
import { ParameterError, SystemError } from '../common/errors'
import { ObjectId as ObjectID } from 'mongodb'
import { logError } from '../../helpers/log-error'
import ehrValidations from '../../ehr-definitions/ehr-validations'
import User from '../user/user'

const debug = require('debug')('server')
function debugvc (msg) {
  // if (true)
  //   debug('VisitController: ' + msg)
}

// Define a helper function for sending error responses
const sendErrorResponse = (res, statusCode, message) => {
  return res.status(statusCode).json({ message })
}

const fillMissingMonths = (results, year, month) => {
  const currentMonth = month // Use today's month
  const months = Array.from({ length: 12 }, (_, index) => ({
    month: (currentMonth - index + 12) % 12 || 12, // Convert negative months to their positive counterparts
    year: currentMonth - index <= 0 ? year - 1 : year,
    count: 0, // Initialize count to 0 for missing months
  }))

  const mergedResults = months.map(({ month, year }) => {
    const match = results.find((result) => result.month === month && result.year === year)
    return match || { month, year, count: 0 } // Use actual count if available, otherwise fill with 0
  })

  return mergedResults.reverse() // Reverse to get the months in ascending order
}

export default class VisitController extends BaseController {
  constructor () {
    super(Visit)
  }
  setSharedControllers (cc) {
    this.authUtil = cc.authUtil
  }

  findUserVisitList (userId) {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      throw new SystemError('Invalid user id used to retrieve visit records')
    }
    let filter = {user: new ObjectID(userId)}
    return this.model.find(filter)
      .populate('activity')
      .populate('activityData')
      .populate('user', 'givenName familyName fullName')
  }

  findVisitSignOn (visitId) {
    return this.model.find({_id: new ObjectID(visitId)}, { simulationSignOn: 1 })
  }
  findVisit (id) {
    return this.baseFindOneQuery(id)
      .populate('activity')
      .populate('toolConsumer', {
        oauth_consumer_key: 1,
        tool_consumer_instance_name: 1,
        tool_consumer_instance_description: 1,
        tool_consumer_info_product_family_code: 1,
        tool_consumer_info_version: 1
      })
      .populate('user')
  }

  async getSimDateTime (visitId) {
    let visit = await this.findOneById(visitId)
    if (visit) {
      return visit.simulationDateTime
    } else {
      const msg = 'Attempt to get simulation date and time on visit record that does not exist. This is a severe coding error'
      logError(msg)
      throw new ParameterError(msg)
    }
  }
  async setSimDateTime (visitId, dateStr, timeStr) {
    let visit = await this.findOneById(visitId)
    if (visit) {
      visit.simulationDateTime = { cDate: dateStr, cTime: timeStr }
      return visit.save()
    } else {
      const msg = 'Attempt to set simulation date and time on visit record that does not exist. This is a severe coding error'
      logError(msg)
      throw new ParameterError(msg)
    }
  }

  /**
   * Called from LTI controller
   * @param user
   * @param toolConsumer
   * @param activityId
   * @param ltiRole - LMS role: student, instructor, etc
   * @param ltiReturnUrl - if LMS provides a return URL
   * @return {*}
   */
  updateCreateVisit (user, toolConsumer, activityId, ltiRole, ltiReturnUrl, instructorAsStudent = false) {
    let role = new Role(ltiRole)
    let filter = {
      $and: [
        {user: user._id},
        {role: role.asText()},
        {activity: activityId}
      ]
    }
    debugvc('Update Create Visit ' + JSON.stringify(filter, null, 2))
    let theVisit
    return Visit.findOne(filter)
      .then((visit) => {
        if (visit) {
          theVisit = visit
          debugvc('Update previous visit')
          visit.lastVisitDate = Date.now()
          // update the return URL for this visit in case it has changed
          visit.returnUrl = ltiReturnUrl
          return visit.save()
        } else {
          debugvc('Create a new visit record')
          let data = {
            toolConsumer: toolConsumer._id,
            consumerKey: toolConsumer.oauth_consumer_key,
            user: user._id,
            userName: user.fullName,
            activity: activityId,
            role: role.asText(),
            isStudent: role.isStudent,
            isInstructor: role.isInstructor,
            instructorAsStudent: instructorAsStudent,
            returnUrl: ltiReturnUrl
          }
          return Visit.create(data)
            .then((visit) => {
              // save the reference to the return value
              debugvc('New visit record  ' + visit._id)
              theVisit = visit
              // create and add the activity data to the visit
              debugvc('Create activity data for the visit')
              return ActivityData.create({
                toolConsumer: toolConsumer._id,
                visit: visit._id
              })
            })
            .then((activityData) => {
              theVisit.activityData = activityData
              return theVisit.save()
            })
        }
      })
      .then(() => {
        debugvc('UpdateCreateVisit returns the visit record')
        return theVisit
      })
  }

  async visitAsStudent (instructorTokenData, activityId) {
    debug('visitAsStudent begin for activityId', activityId)
    const visitId = instructorTokenData.visitId
    const visit = await this.findVisit(visitId)
    const toolConsumer = visit.toolConsumer
    const returnUrl = visit.returnUrl
    const user = visit.user
    // debug('visitAsStudent user record', user)
    const instructorAsStudent = true
    const asStudentVisit = await this.updateCreateVisit(user, toolConsumer, activityId, 'student', returnUrl, instructorAsStudent)
    // debug('visitAsStudent data', asStudentVisit)
    const instructorAsStudentPayload = Object.assign({}, instructorTokenData)
    instructorAsStudentPayload.isStudent = true
    instructorAsStudentPayload.instructorAsStudent = true
    instructorAsStudentPayload.isInstructor = false
    instructorAsStudentPayload.visitId = asStudentVisit.id
    // debug('visit as student new token data', JSON.stringify(instructorAsStudentPayload))
    debug('visitAsStudent done')
    return instructorAsStudentPayload
  }

  async visitSignOn (visitId, name, profession) {
    let signOn = { personaName: name, personaProfession: profession }
    let visitList = await Visit.find({_id: new ObjectID(visitId)})
    if (visitList && visitList.length > 0) {
      let visit = visitList[0]
      let userId = visit.user
      let userList = await User.find({ _id: new ObjectID(userId) })
      if (userList && userList.length > 0) {
        let user = userList[0]
        visit.simulationSignOn = signOn
        await user.save()
        return await visit.save()

      } else {
        const msg = 'Attempt to do simulation signon for a visit record that is not attached to a user record. This is a severe coding error'
        logError(msg)
        throw new ParameterError(msg)
      }
    } else {
      const msg = 'Attempt to do simulation signon on visit record that does not exist. This is a severe coding error'
      logError(msg)
      throw new ParameterError(msg)
    }
  }

  async visitSignOut (visitId) {
    let visitList = await Visit.find({_id: new ObjectID(visitId)})
    if (visitList && visitList.length > 0) {
      let visit = visitList[0]
      visit.simulationSignOn = undefined
      return await visit.save()
    } else {
      const msg = 'Attempt to do simulation signoout on visit record that does not exist. This is a severe coding error'
      logError(msg)
      throw new ParameterError(msg)
    }
  }

  route () {
    const router = super.route()
    router.get('/user/:key', (req, res) => {
      this
        .findUserVisitList(req.params.key)
        .then(ok(res))
        .then(null, fail(req, res))
    })

    router.get('/sim-date-time/:visitId', (req, res) => {
      if (!req.params.visitId) {
        const msg = 'To get the simulation sign on requires the visit id.'
        logError(msg)
        return res.status(400).send(msg)
      }
      const visitId = req.params.visitId
      if (!mongoose.Types.ObjectId.isValid(visitId)) {
        const msg = 'Invalid visit id used to retrieve visit sign date time'
        logError(msg)
        return res.status(400).send(msg)
      }
      this
        .getSimDateTime(visitId)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.post('/sim-date-time', (req, res) => {
      console.log('sim-date-time body', req.body)
      if (!req.body || !req.body.visitId) {
        const msg = 'Simulation set date time requires visit id in request body.'
        logError(msg)
        return res.status(400).send(msg)
      }
      let { cDate, cTime, visitId} = req.body
      cDate = cDate === 0 ? '0' : cDate
      let invalidMsg = ehrValidations.visitDay('visitDate', cDate)
      if (invalidMsg) {
        const msg = `Simulation set-date-time requires date value. Got "${cDate}". Err ${invalidMsg}.`
        logError(msg)
        return res.status(400).send(msg)
      }
      invalidMsg = ehrValidations.time24(cTime)
      if (invalidMsg) {
        const msg = `Simulation set-date-time requires time value. Got "${cTime}". Err ${invalidMsg}.`
        logError(msg)
        return res.status(400).send(msg)
      }
      this.setSimDateTime(visitId, cDate, cTime)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.get('/sim-sign-on/:visitId', (req, res) => {
      if (!req.params.visitId) {
        const msg = 'To get the simulation sign on requires the visit id.'
        logError(msg)
        return res.status(400).send(msg)
      }
      const visitId = req.params.visitId
      if (!mongoose.Types.ObjectId.isValid(visitId)) {
        const msg = 'Invalid visit id used to retrieve visit sign on'
        logError(msg)
        return res.status(400).send(msg)
      }
      this
        .findUserVisitList(visitId)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.post('/sim-sign-on', (req, res) => {
      if (!req.body || !req.body.visitId) {
        const msg = 'Simulation sign on requires new visit id in request body.'
        logError(msg)
        return res.status(400).send(msg)
      }
      if (!req.body.personaName || !req.body.personaProfession) {
        const msg = 'Simulation sign on requires persona name and persona profession.'
        logError(msg)
        return res.status(400).send(msg)
      }
      const { personaName, personaProfession, visitId} = req.body
      this.visitSignOn(visitId, personaName, personaProfession)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.post('/sim-sign-out', (req, res) => {
      if (!req.body || !req.body.visitId) {
        const msg = 'Simulation sign on requires new visit id in request body.'
        logError(msg)
        return res.status(400).send(msg)
      }
      this.visitSignOut(req.body.visitId)
        .then(ok(res))
        .then(null, fail(req, res))
    })

    router.post('/restoreAsInstructor', async (req, res, next) =>  {
      const authHeader = req.headers.authorization
      return await this.authUtil.getTokenAndProcessChange(authHeader, res, (tokenData) => {
        // console.log('Current token contents', payload)
        return tokenData.instructorToken
      })
    })
    router.post('/visitAsStudent', async (req, res, next) =>  {
      // instructor user is working as a student user
      if (!req.body || !req.body.activityId) {
        logError('Visit as student requires activity id in body')
        return res.status(400).send('Visit as student requires activity id in body')
      }
      const activityId = req.body.activityId
      const authHeader = req.headers.authorization
      return await this.authUtil.getTokenAndProcessChange(authHeader, res, async (tokenData) => {
        // debug('visitAsStudent callback start with activityId', activityId)
        const instructorAsStudentPayload = await this.visitAsStudent(tokenData, activityId)
        // place previous token inside the new token data. Will use this to restore role back to instructor.
        instructorAsStudentPayload.instructorToken = this.authUtil.extractTokenFromAuthHeader(authHeader)
        return this.authUtil.createToken(instructorAsStudentPayload /*no expires, payload already has expires*/)
      })
    })
    router.post('/change-visit', async (req, res, next) =>  {
      if (!req.body || !req.body.visitId) {
        const msg = 'Change visit requires new visit id in request body.'
        logError(msg)
        return res.status(400).send(msg)
      }
      const authHeader = req.headers.authorization
      const visitId = req.body.visitId
      return await this.authUtil.getTokenAndProcessChange(authHeader, res, async (tokenData) => {
        debug('change-visit to visitId', visitId)
        tokenData.visitId = visitId
        if (!tokenData.history) {
          tokenData.history = []
        }
        tokenData.history.push( { v: visitId, t: Date.now() })
        return this.authUtil.createToken(tokenData /*no expires, payload already has expires*/)
      })
    })

    router.get('/active-student-count', async (req, res) => {
      try {
        const pipeline = [
          { $match: { isStudent: true } },
          {
            $group: {
              _id: {
                month: { $month: '$createDate' },
                year: { $year: '$createDate' },
              },
              users: { $addToSet: '$user' },
            },
          },
          {
            $project: {
              _id: 0,
              month: '$_id.month',
              year: '$_id.year',
              count: { $size: '$users' },
            },
          },
        ]
        const today = new Date()
        const yearInt = today.getFullYear()
        const monthInt = today.getMonth() + 1 // Months are 0-indexed, so add 1
        let aggregateResult = await Visit.aggregate(pipeline)
        aggregateResult = [...aggregateResult]
        aggregateResult = aggregateResult.filter((r) => r.year === yearInt)
        // Fill in missing months for the last 12 months
        const last12Months = fillMissingMonths(aggregateResult, yearInt, monthInt)
        // console.log('last12Months', last12Months)
        res.json(last12Months)
      } catch (err) {
        console.error(err)
        sendErrorResponse(res, 500, 'Server Error')
      }
    })
    return router
  }

}
