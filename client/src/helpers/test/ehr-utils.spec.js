/**
 * @jest-environment jsdom
 */
import axios from 'axios'
import * as ehrUtils from '../ehr-utils'
import { Text } from '../ehr-text'
import { createFile } from './testHelper'
import { prepareAxiosResponse } from './axios-mock-helper'
import { isString, validNumberStr } from '../ehr-utils'
const should = require('should')
const mockData = require('./mockData.json')
const { ehrUtilsData } = mockData
jest.mock('axios')
jest.mock('file-saver')


function getOne () {
  return ehrUtilsData.pageOne
}
function getTwo () {
  return ehrUtilsData.pageTwo
}
//

describe(' testing validNumberStr', () => {
  it ('a simple number', () => {
    let val = 88
    let result = validNumberStr(val)
    should.exist(result)
    result.should.equal(true)
  })
  it ('a simple number in string', () => {
    let val = '88'
    let result = validNumberStr(val)
    should.exist(result)
    result.should.equal(true)
  })
  it ('invalid number in string', () => {
    let val = 'f88'
    let result = validNumberStr(val)
    should.exist(result)
    result.should.equal(false)
  })
})

describe( 'testing isString', () => {
  it('test valid strings', () => {
    let str = 'foobar'
    let result = isString(str)
    should.exist(result)
    result.should.equal(true)
  })
  it('test valid String object strings', () => {
    let str = new String('bar,foo')
    let result = isString(str)
    should.exist(result)
    result.should.equal(true)
  })
})
describe('Testing non string values', () => {
  it('test invalid number literal', () => {
    let str = 88
    let result = isString(str)
    should.exist(result)
    result.should.equal(false)
  })
})
describe('Test seed marking', () => {

  it('Remove Empty Properties', () => {
    let one = getOne()
    should.exist(one.aPage1)
    should.exist(one.aPage1.p1)
    one.aPage1.should.have.property('emptyProp')
    one.aPage1.should.have.property('nullProp')
    // should.exist(one.aPage1.nullProp)
    should.exist(one.aPage1.emptyString)
    one = ehrUtils.removeEmptyProperties(one)
    one.aPage1.should.not.have.property('emptyProp')
    one.aPage1.should.not.have.property('nullProp')
    should.not.exist(one.aPage1.emptyProp)
  })

  it('decoupleObject', done => {
    const one = getOne()
    const result = ehrUtils.decoupleObject(one)
    result.should.be.an.Object()
    JSON.stringify(one).should.equal(JSON.stringify(one))
    done()
  })

  it('Mark seed', () => {
    let one = getOne()
    one = ehrUtils.ehrMarkSeed(one)
    should.exist(one.visit.location)
    one.visit.location.should.have.length(1)
    let v = one.visit.location[0]
    v.should.have.property(ehrUtils.SEED_MARK)
    let two = getTwo()
    let pages = ehrUtils.ehrMergeEhrData(one, two)
    // verify we get pages from one or the other or both
    pages.should.have.property('aPage1')
    pages.should.have.property('cardiovascular')
    pages.should.have.property('visit')

    // confirm that arrays are merged
    pages.visit.should.have.property('location')
    pages.visit.location.should.have.length(2)
  })

  it('Remove Marked Properties', () => {
    let one = ehrUtils.ehrMarkSeed(getOne())
    let two = getTwo()
    let pages = ehrUtils.ehrMergeEhrData(one, two)
    pages.visit.should.have.property('location')
    pages.visit.location.should.have.length(2)
    let visit = ehrUtils.ehrRemoveMarkedSeed(pages.visit)
    visit.should.have.property('location')
    visit.location.should.have.length(1)
  })

  it('Prepare Assignment Data For Save', () => {
    let one = ehrUtils.ehrMarkSeed(getOne())
    let two = getTwo()
    let pages = ehrUtils.ehrMergeEhrData(one, two)
    pages.visit.should.have.property('location')
    pages.visit.location.should.have.length(2)
    let page = ehrUtils.prepareAssignmentPageDataForSave(pages.visit)
    page.should.have.property('location')
    page.location.should.have.length(1)
  })
})

