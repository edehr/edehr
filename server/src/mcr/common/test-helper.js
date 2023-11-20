// import supertest from 'supertest'
import ConsumerController from '../consumer/consumer-controller'
import User from '../user/user'
import Activity from '../activity/activity'
import Assignment from '../assignment/assignment'
import Visit from '../visit/visit'
import Role from '../roles/roles'
import AuthUtil from './auth-util'
import mongoose from 'mongoose'
import ActivityController from '../activity/activity-controller'
import AssignmentController from '../assignment/assignment-controller'
import FilesController from '../files/files-controller'
import VisitController from '../visit/visit-controller'
import UserController from '../user/user-controller'
import SeedDataController from '../seed/seedData-controller'
import { applicationConfiguration, getDbUri } from '../../config/config'
import CourseController from '../course/course-controller'
import Course from '../course/course'
const configuration = applicationConfiguration('test')
let dburi = getDbUri(configuration)
let dbConfig = configuration.database

const act = new ActivityController()
const courseController = new CourseController()
const as = new AssignmentController(configuration)
const fileC = new FilesController(configuration)
const vc = new VisitController()
const uc = new UserController(configuration)
const sd = new SeedDataController()


const ObjectID = require('mongodb').ObjectId
const { ltiVersions, LTI_BASIC } = require('../lti/lti-defs')

console.log('TH: mongoose.connection.readyState', mongoose.connection.readyState)

const authUtil = new AuthUtil({ authTokenSecret: 'defaultTokenSecretForJWT' })

const consumerController = new ConsumerController()
const lcc = {
  activityController: act,
  assignmentController: as,
  courseController: courseController,
  authUtil,
  filesController: fileC,
  consumerController: consumerController,
  seedController: sd,
  userController: uc,
  visitController: vc
}
consumerController.setSharedControllers(lcc)

// process.on('unhandledRejection', function (error, promise) {
//   console.error('TH: UNHANDLED REJECTION', error.stack)
// })
//
// process.on('uncaughtException', function (error) {
//   console.error('TH: UNCAUGHT EXCEPTION', error, error.stack)
// })

let DefaultUserId = '51234'
let Default = {
  oauth_consumer_key: 'aKey',
  oauth_consumer_secret: 'aSecret',
  custom_assignment: '59',
  tool_consumer_instance_name: 'unit testing consumer',
  launch_presentation_return_url: 'http://some.place.org',
  seedData: {foo:'bar'}
}

// let options = {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true
// }

export default class Helper {
  constructor () {
    this.clear = true
  }
  setClear (bool) {
    this.clear = bool
  }

  /**
   * A version of the helper that uses async await instead of done
   * @param mongoose
   * @returns {Promise<void>}
   */
  async beforeTestDbDropNoDone (mongoose) {
    await mongoose.disconnect()
      .catch(err => {
        console.error('disconnect failed:', err)
        process.exit(1)
      })
    await mongoose.connect(dburi, dbConfig.options)
      .catch(err => {
        console.error('connection failed:', err)
        process.exit(1)
      })
    await mongoose.connection.dropDatabase()
  }

  async beforeTestDbDrop (done, mongoose) {
    // const uri = 'mongodb://localhost:27018/unittest'
    // const uri = 'mongodb://localhost:27017/unittest'
    const dbug = false
    if (dbug) console.log('TH: beforeTestDbDrop: mongoose.connection.readyState', mongoose.connection.readyState)
    return mongoose.disconnect()
      .then( async () => {
        if (dbug) console.log('TH: disconnected', dburi)
        mongoose.connect(dburi, dbConfig.options)
          .then ( async () => {
            if (dbug) console.log('TH: connected', dburi)
            await mongoose.connection.dropDatabase()
            if (dbug) console.log('TH: database dropped', dburi)
            if (dbug) console.log('TH: done', dburi)
            done()
          })
          .catch(err => {
            console.error('connection failed:', err)
            process.exit(1)
          })
      })
      .catch(err => {
        console.error('disconnect failed:', err)
        process.exit(1)
      })
  }

  beforeTestAppAndDbDrop (ehrApp, configuration, mongoose) {
    return mongoose.disconnect()
      .then(() => ehrApp.setup(configuration))
      .then(() => mongoose.connection.dropDatabase() )
  }

  afterTestsCloseDb (mongoose) {
    return mongoose.disconnect()
  }

