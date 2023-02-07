import IntegrationController from '../mcr/integration/integration-controller'
import dbCreateConsumers from './consumers'
const IntegrationModel = new IntegrationController()
const debug = require('debug')('server')
import { logError} from '../helpers/log-error'
import dropSchemas from './dropschemas'
import ActivityDataController from '../mcr/activity-data/activity-data-controller'
import SeedDataController from '../mcr/seed/seedData-controller'
const activityDataController = new ActivityDataController()
const seedController = new SeedDataController()


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


export default async function (forceSeeding = false) {
  if (forceSeeding) {
    await IntegrationModel.clearAll()
  }
  return await doIntegrations()
}

/**
 * Integrations are database transformations (updates) that take place when the server starts.
 * These operate over the data that is in the database.
 * Transformations also need to be considered whenever a create or update happens IF the
 * data used in those actions may have come from a source that was previously exported by the app.
 *
 * For example, seed (Case Studies) may come from a file.  Also the client side supports what is
 * call Ehr-Only demonstration mode. This uses EHR data that may need to be transformed.
 *
 * @returns {Promise<void>}
 */
async function doIntegrations () {
  debug('dbSeeder. BEGIN')
  const doConsumer = await checkIntegration('consumers', false)
  if (doConsumer) {
    // warning -- this function deletes all existing consumers. Since this is seeding this never happens after the first time.
    debug('dbSeeder. consumer')
    await dbCreateConsumers(true)
  }

  /**
   * Iterate over the entire db any collection that contains ehr data. E.g. seeds and activity-data
   */
  await updateAllEhrData()
  debug('dbSeeder. DONE')
}

async function updateAllEhrData () {
  await _updateActivityData()
  await _updateSeeds()
}

async function _updateActivityData () {
  debug('dbSeeder. For each activity update the EHR data to the latest version.')
  const list = await activityDataController.list({},{assignmentData: true})
  list.activitydata.forEach(ad => {
    activityDataController.updateAndSaveAssignmentEhrData(ad._id, ad.assignmentData)
  })
}

async function _updateSeeds () {
  debug('dbSeeder. For each seed (case study) update the EHR to the latest version')
  const list = await seedController.list({}, {isDefault: true, ehrData: true})
  list.seeddata.forEach(seed => {
    if (!seed.isDefault) {
      seedController.updateAndSaveSeedEhrData(seed._id, seed.ehrData)
    }
  })
}

