// TODO implement outcomes

/*

Launch Parameters for Outcomes Management
lis_result_sourcedid: '{"data":{"instanceid":"1","userid":"2","typeid":"4","launchid":1910122334},"hash":"b521ee7790ae4711368cf9602ca966cfd12e371748babdd131c93dfa83669383"}',
lis_outcome_service_url: 'http://localhost:8888/moodle35/mod/lti/service.php',

lis_result_sourcedid=83873872987329873264783687634
This parameter contains an identifier that indicates the LIS Result Identifier (if any) associated with this launch.
It identifies a unique row and column within the TC gradebook.  This identifier is unique for every combination of
resource_link_id / user_id but its value may change from one launch to the next. The TP should only retain the most
recent value for this field for a particular resource_link_id / user_id. This parameter is optional.

lis_outcome_service_url=
This parameter should be no more than 1023 characters long.   This value should not change from one launch to the next
and in general, the TP can expect that there is a one-to-one mapping between the lis_outcome_service_url and a
particular oauth_consumer_key.  This value might change if there was a significant re-configuration of the TC system
or if the TC moved from one domain to another.  The TP can assume that this URL generally does not change from one
launch to the next but should be able to deal with cases where this value rarely changes.   The service URL may support
various operations / actions.  The Basic Outcomes Service Provider will respond with a response of 'unimplemented' for
actions it does not support. This field is required if the TC is accepting outcomes for any launches associated with
the resource_link_id.

*/

/*
Outcomes Service
See IMS Global Learning Tools Interoperability® Outcomes Management at https://www.imsglobal.org/specs/ltiomv1p0/specification
 */

/*
Learning Tools Interoperability® 1.2  https://www.imsglobal.org/specs/ltiv1p2
In particular:

  lis_course_section_sourcedid: '9876',

the lis_person_sourcedid, lis_course_offering_sourcedid and lis_course_section_sourcedid parameters
new custom parameter substitution variables of $User.username, $User.org and $Context.org have been added;
additional values for launch_presentation_document_target parameter are now permitted to allow consistency
with the new Content-Item message; a tool consumer may offer a profile (using the same format as LTI 2.0) which will
enable it to advertise its capabilities and services offered to tool providers.
The Basic Outcomes service is now being documented separately and will be certified independently of the LTI core,
thereby allowing tool consumers to achieve LTI 1.2 certification without the need to support Outcomes. The changes in
LTI 1.2 do not introduce any new certification requirements for tool providers, but they will benefit from the changes
being made in certified tool consumers, especially the ability to discover the services available.

 */

import mongoose from 'mongoose'

const OutcomesSchema = new mongoose.Schema({
  toolConsumer: {type: mongoose.Schema.Types.ObjectId, ref: 'Consumer', required: true},
  createDate: {
    type: Date,
    default: Date.now
  },
  lastVisitDate: {
    type: Date,
    default: Date.now
  }
})

const Outcomes = mongoose.model('Outcomes', OutcomesSchema)

export default Outcomes
