import SeedData from '../mcr/seed/seed-data'
import EhrDataModel from '../ehr-definitions/EhrDataModel'
const debug = require('debug')('server')

/**
 * Initialize the appType of case studies.
 * Finds all the seeds (case studies) without appType property.
 * Looks into their respective EHR data and if there is data on the hematology page then
 * assume the app type is LIS. Otherwise EHR.
 *
 * Because this updates the appType field it means this function will only process
 * a case study once.
 *
 * @returns {Promise<void>}
 */
export default async function dbSeedDataAppType () {
  const allSeeds = await SeedData.find({appType: null})
  const pKey = 'hematology'
  for (const sd of allSeeds) {
    const model = new EhrDataModel(sd.ehrData)
    const hematology = model.hasData(pKey)
    let appType = 'EHR'
    if(hematology) {
      appType = 'LIS'
    }
    await SeedData.updateOne({_id: sd._id}, {appType: appType})
    debug('updated appType on seed', sd.name)
  }

}