  static sampleActivity (consumer, course, assignment) {
    if (!course) throw new Error('expecting course in call to sampleActivity')
    return {
      toolConsumer: consumer._id,
      course: course ? course._id: undefined,
      resource_link_id: 'lmsActivityIdId346',
      context_id: 'lmsCourseId',
      context_label: 'test course label',
      context_title: 'course title',
      context_type: 'course type',
      resource_link_title: 'lms activity link title',
      resource_link_description: 'blah blah',
      assignment: assignment
    }
  }

  static sampleActivityData (consumerId, visitId) {
    return {
      toolConsumer: consumerId,
      visit: visitId
    }
  }

  static sampleAssignmentSpec (seedDataId) {
    // if empty use something that works and ObjectID
    seedDataId = seedDataId || '56955ca46063c5600627f393'
    let consumer = new ObjectID('56955ca46063c5600627f393')

    if(typeof  seedDataId === 'string') {
      seedDataId = new ObjectID(seedDataId)
    }
    return {
      toolConsumer: consumer,
      name: 'test assignment',
      description: 'an assignment',
      ehrRoutePath: '/ehr/path',
      ehrRouteName: 'pathName',
      seedDataId: seedDataId
    }
  }
  /**
   * Generates a random ObjectId
   * @return {*}
   */
  static sampleObjectId (asString = false) {
    let suffix = Math.floor(Math.random() * 1000) + 1
    let id = '56955ca46063c5600627f' + ('000' + suffix).slice(-3)
    return asString ? id : new ObjectID(id)
  }

  static sampleSeedDataSpec () {
    return {
      toolConsumer: new ObjectID('56955ca46063c5600627f393'),
      name: 'test seed data object',
      description: 'an object with seed data',
      ehrData: Default.seedData
    }
  }

  static sampleUserSpec (consumer, user_id) {
    let consumerId = consumer ? consumer._id : new ObjectID('56955ca46063c5600627f393')
    let consumerKey = consumer ? consumer.oauth_consumer_key : 'sampleKey'
    let uId = user_id || DefaultUserId
    return {
      toolConsumer: consumerId,
      consumerKey: consumerKey,
      user_id: uId,
      fullName: 'Fred Tester'
    }
  }

  static sampleConsumerSpec (oauth_consumer_key, oauth_consumer_secret) {
    return {
      lti_version: ltiVersions()[0],
      oauth_consumer_key: oauth_consumer_key || Default.oauth_consumer_key,
      oauth_consumer_secret: oauth_consumer_secret ||  Default.oauth_consumer_secret,
      tool_consumer_instance_name: Default.tool_consumer_instance_name,
      tool_consumer_info_product_family_code: 'Test',
      tool_consumer_info_version: '0.0',
      tool_consumer_instance_description: 'For unit testing',
      tool_consumer_instance_guid: 'Unique id',
      is_primary: false,
    }
  }

  static sampleValidLtiData (oauth_consumer_key, oauth_consumer_secret) {
    return {
      resource_link_id: '1234',
      user_id: DefaultUserId,
      lis_person_name_given: 'Fred',
      lis_person_name_family: 'Flintstones',
      lis_person_name_full: 'Fred Flintstone',
      // lis_person_contact_email_primary: 'fred@thecaves.ca',
      lti_version: ltiVersions()[0],
      lti_message_type: LTI_BASIC,
      roles: 'student',
      oauth_consumer_key: oauth_consumer_key || Default.oauth_consumer_key,
      oauth_consumer_secret: oauth_consumer_secret ||  Default.oauth_consumer_secret,
      context_id: 'some context id',
      custom_assignment: Default.custom_assignment,
      tool_consumer_instance_name: Default.tool_consumer_instance_name,
      launch_presentation_return_url: Default.launch_presentation_return_url,
      tool_consumer_info_product_family_code: 'Test',
      tool_consumer_info_version: '0.0',
      tool_consumer_instance_description: 'For unit testing',
      tool_consumer_instance_guid: 'Unique id',

    }
  }

