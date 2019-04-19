var should = require('should')
const mongoose = require('mongoose')
import dbSeeder from '../../src/config/lib/dbSeeder'
// load the seed data model into mongoose ...
require('./../../src/models/seed-data')

import IntegrationController from '../../src/controllers/integration-controller'
import Helper from '../helper'

const IntegrationModel = new IntegrationController()

// import fs from 'fs'

// require('../../src/models/seed-data')
const helper = new Helper()

/* global describe it */
describe(' db seeding test', function() {
  before(function(done) {
    helper.before(done, mongoose)
  })

  let name = 'another collection'
  it('Integrations find on empty collection', function(done) {
    IntegrationModel.findOne({ module: name }).then(result => {
      // console.log('found: ', result)
      should.not.exist(result)
      done()
    })
  })

  it('Integration create', function(done) {
    let m = new IntegrationController()
    IntegrationModel.create({ module: name })
      .then(doc => {
        should.exist(doc)
        done()
      })
      .catch(err => {
        console.log(`Integration error ${err}`)
        done()
      })
  })

  it('Integrations find after create', function(done) {
    IntegrationModel.findOne({ module: name }).then(result => {
      // console.log('found: ', result)
      should.exist(result)
      done()
    })
  })

  it('Seed the sb', function(done) {
    dbSeeder()
      .then(() => {
        console.log('done unit testing seeding')
        done()
      })
      .catch(err => {
        console.log(`error ${err}`)
        done()
      })
  })
})
