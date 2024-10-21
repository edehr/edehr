import mongoose from 'mongoose'
const ObjectId = mongoose.Schema.Types.ObjectId

const Schema = new mongoose.Schema({
  toolConsumer: {type: ObjectId, ref: 'Consumer', required: true},
  /* include consumer key only to help a dev trace information through the db */
  consumerKey: { type: String },
  year: { type: Number},
  month: { type: Number},
  isNewEntry: { type: Boolean, required: true },
  isStudent: { type: Boolean, required: true },
  user: {type: ObjectId, ref: 'User', required: true},
  visit: {type: ObjectId, ref: 'Visit', required: true},
  date: {type: Date, default: Date.now},
})

Schema.pre('save', function (next) {
  const today = new Date()
  this.year = today.getFullYear() // Set the year
  this.month = today.getMonth() + 1 // Set the month (getMonth() returns 0-11, so add 1)
  next()
})

const ConnectionEntry = mongoose.model('ConnectionEntry', Schema)

export default ConnectionEntry
