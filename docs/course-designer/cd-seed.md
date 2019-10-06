# Seed (case study) data

> A seed provides EHR information that students see when the start an assignment. Another term for seed could be case study data.

Also see [seed definition](/shared/definition.md#seed)

One seed is often used by many assignments.  Just as one assignment is often used by many activities.


To access the 'Manage seed data' page you need to start on the assignments page with [content editing enabled](/course-designer/cd-activity.md#content-development) 

![1]

This page lists all the seeds available.  (note that each LMS has its own separate listing).

## Default seed

Each tool consumer has a default, empty seed. No user can edit or modify this seed. It is automatically assigned to generated assignments when a LMS user first activates a link.

## Seed properties

**Seed name:** Short and descriptive is ideal.

**Description:** Information that will be shared with the student's. This may contain linefeeds for formatting and URLs to resources. EdEHR will automatically convert the URL text into a hyperlink.

**Version:** Optional value to distinguish different versions of the seed. May be useful for documentation.  The EdEHR prototype provides this field but does nothing with it. 

**Pages with seed data:** Lists the EHR pages that contain some data in this seed.

**Assignments using this seed:** Lists the assignments using this seed.

**Actions:** Each row has a set of buttons 

![2] 

## View/edit seed

Use the View/edit button to open the EHR and proceed with adding data.  

> Todo. Add documentation about the input spreadsheet and default case study data.

The input spreadsheet allows the product developer to define a default value for fields in the EHR.  This is used to prepopulate the application with information from the "Erin Jones" case study. 
**Trick:** The default case study data appears in the EHR but it is not saved into the seed. To place the default data into the seed you need to go to each page you want and click the edit form button.  When you then click the save button the default case study data is added into the seed.  Clearly this is a prototype kludge that later versions ought to improve on.


## Edit description

Use the Edit description button to open the seed property dialog.  Use this edit the seed name, version or description. 
![3]


## Upload / Download

The Download button saves the seed data in a text file with structured data. The structure conforms to the [JSON](http://www.json.org/) standard.
Do not edit the contents unless you really know what you are doing. For example, editing some field data might not work if the field is expecting one of a list of particular values.    

The file contains this license: *This work is licensed under a Creative Commons Attribution 4.0 International License. See http://creativecommons.org/licenses/by/4.0/*
 
> The Upload button can import a previously downloaded seed file.

The main purpose of these buttons is to save seed data in a file to be shared with another institution, or to back up a seed, or to clone a seed.  To clone (copy) a seed you first download the seed you want to copy.  Then create a new empty seed.  Then for this new seed use the import button to bring in the seed you downloaded.
 

## Next
Return to the assignment listing and configure assignments to use the seed you want them to.  Once this is done the system is ready for students to work on their assignments.


[1]: ../images/edehr-seed-list.png "EdEHR seed listing"
[2]: ../images/edehr-seed-controls.png "Seed edit controls"
[3]: ../images/edehr-seed-edit-props.png "Edit seed properties"
