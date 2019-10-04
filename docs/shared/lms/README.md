# Learning Management System and LTI

> Learning 

The learning management system (LMS) is a separate piece of functionality from the EHR and is provided by an application called a LTI Consumer. 
LTI stands for Learning Tools Interoperability and this technology allows learning applications to consume and course material from
applications that are called LTI providers.  For example, LMS applications such as
[Moodle](https://moodle.org/),
[Canvas](https://www.canvaslms.com/), 
[Blackboard](https://www.blackboard.com)
and many others are LTI consumers.
These applications can also act as LTI providers and 'provide' course material from one learning system to another.
The EdEHR is a LTI provider.

Learning Tool Interoperability (LTI) is a protocol that defines how a Learning Management System (LMS) can communicate with another 
application that provides the actual course.  These parts are called the LTI consumer and LTI provider respectively.
There are two advantages to using a LMS over building the learning functionality into EdEHR.  For one, all LMS provide
everything course instructors need and a prototype couldn't hope to provide.
Second, it means the EdEHR prototype can focus on 
the really important task: providing an excellent learning experience for an electronic health record system.

See [LTI message properties](/shared/lms/LTI.md) for more about what is inside a LTI message.

![EdEHR-overview]

[image source](https://www.draw.io/?state=%7B%22ids%22:%5B%221aDS7Oh4n4jGzUL0HO17PPB3MFP9hHYMf%22%5D,%22action%22:%22open%22,%22userId%22:%22107185299121564089127%22%7D#G1aDS7Oh4n4jGzUL0HO17PPB3MFP9hHYMf)


## LTI Consumer Setup

> LMS administrators need to set up LTI connections in order to communicate with the EdEHR.

The following is based on the Moodle LMS. Other LMS's like Canvas, Blackboard, etc can also be used. 

Inside the LMS an administrator sets up the institution's courses, student lists, instructors, etc.  In Moodle the administrator
also needs to configure the external tools:

- Site administration
  - Plugins
    - External tools manage tool
       - Add .. configure tool manually
       
Property | Description
---- | ----
Tool name | Meaningful name for the activity within the course
Tool URL | http://(edehr IP or domain)/launch_lti
Tool description | Useful description for this activity. 
Consumer key | For the default prototype system use 'edehrkey'. In real life, this key will vary per consumer so check with your administrator.
Shared secret | Dito above:  edehrsecret
Custom parameter* | Very important that you set up the assignment parameter. See below. E.g. "assignment=poc1"
Tool configuration usage | Show as preconfigured tool (recommended but optional)
Default launch container | New widow (recommended or use existing window)

Once configured, these 'external tools' can be used in any course activity.

\* The custom parameter is very important. It is the way the LMS tells the EdEHR which assignment (in the EdEHR)
is associated with this external tool.  See [assignments](/shared/assignments.md) 
 
Once the external tools are configured the administrator or course content editor can set up the activities for a course.
Students will see these activities and be asked to complete them by a certain time. 

The LTI link contains the user's authorization to open EdEHR. It also has information about the course, the activity
and the custom assignment ID needed to get to the correct assignment in the EdEHR.

Before any students use these links, it is important that a instructor user access the LTI link.
(This includes LMS admins or people who can edit content.)  This is because the first time the EdEHR sees a new activity
it will create the activity in the EdEHR.  It will also create an assignment if its the first time the EdEHR has
seen the custom parameter. If a student uses the link before this is done they will see an error page.

The first time the EdEHR sees a request from a student it will create a new user and set it up to work with the given course and assignment ID.
Students work and complete the assignment in the EdEHR. A student can reenter the application from the LMS as many
times as they need in order to complete their assignment.
When the student is finished and submits their assignment, the EdEHR records the status as "submitted".

## Consumer Entity Relationship Diagram

The schema below illustrates what a LMS might have as an entity relationship diagram. This diagram is only for 
illustration purposes to demonstrate the key parts of a LMS. A real LMS may have a very different
and, likely, more complex ER digram.
  
Notice the class called "Activities" and the propery "LTI resource link id".
This is a unique ID created by the LMS when a new activity is created.  The EdEHR uses this to uniquely locate course activities.
Notice how these can be associated with External Tools which have that custom parameter (called "EdEHR assignment id" in the diagram). These are 
the key connection points to the entity relationship diagram for the EdEHR. See [assignments](/shared/assignments.md)



![EdEHR-ER-consumer]

[image source](https://www.draw.io/?state=%7B%22ids%22:%5B%221MdvlrFwDOXSCeHNsU6dciQxTqWn7iRz_%22%5D,%22action%22:%22open%22,%22userId%22:%22107185299121564089127%22%7D#G1MdvlrFwDOXSCeHNsU6dciQxTqWn7iRz_)




[EdEHR-overview]: ../../images/EdEHR-overview.png "overview"
[EdEHR-ER-consumer]: ../../images/EdEHR-ER-consumer.png "LTI Consumer"
[EdEHR-ER-provider]: ../../images/EdEHR-ER-provider.png "LTI Provider"

