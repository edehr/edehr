const should = require('should')
const request = require('supertest')
const mongoose = require('mongoose')
import Helper from '../common/test-helper'
const helper = new Helper()
import EhrApp from '../../server/app'
import Config from '../../config/config'

const config = new Config('test')
const configuration = config.config
const TYPE = 'Feedback'
const NAME = 'feedback'
const PROPERTY = 'feedbacks'
const BASE = '/api/feedback/'
const ehrApp = new EhrApp()

const tokenData = Helper.sampleTokenData()
const token = Helper.generateToken(tokenData)

const debug = require('debug')('server')

describe(`Make server calls on ${TYPE}`, function () {
  let app
  before(function (done) {
    ehrApp
      .setup(configuration)
      .then(() => {
        app = ehrApp.application
      })
      .then(() => {
        return helper.before(done, mongoose)
      })
  })

  let theData = {feedbackData: 'Some feedback data in a server test'}

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
        // debug('create request err, res', err, res.body)
        should.not.exist(err, url)
        should.exist(res)
        should.exist(res.body)
        let obj = res.body

        obj.should.have.property('feedbackData')
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
        let obj = res.body
        // debug('results get list', obj)
        obj.should.have.property(PROPERTY)
        let results = obj[PROPERTY]
        results.should.be.array
        results.should.have.length(1)
        done()
      })
  })

})
