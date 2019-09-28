# Assignment management system - outside

The EdEHR project has two levels which we call the inside and the outside. The outside is the entry point to the application.
The outside provides the assignment management system which includes learning management activities
such as viewing class lists (activities), assignments and EHR seed data (the initial data that seeds the assignment).

The inside is the electronic health record system.  

When an instructor accesses the application, via a link in a LMS, they are taken to the assignment
management pages.  Here they can view class lists, see the status of student's work, and evaluate
the work within the EHR.

When a user who has content editing permissions enters the app they are taken to the
assignment management pages.  Here they can edit assignments and seed data.

A student can only see the assignment after an instructor or content editor has first established the activity in the EdEHR.

## EdEHR Activity

The EdEHR Activity corresponds to an activity within the LMS.  

Every EHR Activity has a unique 'external id' or 'assignment id'.  In the LTI message this parameter is called
'custom_assignment'.  In the Moodle external tool setup looks like this  
![LMS-custom-parameter]
The format is:
```
assignment=<assignment id>
```
For example ```assignment=ErinJonesCaseStudy1```. It is required that the LMS external tool provide the ```assignment```
custom parameter. It is recommended that assignment ids are one single word-phrase. Capitalize each word. (This is called camel case.) 

The system automatically creates an activity record
when an instructor or content editor first uses a activity in the LMS.  Until an activity record exists all student
users will see an error page.

When the activity record is created the system searches for any existing assignments that have the 'external id' specified
in the LTI message.  If none is found, then a new assignment record is created for this external id and a default empty seed
is attached.

Normally, someone will set up the system with a set of assignments (along with rich EHR seed content). They will inform the
LMS administrator of the 'external id'.
 
## EHR 'Outside' Entity Relationship Diagram

![EdEHR-ER-provider]

[source](https://www.draw.io/?state=%7B%22ids%22:%5B%221B91DomvPOnKWWf4psF-YIugLJGil9gkv%22%5D,%22action%22:%22open%22,%22userId%22:%22107185299121564089127%22%7D#G1B91DomvPOnKWWf4psF-YIugLJGil9gkv)

Also see the EHR ('Inside') Entity Relationship Diagram 


## EdEHR Assignment

An assignment is based on a case study text and is augmented with educational assists.  The case study provides a textual 
description of the scenario, technical data and links to external resources (educational aids).

In the future, an assignment may optionally have notes and resources provided by the course instructor.

Students complete their assignment inside the EdEHR.  The system provides a scratch pad for students to record their temporary notes.

The EdEHR provides the instructor an opportunity to see the student's work in situation,
for evaluation and grading.  The system provides a space for instructors to record comments on the students work.  


[EdEHR-overview.png]: ../images/EdEHR-overview.png "overview"
[EdEHR-ER-consumer]: ../images/EdEHR-ER-consumer.png "LTI Consumer"
[EdEHR-ER-provider]: ../images/EdEHR-ER-provider.png "LTI Provider"
[LMS-custom-parameter]: ../images/LMS-custom-parameter.png "LTI Custom Parameter"

