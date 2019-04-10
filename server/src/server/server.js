'use strict';
import EhrApp from './app';
import Config from '../config/config'

const ehrApp = new EhrApp()
const config = new Config(process.env.NODE_ENV)
const configuration = config.config
ehrApp.setup(configuration)
.then( () => {
  const app = ehrApp.application
  const port = configuration.port
  app.listen(port, () => {
    console.log('Server running...', port)
  })
})
