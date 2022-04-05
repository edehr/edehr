import mongoose from 'mongoose'
import path from 'path'
import fs from 'fs'
import db from '../server/db'
// import { apiMiddle } from '../server/api'
import applicationConfiguration from '../config/config.js'

const configuration = applicationConfiguration(process.env.NODE_ENV)

// for filtering unique values from an array
// Usage:
// const arr = [1,2,2,3]
// const uniques = arr.filter(onlyUnique)
export function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}


export async function setup() {
  await db(configuration)
  // .then(connection => {
  // })
  // const mongoDB = 'mongodb://127.0.0.1:27018/edehr-prod'
  //
  // mongoose.connect(mongoDB, {
  //   useNewUrlParser: true,
  //   useCreateIndex: true,
  //   useUnifiedTopology: true
  // }).catch(error => console.error(error))
  // const db = mongoose.connection
  // db.on('error', console.error.bind(console, 'MongoDB connection error:'))
}


export function setupStoreDirectory() {
  const todayPath = new Date().toISOString()
  // const todayPath = '' + today.getFullYear() + (today.getMonth() + 1) + today.getDate()
  const dPath = path.join(__dirname, '..', '..', 'deleted', todayPath)
  fs.mkdir(dPath, { recursive: true }, (err) => {
    if (err) {
      return console.error(err)
    }
    // console.log('Directory', dPath, ' created successfully')
  })
  return dPath
}

export function saveToFile(dName, fName, contentObject) {
  fName = path.join(dName, fName)
  // console.log('Write content to:', fName, contentObject.length)
  fs.writeFileSync(fName, contentObject)

  //   , err => {
  //   if (err) console.error(err)
  //   else console.log('Wrote content to', fName)
  // })
}

export async function toDelete(dName, type, typeName, consumerIds) {
  let toDelete = await type.find({ toolConsumer: { $nin: consumerIds } })
  saveToFile(dName, typeName + '.json', JSON.stringify(toDelete))
  return toDelete.map(v => v._id)
}

export async function doDelete(type, ids) {
  await type.deleteMany({ _id: { $in: ids } })
}
