const axios = require('axios')
require('@babel/core')
require('@babel/polyfill')

const BASE_URL = 'https://edehr.org'

function getVisits () {
  return axios.get(`${BASE_URL}/api/visits`)
}

function getUsers () {
  return axios.get(`${BASE_URL}/api/users`)
}

function getConsumers () {
  return axios.get(`${BASE_URL}/api/consumers`)
}

function launchLti () {
  return axios.post(`${BASE_URL}/api/launch_lti`, {
    oauth_customer_key: 'key',
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: Math.round(Date.now() / 1000),
    oauth_nonce: Date.now() + Math.random() * 100,
    custom_assignment: 'test_assignment_id_1'
  })
}

Array.min = function(arr) {
    return Math.min.apply(Math, arr)
}

Array.max = function(arr) {
    return Math.max.apply(Math, arr)
}

let totalStart, totalEnd, diff = [], start, end

async function main() {
    try {
        totalStart = new Date()
        for(let i = 0; i < 500; i++) {
            start = new Date()
            const result = await launchLti()
            console.log('result >> ', result)
            end = new Date()
            const timeDiff = (end.getTime() - start.getTime()) / 1000
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
    } catch (err ) {
        console.log('error in main! >> ', err)
    }
}

main()