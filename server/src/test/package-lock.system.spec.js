import packageLock from '../../package-lock.json'
const should = require('should')

describe('node version tests', () => {
  it('package lock must be version 3', () => {
    should.exist(packageLock.lockfileVersion)
    // is now version 3 since we want to use node 20
    should.equal(packageLock.lockfileVersion, 3, 'package-lock file must be version 3')
  })

})
