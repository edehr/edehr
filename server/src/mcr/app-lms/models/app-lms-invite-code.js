import mongoose from 'mongoose'
const ObjectId = mongoose.Schema.Types.ObjectId

const Schema = new mongoose.Schema({
  inviteCode: {type: String, required: true},
  appLms: {type: ObjectId, ref: 'AppLmsLms', required: true},
  role: {type: String, required: true},
  createDate: {type: Date, default: Date.now}
})

const NotUsedAppLmsInviteCode = mongoose.model('AppLmsInviteCode', Schema)

export default NotUsedAppLmsInviteCode
