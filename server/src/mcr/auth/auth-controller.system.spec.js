const should = require('should')
import AuthController from './auth-controller'
import AuthUtil from '../common/auth-util'

const NAME = 'auth-controller'
const authUtil = new AuthUtil({ authTokenSecret: 'defaultTokenSecretForJWT' })

let authController

describe(`${ NAME } -  `, () => {
  it('Properly instantiates the AuthController class', done => {
    authController = new AuthController(authUtil)
    should.exist(authController)
    done()
  })

  it('Verifies whether the instances have been created', done => {
    authController.should.have.property('_getAuthToken')
    authController.should.have.property('_getTokenContent')
    authController.should.have.property('route')
    done()

  })
})