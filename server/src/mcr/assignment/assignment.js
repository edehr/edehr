import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
const ObjectId = mongoose.Schema.Types.ObjectId

/*
This object is now called a learning object in the client user interface.  Some refactoring of the code
may be underway that would rename 'assignment' objects into 'learningObject' objects.
 */
const Schema = new mongoose.Schema({
  toolConsumer: {type: ObjectId, ref: 'Consumer', required: true },
  name: { type: String, required: true},  // resource_link_title
  description: { type: String }, // resource_link_description
  seedDataId: {type: mongoose.Schema.Types.ObjectId, ref: 'SeedData', required: true},
  createDate: { type: Date, default: Date.now },
  lastUpdateDate: { type: Date, default: Date.now }
})

Schema.plugin(uniqueValidator)


const Assignment = mongoose.model('Assignment', Schema)
// need to sync indexes because prior to v2.0.1 there was an index on this doc based on the now obsolete externalId
Assignment.syncIndexes()

export default Assignment
