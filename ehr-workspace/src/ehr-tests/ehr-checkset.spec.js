import should from 'should'
import EhrCheckset from '../ehr-definitions/ehr-checkset'

describe ( ' ehr checkset', () => {
  it ('EhrCheckset', () => {
    const ec = new EhrCheckset()
    should.exist(ec)
  })
})

describe('dbValueToCheckSet tests', function () {
  it ('dbValueToCheckSet', () => {
    const checkOptions = EhrCheckset.dbValueToCheckSet('foo,bar')
    should.exist(checkOptions)
    Array.isArray(checkOptions).should.equal(true)
    // console.log(checkOptions)
  })
})

describe('checkSetToDbValue tests', function () {
  it ('checkSetToDbValue', () => {
    EhrCheckset.checkSetToDbValue(['foo','bar']).should.equal('foo,bar')
    EhrCheckset.checkSetToDbValue(['foo','','bar']).should.equal('foo,bar')
  })
})

describe('makeHuman tests', function () {
  it ('makeHuman', () => {
    const results = EhrCheckset.makeHuman('diabetic/neuropathicUlcer', 'integumentaryAssessment', 'stageType')
  })
  it ('invalid val', (done) => {
    should.throws( () => {
      EhrCheckset.makeHuman('diabetic', 'integumentaryAssessment', 'stageType')
    }, (err) => {
      should.exist(err)
      should.exist(err.message)
      console.log(err.message)
      err.message.includes('Could not match').should.equal(true)
      done()
    })
  })
  it ('empty string val', (done) => {
    should.doesNotThrow( () => {
      EhrCheckset.makeHuman('', 'integumentaryAssessment', 'stageType').should.equal('')
      done()
    }, (err) => {
      should.not.exist(err)
      done()
    })
  })

})

describe('optionsToChecklist tests', function () {
  it ('optionsToChecklist', () => {
    const options = [
      {
        key: 'r&m',
        text: 'R&M'
      },
      {
        key: 'urineElectrolytes',
        text: 'Urine electrolytes'
      },
      {
        key: 'urineCreatinine',
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
    checkOptions.length.should.equal(3)
    checkOptions[0].should.have.property('prop')
    checkOptions[0].prop.should.equal(expected[0].prop)
    checkOptions[1].prop.should.equal(expected[1].prop)
    checkOptions[2].prop.should.equal(expected[2].prop)

  })
})
