const should = require('should')
const { setAuthHeader } = require('../axios-helper')
let axios = require('axios')
jest.mock('axios')

describe('Axios helpers testing', () => {
  it('properly sets axios header', () => {
    const token = 'token'
    should.doesNotThrow(() => setAuthHeader(token))
    axios.defaults.headers['Authorization'].should.equal(`Bearer ${token}`)
  })

})
