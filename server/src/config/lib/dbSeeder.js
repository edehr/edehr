import IntegrationController from '../../mcr/integration/integration-controller'
const IntegrationModel = new IntegrationController()
const debug = require('debug')('server')
const logError = require('debug')('error')

console.log('Warning:  Database seeding is turned on')

// =========================================================================
//
// !!!! IMPORTANT !!!!
//
// This will drop schemas first if set to true
//
// =========================================================================
var DROP_SCHEMAS = false

if (DROP_SCHEMAS) {
  require('../../../resources/seed-data/dropschemas')(DROP_SCHEMAS)
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
var checkIntegration = function (name, override) {
  return new Promise(function (resolve /* reject */) {
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
        logError('Error seeding ' + name + ' : ', err)
      })
  })
}

function doIntegrations () {
  return checkIntegration('consumers', false)
    .then(go => {
      if (go) {
        return require('../../../resources/seed-data/consumers')(true)
      }
    })
    // .then(() => {
    //   return checkIntegration('ehrseed')
    // })
    // .then(go => {
    //   debug('Seed ehr seed data? ', go)
    //   if (go) {
    //     return require('../seed-data/ehrSeeds')(true)
    //   }
    // })
    .then(() => {
      debug('DONE integrations')
    })
    .catch(err => {
      logError(err)
    })

}
export default function (forceSeeding) {
  let f = forceSeeding ? forceSeeding : FORCE
  return Promise.resolve()
    .then(() => {
      if (f) {
        return IntegrationModel.clearAll()
      }
    })
    .then(() => {
      return doIntegrations()
    })
}
