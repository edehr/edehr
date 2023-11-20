import mongoose from 'mongoose'
const ObjectId = mongoose.Schema.Types.ObjectId

const Schema = new mongoose.Schema({
  toolConsumer: {type: ObjectId, ref: 'Consumer', required: true },
  name: {type: String},
  seq: { type: Number},
})

const Counters = mongoose.model('Counters', Schema)

export default Counters
