var should = require('should')
const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
import Helper from '../helper'
const helper = new Helper()
import BaseController from '../../controllers/base'
import Model from '../../models/seed-data'

const typeName = 'BaseController'
const modelName = 'Seed'
const collectionName = 'seeddatas'

// Use following to leave results in test database for inspection
// helper.setClear(false)

/* global describe it */
describe(`${typeName} controller testing`, function() {
  before(function(done) {
    helper.before(done, mongoose)
  })

  after(function(done) {
    helper.afterTests(done, mongoose, collectionName)
  })

  it(`${typeName} be valid with model and key`, function(done) {
    let m = new BaseController(Model, 'user_id')
    m.should.have.property('baseFindOneQuery')
    m.should.have.property('read')
    m.should.have.property('delete')
    m.should.have.property('list')
    m.should.have.property('create')
    m.should.have.property('route')
    done()
  })

  it(`${typeName} create a ${modelName}`, function(done) {
    let m = new BaseController(Model, 'name')
    let data = {
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
        console.log(`${typeName} create one ${modelName} error ${err}`)
        done()
      })
  })

  it(`${typeName} use findOne`, function(done) {
    let m = new BaseController(Model, 'name')
    m.findOne({ name: '1234' })
      .then(doc => {
        // console.log('results', doc)
        should.exist(doc)
        doc.should.have.property('ehrData')
        doc.ehrData.should.have.property('foo')
        done()
      })
      .catch(e => {
        console.log('find one error', e)
      })
  })

  it(`${typeName} create, read, then delete model`, function(done) {
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
        // console.log('read id ', doc._id)
        id = doc._id
        return m.read(id)
      })
      .then(doc => {
        // console.log('results of read doc:', doc)
        should.exist(doc)
        should.exist(doc.seeddata)
        let model = doc.seeddata
        console.log('results of read model:', model)
        model.should.have.property('ehrData')
        return m.delete(id)
      })
      .then(() => {
        done()
      })
      .catch(err => {
        console.log(`${typeName} create a ${modelName} error: ${err}`)
        done()
      })
  })
})
