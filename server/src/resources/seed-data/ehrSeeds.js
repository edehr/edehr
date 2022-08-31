'use strict'
const mongoose = require('mongoose')

module.exports = function () {
  return new Promise(function (resolve, reject) {
    console.log('Running seeding for ehr seed data')

    let defaultDef = {
      name: 'Initial seed',
      description: 'This EHR seed is a default starting point empty seed',
      version: '1',
      ehrData: {
      }
    }
    const Consumer = mongoose.model('Consumer')
    const SeedData = mongoose.model('SeedData')

    return SeedData.deleteMany()
      .then(() => {
        return Consumer.find({})
      })
      .then((consumers) => {
        let aConsumer = consumers[0]
        defaultDef.toolConsumer = aConsumer._id
        // console.log('create default seed', defaultDef)
        return SeedData.create(defaultDef)
      })
      .then((response, reject) => {
        // console.log('save results', response, reject)
        resolve(response)
      })
  })
}
