import EhrDataModel from '../ehr-definitions/EhrDataModel'
const should = require('should')
const expectedEhr = require('../resources/old-visit-times-expected.json')
const ehrWithOldTimeVals = require('../resources/old-visit-times-input.json')

// use to create expected output during development
// const fs = require('fs')
describe( 'Updates with EhrDataModel', () => {

  it('update pre-update data', () => {
    const model = new EhrDataModel(ehrWithOldTimeVals)
    const updatedData = model.ehrData
    should.exists(updatedData)
    updatedData.should.have.property('meta')
    updatedData.meta.should.have.property('ehrVersion')
    const version = model.metaEhrVersion
    delete expectedEhr.meta
    delete updatedData.meta
    const expectedEhrStr = JSON.stringify(expectedEhr, null, 2)
    const updatedStr = JSON.stringify(updatedData, null, 2)
    // use to create expected output during development
    // fs.writeFileSync('./src/resources/old-visit-times-expected.json', updatedStr)
    should(expectedEhrStr).be.equal(updatedStr)
    should.exist(version)
    version.major.should.be.greaterThanOrEqual(2)
    version.minor.should.be.greaterThanOrEqual(1)
    version.patch.should.be.greaterThanOrEqual(0)
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
