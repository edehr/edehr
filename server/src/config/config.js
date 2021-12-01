'use strict'
const glob = require('glob')
const path = require('path')
const debug = require('debug')('server')
const logError = require('debug')('error')
export default class Config {
  constructor (env) {
    this.env = env
    // Validate NODE_ENV existence
    this.validateEnvironmentVariable()

    const cwd = path.join(process.cwd(), 'src/config/env')
    const defaultPath = path.join(cwd, 'default')
    let envPath = path.join(cwd, this.env)

    // Load the config
    const defaultConfig = require(defaultPath)()
    const cfg = require(envPath)(defaultConfig)
    // Merge config files
    // let cfg = Object.assign(defaultConfig, environmentConfig)

    function composeUrl ( scheme, host, port, part) {
      return scheme + '://' + host + (port ? ':' + port : '') + (part ? '/' + part : '')
    }
    let url = composeUrl(cfg.scheme, cfg.clientHost, cfg.clientPort)
    cfg.clientUrl = process.env.CLIENT_URL || url
    url = composeUrl(cfg.scheme, cfg.apiHost, cfg.apiPort, 'api')
    
    // in case this changes, please, reflect it on the frontend config files or the frontend env variables
    cfg.apiUrl = process.env.API_URL || url
    // debug('config apiUrl', cfg.apiUrl)
    // debug('config clientUrl', cfg.clientUrl)
    // debug('config database', cfg.database)
    this.configuration = cfg
    debug('configuration ready %s', this.asStringForLog())
  }

  get config () {
    // debug('config >> ', this.configuration)
    return this.configuration
  }

  asStringForLog () {
    let tmp = {}
    try {
      tmp = JSON.parse(JSON.stringify(this.configuration))
    } catch (error) {
      logError('Error cloning configuration %o', error)
    }

    tmp.database.password = 'sanitizedFor2'
    tmp.cookieSecret = 'sanitized cookie secret'
    tmp.authTokenSecret = 'sanitized auth token'
    return JSON.stringify(tmp, null, 2)
  }

  /**
   * Validate NODE_ENV existence
   */
  validateEnvironmentVariable () {
    let environmentFiles = glob.sync('./src/config/env/' + this.env + '.js')
    if (!environmentFiles.length) {
      if (this.env) {
        debug('Error: No configuration file found for "' + env + '" environment using development instead'
        )
      } else {
        debug('Error: NODE_ENV is not defined! Using default development environment')
      }
      this.env = 'development'
    }
    let beStrictOnProd = false
    if (beStrictOnProd && this.env === 'production') {
      if (!process.env.COOKIE_SECRET) {
        throw new Error('For production you must set COOKIE_SECRET env ')
      }
    }
  }

}
