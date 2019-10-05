# EdEHR - next

> A sketch of what areas future development could consider.

## Issues
This open source project tracks issue in the [git issues board](https://github.com/BCcampus/edehr/issues).  This is the official location to discuss features (large and small) and defects.  The following are examples of some larger features that might be considered.

> Todo: ensure there is a git issue for each of the following

## Plugin architecture

> As a stakeholder I want to create some customizations and perhaps set up this application with a payment system.  I'd like to support the open source initiative yet want to retain ownership of my customizations.

Solution: 
Rework the project so other specialties can contribute "plugins".  These could provide new pages, fields, and/or components to the EHR that are dedicated to the needs of the contributor.  The contributed components might also provide custom features such as connections with special databases.

To compliment this we have added the following to the license.

“Additional permission under AGPLv3, Sec. 7 If you modify this Program, or any covered work, by combining it with Plugins entirely written by you, the licensors of this Program grant you additional permission to convey those Plugins under terms of your choice, provided that those terms do not place additional restrictions on the Program.”


## LTI

As a course designer and/or LMS administrator I'd like to use more of the capabilities of LTI. In particular, I want to use the newer LTI versions to simplify creating course content using the EdEHR; to use the grade outcomes to ease the evaluation and grading of students and use the higher level of security not present in the basic LTI connection.  It may also be possible for the provider (e.g. EdEHR) to query the consumer (e.g. Moodle LMS) about courses and such that the current user has access to.

Also see [wiki](https://en.wikipedia.org/wiki/Learning_Tools_Interoperability)


Solution: A future version of the EdEHR application might support LTI V1.2 to allow for transferring more information,
such as evaluation results, back to the LMS and using OAuth authentication schemes.


## Course Designer

As a course designer I want to setup and configure course material in the EdEHR.  The current prototype has a kludge in place instead of recognizing my role.

Solution: In the future determine the user role as granted in the LMS.  Provide dedicated dashboards and panels to help the course designer do their work.  May wish to store teaching resources along with the application.


## LMS management

> As a EdEHR administrator I need to manage the institutions that can access the EdEHR via LTI.  Currently, this can only be done by the developer.

Solution: 
In the future it would help to have a EdEHR administration dashboard for creating, editing and removing LMS applications.  Note that "removal" could mean removing all courses, assignments, seeds, students etc associated with a particular LMS.  Editing could mean having the ability to see and edit any records associated with a LMS.

At a minimum, there needs to be a simple way to create a LMS in the EdEHR and manage the key and secret that is shared with the LMS administrator.


## Tracking Day and Time

> As an instructor I want my students to understand how an EHR will work in real-life situations, such as in a hospital. In a real-life EHR the events happen over time. First the patient is admitted, then assessed, then etc.

The prototype mimics real-life by letting the user enter the "day" and "time" for each record.  But in real-life these values come from the actual day and time when the event happens.

Solution: (maybe other ideas work better) Like the [External Id](/shared/definitions.md#external-id) add a custom parameter to the LMS LTI link to say what the day and time is for the assignment.  This way a series of activities could be established in the LMS to represent a series of real-life events.  Each activity would tell the EdEHR what day and time the event should have.  As the student progresses through the series of assignments they see the day and time progress but also all the data they entered before stays and they add to this.


## Progressive activities

> As an instructor I want my students to understand how an EHR will work in real-life situations, such as in a hospital. In a real-life EHR the events happen over time and different people make these events happen. First the patient is admitted, by the admitting nurse, then assessed by a triage nurse, then assessed by a doctor, then moved by a porter to the x-ray room, then moved after the x-rays, then the x-rays are assessed by a technician.  Each event happens in a progression 

Solution: After day and time events are solved (see above) introduce staged seed data. A staged seed is a new set of EHR data that is brought into an assignment between two activities.   For example, the course designer sets up an activity for a doctor role at Day 0 time 9:00 to assess the patient and prescribe some tests. Next the designer creates a second activity for Day 0 time 11:00 for the student to assess the test results. This is where a staged seed data could be injected to contain the test results.

This implies that course designers can manage these seed stages in the EdEHR.


## Roles in EHR

> As an instructor I want my students to understand how an EHR will work in real-life situations, such as in a hospital. In a real-life EHR the users have different roles with different levels of access.  For example, doctors prescribe medications and nurse administer them.  At this point, in the prototype, every user is equal.

Solution: introduce roles.  May set the role (nurse, doctor, etc) in the LMS activity. (Similar to how the [External Id](/shared/definitions.md#external-id) is used to link to an assignment we could add another custom parameter to say the incoming user is a nurse or doctor.) 

Also introduce a per role permission system that determines who can create, edit, delete and view certain fields.


## Simultaneous student experience

> As an instructor I want my students to understand how an EHR will work in real-life situations, such as in a hospital. In a real-life EHR many users are working on the patient records at the same time, or over time.

Solution:
Rework application to allow more than one user to add to the datastore.  This implies tracking each edit on a per person basis.  It also implies the ability to edit table entries but only if created by the user and, perhaps, other rules like this.


## Medical equipment integration

> As an instructor I want my students to understand how an EHR will work in real-life situations, such as in a hospital. In a real-life EHR the users connect the EHR with medical test equipment.  The EHR collects data directly from the devices.

Solution: provide device integration.


## Medical information databases

> As an instructor I want my students to understand how an EHR will work in real-life situations, such as in a hospital. In a real-life EHR the users access database systems that provide reference material, such as medications.

Solution: step 1.  Create a simple text file containing a representation of the medical database.  Connect this with lookup fields in the EdEHR.

Step 2. Connect to the real-life database.  This is likely to require someone with an account to grant permission to access the database.

## Seed defaults

> As a seed content editor I want to start with the Erin Jones case study for all seeds. 

The prototype has a kludge which provides some default case data that comes from the input spreadsheet.  The person editing the seed needs to know the special trick to get this data into the seed.  Ideally, the system would provide a cleaner more obvious way to get initial seed data.