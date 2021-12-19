var should = require('should')
const mongoose = require('mongoose')
const ObjectID = require('mongodb').ObjectId
import BaseController from './base'
import Model from '../seed/seed-data'
import Helper from '../common/test-helper'
const helper = new Helper()

const typeName = 'BaseController'
const modelName = 'Seed'

const debug = require('debug')('server')
const logError = require('debug')('error')
// Use following to leave results in test database for inspection
// helper.setClear(false)

/* global describe it */
describe(`${typeName} controller testing`, function () {
  before(function (done) {
    helper.beforeTestDbDrop(done, mongoose)
  })

  after(function (done) {
    helper.afterTestsCloseDb(mongoose).then(() => done() )
  })

  it(`${typeName} be valid with model and key`, function (done) {
    let m = new BaseController(Model, 'user_id')
    m.should.have.property('baseFindOneQuery')
    m.should.have.property('read')
    m.should.have.property('delete')
    m.should.have.property('list')
    m.should.have.property('create')
    m.should.have.property('route')
    done()
  })

  it(`${typeName} create a ${modelName}`, function (done) {
    let m = new BaseController(Model, 'name')
    let data = {
      toolConsumer: new ObjectID('56955ca46063c5600627f393'),
      name: '1234',
      description: 'a test seed',
      ehrData: { foo: 'bar' }
    }
    m.create(data)
      .then(doc => {
        should.exist(doc)
        doc.should.have.property('ehrData')
        doc.ehrData.should.have.property('foo')
        done()
      })
      .catch(err => {
        logError(`${typeName} create one ${modelName} error ${err}`)
        done()
      })
  })

  it(`${typeName} use findOne`, function (done) {
    let m = new BaseController(Model, 'name')
    m.findOne({ name: '1234' })
      .then(doc => {
        // debug('results', doc)
        should.exist(doc)
        doc.should.have.property('ehrData')
        doc.ehrData.should.have.property('foo')
        done()
      })
      .catch(e => {
        logError('find one error', e)
      })
  })

  it(`${typeName} create, read, then delete model`, function (done) {
    let m = new BaseController(Model, '_id')
    let key = 'testing2'
    let data = {
      name: key,
      description: 'a test seed',
      ehrData: { foo: 'bar' }
    }
    let id
    m.create(data)
      .then(doc => {
        should.exist(doc)
        should.exist(doc.ehrData)
        doc.ehrData.should.have.property('foo')
        return doc
      })
      .then(doc => {
        should.exist(doc)
        // debug('read id ', doc._id)
        id = doc._id
        return m.read(id)
      })
      .then(doc => {
        // debug('results of read doc:', doc)
        should.exist(doc)
        should.exist(doc.seeddata)
        let model = doc.seeddata
        debug('results of read model:', model)
        model.should.have.property('ehrData')
        return m.delete(id)
      })
      .then(() => {
        done()
      })
      .catch(err => {
        logError(`${typeName} create a ${modelName} error: ${err}`)
        done()
      })
  })
})
