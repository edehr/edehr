# Learning Objects

> Learning objects contain the learning objectives.

**EdEHR Learning Object**
: Each activity needs to have a set of learning objectives and case study patient data.  The EdEHR Learning Object is a reusable component of the EdEHR that is created by your school's course content creation team. They will set up the Learning Object to contain a description of the learning objectives, and a link to an EdEHR Case Study.  They will also establish the link between the EdEHR Activity and the EdEHR Learning Object. (See the Course designer guide.)


![1]

The ```Learning objects``` page lists all the learning objects in the EdEHR instance. 

Each learning object on the page has a link to the detailed learning object view. It also has a quick link to the case study the learning object uses. The ```Download``` button provides a way to save the content, in a text file containing JSON content.  There is no way to use this file in the application, yet it is a text file you can read via any text editor.

When you select to ```see more``` the page shows you the details about the learning object.  Note that the ```Name``` and ```Description``` are visible to the student when they do the activity. The student also sees the EHR data provided by the case study.


## Content creator learning objects actions

![3]

If you elevate your role to content creator you will see more actions

![2]

Across the top are two top-level actions.  ```Create new``` lets you create a new Learning Object. The ```Download all``` button saves a copy of all the learning objects in a JSON text file.

Then for each learning object you can use the ```Properties``` button to edit the name and description of the learning object. This is also where you can connect the learning object to a case study.

With the ```Duplicate``` button you can create a new learning object based on the selected one.

The ```Delete``` button is only available if not a single EdEHR Activity is using the learning object. 

For more about working with learning objects see [Course designer guide - Working with Learning Objects ](../course-designer/cd-assignment.md)


[1]: ../images/instructor-learning-objects-page.png "Learning objects"
[2]: ../images/instructor-learning-objects-creator-actions.png "Content creator actions for learning objects"
[3]: ../images/instructor-cc-checkbox.png "Checkbox for creator role"
