'use strict'
import {configuration} from '../config/config'
import EhrApp from './app.js'
import { version } from 'process'
import { logError } from '../helpers/log-error'
import { setupWebSocket } from './push-server'
const debug = require('debug')('server')

if (!validateNode()) {
  process.exit(1)
}

const ehrApp = new EhrApp(configuration)
ehrApp.setup(configuration)
  .then(() => {
    const app = ehrApp.application
    const {serverPort} = configuration
    if (validateNode()) {
      const appServer = app.listen(serverPort, () => {
        console.log('Server running...', serverPort)
      })
      setupWebSocket(appServer, app.authUtil)
    }
  })

function validateNode () {
  // allow transition to v18 (skip v16)
  let valid
  if (version.includes('v18')) {
    debug(`Node Version: ${version}`)
    valid = true
  } else {
    console.error('Unexpected version of Node is active ', version)
    console.error('configuration', configuration)
    logError('Unexpected version of Node is active ', version)
    valid = false
  }
  return valid
}
export default ehrApp
