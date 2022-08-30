import mongoose from 'mongoose'
const ObjectId = mongoose.Schema.Types.ObjectId

/*
A Visit represents an interaction between a user and the EdEHR. A visit can span
multiple actual visits. Say, for example, a user clicks on an activity in their
LMS and comes to complete an assignment in the EdEHR. They may return to the LMS
and then come back later to do some more work on the assignment.
 */
const VisitSchema = new mongoose.Schema({
  toolConsumer: {type: ObjectId, ref: 'Consumer', required: true},
  /* include consumer key to help a dev trace information through the db */
  consumerKey: { type: String },
  role: { type: String, default: 'student' },
  user: {type: ObjectId, ref: 'User', required: true},
  /* include user name only to help a dev trace information through the db */
  // userName: { type: String },
  activity: {type: ObjectId, ref: 'Activity', required: true},
  assignment: {type: ObjectId, ref: 'Assignment', required: true},
  activityData: {type: ObjectId, ref: 'ActivityData'},
  isStudent: {type: Boolean, default: false},
  isInstructor: {type: Boolean, default: false},
  isDeveloper: {type: Boolean, default: false},
  returnUrl: {type: String},
  /* Track the lti information that creates this visit to help resolve issues between LMS and EdEHR*/
  // ltiData: [ { type: String } ],
  createDate: {type: Date, default: Date.now},
  lastVisitDate: {type: Date, default: Date.now}
})

const Visit = mongoose.model('Visit', VisitSchema)

export default Visit
