import mongoose from 'mongoose'

/*
AppLmsUser
  - user name
  - email (key unique, and expect this has been verified
 */
const Schema = new mongoose.Schema({
  userEmail: { type: String, required: [true, 'Require email as user key'], unique: true },
  givenName: {type: String },
  familyName: {type: String },
  createDate: {type: Date, default: Date.now},
  lastUpdateDate: {type: Date, default: Date.now}
})

const AppLmsUser = mongoose.model('AppLmsUser', Schema)

export default AppLmsUser
