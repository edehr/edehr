import PeriodDefs from '../../../src/inside/components/mar/period-defs'
import should from 'should'

describe('PeriodDefs', () => {
  it('PeriodDefs', () => {
    let pDefs = new PeriodDefs()
    should.exist(pDefs)
    pDefs.should.have.property('periodList')
    let periodList = pDefs.periodList
    should.exist(periodList)
    should(periodList).be.array
    periodList.should.have.length(5)

    let aPeriod = periodList[2]
    aPeriod.should.have.property('key')
    let aKey = aPeriod.key
    pDefs.should.have.property('findPeriod')
    let p = pDefs.findPeriod(aKey)
    should.exist(p)

  })
})
