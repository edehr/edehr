import ActivityDataController from '../mcr/activity-data/activity-data-controller'
import SeedDataController from '../mcr/seed/seedData-controller'
const debug = require('debug')('server')
const adc = new ActivityDataController()
const seedController = new SeedDataController()

async function _updateAllAssignmentDataSimulationTime () {
  debug('For each activity update the meta data sim time.')
  const list = await adc.list()
  list.activitydata.forEach(ad => {
    if(ad.assignmentData) {
      adc.updateAssignmentEhrData(ad._id, ad.assignmentData)
    }
  })
}

async function _updateAllSeedDataSimulationTime () {
  debug('For each seed update the meta data sim time.')
  const list = await seedController.list()
  list.seeddata.forEach(seed => {
    if (!seed.isDefault) {
      seedController.updateSeedEhrData(seed._id, seed.ehrData)
    }
  })
}

async function dbCreateInitalSimMetaData () {
  debug('Update EHR data in the database and update the simulation time')
  await _updateAllAssignmentDataSimulationTime()
  await _updateAllSeedDataSimulationTime()
}
module.exports = dbCreateInitalSimMetaData