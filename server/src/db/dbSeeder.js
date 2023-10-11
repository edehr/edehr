import IntegrationController from '../mcr/integration/integration-controller'
import dbCreateConsumers from './consumers'
const IntegrationModel = new IntegrationController()
const debug = require('debug')('server')
import { logError} from '../helpers/log-error'
import dropSchemas from './dropschemas'
import ActivityDataController from '../mcr/activity-data/activity-data-controller'
import SeedDataController from '../mcr/seed/seedData-controller'
import EhrDataModel, { CURRENT_EHR_DATA_VERSION } from '../ehr-definitions/EhrDataModel'
import dbCreateMissingCourses from './courseIntegtrations'
import { dbAnonymizeUsers, dbAnonymizeActivityData } from './dbAnonymize'
import dbSeedDataAppType from './dbSeedDataAppTypes'
import desire2learnActivitiesIntegtrations from './desire2learn-activities-integtrations'
import Consumer from '../mcr/consumer/consumer'
import dbSeedMrnPhn from './dbSeedMrnPhn'
import dbMPatientIntegration from './dbMPatientIntegration'
import ActivityData from '../mcr/activity-data/activity-data'
const activityDataController = new ActivityDataController()
const seedController = new SeedDataController()


// =========================================================================
//
// !!!! IMPORTANT !!!!
//
// This will drop schemas first if set to true
//
// =========================================================================
let DROP_SCHEMAS = false

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

