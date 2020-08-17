import { Router } from 'express'
import multer from 'multer'
import path from 'path'
import fs  from 'fs'
import filenamify from 'filenamify'
import filesize from 'filesize'


const FILE_TYPES = /jpeg|jpg|png|gif|tiff|tif|bmp|pdf|json|txt|text/

const FILE_TYPES_TEXT = ( () => {
  let S = String(FILE_TYPES)
  return S.substr(1, S.length - 2).split('|').join(', ')
})()

export const TEXT = {
  EXPECTED_FIELD: (fld) => {return `Expected field to be ${fld}` },
  FILE_EXISTS: (originalname) => { return `File ${originalname} is already exists!`},
  INVALID_AUTH_CONSUMER: 'Invalid authentication token. It needs to include consumer information.',
  PROVIDE_FILE: 'Please upload a file',
  MAX_FILE_SIZE: (size) => { return `Maximum files size is ${size}`},
  SUPPORT_FILETYPES: `Error: File upload only supports the following filetypes - ${FILE_TYPES_TEXT}`
}

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
      const msg = 'Server configuration must provide a directory for storing EHR files (e.g. x-rays lab reports'
      logError(msg)
      throw new Error(msg)
    }
    this.multerUploader = multer({
      fileFilter: this._fileFilter(),
      storage: this._createStorage(),
      limits: {fileSize: this.ehrMaxFileSize}
    }).single(formElementNameForFileUpload)
  }

  _uploader(req, res, next) {
    this.multerUploader(req, res, (err) => {
      if (req.badRequestError) {
        logError('File upload - found badRequestError ', req.badRequestError)
        const error = new Error(req.badRequestError)
        error.status = 400 // Bad Request
        return next(error)
      }
      else if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
          err.message += '. ' + TEXT.MAX_FILE_SIZE(filesize(this.ehrMaxFileSize))
        }
        if (err.code === 'LIMIT_UNEXPECTED_FILE') {
          err.message += '. ' + TEXT.EXPECTED_FIELD(formElementNameForFileUpload)
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
        const error = new Error(TEXT.PROVIDE_FILE)
        error.status = 400 // Bad Request
        return next(error)
      }
      debug('File upload saved file', req.file.size, 'bytes. Name:', req.file.path)
      res.send(req.file)
    })
  }

  _createStorage () {
    return multer.diskStorage({
      destination: (req, file, callback) => {
        callback(null, req.uploadDirectory)
      },
      filename: (req, file, callback) => {
        callback(null, req.newFileName)
      }
    })
  }

  /*
  fileFilter is called before the file is processed.  We'll check the request contains the auth payload
  with the tool consumer id, that the incoming file is the correct type and also,
  if the request is a POST, that the file does not already exist.
  We'll also compute the directory and file name and stash in the request for when the processing is done.
 */
  _fileFilter () {
    return (req, file, callback) => {
      if (!this._validateRequest(req)) {
        return callback(req.badRequestError)
      }
      if (!this._validateFileType(file)) {
        return callback(req.badRequestError)
      }
      this._setupDirectory(req)
      this._setupFileName(req, file)
      console.log('is req method post', req.method)
      if (req.method === 'POST' && !this._validateFileDoesNotExist(req, file)) {
        return callback(req.badRequestError)
      }
      return callback(null, true)
    }
  }

  _setupDirectory(req) {
    const {toolConsumerId} = req.authPayload
    req.uploadDirectory = path.join(this.ehrFilesDirectory, toolConsumerId)
    fs.mkdirSync(req.uploadDirectory, {recursive: true})
    debug('File Upload directory', req.uploadDirectory)
  }

  _setupFileName(req, file) {
    req.newFileName = filenamify(file.originalname.replace(/ /g, '_'))
    debug('File Upload original name', file.originalname, 'new file name:', req.newFileName)
  }

  _validateRequest(req) {
    const {toolConsumerId} = req.authPayload
    debug(`File Upload consumer id is '${toolConsumerId}'`)
    if (!toolConsumerId) {
      req.badRequestError = new Error(TEXT.INVALID_AUTH_CONSUMER)
      return false
    }
    return true
  }

  _validateFileType(file) {
    let mimetype = FILE_TYPES.test(file.mimetype)
    let fext = path.extname(file.originalname).toLowerCase()
    let extname = FILE_TYPES.test(fext)
    // require both mimetype and extension to be sure the file will be useful
    if (!mimetype || !extname) {
      req.badRequestError = new Error(TEXT.SUPPORT_FILETYPES)
      debug('File upload filter found unsupported mime type:', file.mimetype, mimetype, 'extension:', extname)
      return false
    }
    return true
  }

  _validateFileDoesNotExist(req, file) {
    let fPath = path.join(req.uploadDirectory, req.newFileName)
    debug('File filter check for existence of this file: ', fPath)
    if (fs.existsSync(fPath)) {
      req.badRequestError = new Error(TEXT.FILE_EXISTS(file.originalname))
      return false
    }
    return true
  }

  /**
   * Mimic the method of the same name found in other controllers.
   * Remove all files associated with the tool consumer
   * @param toolConsumerId
   */
  clearConsumer (toolConsumerId) {
    const dir = path.join(_this.ehrFilesDirectory, toolConsumerId)
    debug('File Controller Remove all files in this directory ', dir)
    fs.rmdir( dir, {recursive: true}, (err) => {
      if (err) return cb(err)
      cb(null, 'Removed all files for ' + toolConsumerId + ' in directory ' + dir)
    })
  }

  publicRoute () {
    const router = new Router()

    router.get('/:name/consumer/:consumer', (req, res, next) => {
      const toolConsumerId = req.params.consumer
      if (!toolConsumerId) {
        let error = new Error(TEXT.INVALID_AUTH_CONSUMER)
        error.status = 400
        return next(error)
      }
      const options = {
        root: path.join(this.ehrFilesDirectory, toolConsumerId),
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
      }
      const fileName = req.params.name
      res.sendFile(fileName, options, function (err) {
        if (err) {
          next(err)
        }
      })
    })

    router.get('/exists/:name/consumer/:consumer', (req, res, next) => {
      const toolConsumerId = req.params.consumer
      const root = path.join(this.ehrFilesDirectory, toolConsumerId)
      const fileName = path.join(root, req.params.name)
      fs.access(fileName, fs.constants.F_OK, (err) => {
        res.send({exists: !err})
      })
    })

    router.get('/maxFileSize', (req, res) => {
      res.status = 200
      res.json({message: TEXT.MAX_FILE_SIZE(filesize(this.ehrMaxFileSize)), value: this.ehrMaxFileSize})
    })

    router.get('/fieldName', (req, res) => {
      res.status = 200
      res.json({ ehrFieldName: formElementNameForFileUpload })
    })


    return router
  }

  route () {
    const router = new Router()
    router.get('/list', (req, res, next) => {
      const {toolConsumerId} = req.authPayload
      if (!toolConsumerId) {
        let error = new Error(TEXT.INVALID_AUTH_CONSUMER)
        error.status = 400
        return next(error)
      }
      const dir = path.join(this.ehrFilesDirectory, toolConsumerId)
      fs.readdir(dir, {withFileTypes: true}, (err, files) => {
        if (err)
          return next(err)
        let fNames = files.filter(item => !item.isDirectory()).map(item => item.name)
        res.status = 200
        res.json(JSON.stringify(fNames))
      })
    })

    router.post('/upload',  (req, res, next) => {
      this._uploader(req, res, next)
    })

    router.put('/upload',  (req, res, next) => {
      this._uploader(req, res, next)
    })

    return router
  }
}
