import EhrDataModel from '../ehr-definitions/EhrDataModel'
// eslint-disable-next-line no-unused-vars
import * as fs from 'fs'
import expectedEhr from '../resources/old-visit-times-expected.json'
const should = require('should')

// use to create expected output during development
// const fs = require('fs')
describe( 'Updates with EhrDataModel', () => {

  it('update pre-update data', () => {
    const ehrWithOldTimeVals = require('../resources/old-visit-times-input.json')
    const expectedEhr = require('../resources/old-visit-times-expected.json')
    const updatedData = EhrDataModel.PrepareForDb(ehrWithOldTimeVals)
    should.exists(updatedData)
    updatedData.should.have.property('meta')
    updatedData.meta.should.have.property('ehrVersion')
    delete expectedEhr.meta
    delete updatedData.meta
    const expectedEhrStr = JSON.stringify(expectedEhr, null, 2)
    const updatedStr = JSON.stringify(updatedData, null, 2)
    // use to create expected output during development
    // fs.writeFileSync('./src/resources/old-visit-times-expected.json', updatedStr)
    should(expectedEhrStr).be.equal(updatedStr)
  })

  it ('Use EHrDataModel class method for updates', () => {
    const ehrWithOldTimeVals = require('../resources/old-visit-times-input.json')
    const expectedEhr = require('../resources/old-visit-times-expected.json')
    const updatedData = EhrDataModel.PrepareForDb(ehrWithOldTimeVals)
    should.exists(updatedData)
    updatedData.should.have.property('meta')
    updatedData.meta.should.have.property('ehrVersion')
    delete expectedEhr.meta
    delete updatedData.meta
    const expectedEhrStr = JSON.stringify(expectedEhr, null, 2)
    const updatedStr = JSON.stringify(updatedData, null, 2)
    should(expectedEhrStr).be.equal(updatedStr)
  })
})

describe( 'EhrData meta version', () => {

  it('valid version', () => {
    const ehrData = {
      somepageData: {},
      meta: {
        ehrVersion: 'ev2.1.34'
      }
    }
    const model = new EhrDataModel(ehrData)
    const ver = model.metaEhrVersion
    should.exist(ver)
    ver.should.have.property('major')
    ver.should.have.property('minor')
    ver.should.have.property('patch')
    ver.major.should.be.greaterThanOrEqual(2)
    ver.minor.should.be.greaterThanOrEqual(1)
    ver.patch.should.be.greaterThanOrEqual(0)
  })

  it('invalid version becomes valid', () => {
    const ehrData = {
      somepageData: {},
      meta: {
        ehrVersion: 'ev2.1'
      }
    }
    const model = new EhrDataModel(ehrData)
    const version = model.metaEhrVersion
    should.exist(version)
    version.major.should.be.greaterThanOrEqual(2)
    version.minor.should.be.greaterThanOrEqual(1)
    version.patch.should.be.greaterThanOrEqual(0)
  })

})

describe.skip ( 'medication orders ', () => {
  const sampleMedOrd = require('../resources/sampleWithMedOrdersAndMars.json')
  const expectedEhr = require('../resources/sampleWithMedOrdersAndMars-expected.json')

  function compare (expected, actual) {
    let expectedEhrStr = JSON.stringify(expected, null, 2)
    let updatedStr = JSON.stringify(actual, null, 2)
    // remove ids that have random generated values before comparing
    const idRegExp = /"_id": ".*",/g
    expectedEhrStr = expectedEhrStr.replaceAll(idRegExp, '')
    updatedStr = updatedStr.replaceAll(idRegExp, '')
    const medRegExp = /"medId": ".*",*/g
    expectedEhrStr = expectedEhrStr.replaceAll(medRegExp, '')
    updatedStr = updatedStr.replaceAll(medRegExp, '')
    should(expectedEhrStr).be.equal(updatedStr)
    return updatedStr
  }

  it ('basic update', () => {
    let expected, actual, updatedStr
    const model = new EhrDataModel(sampleMedOrd)
    const updatedData = model.ehrData
    const version = model.metaEhrVersion
    should.exist(version)
    version.major.should.be.greaterThanOrEqual(2)
    version.minor.should.be.greaterThanOrEqual(1)
    version.patch.should.be.greaterThanOrEqual(1)

    // uncomment to create expected output during development
    // updatedStr = JSON.stringify(updatedData, null, 2)
    // fs.writeFileSync('./src/resources/sampleWithMedOrdersAndMars-expected.json', updatedStr)

    expected = expectedEhr.medicationOrders.medicationOrdersTable
    actual = updatedData.medicationOrders.medicationOrdersTable
    updatedStr = compare(expected, actual)

    expected = expectedEhr.medAdminRec.marRecords
    actual = updatedData.medAdminRec.marRecords
    updatedStr = compare(expected, actual)
  })
})
