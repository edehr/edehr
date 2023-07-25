import mongoose from 'mongoose'
import { EhrPages } from '../../ehr-definitions/ehr-models'
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
    lastUpdateDate: { type: Date, default: Date.now },
    tagList: [{
      type: String
    }],
    appType: {
      type: String,
      enum : ['EHR','LIS'],
      default: 'EHR'
    },
  }, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    minimize: false  // need this to get default empty object
  }
)

const ehrPages = new EhrPages()
Schema.virtual('draftRowCount').get(function () {
  const stats = this.ehrData ? ehrPages.ehrPagesStats(this.ehrData) : {}
  const meta = stats.meta || {}
  return meta.draftRows || 0
})

// to get the assignment count you need to use populate('assignmentCount')
Schema.virtual('assignmentCount', {
  ref: 'Assignment',
  localField: '_id',
  foreignField: 'seedDataId',
  // justOne: false
  count: true,
})

const SeedData = mongoose.models.SeedData || mongoose.model('SeedData', Schema)

export default SeedData
