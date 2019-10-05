---
sidebarDepth: 2
---

# Definitions

## EdEHR
EdEHR - The name of the application, Ed-ucational Electronic Health Records.  The EdEHR is a LTI Provider.

### EHR
EHR - The portion of the app that is made up of the health records screens, Electronic Health Records. Also used to refer to the bottom section of the EHR screens when differentiating between the navigation and evaluation functions of the app and the area that assignments are completed in and viewed for evaluation.

### Dashboard
Dashboard - The management screens used by admins and instructors. These screens are not seen by students.

### Application navigation
Application navigation - The horizontal navigation bar at the top of the screen for all audiences.

### Evaluation panel
Evaluation panel - The section under the application navigation that is used by instructors to add evaluation notes.


## EdEHR Users

### Course Designer
EdEHR Course Designer - someone who can configure the EdEHR assignments with associated EHR data (seed)

### Instructor
Instructor - or teacher or mentor.  Anyone with a teacher like role in the LMS who can evaluate student work. 

### Student
Student - the special people we built this tool for.

### EdEHR Admin
EdEHR Administrator installs and runs the EdEHR.  This person provides the keys to use the EdEHR to the LMS Admin. These keys include:
1. Tool URL also called the API URL.  For example: https://edehr.org/api/launch_lti.
2. The consumer key and secret.  The EdEHR admin sets up new "tool consumers" (LMS systems) to each have unique key and associated secret


## EdEHR Concepts

### API URL
The url to the EdEHR API.  This is called the "Tool URL" in the LMS.

### Consumer Key
The consumer key and associated secret are two pieces of text that are unique to each LMS that wants to use the EdEHR.  The EdEHR administrator creates these when they add a new tool consumer.

### External Id

This is the id used by the LMS and EdEHR to link a activity with an EdEHR assignment. When the LMS admin creates the LTI connection they add a "custom parameter". (See [LMS-admin](/lms-admin/)). This has the form of "assignment=SomeKeyWords".  The text "SomeKeyWords" is sent to the EdEHR when a user accesses the application.  The EdEHR locates an assignment that matches the key. 

If no matching assignment is found and if the user is an instructor or course designer then the EdEHR creates the assignment.  If the user is a student they will see an error page.

### Seed
A "seed" is an instance of some or all of a case study. It is the case study data entered into the EHR by a course designer to prepare for the student experience.  It is the "seed" or initial data.

Essentially, the seed is course data that students are given. To a student this data is read-only.  When a student enters the system the seed data is loaded first. Then any data the student has previously entered is added.    



## LMS
LMS - Learning management system is an application used by post-secondary institution to offer courses and manage student records.

### LMS Admin
LMS Administrator - someone who can log onto the LMS and configure the LTI connections

### Course Designer
LMS Course Designer - someone who can configure courses in the LMS to use LTI connections 



## LTI

### LTI Learning Tools Interoperability
LTI Learning Tools Interoperability is a technology that allows any LMS to link to and use a courseware that complies with the LTI standard.  The EdEHR supports LTI 1.1.  More recent versions of LTI (1.2) permit the provider to query the consumer for more information. See [Whats Next LTI](/whats-next.md#lti)

### Tool Consumer
A tool consumer is an application that uses courseware from a LTI provider, such as the EdEHR.

### LTI Provider
A web service that provides courseware resources to tool consumers using LTI