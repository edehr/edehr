import mongoose from 'mongoose'
/*
 */

const Schema = new mongoose.Schema({
  externalId: {type: String, unique: true, required: true},
  name: { type: String, required: true},
  description: { type: String },
  ehrRoutePath: { type: String },
  ehrRouteName: { type: String },
  seedDataId: {type: mongoose.Schema.Types.ObjectId, ref: 'SeedData', required: true},
  seedData: {type: Object}
})

const Assignment = mongoose.model('Assignment', Schema)

export default Assignment
