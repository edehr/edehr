import { Router } from 'express'
import multer from 'multer'
import path from 'path'
import fs  from 'fs'
import filenamify from 'filenamify'
import filesize from 'filesize'

const debug = require('debug')('server')
const logError = require('debug')('error')
//export for testing
export const formElementNameForFileUpload = 'ehrFile' // client to use this name for the file input element

export default class FileController {

  constructor (config) {
    this.ehrFilesDirectory = config.ehrFilesDirectory
    this.ehrMaxFileSize = config.ehrMaxFileSize
    debug('File upload limits file size to', this.ehrMaxFileSize)
    if (!this.ehrFilesDirectory) {
      logError('Server configuration must provide a directory for storing EHR files (e.g. x-rays lab reports')
      process.exit(1)
    }
    this.multerUploader = multer({
      fileFilter: function (req, file, cb) {
        let filetypes = /jpeg|jpg|png|gif|tiff|tif|bmp|pdf|json|txt|text/
        let fmt = file.mimetype
        let fext = path.extname(file.originalname).toLowerCase()
        let mimetype = filetypes.test(fmt)
        let extname = filetypes.test(fext)
        // require both mimetype and extension to be sure the file will be useful
        if (mimetype && extname) {
          return cb(null, true)
        }
        let fTypes = String(filetypes)
        fTypes = fTypes.substr(1, fTypes.length - 2)
        fTypes = fTypes.split('|').join(', ')
        req.fileValidationError = 'Error: File upload only supports the following filetypes - ' + fTypes
        debug('File upload filter found unsupported mime type:', fmt, mimetype, 'extension:', fext, extname)
        return cb(new Error(req.fileValidationError), false)
      },
      storage: this._createStorage(),
      limits: {fileSize: this.ehrMaxFileSize}
    }).single(formElementNameForFileUpload)

  }
  _createStorage () {
    const _this = this
    return multer.diskStorage({
      destination: (req, file, cb) => {
        const {toolConsumerId} = req.authPayload
        debug('File Upload base dir ', this.ehrFilesDirectory)
        debug('File Upload consumer id ', toolConsumerId)
        const dir = path.join(_this.ehrFilesDirectory, toolConsumerId)
        debug('File Upload store files into ', dir)
        req.uploadDirectory = dir
        // debug('File upload directory:', dir)
        fs.mkdir(dir, {recursive: true}, (err) => {
          if (err) return cb(err)
          cb(null, dir)
        })
      },
      filename: (req, file, cb) => {
        let newFileName = file.originalname.replace(/ /g, '_')
        newFileName = filenamify(newFileName)
        debug('File Upload original name', file.originalname, 'new file name:', newFileName)
        cb(null, newFileName)
      }
    })
  }

  publicRoute () {
    const router = new Router()

    router.get('/maxFileSize', (req, res) => {
      res.status = 200
      res.send({message:'Maximum file size is ' + filesize(this.ehrMaxFileSize), value: this.ehrMaxFileSize})
    })

    return router
  }

  route () {
    const router = new Router()

    router.post('/upload',  (req, res, next) => {
      this.multerUploader(req, res, (err) => {

        if (req.fileValidationError) {
          const error = new Error(req.fileValidationError)
          error.status = 400 // Bad Request
          return next(error)
        }
        else if (err instanceof multer.MulterError) {
          if (err.code === 'LIMIT_FILE_SIZE') {
            err.message += ' maximum file size is ' + filesize(this.ehrMaxFileSize)
          }
          if (err.code === 'LIMIT_UNEXPECTED_FILE') {
            err.message += ' Expected field to be ' + formElementNameForFileUpload
          }
          logError('File upload - Multer error', err.code, err.message)
          // Inform the caller their request was bad
          err.status = 400 // Bad Request
          return next(err)
        }
        else if (err) {
          logError('File upload - found error ', err)
          return next(err)
        }
        else if (!req.file) {
          debug('File upload - user did not provide a file')
          const error = new Error('Please upload a file')
          error.status = 400 // Bad Request
          return next(error)
        }

        debug('File upload saved file', req.file.size, 'bytes. Name:', req.file.path)
        res.send(req.file)
      })
    })

    return router
  }
}
