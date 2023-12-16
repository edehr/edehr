import packageLock from '../../package-lock.json'
const should = require('should')

describe('node version tests', () => {
  it('package lock must be version 2', () => {
    should.exist(packageLock.lockfileVersion)
    // is now version 2 since we want to use node 18
    should.equal(packageLock.lockfileVersion, 2, 'package-lock file must be version 2')
  })

})
