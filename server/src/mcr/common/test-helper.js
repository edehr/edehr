import supertest from 'supertest'
import Consumer from '../consumer/consumer'
import ConsumerController from '../consumer/consumer-controller'
import Assignment from '../assignment/assignment'
import User from '../user/user'
import Activity from '../activity/activity'
import Role from '../roles/roles'
const ObjectID = require('mongodb').ObjectID
const { ltiVersions, LTI_BASIC } = require('../lti/lti-defs')
import { getCreateAdminPassword } from '../../helpers/admin'
import AuthController from '../auth/auth-controller'

const authController = new AuthController({ authTokenSecret: 'defaultTokenSecretForJWT' })


const consumerController = new ConsumerController()

process.on('unhandledRejection', function (error, promise) {
  console.error('UNHANDLED REJECTION', error.stack)
})

process.on('uncaughtException', function (error) {
  console.error('UNCAUGHT EXCEPTION', error, error.stack)
})

let DatabaseName = 'unittest'
let DefaultUserId = '51234'
let Default = {
  oauth_consumer_key: 'aKey',
  oauth_consumer_secret: 'aSecret',
  custom_assignment: '59',
  tool_consumer_instance_name: 'unit testing consumer',
  launch_presentation_return_url: 'http://some.place.org',
  seedData: {foo:'bar'}
}

export default class Helper {
  constructor () {
    this.clear = true
  }
  setClear (bool) {
    this.clear = bool
  }

  before (done, mongoose) {
    this.beforeDropDatabase(mongoose)
      .then( () => {
        done()
      })
  }

  beforeDropDatabase (mongoose) {
    mongoose.set('useCreateIndex', true)
    mongoose.connect(
      'mongodb://localhost:27018/unittest',
      { useNewUrlParser: true }
    )
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error'))
    // console.log('Begin connection to ' + DatabaseName)
    return db.once('open', function () {
      // console.log('We are connected to test database!')
      mongoose.connection.db.dropDatabase(function (err) {
        // console.log('dropped '+DatabaseName+' dropDatabase')
      })
    })
  }
  afterTests (done, mongoose, collection) {
    function close () {
      mongoose.connection.close(function () {
        // console.log('Close test database!');
        done()
      })
    }
    if (this.clear) {
      // console.log(`drop collection ${collection}!`);
      mongoose.connection.db.dropCollection(collection, function (err) {
        // console.log(`dropped collection ${collection}!`);
        close()
      })
    } else {
      close()
    }
  }

  afterDropDatabase (done, mongoose) {
    function close () {
      mongoose.connection.close(function () {
        // console.log('Close test database!');
        done()
      })
    }
    if (this.clear) {
      // console.log(`drop collection ${collection}!`);
      mongoose.connection.db.dropDatabase(function (err) {
        console.log('dropped dropDatabase')
        close()
      })
    } else {
      close()
    }
  }

  static sampleActivity (consumer, assignment) {
    return {
      toolConsumer: consumer._id,
      resource_link_id: '346',
      context_id: 'context id',
      context_label: 'test context label',
      context_title: 'title',
      context_type: 'context type',
      resource_link_title: 'resource link title',
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


  static sampleAssignmentSpec (seedDataId, externalId, consumer) {
    // if empty use something that works and ObjectID
    let consumerId = consumer ? consumer._id : new ObjectID('56955ca46063c5600627f393')
    seedDataId = seedDataId || '56955ca46063c5600627f393'
    if(typeof  seedDataId === 'string') {
      seedDataId = new ObjectID(seedDataId)
    }
    return {
      toolConsumer: consumerId,
      externalId: externalId || '59',
      name: 'test assignment',
      description: 'an assignment',
      ehrRoutePath: '/ehr/path',
      ehrRouteName: 'pathName',
      seedDataId: seedDataId
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
      tool_consumer_instance_guid: 'Unique id'
    }
  }

  static sampleValidLtiData (oauth_consumer_key, oauth_consumer_secret) {
    return {
      resource_link_id: '1234',
      user_id: DefaultUserId,
      lis_person_name_given: 'Fred',
      lis_person_name_family: 'Flintstones',
      lis_person_name_full: 'Fred Flintstone',
      lis_person_contact_email_primary: 'fred@thecaves.ca',
      lti_version: ltiVersions()[0],
      lti_message_type: LTI_BASIC,
      roles: 'student',
      oauth_consumer_key: oauth_consumer_key || Default.oauth_consumer_key,
      oauth_consumer_secret: oauth_consumer_secret ||  Default.oauth_consumer_secret,
      context_id: 'some context id',
      custom_assignment: Default.custom_assignment,
      tool_consumer_instance_name: Default.tool_consumer_instance_name,
      launch_presentation_return_url: Default.launch_presentation_return_url
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
      isStudent: theRole.isStudent,
      isInstructor: theRole.isInstructor,
      isDeveloper: theRole.isDeveloper,
      returnUrl: theLTI.launch_presentation_return_url
    }
    return data
  }

  static createConsumer  (oauth_consumer_key, oauth_consumer_secret) {
    return consumerController.createWithSeed(Helper.sampleConsumerSpec(oauth_consumer_key, oauth_consumer_secret))
  }

  static createUser (consumer, user_id) {
    should.exist(consumer)
    const model = new User(Helper.sampleUserSpec(consumer, user_id))
    return model.save()
  }


  static createAssignment (externalId, seedId) {
    externalId = externalId || '59'
    seedId = seedId || '56955ca46063c5600627f393'
    const model = new Assignment(Helper.sampleAssignmentSpec(seedId,externalId))
    return model.save()
  }


  static createActivity (consumer, assignment) {
    const model = new Activity(Helper.sampleActivity(consumer, assignment))
    return model.save()
  }



  static getUrlAuth (app, url, adminToken) {
    return supertest(app)
      .post(url)
      .set({ Authorization: 'Bearer ' + adminToken })
  }

  static adminLogin (app, url, adminPass, token) {
    console.log('adminToken >> ', `Bearer ${token}`)
    return supertest(app)
      .post(url)
      .send({ adminPass })
      .set({ authorization: `Bearer ${token}`, 'Content-Type': 'application/json', Accept : 'application/json' })
  }


  static postUrlAuth (app, url, adminToken, theData) {
    return supertest(app)
      .post(url)
      .send(theData)
      .set({ Authorization: 'Bearer ' + adminToken })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
  }

  static consoleRes (res) {
    console.log('res.headers', res.headers)
    console.log('res.status', res.status)
    console.log('res.text', res.text)
    console.log('res.body', res.body)
  }

  static generateToken (visitId, isAdmin = false) {
    if (isAdmin) {
      const adminToken = getCreateAdminPassword()
      const adminPayload = Object.assign({}, { visitId }, { adminPassword : adminToken})
      return authController.createToken(adminPayload)
    } else {
      return authController.createToken({ visitId })
    }
    
  }

}
