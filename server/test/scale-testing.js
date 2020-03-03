const axios = require('axios')
require('@babel/core')
require('@babel/polyfill')

function getVisits () {
  return axios.get('https://edehr.org/api/visits')
}

function getUsers () {
  return axios.get('https://edehr.org/api/users')
}

function getConsumers () {
  return axios.get('https://edehr.org/api/consumers')
}

function launchLti (user, consumer, visit) {
  return axios.get('https://edehr.org/launch_lti', {
    oauth_version: visit ? visit.ltiData[0].oauth_version : '',
    oauth_nonce: visit ? visit.ltiData[0].oauth_nonce : '',
    oauth_timestamp: visit ? visit.ltiData[0].oauth_timestamp : '',
    oauth_consumer_key: consumer.oauth_consumer_key,
    user_id: user._id,
    lis_person_sourcedid: visit ? visit.ltiData[0].lis_person_sourcedid : '',
    roles: consumer.roles,
    context_id: visit ? visit.ltiData[0].context_id : '',
    context_label: visit ? visit.ltiData[0].context_label : '',
    context_title: visit ? visit.ltiData[0].context_title : '',
    resource_link_title: visit ? visit.ltiData[0].context_label : '',
    resource_link_description: visit ? visit.ltiData[0].resource_link_description : '',
    resource_link_id: visit ? visit.ltiData[0].resource_link_id : '',
    context_type:  visit ? visit.ltiData[0].context_type : '',
    lis_course_section_sourcedid: visit ? visit.ltiData[0].lis_course_section_sourcedid : '',
    lis_result_sourcedid: visit ? visit.ltiData[0].lis_result_sourcedid : '',
    lis_outcome_service_url: visit ? visit.ltiData[0].lis_outcome_service_url : '',
    lis_person_name_given: visit ? visit.ltiData[0].lis_person_name_given : '',
    lis_person_name_family: visit ? visit.ltiData[0].lis_person_name_family : '',
    lis_person_name_full: visit ? visit.ltiData[0].lis_person_name_full : '',
    ext_user_username: visit ? visit.ltiData[0].ext_user_username : '',
    lis_person_contact_email_primary: visit ?  visit.ltiData[0].lis_person_contact_email_primary : '',
    launch_presentation_locale: visit ? visit.ltiData[0].launch_presentation_locale : '',
    ext_lms: visit ? visit.ltiData[0].ext_lms : '',
    tool_consumer_info_product_family_code: consumer.tool_consumer_info_product_family_code,
    tool_consumer_info_version: consumer.tool_consumer_info_version,
    oauth_callback: visit ? visit.ltiData[0].oauth_callback : '',
    lti_version: visit ? visit.ltiData[0].lti_version : '',
    lti_message_type: visit ? visit.ltiData[0].lti_message_type : '',
    tool_consumer_instance_guid: consumer.tool_consumer_instance_guid,
    tool_consumer_instance_name: consumer.tool_consumer_instance_name,
    tool_consumer_instance_description: consumer.tool_consumer_instance_description,
    custom_assignment: visit ? visit.ltiData[0].custom_assignment : '',
    launch_presentation_document_target: visit ? visit.ltiData[0].launch_presentation_document_target : '',
    launch_presentation_return_url: visit ? visit.ltiData[0].launch_presentation_return_url : '',
    oauth_signature_method: visit ? visit.ltiData[0].oauth_signature_method : '',
    oauth_signature: visit ? visit.ltiData[0].oauth_signature : '',
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