import Helper from '../helper'
import EhrApp from '../../src/server/app'
import Config from '../../src/config/config'
import { adminToken } from '../../src/controllers/admin-controller'

const should = require('should')
const request = require('supertest')
const mongoose = require('mongoose')
const helper = new Helper()
const config = new Config('test')
const configuration = config.config
const BASE = '/admin'
const ehrApp = new EhrApp()
const TYPE = 'Admin'



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

  it('Admin routing calls', () => {
    let url = BASE + '/'
    return Helper.getUrlAuth(theApp, url, adminToken)
      .expect(200)
      .expect(function (res) {
        should.exist(res)
        res.text.should.equal('hello admin')
        // Helper.consoleRes(res)
      })
  })

  it('Admin create tool without auth', function () {
    let url = BASE + '/consumer/create'
    let noToken = 'aasdssdasdads'
    let theData = {key: 'akey', secret : 'asecret'}
    return Helper.postUrlAuth(theApp, url, noToken, theData)
      .expect(404)
      .expect( (res) => {
        should.exist(res)
        // Helper.consoleRes(res)
      })
      .catch ( (error) => {
        should.not.exist(error)
      })
  })


  it('Admin create tool', function () {
    let url = BASE + '/consumer/create'
    let theData = {key: 'akey', secret : 'asecret'}
    return Helper.postUrlAuth(theApp, url, adminToken, theData)
      .expect(200)
      .expect( (res) => {
        should.exist(res)
      })
      .catch ( (error) => {
        should.not.exist(error)
      })
  })

  it('Admin create 2nd tool with conflict on key --- should error', function () {
    let url = BASE + '/consumer/create'
    let theData = {key: 'akey', secret : 'asecret'}
    return Helper.postUrlAuth(theApp, url, adminToken, theData)
      .expect(200)
      .expect( (res) => {
        should.not.exist(res)
      })
      .catch ( (error) => {
        should.exist(error)
      })
  })

  it('Admin create second tool with different key', function () {
    let url = BASE + '/consumer/create'
    let theData = {key: 'akey2', secret : 'asecret'}
    return Helper.postUrlAuth(theApp, url, adminToken, theData)
      .expect(200)
      .expect( (res) => {
        should.exist(res)
      })
      .catch ( (error) => {
        should.not.exist(error)
      })
  })

  it('Admin list consumer users', function () {
    let url = BASE + '/consumers/'
    return Helper.getUrlAuth(theApp, url, adminToken)
      .expect(200)
      .expect( (res) => {
        should.exist(res)
      })
      .catch ( (error) => {
        should.not.exist(error)
      })
  })

  it.skip('Admin reset', function (done) {
    let url = BASE + '/reset'
    Helper.getUrl(theApp, url)
      .expect(200)
      .expect( (res) => {
        should.exist(res)
      })
      .catch ( (error) => {
        should.not.exist(error)
      })
  })

})
