const should = require('should')
import Config from '../../config/config'
import applicationConfiguration from '../../config/config'
const configuration = applicationConfiguration('test')
import FileController from './files-controller'

const NAME = 'file-controller'

let fileController

describe(`${ NAME } -  `, () => {
  it('Properly instantiates the AuthController class', done => {
    fileController = new FileController(configuration)
    should.exist(fileController)
    done()
  })

  it('Verifies whether the instance is as expected', done => {
    fileController.should.have.property('_createStorage')
    fileController.should.have.property('publicRoute')
    fileController.should.have.property('route')
    done()

  })
})
