'use strict'
import Config from '../config/config'
import EhrApp from './app'

const ehrApp = new EhrApp()
const config = new Config(process.env.NODE_ENV)
const configuration = config.config
ehrApp.setup(configuration)
  .then(() => {
    const app = ehrApp.application
    const {port} = configuration
    app.listen(port, () => {
      console.log('Server running...', port)
    })
  })
