import EhrDefs from '../ehr-definitions/ehr-defs-grid'
import EhrTypes from '../ehr-definitions/ehr-types'
const should = require('should')
const depDefs = EhrTypes.dependentOn

describe ('testing dependsOn', () =>{

  it ('onChange:med_scheduled', () => {
    const ref = 'onChange:med_scheduled'
    const def = EhrDefs.parseDependentOn(ref)
    def.type.should.equal(depDefs.type.onChange)
    def.refValue.should.equal('med_scheduled')
  })

  it ('echo:med_medication', () => {
    const ref = 'echo:med_medication'
    const def = EhrDefs.parseDependentOn(ref)
    def.type.should.equal(depDefs.type.echo)
    def.refValue.should.equal('med_medication')
  })

  it('medications orders page has valid onChange defs', done => {
    const pageDataKey = 'medicationOrders'
    const filterValue = 'med_time1'
    const filterKey = 'elementKey'
    const desiredProperty = 'dependentOn'
    const result = EhrDefs.getChildElements(pageDataKey, filterKey, filterValue, desiredProperty)
    should.exists(result)
    result.length.should.equal(1)
    result[0].should.equal('onChange:med_scheduled')
    done()
  })

  it('medications orders page has valid echo defs', done => {
    const pageDataKey = 'medicationOrders'
    const filterValue = 'med_c2_medication'
    const filterKey = 'elementKey'
    const desiredProperty = 'dependentOn'
    const result = EhrDefs.getChildElements(pageDataKey, filterKey, filterValue, desiredProperty)
    should.exists(result)
    result.length.should.equal(1)
    result[0].should.equal('echo:med_medication')
    done()
  })
  // getAllPageChildren
})
