# Definitions

## EdEHR
EdEHR - The name of the application, Ed-ucational Electronic Health Records.

## EHR
EHR - The portion of the app that is made up of the health records screens, Electronic Health Records. Also used to refer to the bottom section of the EHR screens when differentiating between the navigation and evaluation functions of the app and the area that assignments are completed in and viewed for evaluation.

## Dashboard
Dashboard - The management screens used by admins and instructors. These screens are not seen by students.

## Application navigation
Application navigation - The horizontal navigation bar at the top of the screen for all audiences.

## Evaluation panel
Evaluation panel - The section under the application navigation that is used by instructors to add evaluation notes.

## LMS
LMS - Learning management system is an application used by post-secondary institution to offer courses and manage student records.

## LMS Administrator
LMS Administrator - someone who can log onto the LMS and configure the LTI connections

## LMS Course Designer
LMS Course Designer - someone who can configure courses in the LMS to use LTI connections 

## EdEHR Course Designer
EdEHR Course Designer - someone who can configure the EdEHR assignments with associated EHR data (seed)

## Instructor
Instructor - or teacher or mentor.  Anyone with a teacher like role in the LMS who can evaluate student work. 

## Student
Student - the special people we built this tool for.

## LTI Learning Tools Interoperability
LTI Learning Tools Interoperability is a technology that allows any LMS to link to and use a courseware that complies with the LTI standard

## External Id

This is the id used by the LMS and EdEHR to link a activity with an EdEHR assignment. When the LMS admin creates the LTI connection they add a "custom parameter". (See [LMS-admin](/lms-admin/)). This has the form of "assignment=SomeKeyWords".  The text "SomeKeyWords" is sent to the EdEHR when a user accesses the application.  The EdEHR locates an assignment that matches the key. 

If no matching assignment is found and if the user is an instructor or course designer then the EdEHR creates the assignment.  If the user is a student they will see an error page.

## Seed
A "seed" is an instance of some or all of a case study. It is the case study data entered into the EHR by a course designer to prepare for the student experience.  It is the "seed" or initial data.

Essentially, the seed is course data that students are given. To a student this data is read-only.  When a student enters the system the seed data is loaded first. Then any data the student has previously entered is added.    