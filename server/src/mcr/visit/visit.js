import mongoose from 'mongoose'
import { WS_EVENT_BUS, WS_S2C_MESSAGE_EVENT } from '../../server/push-server'
const ObjectId = mongoose.Schema.Types.ObjectId

const SignOn = new mongoose.Schema({
  personaName: { type: String },
  personaProfession: { type: String }
})

const SimDayTime = new mongoose.Schema({
  cDate: { type: String },
  cTime: { type: String }
})


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
  activity: {type: ObjectId, ref: 'Activity', required: true},
  activityData: {type: ObjectId, ref: 'ActivityData'},
  isStudent: {type: Boolean, default: false},
  isInstructor: {type: Boolean, default: false},
  instructorAsStudent: {type: Boolean, default: false},
  returnUrl: {type: String},
  simulationSignOn: { type: SignOn, default: {} },
  simulationDateTime: { type: SimDayTime, default: {} },
  createDate: {type: Date, default: Date.now},
  lastVisitDate: {type: Date, default: Date.now}
})

VisitSchema.post('save', function (doc) {
  WS_EVENT_BUS.emit(WS_S2C_MESSAGE_EVENT, JSON.stringify({channel: 'VISIT', id: doc._id}))
})

const Visit = mongoose.model('Visit', VisitSchema)

export default Visit
