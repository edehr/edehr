import SeedData from '../mcr/seed/seed-data'
import { decoupleObject } from '../ehr-definitions/common-utils'
const debug = require('debug')('server')

/**
 * Look into seed ehrData.  If demographics mrn is empty and phn is not empty then copy phn into mrn.
 * This is to account for users who set up to use PHN when they wanted to use MRN but MRN was not visible
 * to students in the EHR patient banner. Now MRN is visible, and we wish to switch over to using MRN
 *
 * Note that this routine will be done once thanks to the integration checks.
 * It will happen once before the new presave routine in the seeddata model will be invoked.  IN fact, this
 * update will trigger that presave for the seed datas that are affected by this update.  So, that just means these
 * seeds will have the new mrn (from the phn) copied into the top level document structure.
 * @returns {Promise<void>}
 */
export default async function dbSeedMrnPhn () {
  const allSeeds = await SeedData.find({ ehrData: {$ne: null}}, {name: 1, ehrData: 1})
  for (const sd of allSeeds) {
    let ehrData = decoupleObject(sd.ehrData)
    ehrData.demographics = ehrData['demographics'] || {}
    const mrn = ehrData.demographics.mrn
    const phn = ehrData.demographics.phn
    if (!mrn && phn) {
      ehrData.demographics.mrn = ehrData.demographics.phn
      delete ehrData.demographics.phn
      await SeedData.updateOne({_id: sd._id}, {ehrData: ehrData})
      debug('updated dbSeedMrnPhn on seed', sd.name, mrn)
    }
  }
}
