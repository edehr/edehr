# Visit state management

> Information for developers

- all authorized access is via a LTI call from an LMS
- the visitor comes with a role: teacher or student
- this prototype permits a visitor with role teacher to elevate themselves to a role of course designer
- there is no admin role. Deeper administration can only be done by a developer. For example, to add a new tool consumer is something a developer needs to do.

The LTI request comes from the LMS via a POST message to the EdEHR API server. If the request is valid the API server forwards a GET request to the EdEHR client. The LTI requests come with the assignment [External Id](/shared/definitions.md#external-id).

Visit state management is all about allowing a user to refresh their browser and be able to continue to use the tool.

This prototype is a prototype. A future version should send a JWT from the API server to the client. At this time the API sends necessary information via URL.
