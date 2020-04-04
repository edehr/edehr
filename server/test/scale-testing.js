const axios = require('axios')
require('@babel/core')
require('@babel/polyfill')
const HMAC_SHA1 = require('ims-lti/src/hmac-sha1')
// const BASE_URL = 'https://edehr.org'
const BASE_URL = 'http://localhost:27000'

// function getVisits () {
//   return axios.get(`${BASE_URL}/api/visits`)
// }

// function getUsers () {
//   return axios.get(`${BASE_URL}/api/users`)
// }

// function getConsumers () {
//   return axios.get(`${BASE_URL}/api/consumers`)
// }

function launchLti () {
  const ltiData = {
    user_id: '51234',
    lis_person_name_given: 'Fred',
    lis_person_name_family: 'Flintstones',
    lis_person_name_full: 'Fred Flintstone',
    lis_person_contact_email_primary: 'fred@thecaves.ca',
    lti_version: 'LTI-1p0',
    lti_message_type: 'basic-lti-launch-request',
    roles: 'student',
    oauth_consumer_key: 'edehrkey',
    oauth_consumer_secret: 'edehrsecret',
    context_id: 'some context id',
    custom_assignment: '59',
    tool_consumer_instance_name: 'unit testing consumer',
    launch_presentation_return_url: 'http://some.place.org',
    resource_link_id: 'http://link-to-resource.com/resource',
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: Math.round(Date.now() / 1000),
    oauth_nonce: Date.now() + Math.random() * 100,
    custom_assignment: 'assignment1',
  }
  let req = {
    url: `${BASE_URL}/api/launch_lti`,
    method: 'POST',
    connection: {
      encrypted: undefined
    },
    headers: {
      accept: 'application/json, text/plain, */*',
      'content-type': 'application/json;charset=utf-8',
      host: 'localhost:27000',
    },
    body: Object.assign({}, ltiData, { debug: true })
  }
  
  let signer = new HMAC_SHA1()
  // console.log('body >> ', req.body)
  req.body.oauth_signature = signer.build_signature(req, req.body, ltiData.oauth_consumer_secret)
  return axios.post(req.url, req.body)
}

Array.min = function (arr) {
  return Math.min.apply(Math, arr)
}

Array.max = function (arr) {
  return Math.max.apply(Math, arr)
}

let totalStart, totalEnd, diff = [], start, end

async function main () {
  try {
    totalStart = new Date()
    for(let i = 0; i < 500; i++) {
      console.log(`initiatiating request ${i + 1}`)
      start = new Date()
      await launchLti()
      end = new Date()
      const timeDiff = (end.getTime() - start.getTime()) / 1000
      console.log('timeDiff >> ', timeDiff)
      diff.push(timeDiff)
      if (i === 499) {
        totalEnd = new Date()
        const totalTimeDiff = (totalEnd.getTime() - totalStart.getTime()) / 1000
        console.log(`Total time: ${totalTimeDiff} seconds`)
        console.log(`Average request time: ${ totalTimeDiff / diff.length } seconds`)
        console.log(`Min Time: ${ Array.min(diff)} seconds`)
        console.log(`Max Time: ${ Array.max(diff)} seconds`)
      }
    } 
  } catch (err) {
    console.log('error in main! >> ', err.message)
  }
}

main()