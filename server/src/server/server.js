'use strict'
import {configuration} from '../config/config'
import EhrApp from './app.js'

const ehrApp = new EhrApp(configuration)
ehrApp.setup(configuration)
  .then(() => {
    const app = ehrApp.application
    const {serverPort} = configuration
    app.listen(serverPort, () => {
      console.log('Server running...', serverPort)
    })
  })
export default ehrApp