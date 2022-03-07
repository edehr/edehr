/**
 * @jest-environment jsdom
 */
const should = require('should')
import authHelper from '../auth-helper'
import { prepareAxiosResponse } from './axios-mock-helper'
jest.mock('axios')

const refreshToken = 'testRefreshToken'
const token = 'authToken'
const adminPass = 'adminPass'

describe('auth-helper tests', () => {
  it('getToken', async () => {
    await prepareAxiosResponse('post', { token })
    should.doesNotThrow(async () => {
      const result = await authHelper.getToken(refreshToken)
      result.data.token.should.equal(token)
    })
  })

  it('adminLogin', async () => {
    await prepareAxiosResponse('post', { auth: true, token: 'adminToken' })
    should.doesNotThrow(async () => {
      const result = await authHelper.adminLogin(adminPass)
      result.data.auth.should.equal(true)
      result.data.token.should.equal('adminToken')
    })
  })

  it('adminValidate', async () => {
    await prepareAxiosResponse('post', { validated: true } )
    should.doesNotThrow( async () => {
      const result = await authHelper.adminValidate()
      result.data.validated.should.equal(true)
      result.status.should.equal(200)
    })
  })

})