const forceSeeding = false
export default async function (commonControllers) {
  if (forceSeeding) {
    await IntegrationModel.clearAll()
  }
  return await doIntegrations(commonControllers)
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
async function doIntegrations (commonControllers) {
  debug('dbSeeder - doIntegrations. BEGIN')
  const start = performance.now()
  await doConsumerIntegrations()
  await doCourseIntegrations()
  await doD2LIntegrations()
  await doSeedAppTypeIntegrations()
  await dbCleanOldDemos(commonControllers)
  await doSeedMrnPhnIntegrations()
  await doActivityDataMPatientIntegration()
  // console.log('THIS NEXT LINE ANONYMIZES THE DATABASE. Good to do on a real db for use with development.')
  // await doAnonymize()
  const end = performance.now()
  debug('dbSeeder - doIntegrations. DONE.', Math.round(end - start), 'ms')
}


async function dbCleanOldDemos (commonControllers) {
  // ,{tool_consumer_info_version: 'ehrdemo'}]}
  debug('dbSeeder. dbCleanOldDemos. BEGIN')
  const { demoController } = commonControllers
  const start = performance.now()
  const filterDate = new Date('2023-09-01')
  // TO DO  let the filter date be one month before the current data
  const querys =[
    { $and: [ {lastUpdateDate: { $lte: filterDate}}, {tool_consumer_info_version: 'x'} ] },
    { $and: [ {lastUpdateDate: { $lte: filterDate}}, {tool_consumer_info_version: 'ehrdemo'} ] },
    { $and: [ {lastUpdateDate: { $lte: filterDate}}, { tool_consumer_info_product_family_code: 'EdEHR Demo LMS'} ] }
  ]
  for (const query of querys) {
    debug('Clear consumers with this query', JSON.stringify(query))
    const oldDemos = await Consumer.find(query)
    for (const tc of oldDemos) {
      debug('Clear this demo', tc._id)
      await demoController.deleteDemoData(tc._id)
    }
  }
  const end = performance.now()
  debug('dbSeeder. dbCleanOldDemos. DONE.', Math.round(end - start), 'ms')

}

/**
 *
 * @returns {Promise<void>}
 */
async function doConsumerIntegrations () {
  const doConsumer = await checkIntegration('consumers', false)
  if (doConsumer) {
    debug('dbSeeder. Consumers. BEGIN')
    const start = performance.now()
    // warning -- this function deletes all existing consumers. Since this is seeding this never happens after the first time.
    debug('dbSeeder. consumer')
    await dbCreateConsumers(true)
    const end = performance.now()
    debug('dbSeeder. Consumers. DONE.', Math.round(end - start), 'ms')
  }
}

async function doCourseIntegrations () {
  const doUpdate = await checkIntegration('introduceCourse', false)
  if(doUpdate) {
    debug('introduceCourse. BEGIN')
    const start = performance.now()
    await dbCreateMissingCourses(true)
    const end = performance.now()
    debug('introduceCourse. DONE.', Math.round(end - start), 'ms')
  }
}

async function doD2LIntegrations () {
  const doUpdate = await checkIntegration('desire2learn-activities', false)
  if(doUpdate) {
    debug('doD2LIntegrations. BEGIN')
    const start = performance.now()
    await desire2learnActivitiesIntegtrations(true)
    const end = performance.now()
    debug('doD2LIntegrations. DONE.', Math.round(end - start), 'ms')
  }
}

async function doSeedAppTypeIntegrations () {
  const doUpdate = await checkIntegration('seedAppType', false)
  if(doUpdate) {
    debug('seedAppType. BEGIN')
    const start = performance.now()
    await dbSeedDataAppType()
    const end = performance.now()
    debug('seedAppType. DONE.', Math.round(end - start), 'ms')
  }
}

async function doSeedMrnPhnIntegrations () {
  const doUpdate = await checkIntegration('seedMrnPhn', false)
  if(doUpdate) {
    debug('seedMrnPhn. BEGIN')
    const start = performance.now()
    await dbSeedMrnPhn()
    const end = performance.now()
    debug('seedMrnPhn. DONE.', Math.round(end - start), 'ms')
  }
}

/**
 * One time update of all (student) activity data to reformat the ehrData into a new multi-patient format.
 * This is a Breaking API change and so the release of this update must come with changes to how ehrData is fetched and
 * updated.
 * @returns {Promise<void>}
 */
async function doActivityDataMPatientIntegration () {
  const doUpdate = await checkIntegration('dbMPatientIntegration', false)
  if(doUpdate) {
    debug('dbMPatient. BEGIN')
    const start = performance.now()
    await dbMPatientIntegration()
    const end = performance.now()
    debug('dbMPatient. DONE.', Math.round(end - start), 'ms')
  }
}

// eslint-disable-next-line no-unused-vars
async function doAnonymize () {
  debug('doAnonymize. BEGIN')
  const start = performance.now()
  await dbAnonymizeUsers()
  await dbAnonymizeActivityData()
  const end = performance.now()
  debug('doAnonymize. DONE.', Math.round(end - start), 'ms')
}

export async function updateAllEhrData () {
  const checkName = 'updateEhr_' + CURRENT_EHR_DATA_VERSION
  const doUpdate = await checkIntegration(checkName, false)
  if(doUpdate) {
    debug('updateAllEhrData. BEGIN')
    const start = performance.now()
    await _updateActivityDataPatients()
    await _updateSeeds()
    const end = performance.now()
    debug('updateAllEhrData. DONE.', Math.round(end - start), 'ms')
  } else {
    debug('updateAllEhrData. HISTORY',checkName)
  }
}

/**
 *   _updateActivityDataPatients is invoked when the ehr data version changes. The work below essentially takes the
 *   ehrData, places it inside an EhrModel and then gets it back to be saved. The model performs any needed updates.
 *   Just as it will for the code the updates the ehr data during run time.
  * @returns {Promise<void>}
 * @private
 */
async function _updateActivityDataPatients () {
  debug('updateAllActivityData BEGIN')
  const start = performance.now()
  let cnt = 0
  const activityDataList = await ActivityData.find({assignmentData: { $exists: true} },{assignmentData: true})
  const tCnt = activityDataList.length
  for ( const ad of activityDataList) {
    await activityDataController.updateAndSaveAssignmentData(ad)
    cnt++
    if (cnt % 100 === 0) {
      debug('updateAllActivityData activity data updated ', cnt, 'of', tCnt)
    }
  }
  const end = performance.now()
  debug('updateAllActivityData. DONE. Updated',   cnt, 'of', tCnt, 'ActivityData records in', Math.round(end - start), 'ms')
}

async function _updateSeeds () {
  debug('_updateSeeds. BEGIN')
  const start = performance.now()
  let cnt = 0
  let updated = 0
  const seedDataList = await seedController.list({ isDefault: false })
  const list = seedDataList.seeddata
  const tCnt = list.length
  for (const seed of list) {
    if (!EhrDataModel.IsUpToDate(seed.ehrData)) {
      seed.lastUpdateDate = Date.now()
      seed.ehrData = EhrDataModel.PrepareForDb(seed.ehrData)
      await seed.save()
      updated++
    }
    cnt++
    if (cnt % 100 === 0) {
      debug('_updateSeeds updated ', cnt, 'of', tCnt)
    }
  }
  const end = performance.now()
  debug('_updateSeeds. DONE. Updated', updated, 'of', tCnt, 'Seed records in', Math.round(end - start), 'ms')
}

