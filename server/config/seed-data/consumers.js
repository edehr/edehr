'use strict'

var mongoose = require('mongoose')
var Consumer = mongoose.model('Consumer')
const {ltiVersions} = require('../../utils/lti')
const KEY = 'edehrkey'
const SECRET = 'edehrsecret'
const debug = require('debug')('server')

module.exports = function () {
  return new Promise(function (resolve, reject) {
    debug('Running application consumer seeding')
    Consumer.deleteMany()
    .then(() => {
      const def = {
        oauth_consumer_key: KEY,
        oauth_consumer_secret: SECRET,
        lti_version: ltiVersions()[0],
        tool_consumer_info_product_family_code: 'EdEHR',
        tool_consumer_info_version: 'moodle',
        tool_consumer_instance_description: 'Test instance of Moodle for prototyping - seeded',
        tool_consumer_instance_guid: 'Moodle-Local-EdEHRPrototype',
        tool_consumer_instance_name: 'Moodle Local EdEHRPrototype'
      }
      Consumer.create(def)
      .then((response, reject) => {
        // console.log('save results', response, reject)
        resolve()
      })
    })
  })
}
