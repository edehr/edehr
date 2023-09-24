import { FOR_TEST_LAST_EVENT } from '../../server/trace-ehr'

const should = require('should')
const mongoose = require('mongoose')
import Helper from '../common/test-helper'
const helper = new Helper()
import SeedDataController from './seedData-controller'

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

  it('SeedDataController create model', function () {
    return controller.create(sampleEhrData)
      .then(doc => {
        should.exist(doc)
        doc.should.have.property('ehrData')
        doc.ehrData.should.have.property('foo')
        seedObj = doc
      })
  })

  it('SeedDataController update all the ehr data', function () {
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
    return controller.updateAndSaveSeedEhrData(id, newEhrData)
      .then((resultDoc) => {
        should.exist(resultDoc)
        resultDoc.should.have.property('ehrData')
        resultDoc.ehrData.should.have.property('hematology')
        const pageData = resultDoc.ehrData.hematology
        pageData.should.have.property('tableCbcAnalysis')
        /*        All rows should have id property.   */
        pageData.tableCbcAnalysis.should.have.length(2)
        const row = pageData.tableCbcAnalysis[0]
        row['tableCbcAnalysis_id'].should.equal('hematology.tableCbcAnalysis.0')
      })
  })

})

