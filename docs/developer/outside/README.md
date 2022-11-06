# Assignment management system - outside

The EdEHR project has two levels which we call the inside and the outside. The outside is the entry point to the application.
The outside provides the assignment management system which includes learning management activities
such as viewing class lists (activities), assignments and EHR seed data (the initial data that seeds the assignment).

The inside is the simulated electronic health record system.

When an instructor accesses the application, via a link in a LMS, they are taken to the assignment
management pages. Here they can view class lists, see the status of student's work, and evaluate
the work within the EHR.

When a user who self-selects to raise their permissions to include content editing permissions can edit Learning Objects (assignments) and Case Studies (seed data).

A student can only get into the EHR pages after an instructor or content editor has first established the activity in the EdEHR.

## EdEHR Activity

The EdEHR Activity corresponds to an activity within the LMS.  When a user clicks the LMS link to the EdEHR a message is sent to the EdEHR server. This message  

## EHR 'Outside' Entity Relationship Diagram

![EdEHR-ER-provider]

[source](https://www.draw.io/?state=%7B%22ids%22:%5B%221B91DomvPOnKWWf4psF-YIugLJGil9gkv%22%5D,%22action%22:%22open%22,%22userId%22:%22107185299121564089127%22%7D#G1B91DomvPOnKWWf4psF-YIugLJGil9gkv)

Also see the EHR ('Inside') Entity Relationship Diagram 


## EdEHR Assignment

An assignment is based on a case study text and is augmented with educational assists. The case study provides a text 
description of the scenario, technical data and links to external resources (educational aids).

In the future, an assignment may optionally have notes and resources provided by the course instructor.

Students complete their assignment inside the EdEHR. The system provides a scratch pad for students to record their temporary notes.

The EdEHR provides the instructor an opportunity to see the student's work in situation,
for evaluation and grading. The system provides a space for instructors to record comments on the students work.


[EdEHR-overview.png]: ../../images/EdEHR-overview.png "overview"
[EdEHR-ER-consumer]: ../../images/EdEHR-ER-consumer.png "LTI Consumer"
[EdEHR-ER-provider]: ../../images/EdEHR-ER-provider.png "LTI Provider"
[LMS-custom-parameter]: ../../images/LMS-custom-parameter.png "LTI Custom Parameter"

