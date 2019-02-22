import Consumer from '../models/consumer'
import Assignment from '../models/assignment'
import User from '../models/user'
import Activity from '../models/activity'
import Role from '../controllers/roles'
const ObjectID = require('mongodb').ObjectID
const { ltiVersions, LTI_BASIC } = require('../utils/lti')
import { DEFAULT_ASSIGNMENT_EXTERNAL_ID } from '../controllers/assignment-controller'

process.on('unhandledRejection', function(error, promise) {
  console.error('UNHANDLED REJECTION', error.stack)
})

process.on('uncaughtException', function(error) {
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
  constructor() {
    this.clear = true
  }
  setClear(bool) {
    this.clear = bool
  }

  before(done, mongoose) {
    this.beforeDropDatabase(mongoose)
    .then( () => {
      done()
    })
  }

  beforeDropDatabase(mongoose) {
    mongoose.set('useCreateIndex', true)
    mongoose.connect(
      'mongodb://localhost:27018/unittest',
      { useNewUrlParser: true }
    )
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error'))
    console.log('Begin connection to ' + DatabaseName);
    return db.once('open', function() {
      console.log('We are connected to test database!');
      mongoose.connection.db.dropDatabase(function(err) {
        console.log('dropped '+DatabaseName+' dropDatabase')
      })
    })
  }
  afterTests(done, mongoose, collection) {
    function close() {
      mongoose.connection.close(function() {
        // console.log('Close test database!');
        done()
      })
    }
    if (this.clear) {
      // console.log(`drop collection ${collection}!`);
      mongoose.connection.db.dropCollection(collection, function(err) {
        // console.log(`dropped collection ${collection}!`);
        close()
      })
    } else {
      close()
    }
  }

  afterDropDatabase(done, mongoose) {
    function close() {
      mongoose.connection.close(function() {
        // console.log('Close test database!');
        done()
      })
    }
    if (this.clear) {
      // console.log(`drop collection ${collection}!`);
      mongoose.connection.db.dropDatabase(function(err) {
        console.log('dropped dropDatabase')
        close()
      })
    } else {
      close()
    }
  }

  static sampleActivity(consumer, assignment) {
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


  static sampleSeedDataSpec() {
    return {
      name: 'test seed data object',
      description: 'an object with seed data',
      ehrData: Default.seedData
    }
  }

  static sampleAssignmentSpec(seedDataId, externalId) {
    // if empty use something that works and ObjectID
    seedDataId = seedDataId || '56955ca46063c5600627f393'
    if(typeof  seedDataId === 'string') {
      seedDataId = new ObjectID(seedDataId)
    }
    return {
      externalId: externalId || '59',
      name: 'test assignment',
      description: 'an assignment',
      ehrRoutePath: '/ehr/path',
      ehrRouteName: 'pathName',
      seedDataId: seedDataId
    }
  }

  static sampleUserSpec(consumer, user_id) {
    let consumerId = consumer ? consumer._id : new ObjectID('56955ca46063c5600627f393')
    let uId = user_id || DefaultUserId
    return {
      toolConsumer: consumerId,
      user_id: uId
    }
  }

  static sampleConsumerSpec() {
    return {
      lti_version: ltiVersions()[0],
      oauth_consumer_key: Default.oauth_consumer_key,
      oauth_consumer_secret: Default.oauth_consumer_secret,
      tool_consumer_instance_name: Default.tool_consumer_instance_name,
      tool_consumer_info_product_family_code: 'Test',
      tool_consumer_info_version: '0.0',
      tool_consumer_instance_description: 'For unit testing',
      tool_consumer_instance_guid: 'Unique id'
    }
  }

  static sampleValidLtiData() {
    let ltiData = {
      resource_link_id: '1234',
      user_id: DefaultUserId,
      lti_version: ltiVersions()[0],
      lti_message_type: LTI_BASIC,
      roles: 'student',
      oauth_consumer_key: Default.oauth_consumer_key,
      oauth_consumer_secret: Default.oauth_consumer_secret,
      context_id: 'some context id',
      custom_assignment: Default.custom_assignment,
      tool_consumer_instance_name: Default.tool_consumer_instance_name,
      launch_presentation_return_url: Default.launch_presentation_return_url
    }
    return ltiData
  }

  static sampleVisit(consumer, user, activity, assignment, role, ltiData) {
    let theRole = role ? role : new Role('Student')
    let theLTI = ltiData ? ltiData : {
      launch_presentation_return_url: Default.launch_presentation_return_url
    }

    let data = {
      toolConsumer: consumer._id,
      user: user._id,
      activity: activity._id,
      assignment: assignment._id,
      isStudent: theRole.isStudent,
      isInstructor: theRole.isInstructor,
      isDeveloper: theRole.isDeveloper,
      returnUrl: theLTI.launch_presentation_return_url
    }
    return data
  }

  static createConsumer() {
    const model = new Consumer(Helper.sampleConsumerSpec())
    return model.save()
  }

  static createUser(consumer, user_id) {
    should.exist(consumer)
    const model = new User(Helper.sampleUserSpec(consumer, user_id))
    return model.save()
  }


  static createAssignment(externalId, seedId) {
    externalId = externalId || '59'
    seedId = seedId || '56955ca46063c5600627f393'
    const model = new Assignment(Helper.sampleAssignmentSpec(seedId,externalId))
    return model.save()
  }

  static createDefaultAssignment() {
    // use any valid id for seed
    let seedId = '56955ca46063c5600627f393'
    let data = Helper.sampleAssignmentSpec(seedId, DEFAULT_ASSIGNMENT_EXTERNAL_ID)
    const model = new Assignment(data)
    return model.save(data)
  }

  static createActivity(consumer, assignment) {
    const model = new Activity(Helper.sampleActivity(consumer, assignment))
    return model.save()
  }
}
