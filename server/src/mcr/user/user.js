import mongoose from 'mongoose'
// import uniqueValidator from 'mongoose-unique-validator'

const Schema = new mongoose.Schema({
  toolConsumer: {type: mongoose.Schema.Types.ObjectId, ref: 'Consumer', required: true},
  /* include consumer key only to help a dev trace information through the db */
  consumerKey: { type: String },
  user_id: {type: String, require: true},
  givenName: { type: String },
  familyName: { type: String },
  fullName: { type: String },
  emailPrimary: {type: String},
  createDate: {type: Date, default: Date.now}
})

// UserSchema.plugin(uniqueValidator)

const User = mongoose.model('User', Schema)

export default User
