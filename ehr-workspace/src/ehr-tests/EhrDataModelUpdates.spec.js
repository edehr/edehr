import EhrDataModel from '../ehr-definitions/EhrDataModel'
const should = require('should')
const expectedEhr = require('../resources/old-visit-times-expected.json')
const ehrWithOldTimeVals = require('../resources/old-visit-times-input.json')

// use to create expected output during development
// const fs = require('fs')
describe( 'Updates with EhrDataModel', () => {

  it('update pre-update data', () => {
    const updatedData = EhrDataModel.updateEhrDataToLatestFormat(ehrWithOldTimeVals)
    should.exists(updatedData)
    updatedData.should.have.property('meta')
    updatedData.meta.should.have.property('ehrVersion')
    updatedData.meta.ehrVersion.should.equal('ev2.1')
    const expectedEhrStr = JSON.stringify(expectedEhr, null, 2)
    const updatedStr = JSON.stringify(updatedData, null, 2)
    // use to create expected output during development
    // fs.writeFileSync('./src/resources/old-visit-times-expected.json', updatedStr)
    should(expectedEhrStr).be.equal(updatedStr)
  })
})
