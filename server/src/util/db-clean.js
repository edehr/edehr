// import mongoose from 'mongoose'
import Activity from '../mcr/activity/activity'
import ActivityData from '../mcr/activity-data/activity-data'
import Assignment from '../mcr/assignment/assignment'
import Consumer from '../mcr/consumer/consumer'
import SeedData from '../mcr/seed/seed-data'
import User from '../mcr/user/user'
import Visit from '../mcr/visit/visit'
// import path from 'path'
// import fs from 'fs'
import { setup, toDelete, doDelete, setupStoreDirectory, saveToFile } from './db-util'

const myArgs = process.argv.slice(2)
const clean = myArgs.length >= 1 && myArgs[0] === 'clean'
console.log('Args', myArgs)
console.log(clean ? 'Will': 'Will not', 'actually delete records')

main()


async function cleanUp(dName, clean) {
  let toKeepConsumers = await Consumer.find({})
  let toDeleteActivity = await toDelete(dName, Activity, 'Activity', toKeepConsumers)
  let toDeleteActivityData = await toDelete(dName, ActivityData, 'ActivityData', toKeepConsumers)
  let toDeleteAssignment = await toDelete(dName, Assignment, 'Assignment', toKeepConsumers)
  let toDeleteSeedData = await toDelete(dName, SeedData, 'SeedData', toKeepConsumers)
  let toDeleteUser = await toDelete(dName, User, 'User', toKeepConsumers)
  let toDeleteVisits = await toDelete(dName, Visit, 'Visit', toKeepConsumers)

  if (clean) {
    await doDelete(ActivityData, toDeleteActivityData)
  }
  const log = []
  function logInfo(name, cnt) {
    log.push(name + ' ' + cnt)
  }

  logInfo('Directory name', dName)
  logInfo('Deleted Activity', toDeleteActivity.length)
  logInfo('Deleted ActivityData', toDeleteActivityData.length)
  logInfo('Deleted Assignment', toDeleteAssignment.length)
  logInfo('Deleted SeedData', toDeleteSeedData.length)
  logInfo('Deleted User', toDeleteUser.length)
  logInfo('Deleted Visits', toDeleteVisits.length)

  const logData = log.join('\n') + '\n'
  console.log('logData', logData)
  saveToFile(dName, 'logData.log', logData)

}

async function main() {
  await setup()
  const dName = setupStoreDirectory()
  await cleanUp(dName, clean)
  process.exit(0)
}
