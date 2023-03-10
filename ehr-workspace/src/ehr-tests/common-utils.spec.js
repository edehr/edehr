
import should from 'should'
import {
  decamelize,
  decoupleObject, hashString, isObject, isString, removeEmptyProperties,
  validDayStr,
  validNumberStr,
  validRangeStr,
  validTimeStr
} from '../ehr-definitions/common-utils'


describe ( 'Common utilities', () => {
  it ('validTimeStr', () => {
    validTimeStr('0000').should.equal(true)
    validTimeStr('2359').should.equal(true)
  })
  it ('in valid TimeStr', () => {
    validTimeStr('000').should.equal(false)
    validTimeStr('2400').should.equal(false)
    validTimeStr('00001').should.equal(false)
  })

  it ('validDayStr', () => {
    validDayStr('0').should.equal(true)
  })

  it ('validNumberStr', () => {
    validNumberStr('123').should.equal(true)
  })

  it ('validRangeStr', () => {
    validRangeStr('123', 0, 200).should.equal(true)
  })

})

describe('object tests', function () {
  it ('isObject', () => {
    isObject({}).should.equal(true)
    isObject('').should.equal(false)
    isObject('obj').should.equal(false)
  })
  it ('isString', () => {
    isString({}).should.equal(false)
    isString('str').should.equal(true)
  })
})


describe('decoupleObject tests', function () {
  it ('decoupleObject', () => {
    const a = { k: 'foo'}
    const b = decoupleObject(a)
    b.should.have.property('k')
    a.k = 'bar'
    b.k.should.equal('foo')
  })
})

describe('removeEmptyProperties tests', function () {
  it ('removeEmptyProperties', () => {
    const a = {
      k: 'foo',
      m: undefined
    }
    const b = removeEmptyProperties(a)
    b.should.have.property('k')
    b.should.not.have.property('m')
  })
})

describe('decamelize tests', function () {
  it ('decamelize', () => {
    decamelize('ThisIsACamelCaseString').should.equal('this_is_a_camel_case_string')
  })
})

describe.skip('hash string tests', function () {
  it ('hash undefined --> undefined',() => {
    let hsh
    hsh = hashString()
    should.not.exist(hsh)
  })
  it ('hash number --> undefined',() => {
    let hsh
    hsh = hashString(42)
    should.not.exist(hsh)
  })
  it ('hash object --> undefined',() => {
    let hsh
    hsh = hashString({})
    should.not.exist(hsh)
  })
  it ('hash array --> undefined',() => {
    let hsh
    hsh = hashString([])
    should.not.exist(hsh)
  })
  it ('hash a small string',() => {
    let hsh
    hsh = hashString('ThisIsACamelCaseString')
    should.exist(hsh)
    hsh.should.equal('ThisIsACamelCaseString')
  })
  it ('hash a larger string',() => {
    let str = 'ThisIsACamelCaseString ThisIsACamelCaseString ThisIsACamelCaseString'
    let h1 = 'dd9cff979d671fa936c74670f6eb7c77'
    let h2 = '7e9a7897f2554c45878798c633af609c'
    let hsh
    hsh = hashString(str)
    should.exist(hsh)
    hsh.should.equal(h1)
    str += '.'
    hsh = hashString(str)
    hsh.should.not.equal(h1)
    hsh.should.equal(h2)
  })
  it ('hash the same sting',() => {
    let str = 'ThisIsACamelCaseString ThisIsACamelCaseString ThisIsACamelCaseString'
    let h1 = 'dd9cff979d671fa936c74670f6eb7c77'
    let hsh
    hsh = hashString(str)
    hsh.should.equal(h1)
    hsh = hashString(str)
    hsh.should.equal(h1)
  })
})
