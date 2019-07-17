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
  /* If needed include the LTI data used to create this user. Omit otherwise because it's long. */
  // ltiData: [ { type: String } ],
  /* see if we need to track the student visits here in the user record. Better to just query the visit table? */
  // asStudentVisits: [{type: mongoose.Schema.Types.ObjectId, ref: 'Visit'}],
  asInstructorVisits: [{type: mongoose.Schema.Types.ObjectId, ref: 'Visit'}],
  createDate: {type: Date, default: Date.now}
})

// UserSchema.plugin(uniqueValidator)

const User = mongoose.model('User', Schema)

export default User
