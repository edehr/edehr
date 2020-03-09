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

function launchLti (user, consumer, visit) {
  if (visit) {
    const ltiData = visit.ltiData[0]
    return axios.get(`${BASE_URL}/launch_lti`, {
      oauth_version: ltiData.oauth_version,
      oauth_nonce: ltiData.oauth_nonce,
      oauth_timestamp: ltiData.oauth_timestamp,
      oauth_consumer_key: consumer.oauth_consumer_key,
      user_id: user._id,
      lis_person_sourcedid: ltiData.lis_person_sourcedid,
      roles: consumer.roles,
      context_id: ltiData.context_id,
      context_label: ltiData.context_label,
      context_title: ltiData.context_title,
      resource_link_title: ltiData.context_label,
      resource_link_description: ltiData.resource_link_description,
      resource_link_id: ltiData.resource_link_id,
      context_type: ltiData.context_type,
      lis_course_section_sourcedid: ltiData.lis_course_section_sourcedid,
      lis_result_sourcedid: ltiData.lis_result_sourcedid,
      lis_outcome_service_url: ltiData.lis_outcome_service_url,
      lis_person_name_given: ltiData.lis_person_name_given,
      lis_person_name_family: ltiData.lis_person_name_family,
      lis_person_name_full: ltiData.lis_person_name_full,
      ext_user_username: ltiData.ext_user_username,
      lis_person_contact_email_primary: ltiData.lis_person_contact_email_primary,
      launch_presentation_locale: ltiData.launch_presentation_locale,
      ext_lms: ltiData.ext_lms,
      tool_consumer_info_product_family_code: consumer.tool_consumer_info_product_family_code,
      tool_consumer_info_version: consumer.tool_consumer_info_version,
      oauth_callback: ltiData.oauth_callback,
      lti_version: ltiData.lti_version,
      lti_message_type: ltiData.lti_message_type,
      tool_consumer_instance_guid: consumer.tool_consumer_instance_guid,
      tool_consumer_instance_name: consumer.tool_consumer_instance_name,
      tool_consumer_instance_description: consumer.tool_consumer_instance_description,
      custom_assignment: ltiData.custom_assignment,
      launch_presentation_document_target: ltiData.launch_presentation_document_target,
      launch_presentation_return_url: ltiData.launch_presentation_return_url,
      oauth_signature_method: ltiData.oauth_signature_method,
      oauth_signature: ltiData.oauth_signature,
    })
  }
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
        let res = await getUsers()
        const { users } = res.data
        const USER_LENGTH = users.length
        let parsedData = []
        res = await getConsumers()
        const { consumers } = res.data
        res = await getVisits()
        const { visits } = res.data
        totalStart = new Date()
        for(let i = 0; i < 500; i++) { 
            const index = Math.floor(Math.random() * (USER_LENGTH - 1))
            const user = users[index]
            console.log(`initiating request #${i + 1} with user_id: ${user._id}`)
            let visit = visits.find(v => v.user === user._id)
            if (visit) {
                parsedData = visit.ltiData.map(d => JSON.parse(d))
                visit = Object.assign({}, visit, { ltiData: parsedData })
            }
            consumer = consumers.find(c => c._id === user.toolConsumer)
            start = new Date()
            await launchLti(user, consumer, visit, i)
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