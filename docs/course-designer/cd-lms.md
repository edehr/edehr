# LMS setup for course designer

> Course designer configures the LMS with a LTI link to the EdEHR

### Prerequisite
- The LMS admin has configured the LTI link to the EdEHR.
- The LMS admin may inform the course designer that the link is ready and provide the "tool name". 
- Optionally, the course designer may be told what the custom parameter (the [External Id](/shared/definitions.md#external-id) to the EdEHR) is. But this isn't absolutely necessary.

The following describes how a course designer will configure the course in Moodle. Hopefully the process is similar in other LMS applications. We welcome contributions to this documentation.

Navigate to the course. Select the gear icon and select "Turn editing on".
![1]

Click on "Add activity or resource"
![2]

Select "External tool" from the list
![3]

You can now set up the LTI link inside the course as an activity
![4]

First select the preconfigured tool your LMS admin created. Set the **Activity name**. Perhaps use the same name as the external tool but that is up to you. This name will appear in the course activities as well as in the EdEHR.
![5]

Important for your students. Click the "show more" and add a description for this activity. This description will be combined with the description you create in the EdEHR assignment. You can include line feeds to format the description and URLs to resources. The EdEHR will automatically convert these URLs into hyperlinks for the student to use.

Return to the course and select the activity you just added.
![6]

[1]: ../images/moodle-course-activate-edit.png "Activate editing of course in Moodle"
[2]: ../images/moodle-course-edit-enabled.png "Editing activated"
[3]: ../images/moodle-course-add-activity.png "Add activity"
[4]: ../images/moodle-course-activity-select-start.png "Activity selection"
[5]: ../images/moodle-course-activity-select-end.png "Selected activity"
[6]: ../images/moodle-course-activity-added.png "Activity added"