const should = require('should')
const mongoose = require('mongoose')
import Helper from '../common/test-helper'
const helper = new Helper()
import SeedDataController from './seedData-controller'
import { logError} from '../../helpers/log-error'

const modelName = 'SeedData'

/* global describe it */
describe('SeedDataController controller testing', function () {
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
  })
  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done())
  })

  let controller
  let sampleEhrData = Helper.sampleSeedDataSpec()
  let seedObj

  it('SeedDataController be valid with model and key', function (done) {
    controller = new SeedDataController()
    should.exist(controller)
    done()
  })

  it('SeedDataController create model', function (done) {
    controller.create(sampleEhrData)
      .then(doc => {
        should.exist(doc)
        doc.should.have.property('ehrData')
        doc.ehrData.should.have.property('foo')
        seedObj = doc
        done()
      })
      .catch(err => {
        logError(`SeedDataController create ${modelName} error ${err}`)
        done()
      })
  })

  it('SeedDataController update a property in the ehr data', function (done) {
    controller.should.have.property('updateSeedEhrProperty')
    should.exist(seedObj)
    seedObj.should.have.property('_id')
    let id = seedObj._id
    let payload = {
      propertyName: 'aNewPage',
      value: { someProperty: 'someValue' }
    }
    controller.updateSeedEhrProperty(id, payload)
      .then((resultDoc) => {
        should.exist(resultDoc)
        resultDoc.should.have.property('ehrData')
        resultDoc.ehrData.should.have.property('aNewPage')
        // should have pre-existing property
        resultDoc.ehrData.should.have.property('foo')
        done()
      })
      .catch(err => {
        logError(`SeedDataController create ${modelName} error ${err}`)
        done()
      })
  })

  it('SeedDataController update all the ehr data', function (done) {
    const ID = '_id'
    controller.should.have.property('updateAndSaveSeedEhrData')
    should.exist(seedObj)
    seedObj.should.have.property('_id')
    let id = seedObj._id
    let newEhrData = {
      hematology: {
        tableCbcAnalysis: [{ name: 'foo' }, { name: 'bar' }],
        tablePbfReview: [{ name: 'foo' }, { name: 'bar' }]
      }
    }
    controller.updateAndSaveSeedEhrData(id, newEhrData)
      .then((resultDoc) => {
        should.exist(resultDoc)
        resultDoc.should.have.property('ehrData')
        resultDoc.ehrData.should.have.property('hematology')
        const pageData = resultDoc.ehrData.hematology
        pageData.should.have.property('tableCbcAnalysis')
        pageData.tableCbcAnalysis.should.have.length(2)
        const row = pageData.tableCbcAnalysis[0]
        row.should.have.property(ID)
        row[ID].should.equal('hematology.tableCbcAnalysis.0')
        done()
      })
      .catch(err => {
        console.error('ERROR updateAndSaveSeedEhrData', err)
        done()
      })
  })

})

