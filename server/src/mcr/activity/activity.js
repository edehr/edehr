import mongoose from 'mongoose'
import { WS_EVENT_BUS, WS_S2C_MESSAGE_EVENT } from '../../server/push-server'
const ObjectId = mongoose.Schema.Types.ObjectId

/*
An Activity is a tool consumer assignment.
Within any Consumer the resource_link_id is an unique id referencing the link, or "placement", of the app in the consumer.
If an app was added twice to the same class, each placement would send a different id, and
should be considered a unique "launch".

The context_id is the course id in the LMS.
The resource_link_id is the assignment id in the LMS.

The custom_assignment value is the link to the EdEHR seed data.
Many Activities use the same seed data.
Each Activity is tracked and managed separately.
 */

const Schema = new mongoose.Schema({
  toolConsumer: { type: ObjectId, ref: 'Consumer', required: true },
  resource_link_id: { type: String, required: true }, // ltiData.resource_link_id,
  course: { type: ObjectId, ref: 'Course' }, // would like course to be required but first must migrate all existing objects to have course.
  // TODO remove the course (context) data elements and do a db migration to move them into a new Course object
  context_id: { type: String }, // ltiData.context_id,
  context_label: { type: String }, // ltiData.context_label,
  context_title: { type: String }, // ltiData.context.context_title,
  context_type: { type: String }, // ltiData.context_type,
  feedbackViewable: { type: Boolean, default: true }, // if false then prevent students from seeing the instructor's evaluation comments. See evaluationData in activity-data
  resource_link_title: { type: String }, // ltiData.resource_link_title,
  resource_link_description: { type: String }, // ltiData.resource_link_description,
  custom_title: { type: String }, // user supplied override to resource_link_title
  custom_description: { type: String }, // user supplied override to resource_link_description
  assignment: { type: ObjectId, ref: 'Assignment' }, // empty until instructor links assignment to activity
  createDate: { type: Date, default: Date.now },
  lastDate: { type: Date, default: Date.now },
  oId: {type: String},
  visitors: [ {
    visitId: { type: ObjectId, ref: 'Visit' },
    visitDate: { type: Date, default: Date.now },
  } ]
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
})

Schema.post('save', function (doc) {
  WS_EVENT_BUS.emit(WS_S2C_MESSAGE_EVENT, JSON.stringify({channel: 'ACTIVITY', id: doc._id}))
})

Schema.virtual('title').get(function () {
  return this.custom_title || this.resource_link_title || 'Unknown'
})
const Activity = mongoose.model('Activity', Schema)

export default Activity
