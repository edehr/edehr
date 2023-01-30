import should from 'should'
import EhrCheckset from '../ehr-definitions/ehr-checkset'

describe ( ' ehr checkset', () => {
  it ('EhrCheckset', () => {
    const ec = new EhrCheckset()
    should.exist(ec)
  })
})

describe('dbValueToCheckSet tests', function () {
  it ('modelChange', () => {
    const checkOptions = EhrCheckset.dbValueToCheckSet('foo,bar')
    should.exist(checkOptions)
    Array.isArray(checkOptions).should.equal(true)
    console.log(checkOptions)
  })
})

describe('modelChange tests', function () {
  it ('modelChange', () => {
    EhrCheckset.modelChange(['foo','bar']).should.equal('foo,bar')
    EhrCheckset.modelChange(['foo','','bar']).should.equal('foo,bar')
  })
})

describe('makeHuman tests', function () {
  it ('makeHuman', () => {
    const results = EhrCheckset.makeHuman('mixedUlcer', 'integumentaryAssessment', {key: 'stageType'})
    console.log('make human', results)
  })
})

describe('optionsToChecklist tests', function () {
  it ('optionsToChecklist', () => {
    const options = [
      {
        key: 'R&M',
        text: 'R&M'
      },
      {
        key: 'Urine electrolytes',
        text: 'Urine electrolytes'
      },
      {
        key: 'Urine creatinine',
        text: 'Urine creatinine'
      }
    ]
    const expected = [
      { prop: 'r&m', text: 'R&M' },
      { prop: 'urineElectrolytes', text: 'Urine electrolytes' },
      { prop: 'urineCreatinine', text: 'Urine creatinine' }
    ]
    const checkOptions = EhrCheckset.optionsToChecklist(options)
    should.exist(checkOptions)
    Array.isArray(checkOptions).should.equal(true)
    checkOptions[0].should.have.property('prop')
    checkOptions[0].prop.should.equal(expected[0].prop)
  })
})
