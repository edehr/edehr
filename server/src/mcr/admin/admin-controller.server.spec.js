import EhrApp from '../../server/app'
import Helper from '../common/test-helper'
import applicationConfiguration from '../../config/config'
const configuration = applicationConfiguration('test')
const debug = require('debug')('server')
const BASE = '/api/admin'
const ehrApp = new EhrApp()
const helper = new Helper()
const mongoose = require('mongoose')
const should = require('should')
const TYPE = 'Admin'
// import { getCreateAdminPassword } from '../../helpers/admin'
const tokenData = Helper.sampleTokenData()
const token = Helper.generateToken(tokenData)

debug(`admin-server.spec token >> ${token}`)
let adminToken

// const adminPass = getCreateAdminPassword()

describe.skip(`Make server calls on ${TYPE}`, function () {
  let theApp
  before(function (done) {
    helper.beforeTestAppAndDbDrop(ehrApp, configuration, mongoose)
      .then( () => {
        theApp = ehrApp.application
        done()
      })
  })
  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
  })

  // TODO update admin password and obtain from .env then update tests
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

  it.skip('Admin validate', () => {
    let url = `${BASE}/validate`
    return Helper.postUrlAuth(theApp, url, adminToken)
      .expect(200)
  })

})
