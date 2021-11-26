import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
const ObjectId = mongoose.Schema.Types.ObjectId

/*
This object is now called a learning object in the client user interface.  Some refactoring of the code
may be underway that would rename 'assignment' objects into 'learningObject' objects.
And rename 'externalId' into 'learningObjectId'.   Expect this refactoring to remain partially
complete for a period of time.
 */
const Schema = new mongoose.Schema({
  toolConsumer: {type: ObjectId, ref: 'Consumer', required: true },
  // TODO rename externalId to learningObjectId
  externalId: {type: String, required: true},
  name: { type: String, required: true},
  description: { type: String },
  ehrRoutePath: { type: String },
  // These fields refer to the assignment persona and their information. This is needed in order to acknowledge
  // who was responsible for providing information on some contexts (digital signing). 
  // It is now required and there's a fallback to default values if no information is provided. 
  persona: { type: String }, 
  profession: { type: String },
  day: { type: Number },
  time: { type: String },
  seedDataId: {type: mongoose.Schema.Types.ObjectId, ref: 'SeedData', required: true},
  createDate: { type: Date, default: Date.now },
  lastUpdateDate: { type: Date, default: Date.now }
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
