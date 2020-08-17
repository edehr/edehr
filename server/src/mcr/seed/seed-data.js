import mongoose from 'mongoose'
const ObjectId = mongoose.Schema.Types.ObjectId
/*
 */

const Schema = new mongoose.Schema(
  {
    toolConsumer: {type: ObjectId, ref: 'Consumer', required: true},
    name: { type: String, required: true },
    isDefault: { type: Boolean, default: false },
    description: { type: String },
    version: { type: String },
    contributors: { type: String },
    ehrData: { type: Object, default: {} },
    createDate: { type: Date, default: Date.now },
    lastUpdateDate: { type: Date, default: Date.now }
  },
  { minimize: false } // need this to get default empty object
)

const SeedData = mongoose.models.SeedData || mongoose.model('SeedData', Schema)

export default SeedData
