import { Router } from 'express'
import multer from 'multer'
import path from 'path'
import fs  from 'fs'
import filenamify from 'filenamify'

const debug = require('debug')('server')
const logError = require('debug')('error')

const formElementNameForFileUpload = 'ehrFile' // client to use this name for the file input element

export default class FileController {

  constructor (config) {
    this.ehrFilesDirectory = config.ehrFiles
    if (!this.ehrFilesDirectory) {
      logError('Server configuration must provide a directory for storing EHR files (e.g. x-rays lab reports')
      process.exit(1)
    }
  }

  route () {
    const _this = this
    const router = new Router()

    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        const { toolConsumerId } = req.authPayload
        const dir = path.join(_this.ehrFilesDirectory, toolConsumerId)
        // debug('File upload directory:', dir)
        fs.mkdir(dir, { recursive: true }, (err) => {
          if (err) throw err;
          cb(null, dir)
        })
      },
      filename: function (req, file, cb) {
        let newFileName = file.originalname.replace(/ /g, '_')
        newFileName = filenamify(newFileName)
        // debug('File upload save EHR file with file name', newFileName)
        cb(null, newFileName)
      }
    })

    var upload = multer({ storage: storage })

    router.post('/upload', upload.single(formElementNameForFileUpload), function (req, res, next){
      if(req.file){
        debug('File upload save', req.file.size, 'bytes. Name:', req.file.path)
        // const newFileName = file.originalname.replace(/ /g, '_')
        // const source = fs.createReadStream(file.path)
        // const dest = fs.createWriteStream(path.join(upload_dir, newFileName));
        // save the new file
        // source.pipe(dest);
        // source.on('end', function (){
        //   res.writeHead(200, {'Content-Type': 'application/json'});
        //   res.end(JSON.stringify({fileName: file.originalname, newFileName: newFileName}));
        //   console.log('file uploaded')
        // })
        // saw the following and saving in comment until verify if it is appropriate
        // delete the temp file.
        // fs.unlink(file.path, function (err){ });
      }else{
        console.log('No file in the request. Respond with 500 fail')
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({filename: 'fail'}));
      }
    })

    return router
  }
}
