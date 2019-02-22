var should = require('should')
var request = require('supertest');
import EhrApp from '../../server/app';
import Config from '../../config/config'

const config = new Config('test')
const configuration = config.config

const ehrApp = new EhrApp()

describe('Make some server calls', function () {
  let app
  before(function (done) {
    ehrApp.setup(configuration)
    .then( () => {
      app = ehrApp.application
      done()
    })
  })

  it('send /api/assignments', function(done) {
    request(app)
    .get('/api/assignments')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      should.not.exist(err)
      should.exist(res)
      done();
    });
  })

  it('send /api/seed-data', function(done) {
    request(app)
    .get('/api/seed-data')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      should.not.exist(err)
      should.exist(res)
      // console.log('results from api/seed-data', res.body)
      done();
    });
  })

});