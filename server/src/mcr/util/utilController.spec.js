import mongoose from 'mongoose'
import UtilController from './util-controller'
import EhrApp from '../../server/app'
import Helper from '../common/test-helper'
import applicationConfiguration from '../../config/config'
import Consumer from '../consumer/consumer'
import SeedData from '../seed/seed-data'
import Visit from '../visit/visit'

const debug = require('debug')('server')
const logError = require('debug')('error')
const should = require('should')
const request = require('supertest')
const configuration = applicationConfiguration('test')
const helper = new Helper()
const ehrApp = new EhrApp()
const BASE = '/api/utils'
const apiToken = configuration.apiToken

function createOneConsumer(consumerSpec) {
  let model = new Consumer(consumerSpec)
  return model.save()
}

function createOneSeed(spec) {
  let model = new SeedData(spec)
  return model.save()
}

async function createObjectsFromConsumerSpec(consumerSpec, lastVisitDate) {
  let realConsumer = await createOneConsumer(consumerSpec)
  let seedSpec = Helper.sampleSeedDataSpec()
  seedSpec.toolConsumer = realConsumer._id
  let seed = await createOneSeed(seedSpec)
  let assignment = await Helper.createAssignment('testassignment', seed._id, realConsumer)
  let user = await Helper.createUser(realConsumer)
  let activity = await Helper.createActivity(realConsumer, assignment)
  let visitSpec = Helper.sampleVisit(realConsumer, user, activity, assignment)
  if (lastVisitDate) visitSpec.lastVisitDate = lastVisitDate
  // let visit =
  await Helper.createVisitFromSpec(visitSpec)
  // debug('visit', visit)
}

/* global describe it */
describe('Utils controller testing', function() {

  let app
  let utilController

  before(function(done) {
    helper.beforeTestAppAndDbDrop(ehrApp, configuration, mongoose)
      .then(() => {
        app = ehrApp.application
        utilController = new UtilController()
        done()
      })
  })
  after(function(done) {
    helper.afterTestsCloseDb(mongoose).then(() => done())
  })

  it('Create db objects', async function() {
    let consumerSpec = Helper.sampleConsumerSpec()
    await createObjectsFromConsumerSpec(consumerSpec)
    // create a 'recent' demo
    consumerSpec = Helper.sampleConsumerSpec()
    consumerSpec.tool_consumer_info_version = 'ehrdemo'
    consumerSpec.oauth_consumer_key = consumerSpec.oauth_consumer_key + '-demo-recent'
    await createObjectsFromConsumerSpec(consumerSpec)

    // create an 'old' demo
    consumerSpec = Helper.sampleConsumerSpec()
    consumerSpec.tool_consumer_info_version = 'ehrdemo'
    consumerSpec.oauth_consumer_key = consumerSpec.oauth_consumer_key + '-demo-old'
    await createObjectsFromConsumerSpec(consumerSpec, new Date(2018,0,1))

  })

  it('UtilController can be created', function(done) {
    utilController.should.have.property('listConsumers')
    utilController.should.have.property('listSeeds')
    utilController.should.have.property('cleanUpAllOrphanedDocs')
    utilController.should.have.property('cleanOldDemoConsumers')
    done()
  })

  it('use list consumers', function(done) {
    utilController.listConsumers(true).then(consumers => {
      should.exist(consumers)
      consumers.length.should.be.equal(1)
      done()
    })
  })

  it('use list demo consumers', async function() {
    let consumers = await utilController.listConsumers(false)
    should.exist(consumers)
    consumers.length.should.be.equal(2)
  })

  it('list seeds', function(done) {
    utilController.listSeeds(true).then(seeds => {
      should.exist(seeds)
      seeds.length.should.be.equal(1)
      done()
    })
  })

  it('list demo seeds', function(done) {
    utilController.listSeeds(false).then(seeds => {
      should.exist(seeds)
      seeds.length.should.be.equal(2)
      done()
    })
  })

  it('cleanOldDemoConsumers dry run', async function() {
    let results = await utilController.cleanOldDemoConsumers(3, true, false)
    results.should.have.property('consumerDeleteCount')
    results.consumerDeleteCount.should.equal(1)
    // console.log('results', results)
    let consumers = await utilController.listConsumers(false)
    should.exist(consumers)
    consumers.length.should.be.equal(2)
  })

  it('cleanOldDemoConsumers ', async function() {
    let results = await utilController.cleanOldDemoConsumers(3, true, true)
    results.should.have.property('consumerDeleteCount')
    results.consumerDeleteCount.should.equal(1)
    // console.log('results', results)
    let consumers = await utilController.listConsumers(false)
    should.exist(consumers)
    consumers.length.should.be.equal(1) // dry run still has 2 but real delete leaves 1 consumer
  })

  it('get list consumers api end point', function(done) {
    let url = BASE
    url += '/consumers'
    request(app)
      .get(url)
      .set('Authorization', `Bearer ${apiToken}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err)
        should.exist(res)
        should.exist(res.body)
        res.body.should.be.object
        let response = res.body
        // console.log('test response', response)
        response.should.be.Array().have.length(1)
        done()
      })
  })

})
