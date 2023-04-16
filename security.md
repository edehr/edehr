
# Security notes

> For more context in these notes, you might benefit from a better understanding of the architecture and how things are defined. You can find more details for that [here](https://edehr.org/edehrDetails)

## User authentication comes from the LMS
The EdEHR does not have any means (intentional) to register new users. All users gain access to the application via their
learning management system (LMS) which uses Learning Tools Interoperability (LTI) protocol. Essentially the LMS and this
application have shared a key and a secret. When the user wants to access the EdEHR they click a link in their LMS. 
This link sends a HTTP POST request with an LTI payload to the EdEHR.  The payload is digitally signed with the shared
secret. The EdEHR application server verifies the payload and creates a new user record, if needed. The server then
redirects the request to the EdEHR client along with a JSON Web Token. 


## User tokens are verified
When the client first receives the server request, with the token, the client immediately sends the token back to
it's pre-configure server url asking the server to verify the token is valid and to receive a new token with the verified
authentication information.  The client saves this and uses it on all further communications with the server.
