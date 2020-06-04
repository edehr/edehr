import Helper from '../common/test-helper'
import EhrApp from '../../server/app'
import Config from '../../config/config'
const request = require('supertest')
const mongoose = require('mongoose')
const should = require('should')

const config = new Config('test')
const ehrApp = new EhrApp()
const helper = new Helper()
const configuration = config.config

const BASE = '/api/auth'
const NAME = 'auth-controller'
const visitId = Helper.sampleObjectId(true)
const token = Helper.generateToken(visitId)
const refreshToken = Helper.generateRefreshToken(token)

describe(`${NAME} - Server requests `, () => {
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
  

  it('Properly gets the token content', done => {
    const url = BASE
    request(app)
      .post(url)
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err)
        should.exist(res)
        res.body.should.have.property('visitId')
        done()
      })
  })

  it('Properly gets token ', done => {
    const url = `${BASE}/refresh`
    request(app)
      .post(url)
      .send({ refreshToken })
      .expect(200)
      .end((err, res) => {
        should.not.exist(err)
        should.exist(res)
        res.body.should.have.property('token')
        done()
      })
  })
})