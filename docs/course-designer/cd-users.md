# Users

> How are users added to the EdEHR?

The only entry point is via a LMS. Users are authenticated by the LMS and not the EdEHR. The first time a user clicks on a LMS link to the EdEHR the EdEHR will create a user record for that user. This record contains a unique (to the LMS) id number. Optionally, it may contain the user name and email address, if provided by the LMS

> How does the EdEHR know which courses, activities, assignments to use?

Normally, when starting out the EdEHR is empty. Each time a user activates the EdEHR through a LMS link the EdEHR will look for the requested resource. If not found then the EdERH will create a default record based on the information provided in the LTI request.