# Working with seed data

> [Seeds](../shared/definitions.html#seed) are not shared with other institution's LMS. Each LMS, or more precisely, each LTI tool consumer, has its own namespace within the database. Every seed, assignment, activity, user, etc is unique to each tool consumer. To share seed data across institutions you can download, share and then upload a seed.


> One seed is often used by many assignments. Just as one assignment is often used by many activities.

## Accessing seed data

To gain access to 'Manage seed data' navigate to the assignments page and click on the course designer functionality checkbox at the bottom left of the page. Click on the "Manage seed data" button that appears under the page title to view the seeds available in your system. (Note that each LMS has its own separate list).

![1]

## Default seed

Each [tool consumer](../shared/definitions.html#tool-consumer) is automatically linked to an empty, default seed when a LMS user first activates a link. It cannot be modified and it is recommended to relink the assignment to a different seed.

## Seed properties

**Seed name:** A short, descriptive and unique name.

**Description:** Information that will be shared with students. This is added onto the activity description entered by the LMS admnin.

**Version:** Optional value to distinguish different versions of the seed. May be useful for documentation. The EdEHR prototype provides this field but does nothing with it. 

**Pages with seed data:** Lists the EHR pages that contain at least one piece of data within the respective seed.

**Assignments using this seed:** Lists the assignments using the respective seed.

![2] 

## View/edit seed

Use the view/edit seed button to view the EHR and add/edit data in the seed. If changes are needed to the fields or options in lists, contact your [developer to edit the input spreadsheet](../developer/inside-generator/#input-spreadsheet). 

### Work around

The default case study data appears in the EHR but it is not saved into the seed. To save the default Erin Johns data into the seed:
- visit each page desired to be in the seed
- click the edit form button 
- click the save button
- the data on that page is then added into the seed.

This is a prototype kludge that later versions ought to improve on.


## Edit description

Use the Edit description button to edit the seed name, version and description. 
![3]


## Download

The download button saves the seed data in a text file with structured data. The structure conforms to the [JSON](http://www.json.org/) standard. Use this feature to backup your data, or share it with another course or even institution. 

Do not edit the contents unless you know what you are doing. For example, editing some field data might not work if the field is expecting one of a list of particular option values.

The file contains this license: *This work is licensed under a Creative Commons Attribution 4.0 International License. See http://creativecommons.org/licenses/by/4.0/*
 
## Upload

Use the upload button to import a previously downloaded seed file. Use this feature after renaming a downloaded seed to duplicate it in the system.

## Assign a seed to an assignment

Remember to link the seeds you want to use to their respective assignments from the assignment page. Students are now able to enter the system to complete their assignments.


[1]: ../images/edehr-seed-list.png "EdEHR seed list"
[2]: ../images/edehr-seed-controls.png "Seed edit controls"
[3]: ../images/edehr-seed-edit-props.png "Edit seed properties"
