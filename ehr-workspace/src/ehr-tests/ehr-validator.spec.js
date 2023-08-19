import ehrValidations from '../ehr-definitions/ehr-validations'
const should = require('should')


describe('Test EHR validator time24 ', () => {
  let vName = 'time24'

  it(`existence ${vName}`, () => {
    should.exist(ehrValidations[vName])
  })

  it(`is function ${vName}`, (done) => {
    const validator = ehrValidations[vName]
    let aName = 'a field name'
    let aValue = 7
    should.doesNotThrow(() => {
      const result = validator(aName, aValue)
      should.exist(result)
      done()
    })
  })
  it(`Valid times ${vName}`, () => {
    const validator = ehrValidations[vName]
    let aName = 'a field name'
    let aValue = '0755'
    let result = validator(aName, aValue)
    should.not.exist(result)

    aValue = '0000'
    result = validator(aName, aValue)
    should.not.exist(result)

    aValue = '2359'
    result = validator(aName, aValue)
    should.not.exist(result)

    aValue = ''
    result = validator(aName, aValue)
    should.not.exist(result)

  })
  it(`Invalid times ${vName}`, (done) => {
    const validator = ehrValidations[vName]
    let aName = 'a field name'
    let aValue = '7:55'
    let result = validator(aName, aValue)
    should.exist(result)
    aValue = '0070'
    result = validator(aName, aValue)
    should.exist(result)
    aValue = '2400'
    result = validator(aName, aValue)
    should.exist(result)

    done()
  })
})

describe('Test EHR validator day', () => {
  let vName = 'visitDay'

  it(`existence ${vName}`, () => {
    should.exist(ehrValidations[vName])
  })

  it(`is function ${vName}`, (done) => {
    const validator = ehrValidations[vName]
    let aName = 'a field name'
    let aValue = 'foo'
    should.doesNotThrow(() => {
      const result = validator(aName, aValue)
      should.exist(result)
      done()
    })
  })
  it(`Valid times ${vName}`, () => {
    const validator = ehrValidations[vName]
    let aName = 'a field name'
    let aValue = '0'
    let result = validator(aName, aValue)
    should.not.exist(result)

    aValue = '9'
    result = validator(aName, aValue)
    should.not.exist(result)

    // empty is valid
    aValue = ''
    result = validator(aName, aValue)
    should.not.exist(result)

  })
  it(`Invalid times ${vName}`, () => {
    const validator = ehrValidations[vName]
    let aName = 'a field name'
    let aValue = '-1'
    let result = validator(aName, aValue)
    should.exist(result)
    aValue = '20'
    result = validator(aName, aValue)
    should.exist(result)
    aValue = 'foo'
    result = validator(aName, aValue)
    should.exist(result)
  })
})

describe('Test EHR CVP', () => {
  let vName = 'cvp'
  let aName = 'A CVP value'
  let min = 0, max = 30 //these are the correct value but for testing they don't have to be
  it(`existence ${vName}`, () => {
    should.exist(ehrValidations[vName])
  })

  it('Valid CVP values', (done) => {
    const validator = ehrValidations[vName]
    let aValue = '30' // a valid value for CVP
    should.doesNotThrow(() => {
      let result = validator(aName, aValue)
      should.not.exist(result)

      aValue = ''
      result = validator(aName, aValue, min, max)
      should.not.exist(result)

      done()
    })
  })
  it('Invalid CVP values', (done) => {
    const validator = ehrValidations[vName]
    let aValue = '31' // a valid value for CVP
    should.doesNotThrow(() => {
      let result = validator(aName, aValue)
      should.exist(result)
      result.should.be.an.instanceOf(String)

      aValue = 'f'
      result = validator(aName, aValue)
      should.exist(result)
      result.should.be.an.instanceOf(String)

      done()
    })
  })
})

describe('Test EHR range', () => {
  let vName = 'range'
  let aName = 'A value that is bound by a range'
  let min = 0, max = 10

  it(`existence ${vName}`, () => {
    should.exist(ehrValidations[vName])
  })

  it('Valid range values', (done) => {
    const validator = ehrValidations[vName]
    let aValue = '3'
    should.doesNotThrow(() => {
      let result = validator(aName, aValue, min, max)
      should.not.exist(result)

      aValue = '0'
      result = validator(aName, aValue, min, max)
      should.not.exist(result)

      aValue = '10'
      result = validator(aName, aValue, min, max)
      should.not.exist(result)

      aValue = ''
      result = validator(aName, aValue, min, max)
      should.not.exist(result)

      done()
    })
  })
  it('Invalid range values', (done) => {
    const validator = ehrValidations[vName]
    let aValue = '11'
    should.doesNotThrow(() => {
      let result = validator(aName, aValue, min, max)
      should.exist(result)
      result.should.be.an.instanceOf(String)

      aValue = '-1'
      result = validator(aName, aValue, min, max)
      should.exist(result)
      result.should.be.an.instanceOf(String)

      aValue = 'foo'
      result = validator(aName, aValue, min, max)
      should.exist(result)
      result.should.be.an.instanceOf(String)

      done()
    })
  })
})

