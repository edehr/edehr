import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
const ObjectId = mongoose.Schema.Types.ObjectId

const Schema = new mongoose.Schema({
  toolConsumer: {type: ObjectId, ref: 'Consumer', required: true },
  externalId: {type: String, required: true},
  name: { type: String, required: true},
  description: { type: String },
  ehrRoutePath: { type: String },
  // These fields refer to the assignment persona and their information. This is needed in order to acknowledge
  // who was responsible for providing information on some contexts (digital signing). 
  // It is now required and there's a fallback to default values if no information is provided. 
  persona: { type: String, required: true, default: 'Jason' }, 
  profession: { type: String, required: true, default: 'doctor' },
  day: { type: Number, required: false, required: true, default: 0 },
  time: { type: String, required: true, default: '08:00' },
  seedDataId: {type: mongoose.Schema.Types.ObjectId, ref: 'SeedData', required: true}
})

Schema.plugin(uniqueValidator)

Schema.index({
  toolConsumer: 1,
  externalId: 1
}, {
  unique: true
})


const Assignment = mongoose.model('Assignment', Schema)

export default Assignment
