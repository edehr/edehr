'use strict'
const chalk = require('chalk')
const glob = require('glob')
const path = require('path')
const debug = require('debug')('server')
export default class Config {
  constructor (env) {
    this.env = env
    // Validate NODE_ENV existence
    this.validateEnvironmentVariable()

    // Get the default config
    let defaultConfig = require(path.join(process.cwd(), 'src/config/env/default'))

    // Get the current config
    let environmentConfig = require(path.join(process.cwd(), 'src/config/env/', this.env)) || {}

    // Merge config files
    let cfg = Object.assign(defaultConfig, environmentConfig)

    function composeUrl ( scheme, host, port, part) {
      return scheme + '://' + host + (port ? ':' + port : '') + (part ? '/' + part : '')
    }
    let url = composeUrl(cfg.scheme, cfg.host, cfg.clientPort)
    cfg.clientUrl = process.env.CLIENT_URL || url
    url = composeUrl(cfg.scheme, cfg.host, cfg.apiPort, 'api')
    cfg.apiUrl = process.env.API_URL || url
    debug('config apiUrl', cfg.apiUrl)
    debug('config clientUrl', cfg.clientUrl)
    this.configuration = cfg
    debug('configuration ready ', this.configuration)
  }

  get config () {
    return this.configuration
  }

  /**
   * Validate NODE_ENV existence
   */
  validateEnvironmentVariable () {
    let environmentFiles = glob.sync('./src/config/env/' + this.env + '.js')
    if (!environmentFiles.length) {
      if (this.env) {
        console.error(
          chalk.red(
            '+ Error: No configuration file found for "' +
              env +
              '" environment using development instead'
          )
        )
      } else {
        console.error(
          chalk.red('+ Error: NODE_ENV is not defined! Using default development environment')
        )
      }
      this.env = 'development'
    }
    // Reset console color
    console.log(chalk.white(''))
  }

}
