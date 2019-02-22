import mongoose from 'mongoose'
/*
 */

const Schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    version: { type: String },
    ehrData: { type: Object, default: {} },
    createDate: { type: Date, default: Date.now },
    lastUpdateDate: { type: Date, default: Date.now }
  },
  { minimize: false } // need this to get default empty object
)

const SeedData = mongoose.model('SeedData', Schema)

export default SeedData
