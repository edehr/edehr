'use strict'
import {configuration} from '../config/config'
import EhrApp from './app.js'
import { version } from 'process'
import { logError } from '../helpers/log-error'
import { setupWebSocket } from './push-server'
import fs from 'fs'
import { ObjectId } from 'mongodb'
import SeedData from '../mcr/seed/seed-data'
import Consumer from '../mcr/consumer/consumer'
import { cronTaskInitialize } from './cronTask'

// Initialize the singleton instance of the cron task manager.
cronTaskInitialize()

// cronRegisterMinuteTask(() => { console.log('test every minute cron task')})

const debug = require('debug')('server')

if (!validateNode()) {
  process.exit(1)
}

/*
 * This routine is run after the server is started. It can perform special work as needed.
 *
 * Below this routine will create seeds in all primary consumers based on the contents of
 * the 'folderPath'. To use this just place json files in this directory that define the seeds
 * you want. The routine will only create a seed if no other seed shares the same name. Hence,
 * it will only import the seed once.
 *
 * Clearly this only works for administrators of the system who can place the json files in the folder.
 *
 * TO DO provide a means for users to import a block of seeds
 */
async function afterStartUp () {
  console.log('afterStartup BEGIN')
  const folderPath = './src/seedDefsToImport'
  const consumers = await Consumer.find({is_primary: true},
    {
      oauth_consumer_key: 1,
      tool_consumer_instance_name:1,
      tool_consumer_info_product_family_code:1,
      tool_consumer_instance_description:1,
      lti_version: 1
    },
  )
  const doImport = true
  if(doImport) {
    for(const consumer of consumers) {
      console.log('Start work for consumer', consumer.oauth_consumer_key)
      const consumerId = new ObjectId(consumer._id)
      if (fs.existsSync(folderPath)) {
        const dirList = fs.readdirSync(folderPath)
        for (const p of dirList) {
          const path = folderPath + '/' + p
          const def = fs.readFileSync(path, 'UTF-8')
          const obj = JSON.parse(def)
          obj.toolConsumer = consumer._id
          const existing = await SeedData.find({
            toolConsumer: consumerId,
            name: { $eq: obj.name }
          })
          if (existing.length === 0) {
            console.log('Create seed ', obj.name)
            await SeedData.create(obj)
          } else {
            console.log('Seed exists already', obj.name)
          }
        }
      } else {
        console.log('Can not find directory ', folderPath)
      }
      console.log('Done work for consumer', consumer.oauth_consumer_key)
    }
  }
  console.log('afterStartup DONE')
}

const ehrApp = new EhrApp(configuration)
ehrApp.setup(configuration)
  .then(() => {
    const app = ehrApp.application
    const {serverPort} = configuration
    if (validateNode()) {
      const appServer = app.listen(serverPort, () => {
        console.log('Server running...', serverPort)
        afterStartUp()
      })
      setupWebSocket(appServer, app.authUtil)
    }
  })

function validateNode () {
  // allow transition to v18 (skip v16)
  let valid
  if (version.includes('v18') || version.includes('v20')) {
    debug(`Node Version: ${version}`)
    valid = true
  } else {
    console.error('Unexpected version of Node is active ', version)
    console.error('configuration', configuration)
    logError('Unexpected version of Node is active ', version)
    valid = false
  }
  return valid
}
export default ehrApp
