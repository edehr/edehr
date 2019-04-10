import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
  oauth_consumer_key: { type: String, required: [true, 'Require consumer key'] },
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

const Consumer = mongoose.model('Consumer', Schema)

export default Consumer
