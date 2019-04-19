var should = require('should')
const mongoose = require('mongoose')
import Helper from '../helper'
const helper = new Helper()
import SeedDataController from '../../src/controllers/seedData-controller'
// import Model from '../../models/seed-data'

const typeName = 'SeedDataController'
const modelName = 'SeedData'
const collectionName = 'seeddatas'

/* global describe it */
describe(`${typeName} controller testing`, function () {
  before(function (done) {
    helper.before(done, mongoose)
  })

  let controller
  let sampleEhrData = Helper.sampleSeedDataSpec()
  let seedObj

  it(`${typeName} be valid with model and key`, function (done) {
    controller = new SeedDataController()
    should.exist(controller)
    done()
  })

  it(`${typeName} create model`, function (done) {
    controller.create(sampleEhrData)
      .then(doc => {
        should.exist(doc)
        doc.should.have.property('ehrData')
        doc.ehrData.should.have.property('foo')
        seedObj = doc
        done()
      })
      .catch(err => {
        console.log(`${typeName} create ${modelName} error ${err}`)
        done()
      })
  })

  it(`${typeName} update a property in the ehr data`, function (done) {
    controller.should.have.property('updateSeedEhrProperty')
    should.exist(seedObj)
    seedObj.should.have.property('_id')
    let id = seedObj._id
    let payload = {
      propertyName: 'aNewPage',
      value: {someProperty: 'someValue'}
    }
    controller.updateSeedEhrProperty(id,payload)
      .then( (resultDoc) => {
        should.exist(resultDoc)
        resultDoc.should.have.property('ehrData')
        resultDoc.ehrData.should.have.property('aNewPage')
        // should have pre-existing property
        resultDoc.ehrData.should.have.property('foo')
      })
    done()
  })


  it(`${typeName} update all the ehr data`, function (done) {
    controller.should.have.property('updateSeedEhrData')
    should.exist(seedObj)
    seedObj.should.have.property('_id')
    let ehrData = sampleEhrData.ehrData
    let id = seedObj._id
    let newEhrData = {
      someProperty: 'someValue'
    }
    controller.updateSeedEhrData(id,newEhrData)
      .then( (resultDoc) => {
        should.exist(resultDoc)
        resultDoc.should.have.property('ehrData')
        resultDoc.ehrData.should.have.property('someProperty')
        // should NOT have pre-existing property
        resultDoc.ehrData.should.not.have.property('foo')
      })
    done()
  })

})
