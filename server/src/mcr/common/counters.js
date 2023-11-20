import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
  name: {type: String},
  seq: { type: Number},
})

const Counters = mongoose.model('Counters', Schema)

export default Counters
