import Visit from '../mcr/visit/visit'
import Assignment from '../mcr/assignment/assignment'
import SeedData from '../mcr/seed/seed-data'
import ActivityData from '../mcr/activity-data/activity-data'
import EhrDataModel from '../ehr-definitions/EhrDataModel'
const debug = require('debug')('server')

/**
 * For each visit where isStudent is true.
 *
 * 1. get the activityData record
 * 2. Get the seed data.
 *    2.a Get the Activity from the Visit
 *    2.b Get the Assignment (lObj) from the Activity
 *    2.c Get the SeedData from the Assignment.
 *
 * @returns {Promise<void>}
 */
export default async function dbMPatientIntegration () {
  // all student visits that have activity data.
  let allStudentVisits = await Visit.find( {isStudent: true, activityData: {$ne: null}} )
    .populate('activity') // get the activity to get the learning object to get the seed id
  const tCnt = allStudentVisits.length
  let cnt = 0
  for (const visit of allStudentVisits) {
    // get the activity data record so we can update it
    const activityData = await ActivityData.findById(visit.activityData)
    // if it has ehrData and the content has not yet been transformed to hold patients array.
    if (activityData.assignmentData && !activityData.assignmentData.patients) {
      const lObjId = visit.activity.assignment
      const lObj = await Assignment.findById(lObjId)
      const seedId = lObj.seedDataId
      // let ehrData contain the existing page data (demographics, etc) including meta.
      const ehrData = JSON.parse(JSON.stringify(activityData.assignmentData))
      // new data will hold the transformed content
      activityData.assignmentData = {
        patients: [
          {
            _id: seedId,
            seedId: seedId,
            ehrData: ehrData // original ehrData is placed inside this new patient record
          }
        ]
      }
      await activityData.save()
    }
    cnt++
    if (cnt % 100 === 0) {
      debug('dbMPatient updated ', cnt, 'of', tCnt)
    }
  }
}