describe('Test merging two EHR data object', () => {
  it('Object assign does not concat arrays', () => {
    let one = getOne()
    let two = getTwo()
    let mstr = Object.assign({}, one, two)
    // let mstr = JSON.stringify(m, null, 2)
    should.exist(mstr.visit)
    should.exist(mstr.visit.location)
    mstr.visit.location.should.have.length(1)
  })

  it('Merge seed with empty object', () => {
    let one = getOne()
    let two = undefined
    let pages = ehrUtils.ehrMergeEhrData(one, two)
    should.exist(pages)
  })

  it('Merge seed and assignment data', () => {
    let one = getOne()
    let two = getTwo()
    let pages = ehrUtils.ehrMergeEhrData(one, two)
    // verify we get pages from one or the other or both
    pages.should.have.property('aPage1')
    pages.should.have.property('aPage2')
    pages.should.have.property('cardiovascular')
    pages.should.have.property('visit')

    // confirm that arrays are merged
    pages.cardiovascular.should.have.property('table')
    pages.cardiovascular.table.should.have.length(2)

    // confirm that arrays are merged
    pages.visit.should.have.property('location')
    pages.visit.location.should.have.length(2)

    // confirm we get properties from one or the other or both
    pages.visit.should.have.property('propertyInOne')
    pages.visit.should.have.property('propertyInTwo')

    // confirm we get the properties of the second when it's the same as the first
    pages.visit.should.have.property('diagnosis')
    pages.visit.diagnosis.should.equal('two diagnosis')

    // console.log('merged object', JSON.stringify(pages, null, 2))
  })
})

describe('Test support for seed import', () => {
  it('verify validateSeedFileContents accept valid properties', (done) => {
    let ehrData = {demographics: {firstName: 'foo'}}
    let data = composeData(ehrData)
    let {invalidMsg,seedObj } = ehrUtils.validateSeedFileContents(data)
    should.not.exist(invalidMsg)
    should.exist(seedObj)
    done()
  })
  it('verify validateSeedFileContents catches invalid properties', (done) => {
    let ehrData = {invalid: {firstName: 'foo'}}
    let data = composeData(ehrData)
    let {invalidMsg,seedObj } = ehrUtils.validateSeedFileContents(data)
    should.exist(invalidMsg)
    should.not.exist(seedObj)
    done()
  })
  it('verify validateSeedFileContents catches empty object', (done) => {
    let ehrData = {}
    let data = composeData(ehrData)
    let {invalidMsg,seedObj } = ehrUtils.validateSeedFileContents(data)
    should.exist(invalidMsg)
    should.not.exist(seedObj)
    done()
  })

  it('importSeedData', async () => {
    should.doesNotThrow(async () => {
      const seedId = 'new seed'
      let ehrData = { demographics: { firstName: 'foo' } }
      let data = composeData(ehrData)
      const response = {
        imported: true,
        seeddata: mockData.seedData
      }
      await prepareAxiosResponse('get', response)
      await prepareAxiosResponse('put', response)
      const mRes = { status: 200, data: 'fake data' }
      axios.mockResolvedValueOnce(mRes)
      should.doesNotThrow(async () => await ehrUtils.importSeedData(null, seedId, data))
      // done()
    })
  })

  it('downloadSeedToFile', done => {
    const seedId = 'new seed'
    const sSeedContent = mockData.seedData
    const ehrData = { demographics: { firstName: 'foo' } }
    should.doesNotThrow(() => {
      const result = ehrUtils.downloadSeedToFile(seedId, sSeedContent, ehrData)
      should.not.exist(result)
      done()
    })
  })

  it('downObjectToFile', done => {
    const fileName = 'new file'
    const obj = mockData.seedData
    should.doesNotThrow(() => {
      const result = ehrUtils.downObjectToFile(fileName, obj)
      should.not.exist(result)
      done()
    })
  })

  it('arrayToCsv', done => {
    should.doesNotThrow(() => {
      const array = [['A'], ['New'], ['Array']]
      const result = ehrUtils.arrayToCsv(array)
      result.should.be.a.String()
      result.length.should.be.greaterThan(0)
      done()
    })
  })

  it('downArrayToCsvFile', () => {
    should.doesNotThrow(() => {
      const array = [['A'], ['New'], ['Array']]
      const result = ehrUtils.downArrayToCsvFile('new file', array)
      should.not.exist(result)
    })
  })
})

