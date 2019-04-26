# EHR Definitions and Code Generation

> This about how we scale this EdEHR app to have over 45 generated pages 
and allow for easy modifications and extensions.  Each page has either a form or a set of tables, each with its 
own dialog.  These forms and dialogs contain anywhere from a few to several dozen inputs.

This project is a prototype which means it needs to be designed to be changed as the team works
with stakeholders to refine the application.

## EHR generation
The EHR side of the project contains almost 40 separate screens, each needs to be listed in the menu and routing tables.  These 
tasks are automated via a script in the makeEhr subdirectory. This script only needs to be invoked if the content of the 
configuration files have been modified.  The source of the configuration files comes from a Google spreadsheet stored 
in the project GDrive.
```
cd makeEhr
./deploy.sh --lint
```
The ```--lint``` option can be replaced with ```-l```. You must use this lint option before submitting files. If you are 
making changes and then checking the results in the UI you can skip ```lint``` and get your changes into the UI faster.
Just run the script with lint when you are done and ready to submit your code.

## Inputs spreadsheet
Team members have access to a Google spreadsheet called "Inputs".  This spreadsheet is the primary source of truth for
the application. Team members can adjust the number of pages, tables, forms, inputs and the initial seed data
all from this one worksheet. Each sheet has a set of cells (with formula based values) that are designed to be selected and
copied into raw source files in the EdEhr project.  These files are located in ```makeEhr/raw_data``` and there is one
file per tab in the worksheet.

Developers can run the ```deploy.sh``` script to generate the content. They must use the ```-lint``` option before submitting
changes to the repo.

## Default_value
The ```Default_value``` property provides the input elements default value.

The following properties are yet to be described in this documentation:
- Suffix
- Mandatory
- Validation
- Data_case_study
- Assignment
- helperText
Mainly because these properties are not yet fully implemented in the application