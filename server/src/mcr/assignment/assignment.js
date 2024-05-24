import mongoose from 'mongoose'
import { WS_EVENT_BUS, WS_S2C_MESSAGE_EVENT } from '../../server/push-server'
import { APP_TYPE_EHR, APP_TYPE_LIS } from '../../helpers/appType'
import { getNextSequence } from '../common/counter-controller'
const ObjectId = mongoose.Schema.Types.ObjectId

const SimStage = new mongoose.Schema({
  simKey: { type: String },
  name: { type: String },
  faculty: { type: String },
  instructions: { type: String },
})

/*
This object is now called a learning object in the client user interface.  Some refactoring of the code may be underway that would rename 'assignment' objects into 'learningObject' objects.

Introduced multi patients October 2023.
Now a LObj no longer is required to have a seed (case study).
Students will start with a blank system. They will select the patient from the seeds available. Filtering will start with the app type and can be extended with a tag.

Introduce SimStages February 2024. These will control the simulation and set the current simulation time for students under the control of instructors, in the simulation control room.

TODO remove the assignment-controller _updatePreSave and replace with an explicit clear-the-seed end-point.
 */
const Schema = new mongoose.Schema({
  toolConsumer: {type: ObjectId, ref: 'Consumer', required: true },
  idForLTI: { type: String },
  name: { type: String, required: true},  // resource_link_title
  description: { type: String }, // resource_link_description
  seedDataId: {type: mongoose.Schema.Types.ObjectId, ref: 'SeedData'},
  mPatientAppType: {
    type: String,
    enum : ['', APP_TYPE_EHR, APP_TYPE_LIS] // allow empty for when the seed provides the apptype. UI to make sure one or the other has content.
  },
  mPatientFilterTag: { type: String},
  simStages: [SimStage],
  facultyNotes: { type: String },
  creatorNotes: { type: String },
  createDate: { type: Date, default: Date.now },
  lastUpdateDate: { type: Date, default: Date.now },
  oId: {type: String}
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  minimize: false  // need this to get default empty object
})

Schema.pre('save', async function (next) {
  if (! this.idForLTI) {
    let tt = await getNextSequence(this.toolConsumer, 'LP', 5)
    this.idForLTI = 'LP' + tt
  }
  function compareSimStage ( a, b ) {
    if ( a.simKey < b.simKey ){
      return -1
    }
    if ( a.simKey > b.simKey ){
      return 1
    }
    return 0
  }
  this.simStages.sort( compareSimStage )
  this.simStages.forEach( (s, index) => s.name = 'Stage ' + (index + 1))
  next()
})
Schema.post('save', function (doc) {
  WS_EVENT_BUS.emit(WS_S2C_MESSAGE_EVENT, JSON.stringify({channel: 'LEARNING_OBJECT', id: doc._id}))
})

// to get the activity count you need to use populate('activityCount')
Schema.virtual('activityCount', {
  ref: 'Activity',
  localField: '_id',
  foreignField: 'assignment',
  count: true,
})

const Assignment = mongoose.model('Assignment', Schema)
// need to sync indexes because prior to v2.0.1 there was an index on this doc based on the now obsolete externalId
Assignment.syncIndexes()

export default Assignment
