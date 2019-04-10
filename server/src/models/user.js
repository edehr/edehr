import mongoose from 'mongoose'
// import uniqueValidator from 'mongoose-unique-validator'

const Schema = new mongoose.Schema({
  toolConsumer: {type: mongoose.Schema.Types.ObjectId, ref: 'Consumer', required: true},
  user_id: {type: String, require: true},
  givenName: { type: String },
  familyName: { type: String },
  fullName: { type: String },
  emailPrimary: {type: String},
  ltiData: [ { type: String } ],
  asStudentVisits: [{type: mongoose.Schema.Types.ObjectId, ref: 'Visit'}],
  asInstructorVisits: [{type: mongoose.Schema.Types.ObjectId, ref: 'Visit'}],
  createDate: {type: Date, default: Date.now}
})

// UserSchema.plugin(uniqueValidator)

const User = mongoose.model('User', Schema)

export default User
