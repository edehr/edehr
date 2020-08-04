import { formElementNameForFileUpload } from './files-controller'
import fs from 'fs'
import path from 'path'
const debug = require('debug')('server')
import Config from '../../config/config'
import EhrApp from '../../server/app'
import Helper from '../common/test-helper'
const should = require('should')
const request = require('supertest')
const BASE = '/api/files'
const tokenData = Helper.sampleTokenData()
tokenData.isInstructor = true
const token = Helper.generateToken(tokenData)
const config = new Config('test')
const configuration = config.config

const url = BASE +'/upload'
const testFileName = 'test.json'
const dataDirectory = 'test-data'
const testFilePath = path.join(__dirname, dataDirectory, testFileName)
const expectedPath = path.join(configuration.ehrFilesDirectory, tokenData.toolConsumerId, testFileName)
const testFileSizeInBytes = fs.statSync(testFilePath)['size']

describe('Make server calls on files controller', function () {

  it('File upload', function (done) {
    should.equal(fs.existsSync(testFilePath), true, 'test file should exist')
    should.exist(configuration.ehrFilesDirectory, 'Expect configuration to have ehrFilesDirectory')
    done()
  })

  it('File upload', function (done) {
    const ehrApp = new EhrApp()
    ehrApp
      .setup(configuration)
      .then(() => {
        request(ehrApp.application)
          .post(url)
          .attach(formElementNameForFileUpload, testFilePath)
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            should.exist(res)
            should.equal(res.status, 200)
            should.exist(res.body)
            res.body.should.have.property('path')
            res.body.path.should.equal(expectedPath)
            done()
          })
      })
  })

  it('File upload test send buffer', function (done) {
    const ehrApp = new EhrApp()
    ehrApp
      .setup(configuration)
      .then(() => {
        request(ehrApp.application)
          .post(url)
          .attach(formElementNameForFileUpload, Buffer.from('a'.repeat(1024)),
            {contentType: 'application/text', filename: 'justText.text'})
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            should.exist(res)
            should.equal(res.status, 200)
            should.exist(res.body)
            res.body.should.have.property('path')
            res.body.path.should.containEql('just')
            done()
          })
      })
  })


  it('File upload test file with all unsupported characters', function (done) {
    const ehrApp = new EhrApp()
    ehrApp
      .setup(configuration)
      .then(() => {
        request(ehrApp.application)
          .post(url)
          .attach(formElementNameForFileUpload, Buffer.from('a'.repeat(1024)),
            {contentType: 'application/text', filename: 'colon:infilename.text'})
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            should.exist(res)
            should.equal(res.status, 200)
            should.exist(res.body)
            res.body.should.have.property('path')
            res.body.path.should.containEql('!')
            done()
          })
      })
  })
  
  it('File upload testFileWithoutExtPath', function (done) {
    const ehrApp = new EhrApp()
    ehrApp
      .setup(configuration)
      .then(() => {
        request(ehrApp.application)
          .post(url)
          .attach(formElementNameForFileUpload, Buffer.from('a'.repeat(10000000)),
            { contentType: 'application/text', filename: 'justText' })
          .set('Authorization', `Bearer ${token}`)
          .end( (err, res) => {
            should.exist(res)
            should.equal(res.status, 400)
            should.exist(res.text)
            res.text.should.containEql('filetypes')
            done()
          })
      })
  })
  // todo test file with bad char

  it('File upload file too big', function (done) {
    configuration.ehrMaxFileSize = testFileSizeInBytes - 1 // something smaller than the file
    debug('Set configuration to use max file size of ', configuration.ehrMaxFileSize)
    const ehrApp = new EhrApp()
    ehrApp
      .setup(configuration)
      .then(() => {
        request(ehrApp.application)
          .post(url)
          .attach(formElementNameForFileUpload, testFilePath)
          .set('Authorization', `Bearer ${token}`)
          .end(function (err, res) {
            should.equal(res.status, 400)
            should.exist(res.text)
            res.text.should.containEql('maximum')
            done()
          })
      })
  })

  it('File upload incorrect field name', function (done) {
    const ehrApp = new EhrApp()
    ehrApp
      .setup(configuration)
      .then(() => {
        request(ehrApp.application)
          .post(url)
          .attach('wrong', testFilePath)
          .set('Authorization', `Bearer ${token}`)
          .end(function (err, res) {
            should.equal(res.status, 400)
            should.exist(res.text)
            res.text.should.containEql(formElementNameForFileUpload)
            done()
          })
      })
  })

  it('File upload PNG', function (done) {
    const testFileName = 'test.png'
    const testFilePath = path.join(__dirname, dataDirectory, testFileName)
    const expectedPath = path.join(configuration.ehrFilesDirectory, tokenData.toolConsumerId, testFileName)
    const ehrApp = new EhrApp()
    ehrApp
      .setup(configuration)
      .then(() => {
        request(ehrApp.application)
          .post(url)
          .attach(formElementNameForFileUpload, testFilePath)
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            should.exist(res)
            should.equal(res.status, 200)
            should.exist(res.body)
            res.body.should.have.property('path')
            res.body.path.should.equal(expectedPath)
            done()
          })
      })
  })

  it('File upload JPEG', function (done) {
    const testFileName = 'test.jpg'
    const testFilePath = path.join(__dirname, dataDirectory, testFileName)
    const expectedPath = path.join(configuration.ehrFilesDirectory, tokenData.toolConsumerId, testFileName)
    const ehrApp = new EhrApp()
    ehrApp
      .setup(configuration)
      .then(() => {
        request(ehrApp.application)
          .post(url)
          .attach(formElementNameForFileUpload, testFilePath)
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            should.exist(res)
            should.equal(res.status, 200)
            should.exist(res.body)
            res.body.should.have.property('path')
            res.body.path.should.equal(expectedPath)
            done()
          })
      })
  })

})
