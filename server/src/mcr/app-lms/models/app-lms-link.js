import mongoose from 'mongoose'
const ObjectId = mongoose.Schema.Types.ObjectId

/*
  Table
    App LMS  |  User  |  Role

  App LMS:  ObjectId to AppLms
  User:  ObjectId to AppLmsUser
  Role: Student,  Instructor, Owner
 */
const Schema = new mongoose.Schema({
  appLms: {type: ObjectId, ref: 'AppLmsLms', required: true},
  appLmsUser: {type: ObjectId, ref: 'AppLmsUser', required: true},
  role: {type: String, required: true},
  createDate: {type: Date, default: Date.now},
  lastUpdateDate: {type: Date, default: Date.now}
})

const AppLmsLink = mongoose.model('AppLmsLink', Schema)

export default AppLmsLink
