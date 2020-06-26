var should = require('should')
const mongoose = require('mongoose')
import dbSeeder from '../../config/lib/dbSeeder'
// load the seed data model into mongoose ...
require('./seed-data')

import IntegrationController from '../integration/integration-controller'
import Helper from '../common/test-helper'

const debug = require('debug')('server')
const logError = require('debug')('error')

const IntegrationModel = new IntegrationController()

// import fs from 'fs'

// require('../../src/models/seed-data')
const helper = new Helper()

/* global describe it */
describe(' db seeding test', function () {
  before(function (done) {
    helper.before(done, mongoose)
  })

  let name = 'another collection'
  it('Integrations find on empty collection', function (done) {
    IntegrationModel.findOne({ module: name }).then(result => {
      // debug('found: ', result)
      should.not.exist(result)
      done()
    })
  })

  it('Integration create', function (done) {
    IntegrationModel.create({ module: name })
      .then(doc => {
        should.exist(doc)
        done()
      })
      .catch(err => {
        logError(`Integration error ${err}`)
        done()
      })
  })

  it('Integrations find after create', function (done) {
    IntegrationModel.findOne({ module: name }).then(result => {
      // debug('found: ', result)
      should.exist(result)
      done()
    })
  })

  it('Seed the sb', function (done) {
    dbSeeder()
      .then(() => {
        debug('done unit testing seeding')
        done()
      })
      .catch(err => {
        logError(`error ${err}`)
        done()
      })
  })
})
