import mongoose from 'mongoose'
import { WS_EVENT_BUS, WS_S2C_MESSAGE_EVENT } from '../../server/push-server'
const ObjectId = mongoose.Schema.Types.ObjectId

/*
A ActivityData represents the student's work for a particular LMS activity (with EdEHR assignment)
and it includes
- the students's data (assignmentData).
- the activity's EdEHR assignment seed data (read only copy from assignment)
- the combined seed data with the assignmentData (mergedData),
- the instructor's evaluation notes for the work contained in the assignment data
Via the visit record we can access the LMS activity, the student, and the EdEHR assignment.
The tool consumer field is here, as in other cases, to provide future sharding and data management tasks based
on tool consumer (e.g. locate all records for a particular consumer, or shard data based on consumer)
 */
const Schema = new mongoose.Schema({
  toolConsumer: {type: ObjectId, ref: 'Consumer', required: true},
  visit: {type: ObjectId, ref: 'Visit', required: true},
  assignmentData: {type: Object}, // place for student's data
  evaluationData: {type: Object}, //place for instructor to mark the work
  scratchData: {type: Object}, // place for student to add notes
  submitted: { type: Boolean, default: false},
  createDate: {type: Date, default: Date.now},
  lastDate: {type: Date, default: Date.now},
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
})

Schema.post('save', function (doc) {
  WS_EVENT_BUS.emit(WS_S2C_MESSAGE_EVENT, JSON.stringify({channel: 'ACTIVITY_DATA', id: doc._id}))
})

const ActivityData = mongoose.model('ActivityData', Schema)

export default ActivityData
