const should = require('should')
const request = require('supertest')
const mongoose = require('mongoose')
import Helper from '../helper'
const helper = new Helper()
import EhrApp from '../../server/app'
import Config from '../../config/config'

const config = new Config('test')
const configuration = config.config
const TYPE = 'SeedData'
const NAME = 'seed data'
const PROPERTY = 'seeddata'
const BASE = '/api/seed-data'
const ehrApp = new EhrApp()

describe(`Make server calls on ${TYPE}`, function() {
  let app
  before(function(done) {
    ehrApp
      .setup(configuration)
      .then(() => {
        app = ehrApp.application
      })
      .then(() => {
        return helper.before(done, mongoose)
      })
  })
  let theData = Helper.sampleSeedDataSpec()
  let theId

  it(`create ${NAME}`, function(done) {
    let url = BASE
    request(app)
      .post(url)
      .send(theData)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err, url)
        should.exist(res)
        should.exist(res.body)
        let obj = res.body
        obj.should.have.property('_id')
        console.log('created', obj._id)
        done()
      })
  })

  it(`get ${NAME} list`, function(done) {
    let url = BASE
    request(app)
      .get(url)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err)
        should.exist(res)
        should.exist(res.body)
        res.body.should.be.object
        res.body.should.have.property(PROPERTY)
        let obj = res.body[PROPERTY]
        obj.should.be.array
        obj.should.have.length(1)
        let sd = obj[0]
        // console.log('results from api/seed-data', sd._id)
        theId = sd._id
        done()
      })
  })

  it(`find ${NAME} by id`, function(done) {
    let url = BASE + '/get/' + theId
    request(app)
    .get(url)
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      should.not.exist(err, url)
      should.exist(res)
      should.exist(res.body)
      res.body.should.be.object
      res.body.should.have.property(PROPERTY)
      done();
    });
  })

  it(`update ${NAME}`, function(done) {
    theData.version = '2.0'
    let url = BASE + '/' + theId
    request(app)
    .put(url)
    .send(theData)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .expect(200)
    .end(function(err, res) {
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

})
