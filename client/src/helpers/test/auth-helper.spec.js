const should = require('should')
import authHelper from '../auth-helper'
import { prepareAxiosResponse } from './axios-mock-helper'
import StoreHelper from '../store-helper'
import { setAPIUrl } from './testHelper'

jest.mock('axios')

const refreshToken = 'testRefreshToken'
const token = 'authToken'
const adminPass = 'adminPass'

describe('auth-helper tests', () => {
  it('getToken', async done => {
    await prepareAxiosResponse('post', { token })
    should.doesNotThrow(async () => {
      const result = await authHelper.getToken(refreshToken)
      result.data.token.should.equal(token)
      done()
    })
  })

  it('adminLogin', async done => {
    await prepareAxiosResponse('post', { auth: true, token: 'adminToken' })
    should.doesNotThrow(async () => {
      const result = await authHelper.adminLogin(adminPass)
      result.data.auth.should.equal(true)
      result.data.token.should.equal('adminToken')
      done()
    })
  })

  it('adminValidate', async done => {
    await prepareAxiosResponse('post', { validated: true } )
    should.doesNotThrow( async () => {
      const result = await authHelper.adminValidate()
      result.data.validated.should.equal(true)
      result.status.should.equal(200)
      done()
    })
  })

  it('_getApiUrl', done => {
    setAPIUrl()
    const storeUrl = StoreHelper.apiUrlGet()
    const _apiUrl = authHelper._getApiUrl()
    _apiUrl.should.equal(storeUrl)
    done()
  })
})