import IntegrationController from '../mcr/integration/integration-controller'
import dbCreateConsumers from './consumers'
import dbCreateInitalSimMetaData from './dbSimulationMeta'
import dbConvertTimeValues from './dbSimulationTime'
const IntegrationModel = new IntegrationController()
const debug = require('debug')('server')
import { logError} from '../helpers/log-error'
import dropSchemas from './dropschemas'

// =========================================================================
//
// !!!! IMPORTANT !!!!
//
// This will drop schemas first if set to true
//
// =========================================================================
var DROP_SCHEMAS = false

if (DROP_SCHEMAS) {
  dropSchemas(DROP_SCHEMAS)
}

// -------------------------------------------------------------------------
//
// check if the database seeding was performed, can override
//
// -------------------------------------------------------------------------
function checkIntegration (name, override) {
  return new Promise( resolve => {
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
        logError('Error checking integration ' + name + ' : ', err)
      })
  })
}

async function doIntegrations () {
  debug('BEGIN integrations')
  const doConsumer = await checkIntegration('consumers', false)
  if (doConsumer) {
    // warning -- this function deletes all existing consumers. Since this is seeding this never happens after the first time.
    await dbCreateConsumers(true)
  }
  const doSimulationTime = await checkIntegration('simulationTime', true)
  if (doSimulationTime) {
    await dbConvertTimeValues()
  }

  const doSimMeta = await checkIntegration('simulationMeta', true)
  if (false && doSimMeta) {
    await dbCreateInitalSimMetaData()
  }

  debug('DONE integrations')
}

export default async function (forceSeeding = false) {
  if (forceSeeding) {
    await IntegrationModel.clearAll()
  }
  return await doIntegrations()
}
