var should = require('should')
const mongoose = require('mongoose')
import AssignmentController from './assignment-controller'
import Helper from '../common/test-helper'
import applicationConfiguration from '../../config/config'
const configuration = applicationConfiguration('test')
const helper = new Helper()

const typeName = 'AssignmentController'
const modelName = 'Assignment'

const logError = require('debug')('error')

function makeAssignmentController () {
  return new AssignmentController(configuration)
}

/* global describe it */
describe(`${typeName} controller testing`, function () {
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
  })
  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
  })

  it(`${typeName} be valid with model and key`, function (done) {
    let m = makeAssignmentController()
    m.should.have.property('locateAssignmentForStudent')
    done()
  })

  let key = '1'
  let toolConsumerId

  it(`${typeName} create model`, function (done) {
    let m = makeAssignmentController()
    let data = Helper.sampleAssignmentSpec(undefined, key)
    toolConsumerId = data.toolConsumer
    m.create(data)
      .then(doc => {
        should.exist(doc)
        // doc.seedData.should.have.property('foo');
        done()
      })
      .catch(err => {
        logError(`${typeName} create ${modelName} error ${err}`)
        done()
      })
  })

  it(`${typeName} use locateAssignmentForStudent`, function (done) {
    let m = makeAssignmentController()
    m.locateAssignmentForStudent(key, toolConsumerId)
      .then(doc => {
        // debug('results', doc)
        should.exist(doc)
        // doc.seedData.should.have.property('foo')
        done()
      })
      .catch(e => {
        logError('find one error', e)
      })
  })

})
