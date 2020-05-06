'use strict'

import mongoose from 'mongoose'
import ConsumerController from '../../mcr/consumer/consumer-controller'
const Consumer = mongoose.model('Consumer')

const {ltiVersions} = require('../../mcr/lti/lti-defs')
const KEY = 'demokey'
const SECRET = 'demosecret'
const debug = require('debug')('server')
const cc = new ConsumerController()

module.exports = function () {
  return new Promise(function (resolve, reject) {
    Consumer.findOne({ oauth_consumer_key: KEY })
      .then((consumer) => {
        if (!consumer) {
          debug('Running application consumer demo seeding')
          const def = {
            oauth_consumer_key: KEY,
            oauth_consumer_secret: SECRET,
            lti_version: ltiVersions()[0],
            tool_consumer_info_product_family_code: 'EdEHR Demo',
            tool_consumer_info_version: 'moodle',
            tool_consumer_instance_description: 'Demo instance of Moodle for prototyping - seeded',
            tool_consumer_instance_guid: 'Moodle-Demo-Local-EdEHRPrototype',
            tool_consumer_instance_name: 'EdEHRDemo'
          }
          const seedData = {
            name: 'Demo seed data',
            description: 'This a demo-only seed data',
            version: '1',
            isDefault: true,
            ehrData: {}
          }

          cc.createWithSeed(def, seedData, true)
            .then((response, reject) => {
            // console.log('save results', response, reject)
              resolve()
            })
        } else {
          return Promise.resolve()
        }
      })
  })

}
