// import { adminToken } from './admin-controller'
// import Config from '../../config/config'
// import EhrApp from '../../server/app'
// import Helper from '../common/test-helper'
// const debug = require('debug')('server')
// // const request = require('supertest')
// const BASE = '/admin'
// const config = new Config('test')
// const configuration = config.config
// const ehrApp = new EhrApp()
// const helper = new Helper()
// const mongoose = require('mongoose')
// const should = require('should')
// const TYPE = 'Admin'

const token = Helper.generateToken(visitId)

// debug(`admin-server.spec token >> ${token}`)
// let adminToken

// describe(`Make server calls on ${TYPE}`, function () {
//   let theApp
//   before(function (done) {
//     ehrApp
//       .setup(configuration)
//       .then(() => {
//         theApp = ehrApp.application
//       })
//       .then(() => {
//         return helper.before(done, mongoose)
//       })
//   })

//   it('Admin properly logs in', () => {
//     let url = BASE
//     return Helper.adminLogin(theApp, url, adminPass, token)
//       .expect(200)
//       .expect((res) => {
//         should.exist(res)
//         res.text.should.equal('hello admin')
//         // Helper.consoleRes(res)
//       })
//   })

//   it.skip('Admin reset', function (done) {
//     let url = BASE + '/reset'
//     Helper.getUrl(theApp, url)
//       .expect(200)
//   })

// })
