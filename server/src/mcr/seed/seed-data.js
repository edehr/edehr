import mongoose from 'mongoose'
import { EhrPages } from '../../ehr-definitions/ehr-models'
import { WS_EVENT_BUS, WS_S2C_MESSAGE_EVENT } from '../../server/push-server'
import EhrDataModel from '../../ehr-definitions/EhrDataModel'
import { APP_TYPE_EHR, APP_TYPES } from '../../helpers/appType'
const debug = require('debug')('server')

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
    keyData: { type: Object, default: {} },
    mrn: { type: String },
    createDate: { type: Date, default: Date.now },
    lastUpdateDate: { type: Date, default: Date.now },
    tagList: [{
      type: String
    }],
    appType: {
      type: String,
      enum : APP_TYPES,
      default: APP_TYPE_EHR
    },
  }, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    minimize: false  // need this to get default empty object
  }
)

const startingNumber = 650000 // (good for 999,999 - 650,000 = 934,999 case studies
const prefix = 'S:'
async function generateNextUniqueMRN (toolConsumer) {
  let allSeedsWithMrnList = await SeedData.find(
    { $and: [{ toolConsumer: toolConsumer }, { mrn: { $exists: true } }] },
    { mrn: true })
    .sort({mrn: 'descending'})
    .lean() // return plain old java object
  allSeedsWithMrnList = allSeedsWithMrnList.filter( sd => {
    let result = false
    if( sd.mrn && sd.mrn.startsWith(prefix)) {
      let num = sd.mrn.split(':')[1]
      result = !isNaN(num)
    }
    return result
  })
  let nextId = prefix + startingNumber
  if (allSeedsWithMrnList.length > 0) {
    let lastMrn = allSeedsWithMrnList[0].mrn
    let num = Number.parseInt(lastMrn.split(':')[1])
    nextId = prefix + (1+num)
  }
  return nextId
}

Schema.pre('save', async function (next) {
  let keyData = EhrDataModel.ExtractKeyPatientData(this.ehrData)
  if (!keyData.mrn) {
    keyData.mrn = await generateNextUniqueMRN(this.toolConsumer)
    this.ehrData = EhrDataModel.InsertMedicalRecordNumber(this.ehrData, keyData.mrn)
    debug('pre save seed generates new mrn', this.name, keyData.mrn)
  }
  this.keyData = keyData
  this.mrn = keyData.mrn
  next()
})

const ehrPages = new EhrPages()
Schema.virtual('draftRowCount').get(function () {
  const stats = this.ehrData ? ehrPages.ehrPagesStats(this.ehrData) : {}
  const meta = stats.meta || {}
  return meta.draftRows || 0
})


Schema.post('save', function (doc) {
  WS_EVENT_BUS.emit(WS_S2C_MESSAGE_EVENT, JSON.stringify({channel: 'CASE_STUDY', id: doc._id}))
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
