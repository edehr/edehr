var should = require('should')
import { ok, fail } from '../../controllers/utils'
import { ltiVersions } from '../../utils/lti'

/* global describe it */
describe('utils helper file', function() {
  it('lit versions', function(done) {
    should.exist(ltiVersions)
    let versions = ltiVersions()
    versions.should.be.an.Array()
    versions.should.have.length(1)
    let v = versions[0]
    v.should.equal('LTI-1p0')
    done()
  })

  it('ok function', function(done) {
    should.exist(ok)
    let res = {
      json: function(data) {
        res.data = JSON.stringify(data)
      }
    }
    let r = ok(res)
    r({ foo: 'bar' })
    res.should.have.property('data')
    res.data.should.equal('{"foo":"bar"}')
    done()
  })

  it('fail function', function(done) {
    should.exist(fail)
    let res = {
      status: function(code) {
        res.code = code
        return this
      },
      send: function(message) {
        res.message = message
        return this
      }
    }
    let r = fail(res)
    let error
    error = { name: 'test error', message: 'test message' }
    r(error)
    res.should.have.property('code')
    res.code.should.equal(404)

    error = { name: 'ValidationError', message: 'test message' }
    r(error)
    res.should.have.property('code')
    res.code.should.equal(400)

    error = { name: 'CastError', message: 'test message' }
    r(error)
    res.should.have.property('code')
    res.code.should.equal(500)

    done()
  })
})
