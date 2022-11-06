# Working with Case Studies

> One Case Study is often used by many Learning Objects. Just as one Learning Object can be used by many Activities.
> 
> A Case Study provides the EHR simulation data.  This is for a single simulated patient during an encounter in a hospital.
> 
> Case Studies have also been called Seeds. So if you encounter the term "seed" think "case study". The term "seed" will be phased out over time.


## Accessing Case Studies

Each Learning Object has a link that takes a user directly to the linked Case Study.

From the Instructor tools menu select Case Studies to go to the Case Studies list page.

Each EdEHR instance has one default Case Study that is empty. This Case Study does not appear on the list page.


## Editing a Case Study

Use the ![3] button to modify the properties of a Case Study.

**Name:** A short, descriptive name.

**Description:** Information that will be shared with other instructors to help them understand what this Case Study is about.

**Version:** Optional value to distinguish different versions of the Case Study. This may be useful for your documentation. 

**Contributors:** Optional list of instructors who helped create this Case Study.

The ![1] button lets you, *optionally*, import a Case Study JSON file that you may have saved from before or obtained by sharing case studies with others. 

> *The "Upload seed" button is poorly placed and can be confusing to new users. This problem will be addressed soon.  If you find this button confusing then you are not alone.*

Use the upload seed button to select a file from your computer that contains a case study (json file extension) that you or someone else saved and shared. This upload imports the EHR contents from the json file. 

> *Another confusing user interface appears when you upload a seed. The dialog shows too much information about the imported case study*
 

## Download (Save) a Case Study

Use the ![7] button to save a Case Study. The saved file contains structured text that you can read. The structure conforms to the [JSON](http://www.json.org/) standard. It is good practice to save your case studies as backups and to share with others. 

*Do not edit the contents of a saved case study unless you know what you are doing.*

Each saved Case Study file will contain this license: *This work is licensed under a Creative Commons Attribution 4.0 International License. See http://creativecommons.org/licenses/by/4.0/*

> *You can remove Creative Commons license if you wish.* 


## Viewing Metadata for a Case Studies

Each Case Study has metadata, as well as EHR content. This metadata includes the properties mentioned above and

**EHR statistics:** List of the EHR pages that are in the EHR data.

**Learning Objects using this seed:** Says how many Learning Objects are using this Case Study

## Viewing the EHR content

Both Instructor and Content Creator users can view the EHR data in the "Condensed View" with the ![5] button.  This condensed view shows you just the data in the EHR without all the EHR charting UI.

## Editing the EHR content

Only Content Creator users can edit the EHR case study data in the EHR pages with the ![6] button. This launches the EHR with the case study data and lets you contribute more to the chart. Like a student user you will be able to modify the content of forms and add new assessments to tables. If you need to make other types of modifications then contact your EdEHR administrator for help.


[1]: ../images/upload-seed-button.png "Upload seed"
[2]: ../images/duplicate-button.png "Duplicate"
[3]: ../images/properties-button.png "Properties"
[4]: ../images/activity-lobj-seed.png "Activity, Learning Object, Case Study"
[5]: ../images/view-data-button.png "View case study"
[6]: ../images/edit-in-ehr-button.png "Edit in EHR"
[7]: ../images/download-button.png "Download"
