import DemoController from './demo-controller'
import AuthController from '../auth/auth-controller'

const typeName = 'demo'
const _factorTypeName = (description = '') => `${typeName} - ${description}` 
const auth = new AuthController({ authTokenSecret: 'unit-test-secret' })
let demoController = {}

describe(_factorTypeName('Properly instantiates the class'), () => {
  demoController = new DemoController(auth)
  it('has _createDemoToolConsumer', () => {
    demoController.should.have.property('_createDemoToolConsumer')
    demoController.should.have.property('submitLTIData')
    demoController.should.have.property('deleteDemoData')
  }) 
})

