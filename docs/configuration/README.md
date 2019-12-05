# Configuration

## Installation

Moodle and the EdEHR must be installed and running prior to configuration. 

- Contact your LMS admin for help with Moodle.
- Contact your IT admin for help with the EdEHR, or see the [developer guide](/developer/) for details on how to do this yourself.

## Tips before you get started

- When creating names, descriptions, IDs or any other kind of data, try to follow a convention will make this data easy to understand and maintain.
- Some of the following steps may have already been completed or you may not want to configure for your assignment. Those items are marked *OPTIONAL* .

## Connect Moodle to the EdEHR

### EdEHR admin

1. Create a [consumer key and secret](/shared/definitions.md#consumer-key-and-secret).

2. Get the [API url](/shared/definitions.md#api-url) from the host server.

3. Share the consumer key, secret and API url with with your LMS admin. 

> The EdEHR admin's work is complete.

### LMS admin

4. Create an external [tool](/shared/definitions.md#tool) to connect Moodle to the EdEHR. This will give the course designer a connection for the EdEHR assignment.

** Note that an external tool can be used multiple times within multiple courses and assignments.


**SITE ADMINISTRATION > Activity modules > External tools > MANAGE TOOLS > CONFIGURE A TOOL MANUALLY**

- Add a tool name, API url, and tool description that will be shared between Moodle and the EdEHR.
- Add the consumer key and secret (given to you by the EdEHR admin). 
- In the `custom parameters` text box, type `assignment=localSampleAssignment`
- Set `default launch container` to `new window`
- `Save changes`

- [Moodle documentation](https://docs.moodle.org/19/en/Adding_resources_and_activities)

## Create the LMS structure for your course

### LMS admin

5. Create a new [course](/shared/definitions.md#course) that will be linked to your EdEHR assignment. *OPTIONAL* 

- [Moodle documentation](https://docs.moodle.org/38/en/Adding_a_new_course)

6. Add the list of students that will be participating in the respective course. *OPTIONAL* 

- [Moodle documentation](https://docs.moodle.org/38/en/Course_enrolment)

7. Share the external tool name with your course designer. 

> The LMS admin's work is complete.

## Fill in assignment details

### Course designer

8. Create a new course section that will hold the EdEHR assignment and relevant [resources](/shared/definitions.md#resources). *OPTIONAL* 

- [Moodle documentation](https://docs.moodle.org/38/en/Course_homepage#Parts_of_a_course_homepage)

9. Add resources for students such as assignment instructions, case studies and marking criterion. *OPTIONAL* 

- [Moodle documentation](https://docs.moodle.org/19/en/Adding_resources_and_activities)

10. Add the external tool (given to you by the LMS admin) to the course.

**[COURSE NAME] > GEAR ICON > TURN EDITING ON > ADD ACTIVITY OR RESOURCE > EXTERNAL TOOL > ADD**

- Add an activity name
- Click `show more` and add an activity description
- Select the tool your LMS admin set up in the preconfigured tool dropdown
- `Save and return to course`

- [Moodle documentation](https://docs.moodle.org/38/en/External_tool)

11. Click on the assignment activity in Moodle to make the connection (via [LTI](/shared/definitions.md#lti)) to the EdEHR. The assignment activity now exists in the EdEHR, and is known simply as an assignment. (This MUST happen before instructors and students can see the assignment in the EdEHR.)

12. In the EdEHR, review the assignment name and description added by the LMS admin and make changes if needed.

## Connect the seed to your assignment

### Course designer

13. Create the [seed](/shared/definitions.md#seed) that will be used by the assignment. *OPTIONAL* 

** EdEHR > ASSIGNMENTS **

- Check the `Course designer functionality` checkbox at the bottom of the page

** MANAGE SEED DATA > CREATE NEW SEED **

- Add a name and description
- `Save`
- In the same row as your new seed, `View/edit seed`
- Navigate through EHR to add seed data
- `Save` on each page or modal


14. Link the seed to the respective assignment.

** EdEHR > dashboard > [ASSIGNMENT NAME] > EDIT ICON in highlighted row **

- Select seed data from `Seed data` dropdown
- Save

> The course designer's work is complete.

> The configuration process is complete! Instructors and students can now access the assignment from Moodle.

> Student lists are created in the EdEHR as each student accesses their respective assignments in the EdEHR for the first time. It is normal to not see any students in the EdEHR dashboard after setting up an assignment.

## Videos

- [Configuration in video format](https://www.dropbox.com/s/j1ycyvb91ef7hcf/tutorial-part1.mp4?dl=0)
- [Student completing an assignment and instructor evaluation](https://www.dropbox.com/s/duznqu7rz930v1p/tutorial-part2.mp4?dl=0)
