import { setup, setupStoreDirectory, saveToFile } from './db-util'
import Consumer from '../mcr/consumer/consumer'

var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}

async function getOldConsumers() {
  let results
  const thresholdDate = new Date()
  thresholdDate.setFullYear(thresholdDate.getFullYear() - 1)
  thresholdDate.setMonth(thresholdDate.getMonth() - 10)
  thresholdDate.setDate(0)
  thresholdDate.setUTCHours(0, 0, 0, 0)
  console.log('new thresholdDate ', thresholdDate.toISOString())

  results = await Visit.find({}, { id: true, toolConsumer: true, lastVisitDate: true })
  let groups = groupBy(results, 'toolConsumer')

  let toDeleteConsumerIds = []
  Object.keys(groups).forEach(key => {
    let group = groups[key]
    group.sort((a, b) => {
      return b.lastVisitDate - a.lastVisitDate
    })
    let mostRecentVisitDate = group[0].lastVisitDate
    if (mostRecentVisitDate <= thresholdDate) {
      toDeleteConsumerIds.push(key)
    }
  })
  let toDeleteConsumers = await Consumer.find({
    _id: { $in: toDeleteConsumerIds},
    tool_consumer_info_version: 'x'
  })
}

async function getTools(dName) {
  let tools = await Consumer.find({ tool_consumer_info_version: { $nin: ['x', 'ehrdemo'] } })
  const content = JSON.stringify(tools, null, 2)
  // console.log(content)
  saveToFile(dName, 'Consumers.json', content)
}


async function main() {
  await setup()
  const dName = setupStoreDirectory()
  await getTools(dName)
  process.exit(0)
}

main()