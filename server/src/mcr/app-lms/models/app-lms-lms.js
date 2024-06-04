import mongoose from 'mongoose'
import { ObjectId } from 'mongodb'

/*
 */
const Schema = new mongoose.Schema({
  appLmsName: { type: String, required: [true, 'Require unique name for App LMS'], unique: true },
  owner: {type: ObjectId, ref: 'AppLmsUser', required: true},
  toolConsumer: {type: ObjectId, ref: 'Consumer', required: true},
  description: { type: String },
  inviteCodeWordStudent: {type: String},
  inviteCodeWordTeacher: {type: String},
  createDate: {type: Date, default: Date.now},
  lastUpdateDate: {type: Date, default: Date.now}
})

const AppLmsLms = mongoose.model('AppLmsLms', Schema)

export default AppLmsLms
