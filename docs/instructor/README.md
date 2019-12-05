# Instructor

## Before you start

It's assumed that a LMS admin and course designer have set up (at minimum) a blank assignment for instructors to work with. 

## LMS vs EdEHR functionality

Your [LMS](../shared/definitions.html#learning-management-system-lms) serves as the main hub for your classroom and contains course information, student lists, assignments and their related instructions. It also holds the configuration settings for students to access external assignments like the EdEHR. A LMS admin and/or course designer will work together to get your LMS and EdEHR talking to each other, which will in turn allow instructors to use it in their classrooms.

Within the EdEHR are the health record screens (referred to as the [EHR](../shared/definitions.html#electronic-health-records-ehr)) as well as a few [dashboard](../shared/definitions.html#dashboard) pages to manage EdEHR evaluation notes. 

## Dashboard basics

The main landing page for the dashboard is a list of each of the **courses** that use the EdEHR system. Under each course name is a list of [assignments](../shared/definitions.html#assignment) that can be assigned to the students in each respective course.  

Selecting a specific assignment will take the user to that assignment's [class list](../shared/definitions.html#class-list) page. The details of the assignment, the students that have opened the assignment, and a few options for each student's assignment based on whether they've submitted or not will be on this page. There is also a download button that allows instructors to download all of the evaluation notes that have been entered for the course so that they can be added back to the LMS for single source record keeping. 

## Extra features

The role of an instructor and a course designer are currently combined into one permission group in the EdEHR. This means that as an instructor you have access to administrative settings that can alter not only your own assignments and courses, but others within your institution using the same templates.

This functionality is located under the (assignments) link in the header and also by ticking the checkbox in the lower left of the dashboard pages labelled [`Course designer functionality`](../shared/definitions.html#course-designer-functionality). It is strongly encouraged that you DO NOT do either of these unless you're confident you know what effects your editing will have on the larger system. In the future, these two roles will be separate.

## Creating assignments

The EdEHR was built around the idea that each assignment would be based on a health case study that would provide students with adequate health data to enter into the EHR screens. In some instances, it may be desired that a student views the system with some of that data already prepopulated in the EHR screens. This may be just the basic demographic information that a triage nurse may have already entered, or in more complex cases, a student may encounter a patient after multiple days into their treatment. This prepopulated data is called a [`seed`](../shared/definitions.html#seed), and may or may not have been created by a course designer.

To make a seed and then link it to an assignment, visit the course designer documentation to follow the steps outlined to [create a new seed](../configuration/#connect-the-seed-to-your-assignment).

## Student workflow

When a student clicks on the assignment link in their LMS, they will be taken directly to the first page of the [EHR](shared/definitions.html#electronic-health-records-ehr) to complete their assignment. Upon entry in the EHR, a record will be created in the EdEHR and their name will then show up on the class list page in the dashboard that is related to that assignment.

A student has the option of saving their assignment and then coming back to it at a different time, or they can save and submit it for evaluation right away. Once they have submitted it, they will see a note at the top of their screen that it has been submitted and is no longer able to be edited.

If the student needs their assignment back to edit for any reason, the instructor has an option in their dashboard to `return assignment to student` without evaluation.

## Evaluating assignments

Adding [evaluation notes](../shared/definitions.html#evaluation-notes) to a student's assignment and sending those notes to the student are two separate functions within the EdEHR dashboard. This means that an instructor is able to start evaluating assignments before all of them have been submitted, and then later send all evaluation notes to their students at the same time. 

An assignment can be evaluated by selecting the `evaluate` button in the same row of the class list. An instructor will then be taken into the EHR where they can navigate through each of the screens to see what the student has added to the patient's file. There will be a green dot in the left side nav for each screen that a student has entered data into.

A persistent [evaluation panel](shared/definitions.html#evaluation-panel) is located under the [application navigation](shared/definitions.html#application-navigation) at the top of the page. It holds the notes an instructor writes as they navigate through the EHR screens. When complete, they can be saved and the instructor can go back to the dashboard or continue on to the next student. 

The system does not support a structured grade, or context specific notes at this time.

## Sending evaluation notes to students

From the dashboard, an instructor can navigate to the assignment for which they wish to send evaluation notes. Any assignment that has notes written will have a `send evaluation notes` button in the same row. Selecting that button will send the evaluation to the student.

Students can access the EdEHR assignment to view the evaluation notes in a top section of the EHR. Alternatively, if the instructor uploaded the notes to the LMS, students can view them there.