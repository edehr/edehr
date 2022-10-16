import { Text }  from '../../config/text'
import { Router } from 'express'
import multer from 'multer'
import path from 'path'
import fs  from 'fs'
import filesize from 'filesize'
// import filenamify from 'filenamify'
import Consumer from '../consumer/consumer'
import { logError} from '../../helpers/log-error'
const debug = require('debug')('server')

//export for testing
export const formElementNameForFileUpload = 'ehrFile' // client to use this name for the file input element

const filesCommon = path.resolve('files-common')

const filenamify = (fName) => { return fName }
export default class FileController {

  constructor (config) {
    this.ehrFilesDirectory = config.ehrFilesDirectory
    this.ehrMaxFileSize = config.ehrMaxFileSize
    this.ehrFileTypeRE = config.ehrFileTypeRE
    this.ehrFileTypes = config.ehrFileTypes
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
    this._setupCommon()
  }

  _setupCommon () {
    fs.readdir(filesCommon, {withFileTypes: true}, (err, files) => {
      if (err) {
        throw new Error('File _setupCommon got error ' +  err.message)
      }
      this.commonFileNames = files.filter(item => !item.isDirectory()).map(item => item.name)
    })

  }
  _uploader (req, res, next) {
    this.multerUploader(req, res, (err) => {
      if (req.badRequestError) {
        logError('File upload - found badRequestError ', req.badRequestError)
        const error = new Error(req.badRequestError)
        error.status = 400 // Bad Request
        return next(error)
      }
      else if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
          err.message += '. ' + Text.MAX_FILE_SIZE(filesize(this.ehrMaxFileSize))
        }
        if (err.code === 'LIMIT_UNEXPECTED_FILE') {
          err.message += '. ' + Text.EXPECTED_FIELD(formElementNameForFileUpload)
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
        const error = new Error(Text.PROVIDE_FILE)
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
        callback(null, req.consumerDirectory)
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
    return async (req, file, callback) => {
      if (!this._validateFileType(file)) {
        return callback(req.badRequestError)
      }
      await this._setupDirectory(req)
      this._setupFileName(req, file)
      console.log('is req method post', req.method)
      if (req.method === 'POST' && !this._validateFileDoesNotExist(req, file)) {
        return callback(req.badRequestError)
      }
      return callback(null, true)
    }
  }

  async _setupDirectory (req) {
    fs.mkdirSync(req.consumerDirectory, {recursive: true})
    debug('File Upload directory', req.consumerDirectory)
  }

  _setupFileName (req, file) {
    req.newFileName = filenamify(file.originalname.replace(/ /g, '_'))
    debug('File Upload original name', file.originalname, 'new file name:', req.newFileName)
  }

  async _validateRequest (req, res, next) {
    const id = (req.authPayload ? req.authPayload.toolConsumerId : req.params.consumer)
    let dirName = filesCommon
    if (id && id != 'undefined') {
      dirName = await this._convertIdToKey(id)
        .catch(() => {
          logError('File validation no consumer id')
          const error = new Error(Text.INVALID_CONSUMER_ID)
          error.status = 400 // Bad Request
          next(error)
          return false
        })
    }
    debug(`File _validateRequest consumer id ${id} leads to key '${dirName}'`)
    if (!dirName) {
      logError('File upload - found badRequestError ', req.badRequestError ? req.badRequestError.message : '')
      const error = new Error(Text.INVALID_AUTH_CONSUMER)
      error.status = 400 // Bad Request
      next(error)
      return false
    }
    req.dirName = dirName
    req.consumerDirectory = id ? path.join(this.ehrFilesDirectory, dirName) : dirName
    return true
  }

  async _convertIdToKey (toolConsumerId) {
    return await Consumer.find({_id: toolConsumerId})
      .then((found) => {
        if (found && found.length > 0) {
          const consumer = found[0]
          return consumer.oauth_consumer_key
        }
        debug('_convertIdToKey did not find consumer for toolConsumerId', toolConsumerId)
        return undefined
      })
  }

  _validateFileType (file) {
    let mimetype = this.ehrFileTypeRE.test(file.mimetype)
    let fext = path.extname(file.originalname).toLowerCase()
    let extname = this.ehrFileTypeRE.test(fext)
    // require both mimetype and extension to be sure the file will be useful
    if (!mimetype || !extname) {
      req.badRequestError = new Error(Text.SUPPORT_FILETYPES(this.ehrFileTypes))
      debug('File upload filter found unsupported mime type:', file.mimetype, mimetype, 'extension:', extname)
      return false
    }
    return true
  }

  _validateFileDoesNotExist (req, file) {
    let fPath = path.join(req.consumerDirectory, req.newFileName)
    debug('File filter check for existence of this file: ', fPath)
    if (fs.existsSync(fPath)) {
      req.badRequestError = new Error(Text.FILE_EXISTS(file.originalname))
      return false
    }
    return true
  }

  /**
   * Mimic the method of the same name found in other controllers.
   * Remove all files associated with the tool consumer
   * @param toolConsumerId
   */
  async clearConsumer (toolConsumerId) {
    const dirName = await this._convertIdToKey(toolConsumerId)
    if (!dirName) {
      logError('Could not clear consumer', toolConsumerId)
      return
    }
    // It's safe to let the directory removal proceed in the background and let the server proceed.
    // Errors are reported to error log and need to be managed from there.
    fs.rm( dirName,  { recursive: true, force: true }, (err) => {
      if (err) {
        logError('FAILED TO REMOVE ALL FILES FOR ' + toolConsumerId + ' IN DIRECTORY ' + dirName)
        logError(err)
      }
      else {
        debug('Removed all files for ' + toolConsumerId + ' in directory ' + dirName)
      }
    })
  }

  publicRoute () {
    const router = new Router()

    router.get('/:name/consumer/:consumer', async (req, res, next) => {
      if (await this._validateRequest(req, res, next)) {
        const options = {
          dotfiles: 'deny',
          headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
          },
          root: req.consumerDirectory
        }
        // default to look for file in this consumer's folder
        // if not there then look in the common files
        const fileName = req.params.name
        let testName = path.join(req.consumerDirectory, fileName)
        function sendIt (fileName, options) {
          // console.log('sendFile options', options)
          res.sendFile(fileName, options, function (err) {
            if (err) {
              next(err)
            }
          })
        }
        fs.access(testName, fs.constants.F_OK, (err) => {
          if (!err) {
            sendIt(fileName, options)
          } else {
            // console.log('could not find file in consumer\'s directory', fileName)
            let testName = path.join(filesCommon, fileName)
            fs.access(testName, fs.constants.F_OK, (err) => {
              if (!err) {
                // console.log('found in common', fileName, filesCommon)
                options.root = filesCommon
                sendIt(fileName, options)
              }
            })
          }
        })
      }
    })

    router.get('/exists/:name/consumer/:consumer', async (req, res, next) => {
      // test to see if a file name exists for this consumer (exclude common files)
      if (await this._validateRequest(req, res, next)) {
        const fileName = path.join(req.consumerDirectory, req.params.name)
        fs.access(fileName, fs.constants.F_OK, (err) => {
          res.send({exists: !err})
        })
      }
    })

    router.get('/maxFileSize', (req, res) => {
      res.status = 200
      res.json({message: Text.MAX_FILE_SIZE(filesize(this.ehrMaxFileSize)), value: this.ehrMaxFileSize})
    })

    router.get('/fieldName', (req, res) => {
      res.status = 200
      res.json({ ehrFieldName: formElementNameForFileUpload })
    })


    return router
  }

  route () {
    const router = new Router()
    router.get('/list', async (req, res, next) => {
      if (await this._validateRequest(req, res, next)) {
        debug('File get list for dir >> ', req.consumerDirectory)
        fs.access(req.consumerDirectory, fs.constants.F_OK, (err) => {
          if (err) {
            debug(`File ${req.consumerDirectory} does not exist so return empty list`)
            res.status = 200
            res.json(JSON.stringify(this.commonFileNames))
            return res.end()
          }
          fs.readdir(req.consumerDirectory, {withFileTypes: true}, (err, files) => {
            if (err) {
              debug('File readdir got error', err)
              return next(err)
            }
            let fNames = files.filter(item => !item.isDirectory()).map(item => item.name)
            res.status = 200
            // combine with common files but exclude duplicates
            let all = new Set([...fNames, ...this.commonFileNames])
            res.json(JSON.stringify([...all]))
          })
        })
      }
    })

    router.post('/upload',  async (req, res, next) => {
      if (await this._validateRequest(req, res, next)) {
        this._uploader(req, res, next)
      }
    })

    router.put('/upload',  async (req, res, next) => {
      if (await this._validateRequest(req, res, next)) {
        this._uploader(req, res, next)
      }
    })

    return router
  }
}
