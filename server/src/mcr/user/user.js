import mongoose from 'mongoose'
import { WS_EVENT_BUS, WS_S2C_MESSAGE_EVENT } from '../../server/push-server'

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
  oId: {type: String}
})

Schema.post('save', function (doc) {
  WS_EVENT_BUS.emit(WS_S2C_MESSAGE_EVENT, JSON.stringify({channel: 'USER', id: doc._id}))
})

// UserSchema.plugin(uniqueValidator)

const User = mongoose.model('User', Schema)

export default User
