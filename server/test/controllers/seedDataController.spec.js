var should = require('should')
const mongoose = require('mongoose')
import Helper from '../helper'
const helper = new Helper()
import SeedDataController from '../../controllers/seedData-controller'
import Model from '../../models/seed-data'

const typeName = 'SeedDataController'
const modelName = 'SeedData'
const collectionName = 'seeddatas'

/* global describe it */
describe(`${typeName} controller testing`, function() {
  before(function(done) {
    helper.before(done, mongoose)
  })

  it(`${typeName} be valid with model and key`, function(done) {
    let m = new SeedDataController()
    should.exist(m)
    done()
  })

   it(`${typeName} create model`, function(done) {
    let m = new SeedDataController()
    let data = Helper.sampleSeedDataSpec()
    m.create(data)
      .then(doc => {
        should.exist(doc)
        doc.should.have.property('ehrData')
        doc.ehrData.should.have.property('foo');
        done()
      })
      .catch(err => {
        console.log(`${typeName} create ${modelName} error ${err}`)
        done()
      })
  })
})
