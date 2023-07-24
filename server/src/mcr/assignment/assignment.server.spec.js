import Model from './assignment'

const should = require('should')
const request = require('supertest')
const mongoose = require('mongoose')
import Helper from '../common/test-helper'
const helper = new Helper()
import EhrApp from '../../server/app'
import { applicationConfiguration } from '../../config/config'
const configuration = applicationConfiguration('test')
const PROPERTY = 'assignment'
const BASE = '/api/assignments'
const BASE_SEED_DATA = '/api/seed-data'
const ehrApp = new EhrApp(configuration)

const tokenData = Helper.sampleTokenData()
const token = Helper.generateToken(tokenData)

// skip until resolve issue --- validatorMiddleware Invalid token. Please, return to you....
describe('Make server calls on Assignment', function () {
  let app

  before(function (done) {
    helper.beforeTestAppAndDbDrop(ehrApp, configuration, mongoose)
      .then( () => {
        app = ehrApp.application
        done()
      })
  })
  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
  })

  let theData = Helper.sampleAssignmentSpec()
  let theSampleSeedData = Helper.sampleSeedDataSpec()
  let theId, theSeedId

  it('create seedData', function (done) {
    let url = BASE_SEED_DATA
    request(app)
      .post(url)
      .send(theSampleSeedData)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .end(function (err, res) {
        should.not.exist(err, url)
        should.exist(res)
        should.exist(res.body)
        let obj = res.body
        obj.should.have.property('_id')
        // debug('created', obj._id)
        theSeedId = obj._id
        done()
      })
  })

  it('create assignment', function (done) {
    let url = BASE
    if(theSeedId) {
      theData.seedDataId = theSeedId
    }
    request(app)
      .post(url)
      .send(theData)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      // .expect(200)
      .end(function (err, res) {
        should.not.exist(err)
        should.exist(res)
        should.exist(res.body)
        let obj = res.body
        obj.should.have.property('seedDataId')
        // debug('created', obj._id, 'with seed', obj.seedDataId)
        done()
      })
  })

  it('get assignment list', function (done) {
    let url = BASE
    let property = 'assignments'
    request(app)
      .get(url)
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        should.not.exist(err)
        should.exist(res)
        should.exist(res.body)
        res.body.should.be.object
        let obj = res.body
        // debug('results get list', obj)
        obj.should.have.property(property)
        let results = obj[property]
        results.should.be.array
        results.should.have.length(1)
        let sd = results[0]
        // debug('results from api/seed-data', sd._id)
        theId = sd._id
        done()
      })
  })

  it('find assignment by id', function (done) {
    let url = BASE + '/get/' + theId
    request(app)
      .get(url)
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        should.not.exist(err, url)
        should.exist(res)
        should.exist(res.body)
        res.body.should.be.object
        res.body.should.have.property(PROPERTY)
        done()
      })
  })

  it('update assignment', function (done) {
    theData.name = '2.0'
    let url = BASE + '/' + theId
    request(app)
      .put(url)
      .send(theData)
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        should.not.exist(err, url)
        should.exist(res)
        should.exist(res.body)
        res.body.should.be.object
        res.body.should.have.property(PROPERTY)
        let sd = res.body[PROPERTY]
        sd.should.have.property('name')
        sd.name.should.equal(theData.name)
        done()
      })
  })

  it('create assignment', function (done) {
    let url = BASE
    if(theSeedId) {
      theData.seedDataId = theSeedId
    }
    request(app)
      .post(url)
      .send(theData)
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        // debug('Creating a second assignment with the same external id should not fail.', err, res.body)
        should.exist(res.body)
        done()
      })
  })
})

describe('Assignment mongoose schema testing', function () {
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
  })

  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
  })

  it('Assignment be invalid if params are empty', function (done) {
    let m = new Model()
    m.validate(function (err) {
      // debug('Expect error: ', err)
      should.exist(err)
      done()
    })
  })

  let data = Helper.sampleAssignmentSpec()
  it('Assignment can save one', function (done) {
    const newUser = new Model(data)
    newUser
      .save()
      .then(() => {
        done()
      })
  })
})
