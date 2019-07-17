import mongoose from 'mongoose'
const ObjectId = mongoose.Schema.Types.ObjectId

/*
An Activity is a tool consumer assignment.
Within any Consumer the resource_link_id is an unique id referencing the link, or "placement", of the app in the consumer.
If an app was added twice to the same class, each placement would send a different id, and should be considered a unique "launch".

 The context_id is the course id in the LMS.
The resource_link_id is the assignment id in the LMS.

The custom_assignment value is the link to the EdEHR seed data.
Many Activities use the same seed data.
Each Activity is tracked and managed separately.
 */

const Schema = new mongoose.Schema({
  toolConsumer: {type: ObjectId, ref: 'Consumer', required: true},
  resource_link_id: {type: String, required: true}, // ltiData.resource_link_id,
  context_id: {type: String}, // ltiData.context_id,
  context_label: {type: String}, // ltiData.context_label,
  context_title: {type: String}, // ltiData.context.context_title,
  context_type: {type: String}, // ltiData.context_type,
  resource_link_title: {type: String}, // ltiData.resource_link_title,
  resource_link_description: {type: String}, // ltiData.resource_link_description,
  // TODO consider just storing the external id/ custom_assignment and use it as lookup key
  assignment: {type: ObjectId, ref: 'Assignment'}, // ltiData.custom_assignment,
  createDate: {type: Date, default: Date.now}
})

const Activity = mongoose.model('Activity', Schema)

export default Activity
