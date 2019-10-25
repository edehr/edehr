import should from 'should'
import EhrDefs from '../ehr-defs-grid'

describe('Test ehr defs', () => {
  it('getAllPageKeys', () => {
    let pageKeys = EhrDefs.getAllPageKeys()
    should.exist(pageKeys)
    pageKeys.length.should.be.greaterThanOrEqual(40)
  })
  it('getPageDefinition', () => {
    let pageKeys = EhrDefs.getAllPageKeys()
    let key = pageKeys[0]
    let aPage = EhrDefs.getPageDefinition(key)
    should.exist(aPage)
    // console.log('aPage;',aPage)
  })
})