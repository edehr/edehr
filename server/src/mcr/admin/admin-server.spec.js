import Config from '../../config/config'
import EhrApp from '../../server/app'
import Helper from '../common/test-helper'
const debug = require('debug')('server')
// const request = require('supertest')
const BASE = '/api/auth/admin'
const config = new Config('test')
const configuration = config.config
const ehrApp = new EhrApp()
const helper = new Helper()
const mongoose = require('mongoose')
const should = require('should')
const TYPE = 'Admin'
import { getCreateAdminPassword } from '../../helpers/admin'
const visitId = Helper.sampleObjectId(true)

const token = Helper.generateToken(visitId)

debug(`admin-server.spec token >> ${token}`)
let adminToken

const adminPass = getCreateAdminPassword()

describe(`Make server calls on ${TYPE}`, function () {
  let theApp
  before(function (done) {
    ehrApp
      .setup(configuration)
      .then(() => {
        theApp = ehrApp.application
      })
      .then(() => {
        return helper.before(done, mongoose)
      })
  })

  it('Admin properly logs in', () => {
    let url = BASE
    return Helper.adminLogin(theApp, url, adminPass, token)
      .expect(200)
      .expect((res) => {
        should.exist(res)
        should.exist(res.body.token)
        adminToken = res.body.token
      } )
  })

  it('Admin validate', () => {
    let url = `${BASE}/validate`
    return Helper.postUrlAuth(theApp, url, adminToken)
      .expect(200)
  })

  // TODO implement server-side admin reset
  

})