describe('Test validators and formatters ', () => {
  it('validTimeStr', done => {
    // invalid tests
    ehrUtils.validTimeStr('2400').should.equal(false)
    ehrUtils.validTimeStr('2200').should.equal(false)
    ehrUtils.validTimeStr('0100').should.equal(false)
    ehrUtils.validTimeStr('24:00').should.equal(false)
    ehrUtils.validTimeStr('33:00').should.equal(false)
    ehrUtils.validTimeStr('23:60').should.equal(false)
    // valid tests    
    ehrUtils.validTimeStr('00:00').should.equal(true)
    ehrUtils.validTimeStr('01:00').should.equal(true)
    ehrUtils.validTimeStr('22:00').should.equal(true)
    ehrUtils.validTimeStr('23:59').should.equal(true)
    done()
  })

  it('validDayStr', done => {
    // invalid tests
    ehrUtils.validDayStr(-1).should.equal(false)
    ehrUtils.validDayStr(10).should.equal(false)
    ehrUtils.validDayStr(100).should.equal(false)
    ehrUtils.validDayStr(1000).should.equal(false)
    
    // valid tests
    ehrUtils.validDayStr(0).should.equal(true)
    ehrUtils.validDayStr(1).should.equal(true)
    ehrUtils.validDayStr(5).should.equal(true)
    ehrUtils.validDayStr(9).should.equal(true)
    done()
  })

  it('validRangeStr', done => {
    // invalid use cases
    ehrUtils.validRangeStr(1000, 0,100).should.equal(false)
    ehrUtils.validRangeStr(-1000, -100,100).should.equal(false)
    ehrUtils.validRangeStr('a', 0, 100).should.equal(false)
    // valid use cases
    ehrUtils.validRangeStr(10, 0,100).should.equal(true)
    ehrUtils.validRangeStr(-10, -100, 100).should.equal(true)
    ehrUtils.validRangeStr(100, 0, 1000).should.equal(true)
    done()
  })

  it('formatDateStr', done => {
    ehrUtils.formatDateStr('2011-10-11').should.equal('11 Oct 2011')
    ehrUtils.formatDateStr('2012-04-01').should.equal('01 Apr 2012')
    done()
  })

  it('formatTimeStr', done => {
    ehrUtils.formatTimeStr('2011-10-11T12:00').should.equal('2011-10-11 12:00 pm')
    ehrUtils.formatTimeStr('2011-10-11T15:00').should.equal('2011-10-11 3:00 pm')
    ehrUtils.formatTimeStr('2011-10-11T00:00').should.equal('2011-10-11 12:00 am')
    done()
  })

  it('isValidFilename', done => {
    ehrUtils.isValidFilename('new/file/name').should.equal(false)
    ehrUtils.isValidFilename('new-file-name').should.equal(true)
    done()

  })
})

describe('Axios error and file upload', () => {
  it('composeAxiosResponseError', done => {
    const response = { 
      status: 400,
      statusText: 'Bad Request',
      data: 'Please, check your request and try again'
    }

    const result = ehrUtils.composeAxiosResponseError({response}, '')
    result.should.equal(` status: ${response.status} ${response.statusText} ${response.data}`)
    done()
  })

  it('readFile', async () => {
    const fileContent = 'This is a mock file'
    const file = createFile(fileContent)
    should.exist(file)
    const result = await ehrUtils.readFile(file) 
    result.should.equal(fileContent)
  })

 
})


function composeData (ehrData) {
  let data = {
    license: Text.LICENSE_FULL_TEXT,
    ehrData: ehrData,
    fileName: 'somefilename'
  }
  return JSON.stringify(data,null,2)
}

