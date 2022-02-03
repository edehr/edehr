const should = require('should')
const request = require('supertest')
const mongoose = require('mongoose')
import Helper from '../common/test-helper'
const helper = new Helper()
import EhrApp from '../../server/app'
import applicationConfiguration from '../../config/config'
const configuration = applicationConfiguration('test')
const TYPE = 'SeedData'
const NAME = 'seed data'
const PROPERTY = 'seeddata'
const BASE = '/api/seed-data'
const ehrApp = new EhrApp()
const debug = require('debug')('server')
const tokenData = Helper.sampleTokenData()
const token = Helper.generateToken(tokenData)

describe(`Make server calls on ${TYPE}`, function () {
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


  let theData
  let theId

  it(`${NAME} setup sample`, function () {
    theData = Helper.sampleSeedDataSpec()
    should.exist(theData)
    theData.should.have.property('ehrData')
    theData.ehrData.should.have.property('foo')
  })

  it(`create ${NAME}`, function (done) {
    let url = BASE
    request(app)
      .post(url)
      .send(theData)
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
        debug('created', obj._id)
        done()
      })
  })

  it(`get ${NAME} list`, function (done) {
    let url = BASE
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
        res.body.should.have.property(PROPERTY)
        let obj = res.body[PROPERTY]
        obj.should.be.array
        obj.should.have.length(1)
        let sd = obj[0]
        // debug('results from api/seed-data', sd._id)
        theId = sd._id
        done()
      })
  })

  it(`find ${NAME} by id`, function (done) {
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

  it(`update ${NAME}`, function (done) {
    theData.version = '2.0'
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
        sd.should.have.property('version')
        sd.version.should.equal(theData.version)
        done()
      })
  })

  it(`updateSeedEhrProperty ${NAME}`, function (done) {
    let payload = {
      propertyName: 'aNewPage',
      value: {someProperty: 'someValue'}
    }
    let url = BASE + '/updateSeedEhrProperty/' +  theId
    request(app)
      .put(url)
      .send(payload)
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        should.not.exist(err, url)
        should.exist(res)
        should.exist(res.body)
        res.body.should.be.object
        res.body.should.have.property('ehrData')
        let ehrData = res.body.ehrData
        ehrData.should.have.property('aNewPage')
        done()
      })
  })

  it(`updateSeedEhrData ${NAME}`, function (done) {
    let payload = {
      someProperty: 'someValue'
    }
    let url = BASE + '/updateSeedEhrData/' +  theId
    request(app)
      .put(url)
      .send(payload)
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        should.not.exist(err, url)
        should.exist(res)
        should.exist(res.body)
        res.body.should.be.object
        res.body.should.have.property('ehrData')
        let ehrData = res.body.ehrData
        ehrData.should.have.property('someProperty')
        ehrData.should.not.have.property('foo')
        done()
      })
  })

})
