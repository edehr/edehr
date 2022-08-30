import ActivityDataController from '../mcr/activity-data/activity-data-controller'
import SeedDataController from '../mcr/seed/seedData-controller'
import EhrDefs from '../ehr-definitions/ehr-page-defs'
import { updateAllVisitTime } from '../ehr-definitions/ehr-def-utils'
const debug = require('debug')('server')
const adc = new ActivityDataController()
const seedController = new SeedDataController()

function convert (ehrData) {
  if (ehrData) {
    // console.log('convert ehrdata', ehrData)
    ehrData = updateAllVisitTime(ehrData, EhrDefs)
  }
  return ehrData
}

async function _updateAssignments () {
  debug('For each activity get the EHR data and replace all strings with format like 00:00 with 0000')
  const list = await adc.list()
  list.activitydata.forEach(ad => {
    adc.updateAssignmentEhrData(ad._id, convert(ad.assignmentData))
  })
}

async function _updateSeeds () {
  debug('_updateSeeds For each seed get the EHR data and replace all strings with format like 00:00 with 0000')
  const list = await seedController.list()
  list.seeddata.forEach(seed => {
    if (!seed.isDefault) {
      seedController.updateSeedEhrData(seed._id, convert(seed.ehrData))
    }
  })
}

async function dbConvertTimeValues () {
  debug('Update EHR data in the database and update any time vales from 00:00 to 0000')
  await _updateAssignments()
  await _updateSeeds()
}
module.exports = dbConvertTimeValues