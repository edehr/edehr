'use strict'
const chalk = require('chalk')
const glob = require('glob')
const fs = require('fs')
const path = require('path')
const debug = require('debug')('server')
export default class Config {
  constructor(env) {
    this.env = env
    // Validate NODE_ENV existence
    this.validateEnvironmentVariable()

    // Get the default config
    let defaultConfig = require(path.join(process.cwd(), 'config/env/default'))

    // Get the current config
    let environmentConfig = require(path.join(process.cwd(), 'config/env/', this.env)) || {}

    // Merge config files
    this.configuration = Object.assign(defaultConfig, environmentConfig)

    // Validate Secure SSL mode can be used
    Config.validateSecureMode(this.configuration)
    debug('configuration ready ', this.configuration)
  }

  get config() {
    return this.configuration
  }

  /**
   * Validate NODE_ENV existence
   */
  validateEnvironmentVariable() {
    let environmentFiles = glob.sync('./config/env/' + this.env + '.js')
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

  /**
   * Validate Secure=true parameter can actually be turned on
   * because it requires certs and key files to be available
   */
  static validateSecureMode(config) {
    if (!config.secure || config.secure.ssl !== true) {
      return true
    }

    var privateKey = fs.existsSync(path.resolve(config.secure.privateKey))
    var certificate = fs.existsSync(path.resolve(config.secure.certificate))

    if (!privateKey || !certificate) {
      console.log(
        chalk.red('+ Error: Certificate file or key file is missing, falling back to non-SSL mode')
      )
      console.log(
        chalk.red(
          '  To create them, simply run the following from your shell: sh ./scripts/generate-ssl-certs.sh'
        )
      )
      console.log()
      config.secure.ssl = false
    }
  }
}
