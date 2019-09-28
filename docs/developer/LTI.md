# Learning Tools Interoperability LTI

> LTI is the glue between the learning tool and this EdEHR

## LTI system

```json
"ext_lms":"moodle-2",
"launch_presentation_document_target":"window",
"launch_presentation_locale":"en",
"launch_presentation_return_url":"http://localhost:8888/moodle35/mod/lti/return.php?course=4&launch_container=4&instanceid=1&sesskey=ut8G1UK7j2",
"lis_outcome_service_url":"http://localhost:8888/moodle35/mod/lti/service.php",
"lis_result_sourcedid":"{\"data\":{\"instanceid\":\"1\",\"userid\":\"6\",\"typeid\":\"4\",\"launchid\":449591125},\"hash\":\"2296e83a755070c596526b49d2a35eb06d24f16fde942a8c8d552e7dd01600bc\"}",
"lti_message_type":"basic-lti-launch-request",
"lti_version":"LTI-1p0",
"tool_consumer_info_product_family_code":"moodle",
"tool_consumer_info_version":"2018051702",
"tool_consumer_instance_description":"Moodle 3.5",
"tool_consumer_instance_guid":"localMoodle",
"tool_consumer_instance_name":"Moodle 3.5",
```

## LTI User

```json
"ext_user_username":"instr",
"lis_person_contact_email_primary":"instr@example.com",
"lis_person_name_family":"Goodall",
"lis_person_name_full":"Instr Goodall",
"lis_person_name_given":"Instr",
"lis_person_sourcedid":"",
"roles":"Instructor",
"user_id":"6",
```

## LTI Activities
```json
"context_id":"4",
"context_label":"EdEhr Poc",
"context_title":"A Proof of Concept Course",
"context_type":"CourseSection",
"custom_assignment":"assignment1",
"custom_poc":"true",
"custom_POC":"true",
"lis_course_section_sourcedid":"9876",
"resource_link_description":"POC assignment 1. No description available because this is just a POC",
"resource_link_id":"1",
"resource_link_title":"Poc EdEhr Assignment 1",
```


## LTI OAuth
```json
"oauth_callback":"about:blank",
"oauth_consumer_key":"edehrkey",
"oauth_nonce":"74fc7fe55b6428c7a7921b62eee2c994",
"oauth_signature_method":"HMAC-SHA1",
"oauth_signature":"Vj3YigJcKTXsKkvwgm6R9rgfDwA="
"oauth_timestamp":"1555513154",
"oauth_version":"1.0",
```

## References

- [https://www.edu-apps.org/code.html](https://www.edu-apps.org/code.html)
- [https://www.imsglobal.org/wiki/step-1-lti-launch-request](https://www.imsglobal.org/wiki/step-1-lti-launch-request)