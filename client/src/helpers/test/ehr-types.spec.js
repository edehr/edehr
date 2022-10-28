const should = require('should')
import EhrTypes from '@/ehr-definitions/ehr-types'
// const EhrTypes = require('../ehr-types')


describe('ehr-types test | testing properties', () => {
  it('has PROPS', () => {
    should.exists(EhrTypes.elementProperties)
    EhrTypes.elementProperties.should.not.be.empty()
  })

  it('has inputTypes', () => {
    should.exists(EhrTypes.dataInputTypes)
    EhrTypes.dataInputTypes.should.not.be.empty()
  })

  it('has dependentOn', () => {
    should.exists(EhrTypes.dependentOn)
    EhrTypes.dependentOn.should.not.be.empty()
  })

  it('nondataInputType', () => {
    should.exists(EhrTypes.nondataInputType)
    EhrTypes.nondataInputType.should.not.be.empty()
  })

  it('structuralTypes', () => {
    should.exists(EhrTypes.structuralTypes)
    EhrTypes.structuralTypes.should.not.be.empty()
  })

  it('shortFormTypes', () => {
    should.exists(EhrTypes.shortFormTypes)
    EhrTypes.shortFormTypes.should.not.be.empty()
  })

})