  static sampleVisit (consumer, user, activity, assignment, role, ltiData) {
    let theRole = role ? role : new Role('Student')
    let theLTI = ltiData ? ltiData : {
      launch_presentation_return_url: Default.launch_presentation_return_url
    }

    let data = {
      toolConsumer: consumer._id,
      consumerKey: consumer.oauth_consumer_key,
      user: user._id,
      userName: user.fullName,
      activity: activity._id,
      assignment: assignment._id,
      role: theRole.asText(),
      isStudent: theRole.isStudent,
      isInstructor: theRole.isInstructor,
      returnUrl: theLTI.launch_presentation_return_url
    }
    return data
  }

  static sampleTokenData () {
    const visitId = Helper.sampleObjectId(true)
    const consumerId = Helper.sampleObjectId(true)
    const tokenData = {
      consumerKey: 'testConsumer',
      isInstructor: false,
      isStudent: false,
      toolConsumerId: consumerId,
      visitId: visitId,
      demoData: {}
    }
    return tokenData
  }

  static createConsumerDef  (oauth_consumer_key, oauth_consumer_secret) {
    return Helper.sampleConsumerSpec(oauth_consumer_key, oauth_consumer_secret)
  }
  static createConsumerSeedDef () {
    return {
      toolConsumer: '',
      name: 'Test seed',
      description: 'A seed for unit testing',
      version: '1',
      isDefault: true,
      ehrData: {}
    }
  }
  static createConsumer  (consumerDef, seedDef) {
    return consumerController.createWithSeed(consumerDef, seedDef)
  }
  static async createSampleConsumer () {
    let consumerDef = Helper.createConsumerDef('key1','secret1')
    let seedDef = Helper.createConsumerSeedDef()
    return await Helper.createConsumer(consumerDef, seedDef)
  }
  static getConsumer ( oauth_consumer_key ) {
    return consumerController.findOneConsumerByKey(oauth_consumer_key)
  }


  static createSampleCourseData () {
    return {
      context_id: 'ltiData.context_id',
      context_label: 'ltiData.context_label',
      context_title: 'ltiData.context_title',
      context_type: 'ltiData.context_type',
      custom_title: ''
    }
  }
  static createSampleCourse (consumerId) {
    let data = Helper.createSampleCourseData()
    data.toolConsumer = consumerId
    const model = new Course(data)
    return model.save()
  }

  static createUser (consumer, user_id) {
    should.exist(consumer)
    const model = new User(Helper.sampleUserSpec(consumer, user_id))
    return model.save()
  }
  static createUserFromSpec (userSpec) {
    const model = new User(userSpec)
    return model.save()
  }

  static createVisitFromSpec (visitSpec) {
    const model = new Visit(visitSpec)
    return model.save()
  }

  static createActivity (consumer, course, assignment, resource_link_id = undefined) {
    const data = Helper.sampleActivity(consumer, course, assignment)
    if (resource_link_id) {
      data.resource_link_id = resource_link_id
    }
    const model = new Activity(data)
    return model.save()
  }

  static createAssignment (consumerId, seedDataId) {
    let data = Helper.sampleAssignmentSpec(seedDataId)
    if(consumerId) {
      data.toolConsumer= consumerId
    }
    const model = new Assignment(data)
    return model.save()
  }

  // static getUrlAuth (app, url, adminToken) {
  //   return supertest(app)
  //     .post(url)
  //     .set({ Authorization: 'Bearer ' + adminToken })
  // }

  // static adminLogin (app, url, adminPass, token) {
  //   return supertest(app)
  //     .post(url)
  //     .send({ adminPass })
  //     .set({ authorization: `Bearer ${token}`, 'Content-Type': 'application/json', Accept : 'application/json' })
  // }
  //
  // static postUrlAuth (app, url, token, theData) {
  //   return supertest(app)
  //     .post(url)
  //     .send(theData)
  //     .set({ Authorization: 'Bearer ' + token })
  //     .set('Content-Type', 'application/json')
  //     .set('Accept', 'application/json')
  // }

  static consoleRes (res) {
    console.log('TH: res.headers', res.headers)
    console.log('res.status', res.status)
    console.log('res.text', res.text)
    console.log('res.body', res.body)
  }

  static generateToken (tokenData, isAdmin = false) {
    if (isAdmin) {
      const adminPayload = Object.assign({}, tokenData, { isAdmin : true})
      return authUtil.createToken(adminPayload)
    }
    return authUtil.createToken(tokenData)
  }

  static generateRefreshToken (token) {
    return authUtil.createRefreshToken(token)
  }

}
