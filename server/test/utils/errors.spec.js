var should = require('should')
import {
  AssignmentMismatchError,
  SystemError,
  ConfigurationChangeError,
  ParameterError
} from '../../utils/errors'

let message = 'a message'

let classes = [AssignmentMismatchError, SystemError, ConfigurationChangeError, ParameterError]
let names = ['AssignmentMismatchError', 'SystemError', 'ConfigurationChangeError', 'ParameterError']
let codes = [400, 500, 400, 400]

/* global describe it */
describe('custom error classes', function() {
  for (let i = 0; i < classes.length; i++) {
    let obj = classes[i]
    let name = names[i]
    let code = codes[i]
    it(name, function(done) {
      should.exist(obj)
      let err = new obj(message)
      should.exist(err)
      // err.should.have.property(status)
      err.status.should.equal(code)
      done()
    })
  }
})
