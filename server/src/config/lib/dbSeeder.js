import IntegrationController from '../../controllers/integration-controller'
const IntegrationModel = new IntegrationController()
const debug = require('debug')('server')

var chalk = require('chalk')
console.log(chalk.bold.red('Warning:  Database seeding is turned on'))

// =========================================================================
//
// !!!! IMPORTANT !!!!
//
// This will drop schemas first if set to true
//
// =========================================================================
var DROP_SCHEMAS = false

if (DROP_SCHEMAS) {
  require('../seed-data/dropschemas')(DROP_SCHEMAS)
}

// =========================================================================
//
// This will force all integrations if set to true
//
// =========================================================================
var FORCE = false

// -------------------------------------------------------------------------
//
// check if the database seeding was performed, can override
//
// -------------------------------------------------------------------------
var checkIntegration = function(name, override) {
  return new Promise(function(resolve /* reject */) {
    if (override) return resolve(true)
    return IntegrationModel.findOne({ module: name })
      .then(row => {
        if (row) {
          return resolve(false)
        }
        IntegrationModel.create({ module: name }).then(integration => {
          resolve(true)
        })
      })
      .catch(err => {
        console.error('Error seeding ' + name + ' : ', err)
      })
  })
}

function doIntegrations() {
  return checkIntegration('consumers', false)
    .then(go => {
      if (go) {
        return require('../seed-data/consumers')(true)
      }
    })
    .then(() => {
      return checkIntegration('ehrseed')
    })
    .then(go => {
      debug('Seed ehr seed data? ', go)
      if (go) {
        return require('../seed-data/ehrSeeds')(true)
      }
    })
    .then(() => {
      return checkIntegration('assignments')
    })
    .then(go => {
      debug('Seed assignments? ', go)
      if (go) {
        return require('../seed-data/assignments')(true)
      }
    })
    .then(() => {
      debug('DONE integrations')
    })
    .catch(err => {
      console.error(err)
    })

  // =========================================================================
  //
  // Things in this section are split into production and non-production
  //
  // =========================================================================
  if (process.env.NODE_ENV === 'production') {
    // -------------------------------------------------------------------------
    //
    // add production admin user
    //
    // -------------------------------------------------------------------------
    // require('../seed-data/users-production')()
  } else {
    // -------------------------------------------------------------------------
    //
    // add non-production test user accounts
    //
    // -------------------------------------------------------------------------
    // require('../seed-data/users-other')()
    // -------------------------------------------------------------------------
  }
}
export default function() {
  return Promise.resolve()
    .then(() => {
      if (FORCE) {
        return IntegrationModel.clearAll()
      }
    })
    .then(() => {
      return doIntegrations()
    })
}
