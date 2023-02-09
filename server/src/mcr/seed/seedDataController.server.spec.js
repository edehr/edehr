const should = require('should')
const mongoose = require('mongoose')
import Helper from '../common/test-helper'
const helper = new Helper()
import SeedDataController from './seedData-controller'
import { logError} from '../../helpers/log-error'

const typeName = 'SeedDataController'
const modelName = 'SeedData'

/* global describe it */
describe(`${typeName} controller testing`, function () {
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
  })
  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
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
        logError(`${typeName} create ${modelName} error ${err}`)
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
        done()
      })
      .catch(err => {
        logError(`${typeName} create ${modelName} error ${err}`)
        done()
      })
  })


  // importSeedEhrData no longer exists
  it.skip(`${typeName} update all the ehr data`, function (done) {
    controller.should.have.property('importSeedEhrData')
    should.exist(seedObj)
    seedObj.should.have.property('_id')
    let id = seedObj._id
    let newEhrData = {
      someProperty: 'someValue'
    }
    controller.importSeedEhrData(id,newEhrData)
      .then( (resultDoc) => {
        should.exist(resultDoc)
        resultDoc.should.have.property('ehrData')
        resultDoc.ehrData.should.have.property('someProperty')
        // should NOT have pre-existing property
        resultDoc.ehrData.should.not.have.property('foo')
        done()
      })
      .catch(err => {
        logError(`${typeName} create ${modelName} error ${err}`)
        done()
      })
  })

})
