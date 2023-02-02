import {
  convertTimeStr,
  convertTimeStrToMilTime, extractDay,
  extractMonth,
  validateAgeValue
} from '../ehr-definitions/ehr-def-utils'
const should = require('should')
describe ( ' convertTimeStrToMilTime', () => {
  function testIt ( v, e) {
    let r = convertTimeStrToMilTime(v)
    r.should.equal(e)
  }
  it ('convertTimeStrToMilTime', () => {
    let r, v
    r = convertTimeStrToMilTime()
    should.not.exist(r)
    testIt('','')
    testIt(45,45)
    v = {}
    testIt(v,v)
    testIt('00:00','0000')
    testIt('00:30','0030')
    testIt('10:30','1030')
  })
})
describe ( ' convert functions', () => {
  function testIt ( v, e) {
    let r = convertTimeStr(v)
    r.should.equal(e)
  }
  it ('convertTimeStr', () => {
    let r, v
    r = convertTimeStr()
    should.not.exist(r)
    testIt('','')
    testIt(45,45)
    v = {}
    testIt(v,v)
    testIt('00:00',0)
    testIt('00:30',30)
    testIt('10:30',1030)
  })
})


describe ( ' validateAgeValue', () => {
  it ('validateAgeValue invalid', () => {
    validateAgeValue('bad').should.equal(false)
    validateAgeValue('-1').should.equal(false)
    validateAgeValue('151').should.equal(false)
  })
  it ('validateAgeValue valid', () => {
    validateAgeValue('0').should.equal(true)
    validateAgeValue('150').should.equal(true)
  })
})

describe ( ' extractMonth', () => {
  it ('extractMonth invalid', () => {
    should.not.exist(extractMonth('bad'))
    should.not.exist(extractMonth('1990-13-89'))
  })
  it ('extractMonth valid', () => {
    extractMonth('1990-01-10').should.equal(1)
    extractMonth('1990-04-10').should.equal(4)
    extractMonth('1990-12-10').should.equal(12)
    extractMonth('1990-03-09T00:00').should.equal(3)
  })
})

describe ( ' extractDay', () => {
  it ('extractDay invalid', () => {
    should.not.exist(extractDay('bad'))
    should.not.exist(extractDay('1990-13-89'))
    should.not.exist(extractDay('1990-3-9'))
  })
  it ('extractDay valid', () => {
    extractDay('1990-01-01').should.equal(1)
    extractDay('1990-01-31').should.equal(31)
    extractDay('1990-03-09T00:00').should.equal(9)
  })
})
