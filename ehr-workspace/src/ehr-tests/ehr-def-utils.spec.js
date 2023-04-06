import {
  calculateMedicationConcentration,
  calculateMedicationMaxDosage,
  convertTimeStr,
  convertTimeStrToMilTime, extractDay,
  extractMonth, medAdminTimes, processDependentOnChange,
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

describe ( ' med admin times', () => {
  function testit (times, vals) {
    should.exist(times)
    true.should.equal(Array.isArray(times))
    times.length.should.equal(vals.length)
    for(let i = 0; i < vals.length; i++) {
      times[i].should.equal(vals[i])
    }
  }
  it('BID', () => {
    const times = medAdminTimes('BID')
    testit(times,['0900','1700'])
  })
  it('BID / Q12H', () => {
    const times = medAdminTimes('BID / Q12H')
    testit(times,['0800','2000'])
  })
  it('TID', () => {
    const times = medAdminTimes('TID')
    testit(times,['0800', '1600', '2200'])
  })
  it('Q12H', () => {
    const times = medAdminTimes('Q12H')
    testit(times, ['0800', '2000'])
  })
  it('Q8H', () => {
    const times = medAdminTimes('Q8H')
    testit(times, ['0600','1400', '2200'])
  })
  it('QID', () => {
    const times = medAdminTimes('QID')
    testit(times, ['0800','1200', '1700', '2200'])
  })
  it('Q6H', () => {
    const times = medAdminTimes('Q6H')
    testit(times, ['0200', '0600', '1200', '1800', '2200'])
  })
  it('Q4H', () => {
    const times = medAdminTimes('Q4H')
    testit(times, ['0200', '0600', '1000', '1400', '1800', '2200'])
  })

})

describe (' process dependent on change', () => {

  it ('med schedule', () => {
    const dependentDef = {type: 'onChange'}
    const pageKey = 'medicationOrders'
    let value, elementKey, result

    value = 'Q4H'
    elementKey = 'med_time1'
    result = processDependentOnChange(dependentDef, value, pageKey, elementKey)
    should.exist(result, 'Q4H med_time1')
    result.should.equal('0200')

    value = 'Q4H'
    elementKey = 'med_time3'
    result = processDependentOnChange(dependentDef, value, pageKey, elementKey)
    should.exist(result, 'Q4H med_time3')
    result.should.equal('1000')

    value = 'Q8H'
    elementKey = 'med_time1'
    result = processDependentOnChange(dependentDef, value, pageKey, elementKey)
    should.exist(result, 'Q8H med_time1')
    result.should.equal('0600')
    elementKey = 'med_time6'
    result = processDependentOnChange(dependentDef, value, pageKey, elementKey)
    should.not.exist(result, 'Q8H dependent ')
  })
})

describe.skip ( ' calculateMedicationConcentration', () => {
  it ('valid', () => {
    const srcValues = [ 10, 1000, 24, 'hrs']
    let results
    let expected
    expected = 10/1000/24*60
    results = calculateMedicationConcentration(srcValues)
    should.exist(results)
    console.log('-----------------', expected, results)
    results.should.equal(expected)
  })

})

describe ( ' calculateMedicationMaxDosage', () => {
  it ('valid', () => {
    const srcValues = {
      med_dose: '200mg',
      med_time1: '1222',
      med_time2: '1222',
      med_time3: '1222',
    }
    let results
    results = calculateMedicationMaxDosage(srcValues)
    should.exist(results)
    results.should.equal('600 mg')
  })
  it ('valid', () => {
    const srcValues = {
      med_dose: '0.2mg',
      med_time1: '1222',
      med_time2: '1222',
      med_time3: '1222',
    }
    let results
    results = calculateMedicationMaxDosage(srcValues)
    should.exist(results)
    results.should.equal('0.6 mg')
  })
})
