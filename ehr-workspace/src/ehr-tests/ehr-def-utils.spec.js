import { convertTimeStr, convertTimeStrToMilTime } from '../ehr-definitions/ehr-def-utils'

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

