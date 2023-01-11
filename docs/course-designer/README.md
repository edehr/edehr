# A course designer's role

> Course designers create and manage the case studies that are relevant to their curriculum. They create assignments based in the simulated EHR using a case study they created or got from another educator.  

This section of the documentation is for lead instructors who will create course content. [Contact edehr.org](/#Contact) if you need any assistance.

This section will focus on the workflow and assumes you can find detailed information about the actions required in the other parts of the documentation.

When creating your first EdEHR activity, we recommend keeping it simple. Consider creating an activity that only requires your students to explore a case study and report on their findings.  And start with one of the case studies that all instances of EdEHR provides. For example [the Erin John's case](https://edehr.org/ehr/patient/demographics?demoOnlyKey=erin2Seed)

## Prerequisites
- Your LMS administrator has created the external connection tool for the EdEHR.
- Your LMS administrator has shown you how to use this external connection tool.
- You have reviewed the documentation sections for Student guide, Instructor guide, Instructor tools and navigation, and Electronic health records.


## Main sequence to create an activity

1. Create the LMS Activity in your LMS
2. Click on the LMS Activity link.  This creates the EdEHR Activity
3. Connect the EdEHR Activity to an EdEHR Learning Object
   1. Option 1: Connect to an existing learning object
   2. Option 2: Create a new Learning Object and connect to that.

With option 1 you are done because you are reusing something created before.  With option 2 you have more choices to make and work to do.

## Step 1: LMS Activity
**The following is for Moodle yet the steps are similar in other LMS**


1. In moodle, navigate to your course. Select the gear icon and select "Turn editing on".
![1]

2. Click on "Add activity or resource"
![2]

3. Select "External tool" from the list
![3]

4. Configure the activity using the LMS external tool.
   1. Enter an **Activity name**. This name will be the link text the student will click on, It will also be the activity name that appears in the EdEHR.
   2. Select the preconfigured tool your LMS admin created, for the EdEHR.
   3. For your students, click the "show more" link and add a description about this activity.
![5]

## Step 2: Activate the connection

This step is as simple as making that first click on the LMS Activity.  As simple as it is this is an important step because it creates the EdEHR Activity, automatically, based on the settings from the LMS.  Behind the scenes your LMS has a unique identifier for each LMS Activity. This is passed in the request to the EdEHR. This means that all users of the LMS who click on that LMS Activity will be taken to the same EdEHR Activity.  Students will be shown the EHR pages and instructors will see the EdEHR Activity page.

It is also important that step 2 is done by an instructor before any student needs to use the LMS Activity.  See step 3.

##  Step 3: Connecting the EdEHR Activity to an EdEHR Learning Object

Before any student uses your new activity be sure you, as an instructor, click on the link.   You need to tell the EdEHR what content you want it to use for this activity. Until you make this connection students will not be able to do their work.
   1. Click on your new activity link.
   2. This will take you into the EdEHR and you will be taken to the "Unlinked Activity" page. If you are following our suggestion then just select the first item in the list.
      ![6]
   3. When you click the connect button you will see a warning. Just click through.  
   5. Next you, as an instructor, will be shown the instructor's 'activity' page. Everytime you, as an instructor, click your new LMS activity link you will see this page. This is where you will work with your class list and access the learning object you selected above. You now have your first activity ready for your students. 
      ![7]

## Step 3 option 2: Create content

If you need assistance with this step then [contact edehr.org](/#Contact)

This step starts with choosing ```Create new``` on the connection page.  The process is as follows:
1. Choose ```Create new``` learning object on the connection page
2. Fill in the form with a name and description for the new learning object.  Choose any case study.
3. Save.  
4. Select the new learning object for the LMS Activity.
5. You will arrive on the LMS Activity page.
6. From the sidebar navigation select ```Case studies```
7. Be sure you have ```Content designer mode``` checked on.
8. Select ```Create new``` case study.
9. Fill in the dialog with a name and description.
10. Return to the ```Activty``` page with the sidebar navigation
11. Select the Learning Object
12. Press ```Properties``` at the top of the Learning object page.
13. Select the new Case study you created in step 8. Save the form.
14. Select the link to the case study.
15. Finally, edit the case study content in the EHR


To explore how lead instructors / course content creators have the ability to create and manage and share content see the [Working with Learning Objects](/course-designer/cd-assignment/) and the [Working with Case Studies](/course-designer/cd-seed/) guides. 

To explore how instructors work with class lists see the [instructor guide](/instructor/).

To explore all the EdEHR pages available to instructors see [instructor tools](/instructor-tools/)



[1]: ../images/moodle-course-activate-edit.png "Activate editing of course in Moodle"
[2]: ../images/moodle-course-edit-enabled.png "Editing activated"
[3]: ../images/moodle-course-add-activity.png "Add activity"
[5]: ../images/moodle-course-activity-select-end.png "Selected activity"
[6]: ../images/UnlinkedActivityPage.png "Unlinked Activity Page"
[7]: ../images/edehr-activity-page.png "EdEHR Activity Page"
[8]: ../images/instructor-tools.png "Instructor tools"
