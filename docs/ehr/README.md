# The EHR system

## The main EHR sections

![1]

The EHR has four main sections:
- the EHR page title
- the EHR navigation
- the EHR patient information banner, and
- the main EHR content


## EHR patient information banner
The patient information banner contains key pieces of information about the current patient.  
![2]

From the ```Patient profile - Demographics``` page.
- Patient name. Last, First, Middle. 
- PHN. The patient health number is a simulated patient identifier.
- DoB.  Date of birth. See below
- Gender.
- Weight.
- MRN. The medical record number, if present, is a simulated record id.
- MRP and MRP Phone. The most responsible person may be next of kin.

From the ```Current Visit - Visit details and location``` page.
- Code Status. (DNR or MOST code)  ```Code Status``` field.
- Diagnosis.  From the ```Physician admitting diagnosis``` field.

From the ```Patient Profile - Allergies``` page.
- Allergies. 

The ```Current time and day``` is calculated based on the EHR records.  See below. 

## Date of birth

The birthdate is calculated based on the patient's age and date of birth. 
The displayed year will always reflect the patient's age based on today's date.

To edit the ```Date of birth``` field on the ```Demographics``` page you need to enter a date. The year value 
can be anything so just set the month and day to be the patient's birthday.  For example, enter ```1970-03-15``` for a 
birthday of March 15th.  Then edit the ```Age``` field.  If you enter 50 then the year in the date of birth will be
today's year less 50.

## Simulation day and time
In a real EHR the date and time come from the computer system.  But the EdEHR is a simulated EHR so we need to provide
the date and time values.  Dates are based on encounter or visit dates.  Day 0 is the admission day and each day
the patient stays in the hospital or clinic the day increases.  Day 1 is the second day of the encounter.  Etcetera. 

The value shown in the patient banner is the maximal day and time found in all the EHR records.  For example, see records for any of the many assessments.  As we enter records into the EHR we set the record day and time. If we add a record with a
day and/or time that is greater than a previous record then we advance the simulation time.

## EHR page forms

Many of the EHR pages collect information via a form directly on the page. Examples include the ```Demographics, Allergies, Medical history``` pages and many more. If you are allowed to edit the form then you will see a ````Edit form```` button
near the top of the page. Press this and start to edit.
```Cancel``` to abort your edits or ````Save```` when you are ready.

![5]

At the bottom right side of the page there is a ````Reset form data```` button.  This resets the form to either
1. The base case data if you are a student working on an activity or
2. The default values for the form (mostly empty) if you are a lead instructor and are working on the case study.



## Care team and creating reports.

The ```Care Team``` page is where we list the team of health care workers who look after a given patient. In a real EHR this team is managed automatically by the application.  In this simulated environment we need
to manually manage the team. Before doing much with a case study it is good to add one or two representative
professionals to the care team. These names will be present to users who complete assessments.  

![3]
For example, here is the top section of a neurological assessment.  When you place the focus in the ```Name``` field
the dropdown lists all the care team members.  Selecting a member will push their profession 
into the ```Profession``` field.

![4]



## Draft reports and verifying correctness

Some assessments are very lengthy and they require considerable effort to complete.  The good news is that you can 
close the dialog form and your work is saved in a draft report. You can come back later and continue to work
towards completing the report.  Just press the ```Save``` button and you will be offered two choices.

![6]

You can save the current report as a draft or verify the report is correct and complete.  Once you verify the
report can not be modified.

![7]

When a page has a draft report/assessment you will see a red dot beside the page name, and when you view the 
page the draft row will be displayed with an amber background colour.

To continue editing the draft you can either (1) press the ```Edit``` button on the draft row or (2) select the main
table ```Add ...``` button at the top of the page.

[1]: ../images/ehr-content-blocks.png "Main EHR content sections"
[2]: ../images/ehr-patient-banner.png "EHR patient banner"
[3]: ../images/ehr-record-select-worker.png "Select health care professional"
[4]: ../images/ehr-record-selected-worker.png "Selected health care professional"
[5]: ../images/ehr-page-form.png "Sample page with form"
[6]: ../images/ehr-save-draft-or-verify.png "Save draft or verify correctness"
[7]: ../images/ehr-draft-indicators.png "Draft report indicators"
