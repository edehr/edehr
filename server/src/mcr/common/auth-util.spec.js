var should = require('should')

import AuthUtil from './auth-util'
import Helper from './test-helper'
import sinon from 'sinon'

const BASE = 'AuthUtil'

const visitId = Helper.sampleObjectId(true)

const config = { authTokenSecret: 'defaultTokenSecretForJWT'}

let clock
describe(`${BASE} - Running tests on class`, () => {
  beforeEach(() => {
    clock = sinon.useFakeTimers()
  })
  afterEach(() => {
    clock.restore()
  })
  const authUtil = new AuthUtil(config)
  let token, refreshToken
  it(`${BASE} - is properly instantiated`, () => {
    authUtil.should.have.property('authenticate')
    authUtil.should.have.property('createToken')
    authUtil.should.have.property('createRefreshToken')
    authUtil.should.have.property('validateToken')
  })
  
  it(`${BASE} - Properly creates a token`, (done) => {
    should.doesNotThrow(() => authUtil.createToken({ visitId }))
    token = authUtil.createToken({ visitId })
    should.exist(token)
    token.should.equal(authUtil.createToken({ visitId }))
    done()
  })

  it(`${BASE} - Is the created token valid?  `, (done) => {
    should.doesNotThrow(() => authUtil.authenticate(`Bearer ${token}`))
    const result = authUtil.authenticate(`Bearer ${token}`)
    should.exist(result.visitId)
    result.visitId.should.equal(visitId)
    done()
  })

  it(`${BASE} - Create refresh token`, done => {
    should.doesNotThrow(() => authUtil.createRefreshToken(token))
    refreshToken = authUtil.createRefreshToken(token)
    should.exist(refreshToken)
    done()
  })

  it(`${BASE} - Refresh token should validate`, (done) => {
    should.doesNotThrow(() => authUtil.authenticate(`Bearer ${refreshToken}`))
    const result = authUtil.authenticate(`Bearer ${refreshToken}`)
    should.exist(result.token)
    result.token.should.equal(token)
    done()
  })

  it(`${BASE} - Refresh token should not validate, as it's expired`, done => {
    clock.tick(60000)
    should.throws(() => authUtil.authenticate(`Bearer ${refreshToken}`), 'refreshToken hasn\'t expired yet...')
    done()
  })

})