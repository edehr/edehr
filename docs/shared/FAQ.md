# FAQ
> Frequently asked questions

## Course Designer

> Can I see all my LMS courses and activities in the EdEHR

Yes but only those courses you have activated by clicking a link in the LMS. The EdEHR can not look into the LMS and discovery courses or activities you have access to.   See [LTI](/shared/definitions.md#lti)

> Are my [seeds](/shared/definitions.md#seed) shared with other institutions's LMS systems?

No. Each LMS, or more precisely, each LTI tool consumer, has its own namespace within the database. Every seed, assignment, activity, user, etc is unique to each tool consumer.  To share seed data across institutions you can export, share and then import a seed.

## Instructor

> Can I see all the students the class list?

Yes but those students who activated the EdEHR by using the link in the LMS. The EdEHR can not look into the LMS and discovery students.  See [LTI](/shared/definitions.md#lti)

## Activation

> How are users added to the EdEHR?

The only entry point is via a LMS. Users are authenticated by the LMS and not the EdEHR.  The first time a user clicks on a LMS link to the EdEHR the EdEHR will create a user record for that user.  This record contains a unique (to the LMS) id number. Optionally, it may contain the user name and email address, if provided by the LMS

> How does the EdEHR know which courses, activities, assignments to use?

Normally, when starting out the EdEHR is empty.  Each time a user activates the EdEHR through a LMS link the EdEHR will look for the requested resource. If not found then the EdERH will create a default record based on the information provided in the LTI request.
