var should = require('should')

const request = require('supertest')
import LookaheadController from './lookahead-controller'
import EhrApp from '../../server/app'
import Config from '../../config/config'

const config = new Config('test')
const configuration = config.config
const ehrApp = new EhrApp()
const BASE = '/api/lookahead'
const typeName = 'Lookahead'

// Use following to leave results in test database for inspection
/* global describe it */
describe(`${typeName} controller testing`, function () {

  let app
  let looker
  before(function (done) {
    ehrApp
      .setup(configuration)
      .then(() => {
        app = ehrApp.application
        looker = new LookaheadController()
        done()
      })
  })

  it('LookaheadController can be created', function (done) {
    looker.should.have.property('lookupMeds')
    done()
  })

  it('use lookup meds', function (done) {
    looker.lookupMeds('dextrose').then( response => {
      should.exist(response.count)
      response.count.should.be.greaterThan(1)
      done()
    })
  })

  it('use lookup meds with empty terms', function (done) {
    looker.lookupMeds('').catch( reject => {
      should.exist(reject)
      done()
    })
  })

  it('use lookup meds with too short terms', function (done) {
    looker.lookupMeds('de').catch( reject => {
      should.exist(reject)
      done()
    })
  })

  it('use lookup meds with invalid type in term', function (done) {
    looker.lookupMeds(true).catch( reject => {
      should.exist(reject)
      done()
    })
  })

  it(`get lookahead meds`, function (done) {
    let url = BASE
    url += '/medications/dextrose'
    request(app)
      .get(url)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        should.not.exist(err)
        should.exist(res)
        should.exist(res.body)
        res.body.should.be.object
        let response = res.body
        should.exist(response.count)
        should.exist(response.results)
        response.count.should.be.greaterThan(1)
        done()
      })
  })

})
