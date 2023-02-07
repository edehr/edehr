import EhrDataModel from '../ehr-definitions/EhrDataModel'
const should = require('should')
const expectedEhr = require('../resources/v2_1_1_expected-ehrData.json')
const seed = require('../resources/v2_1_1_input.json')
const ehrData = seed.ehrData

describe( 'Updates with EhrDataModel', () => {

  it('update', () => {
    const updatedData = EhrDataModel.updateEhrDataToLatestFormat(ehrData)
    const expectedEhrStr = JSON.stringify(expectedEhr, null, 2)
    const updatedStr = JSON.stringify(updatedData, null, 2)
    // console.log(expectedEhrStr)
    // console.log(updatedStr)
    should(expectedEhrStr).be.equal(updatedStr)
  })
})
