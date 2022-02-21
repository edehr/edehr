import packageLock from '../../package-lock.json'
const should = require('should')

describe('page-definitions tests', () => {
  it('package lock must be version 1', () => {
    should.exist(packageLock.lockfileVersion)
    should.equal(packageLock.lockfileVersion, 1, 'package-lock file must be version 1')
  })

})
