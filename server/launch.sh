#!/bin/bash

## chmod u+x script.sh
curl \
--request POST \
--data "custom_assignment=foo&roles=student&lti_version=LTI-1p0&user_id=345&oauth_consumer_key=edehrkey&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1541050085&oauth_nonce=EZTFu6Wpx4b&oauth_version=1.0&oauth_signature=IGArSiWdwo/3qrLilg7aHn35qac=&resource_link_id=res1&lti_message_type=basic-lti-launch-request&context_id=123" \
-D- \
http://localhost:27000/launch_lti


