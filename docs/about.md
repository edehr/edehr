# About the EdEHR

From a high level view the app has three layers: 

1. Learning management system interface
2. Assignment management system
3. Electronic health record system

## Learning Management System

The learning management system (LMS) is actually provided by a post secondary institution. Examples include 
- [Moodle](https://moodle.org/), 
- [Canvas](https://www.canvaslms.com/), 
- [Blackboard](https://www.blackboard.com)
- and many others
Each LMS can work with other courseware providers who provide the course content.  The EdEHR is an example courseware. A list of other providers can be found [here](https://en.wikipedia.org/wiki/Learning_Tools_Interoperability#Adoption)
 
Between the LMS and the provider is a technology called [Learning Tools Interoperability (LTI)](https://www.imsglobal.org/specs/ltiv2p0/implementation-guide). This technology allows LMS applications to consume content from couseware providers.  The LMS is called a LTI Consumer and the courseware provider is called a LTI Provider.  The EdEHR application is a LTI Provider.


## Assignment management system

> Area for instructors and course designers

The EdEHR project has two levels which we call the inside and the outside.  The outside provides the assignment management system which includes learning management activities such as viewing class lists, assignments and EHR data (called seeds).  The outside is the entry point to the application for the instructor and course designer.

When an instructor accesses the application via a link in a LMS they are taken to the dashboard. Here they can view class lists, see the status of student's work, and evaluate the work within the EHR.

But first, a course designer needs to visit the EdEHR and configure the activity. This includes adding descriptions (possibly with links to helpful resources) and edit the EHR data (seed) to be associated with the assignment.

## Electronic health record system

The electronic health record system is the core of the application. In this prototype stage it consists of 48 pages each
with one or more data entry forms and/or one or more tables with associated input dialogs.  EHR's are complex and that is
why students need some exposure to them during their post-secondary education.

The application also has a EHR page generation module that is responsible for creating the 48 or so web pages. This module works from configuration information stored in a project speadsheet.  It takes this information and generates pages, forms, dialogs and tables.  This allows a now-developer to participate in the design of the EHR screens.
