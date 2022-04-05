'use strict'
import EhrApp from './app.js'
import applicationConfiguration from '../config/config.js'
const configuration = applicationConfiguration(process.env.NODE_ENV)

const ehrApp = new EhrApp()
ehrApp.setup(configuration)
  .then(() => {
    const app = ehrApp.application
    const {serverPort} = configuration
    app.listen(serverPort, () => {
      console.log('Server running...', serverPort)
    })
  })
export default ehrApp