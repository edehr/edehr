import EhrDataModel from '../ehr-definitions/EhrDataModel'
// eslint-disable-next-line no-unused-vars
import * as fs from 'fs'
import expectedEhr from '../resources/old-visit-times-expected.json'
import { updateRecHeaderElementKeys } from '../ehr-definitions/ehr-data-model-utils'
import eData from '../resources/allRecHdrTables.json'
const should = require('should')

// use to create expected output during development
// const fs = require('fs')
describe( 'Updates with EhrDataModel', () => {

  it('update pre-update data', () => {
    const ehrWithOldTimeVals = require('../resources/old-visit-times-input.json')
    let expectedEhr = require('../resources/old-visit-times-expected.json')
    // expectedEhr = updateRecHeaderElementKeys(expectedEhr)
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
    const version = EhrDataModel.MetaEhrVersion(ehrData)
    should.exist(version)
    version.should.have.property('major')
    version.should.have.property('minor')
    version.should.have.property('patch')
    version.major.should.be.greaterThanOrEqual(2)
    version.minor.should.be.greaterThanOrEqual(1)
    version.patch.should.be.greaterThanOrEqual(0)
  })

  it('invalid version becomes valid', () => {
    const ehrData = {
      somepageData: {},
      meta: {
        ehrVersion: 'ev2.1'
      }
    }
    const model = new EhrDataModel(ehrData)
    const version = model.ehrVersion
    should.exist(version)
    version.major.should.be.greaterThanOrEqual(2)
    version.minor.should.be.greaterThanOrEqual(1)
    version.patch.should.be.greaterThanOrEqual(0)
  })

})
