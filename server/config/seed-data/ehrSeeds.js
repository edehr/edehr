'use strict'
const mongoose = require('mongoose')
const SeedData = mongoose.model('SeedData')

module.exports = function() {
  return new Promise(function(resolve, reject) {
    console.log('Running seeding for ehr seed data')

    let defaultDef = {
      name: 'Initial seed',
      description: 'This EHR seed is a default starting point empty seed',
      version: '1',
      ehrData: {
        demographics: {
          familyName: 'Johns',
          givenName: 'Erin',
          middleName: '',
          preferredName: 'Erin'
        }
      }
    }

    return SeedData.deleteMany()
      .then(() => {
        // console.log('create default seed', defaultDef)
        return SeedData.create(defaultDef)
      })
      .then((response, reject) => {
        // console.log('save results', response, reject)
        resolve(response)
      })
  })
}
