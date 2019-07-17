import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const Schema = new mongoose.Schema({
  oauth_consumer_key: { type: String, required: [true, 'Require consumer key'], unique: true },
  oauth_consumer_secret: { type: String, required: [true, 'Require consumer secret'] },
  lti_version: {type: String},
  tool_consumer_info_product_family_code: {type: String},
  tool_consumer_info_version: {type: String},
  tool_consumer_instance_description: {type: String},
  tool_consumer_instance_guid: {type: String},
  tool_consumer_instance_name: {type: String},
  createDate: {type: Date, default: Date.now},
  lastUpdateDate: {type: Date, default: Date.now}
})

Schema.plugin(uniqueValidator)

const Consumer = mongoose.model('Consumer', Schema)

export default Consumer
