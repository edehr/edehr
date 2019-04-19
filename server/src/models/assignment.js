import mongoose from 'mongoose'
const ObjectId = mongoose.Schema.Types.ObjectId

const Schema = new mongoose.Schema({
  toolConsumer: {type: ObjectId, ref: 'Consumer', required: true},
  externalId: {type: String, unique: true, required: true},
  name: { type: String, required: true},
  description: { type: String },
  ehrRoutePath: { type: String },
  seedDataId: {type: mongoose.Schema.Types.ObjectId, ref: 'SeedData', required: true}
})

const Assignment = mongoose.model('Assignment', Schema)

export default Assignment
