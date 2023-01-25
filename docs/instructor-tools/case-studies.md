# Case Studies

> Case studies contain the simulated health chart for a patient for a given point in time.

**EdEHR Case Study**
: Any number of EdEHR Learning Objects may wish to use the same simulated patient data.  This is why the EHR data is placed in another reusable component called the EdEHR Case Study. Think of this as a snapshot of a EHR database, focused on a particular patient at a particular point in their hospital stay.

![1]

The ```Learning objects``` page lists all the learning objects in the EdEHR instance.

Each learning object on the page has a link to the detailed learning object view. It also has a quick link to the case study the learning object uses. The ```Download``` button provides a way to save the content, in a text file containing JSON content.  There is no way to use this file in the application, yet it is a text file you can read via any text editor.

When you select to ```see more``` the page shows you the details about the Case Study.  This information is only visible 
to instructors.
The ```Name```, ```Description```, ```Contributors```, and ```Version``` content is all managed by an instructor using the course designer mode.

The ```EHR statistics``` is calculated based on the content in the EHR data.

The ```Learning objects``` is a list of Learning Objects that use this case study.

![4]

All instructors can use the ```View data``` and ```Download``` buttons.  Use download to save a copy of your case study. This file can be shared with other faculty or other institutions that use EdEHR.  This case study download file can later be *imported* into another case study.

> Make it your practice to download copies of your case studies for safe keeping.

The ```View data``` button takes you to the condensed view. This shows you the contents of the case study without any EHR UI.  
![5]

## Content creator learning objects actions

![3]

If you elevate your role to content creator you will see more actions

![6]

**Top level actions**

```Create new```
: Use this top level button create a new case study.  The dialog will let you set the name, description, version, collaborators, and let you optionally import a previously saved case study. The import requires a file from another case study that you have on your hard drive.  Perhaps you got this file from another faculty member or even from another healthcare learing institution.

```Download all```
: This button saves all the case studies into a single file. This is only for insurance purposes because there is no way to use this file directly in the application. If you need help with this 
[contact edehr.org](/#getting-started) 

```Filter by page```
: This button opens a listing of all the EHR pages. You can select whatever pages you wish and the list of case studies will be filtered based on your selection.


**Per case study actions**

```View data```
: This is the same button that instructors see. It takes you to a condensed view of the EHR content.

```Edit in EHR```
: This is **the way to edit the content**.  This button opens the EHR system with the case study data in place. You can make whatever changes you wish to the content. The EHR system saves your data into the case study as you work.  When students come to work on an activity they see your case study data and can build on top of it.  Students can not edit the case study data. **Caution**.  Be careful if you edit the case study data after students have commenced work on the activity they may not see your changes.

```Properties```
: This button opens the properties dialog. Here you can modify the name, description, version and collaborators list.  You can also, optionally, import a case study file and reset the entire EHR content.

```Duplicate```
: This button is the best was to make a copy of an existing case study.

```Download```
:  Use download to save a copy of your case study. This file can be shared with other faculty or other institutions that use EdEHR.  This case study download file can later be *imported* into another case study, via the ```Properties``` action.

```Delete```
: The delete button is enabled only if no Learning Object is using the case study. 

## Case study with draft content

If the EHR data in a case study contains [draft assessments](/ehr/#draft-reports-and-verifying-correctness) then you will see a warning message.  Be sure to resolve these warnings before students start working with the case study.  Failure to do this will mean the students can not add any assessment to the table that contains the draft row.  E.g. if the draft row exists on the Neurological assessment page then students can not add new neurological assessments. They can add other assessments.  Besides this, the appearance of a draft row will appear odd to the students. 

![7]


[1]: ../images/instructor-case-study-page.png "Case study page"
[2]: ../images/instructor-case-study-cc-view.png "Case study content creator view"
[3]: ../images/instructor-cc-checkbox.png "Checkbox for creator role"
[4]: ../images/instructor-case-study-show-more.png "Case study show more"
[5]: ../images/instructor-case-study-condensed.png "Case study condensed view"
[6]: ../images/instructor-case-study-cc-actions.png "Case study content creator actions"
[7]: ../images/instructor-case-study-with-draft.png "Case study with draft row"
