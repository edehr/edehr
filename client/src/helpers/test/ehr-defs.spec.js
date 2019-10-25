import should from 'should'
import { getPageDefinition, getAllPageKeys } from '../../helpers/ehr-defs-grid'

describe('Test ehr defs', () => {
  it('getAllPageKeys', () => {
    let pageKeys = getAllPageKeys()
    should.exist(pageKeys)
    pageKeys.length.should.be.greaterThanOrEqual(40)
  })
  it('getPageDefinition', () => {
    let pageKeys = getAllPageKeys()
    let key = pageKeys[0]
    let aPage = getPageDefinition(key)
    should.exist(aPage)
    // console.log('aPage;',aPage)
  })
})