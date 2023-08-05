import mongoose from 'mongoose'
const ObjectId = mongoose.Schema.Types.ObjectId

/*
 */

const Schema = new mongoose.Schema({
  toolConsumer: {type: ObjectId, ref: 'Consumer', required: true},
  context_id: {type: String, required: true}, // ltiData.context_id,
  context_label: {type: String}, // ltiData.context_label,
  context_title: {type: String}, // ltiData.context.context_title,
  context_type: {type: String}, // ltiData.context_type,
  custom_title: { type: String }, // user supplied override to context_title
  custom_description: { type: String }, // user supplied override to context_label
  createDate: {type: Date, default: Date.now},
  lastDate: {type: Date, default: Date.now}
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
})

Schema.virtual('title').get(function () {
  return this.custom_title || this.context_title || 'Unknown'
})
Schema.virtual('description').get(function () {
  return this.custom_description || this.context_label || ''
})

const Course = mongoose.model('Course', Schema)

export default Course