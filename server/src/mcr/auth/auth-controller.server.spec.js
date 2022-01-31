import Helper from '../common/test-helper'
import EhrApp from '../../server/app'
import Config from '../../config/config'
const request = require('supertest')
const mongoose = require('mongoose')
const should = require('should')
const debug = require('debug')('server')

const config = new Config('test')
const ehrApp = new EhrApp()
const helper = new Helper()
const configuration = config.config

const BASE = '/api/auth'
const NAME = 'auth-controller'
const tokenData = Helper.sampleTokenData()
const token = Helper.generateToken(tokenData)
const refreshToken = Helper.generateRefreshToken(token)

describe(`${NAME} - Server requests `, () => {
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


  it('Properly gets the token content', done => {
    const url = BASE
    debug(`URL: ${url}, token: ${token}`)
    request(app)
      .post(url)
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err)
        should.exist(res)
        // console.log('tokenData', tokenData)
        // console.log('res.body', res.body)
        res.body.should.have.property('visitId')
        res.body.visitId.should.equal(tokenData.visitId)
        res.body.should.have.property('toolConsumerId')
        res.body.toolConsumerId.should.equal(tokenData.toolConsumerId)
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
