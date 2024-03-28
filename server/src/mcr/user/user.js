import mongoose from 'mongoose'
import { WS_EVENT_BUS, WS_S2C_MESSAGE_EVENT } from '../../server/push-server'

/*
March 28, 2024. Introduce user settings.  First value will allow user to select compact EHR layout.
 */
const UserSettings = new mongoose.Schema({
  ehrLayout:{
    type: String,
    enum : ['open','compact'],
    default: 'open'
  }
  // signOnName: { type: String },
  // signOnRole: { type: String }
})

const Schema = new mongoose.Schema({
  toolConsumer: {type: mongoose.Schema.Types.ObjectId, ref: 'Consumer', required: true},
  /* include consumer key only to help a dev trace information through the db */
  consumerKey: { type: String },
  user_id: {type: String, require: true},
  givenName: { type: String },
  familyName: { type: String },
  fullName: { type: String },
  createDate: {type: Date, default: Date.now},
  lastUpdateDate: { type: Date, default: Date.now },
  userSettings: { type: UserSettings, default: () => ({}) },
  oId: {type: String}
})

Schema.post('save', function (doc) {
  WS_EVENT_BUS.emit(WS_S2C_MESSAGE_EVENT, JSON.stringify({channel: 'USER', id: doc._id}))
})

// UserSchema.plugin(uniqueValidator)

const User = mongoose.model('User', Schema)

export default User
