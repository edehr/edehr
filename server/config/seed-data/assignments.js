'use strict'
const mongoose = require('mongoose')
const Assignment = mongoose.model('Assignment')
const SeedData = mongoose.model('SeedData')
const debug = require('debug')('server')

module.exports = function() {
  return new Promise(function(resolve, reject) {
    console.log('Running seeding assignments (case studies)')

    let defaultDef = {
      externalId: 'defaultNonAssignment',
      name: 'Default Non Assignment',
      description:
        'This assignment is the default assignment that has no seed data and brings the user to the page that lists which assignments are available.',
      ehrRoutePath: '/assignments-listing',
      ehrRouteName: 'assignments-listing'
    }

    return SeedData.find({})
    .then((seeds) => {
      let aSeed = seeds[0]
      debug('To seed assignments need at least one ehr seed object' + aSeed._id)
      defaultDef.seedDataId = aSeed._id
    })
    .then(() => {
      return Assignment.deleteMany()
    })
    .then(() => {
      console.log('create default assignment', defaultDef)
      return Assignment.create(defaultDef)
    })
    .then(() => {
      return resolve()
    })
    .catch(err => {
      console.error('Assignment seeding hit an error', err)
      reject(err)
    })
  })
}
