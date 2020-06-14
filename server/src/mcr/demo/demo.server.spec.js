import Config from '../../config/config'
import EhrApp from '../../server/app'
import Helper from '../common/test-helper'
const should = require('should')
const request = require('supertest')
const mongoose = require('mongoose')
const uuid = require('uuid/v4')

const ehrApp = new EhrApp()
const helper = new Helper()
const typeName = 'demo'
const BASE = '/api/demo'
const config = new Config('test')
const configuration = config.config
const _factorTypeName = (description = '') => `${typeName} - ${description}` 

describe(_factorTypeName('making server calls'), () => {
  let app, demoToken, demoData
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
  

  it(_factorTypeName('Properly creates tool consumer'), (done) => {
    const id = uuid()
    const url = `${BASE}/`
    request(app)
      .post(url)
      .send({ id })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect(200)
      .expect(res => {
        should.exist(res)
        should.exist(res.body)
        should.exist(res.body.demoToken)
        demoToken = res.body.demoToken
        done()
      })
      .catch(err => {
        should.not.exist(err)
      })
  })

  it(_factorTypeName('Properly fetches the demoData '), (done) => {
    const url = `${BASE}/fetch`
    request(app)
      .get(url)
      .set('authorization', `Bearer ${demoToken}`)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect(200)
      .expect(res => {
        should.exist(res.body)
        should.exist(res.body.demoData)
        res.body.demoData.should.have.length(4)
        demoData = res.body.demoData
        done()
      })
      .catch(err => {
        should.not.exist(err)
      })
  })

  it(_factorTypeName('Set demo data'), (done) => {
    const selectedDemoData = demoData[0]
    const assignment = 'assignment1' // TODO: this must be changed when setting the demo assignment seed. 
    // Please check https://github.com/BCcampus/edehr/issues/691 for further detail 
    const url = `${BASE}/set`
    request(app)
      .post(url)
      .send({ demoData: selectedDemoData, assignment })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect(200)
      .expect(res => {
        should.exist(res)
        should.exist(res.body)
        should.exist(res.body.refreshToken)
        should.exist(res.body.url)
        done()
      })
      .catch(err => {
        should.not.exist(err)
      })

  })
})

