# EHR Definitions and Code Generation

> Scaling the EdEHR app to have over 45 generated pages and allow for easy modifications and extensions. 

Each page has either a form, a set of tables or both, and each with its 
own dialog. These forms and dialogs contain anywhere from a few to several dozen inputs.

This project is a prototype which means it needs to be designed to be changed as the team works
with stakeholders to refine the application.

## EHR generation
The EHR side of the project has more than 40 screens in the menu and routing tables. The Vue components that render these
pages are based on JSON configuration files.  These files are generated via scripts in the makeEhr subdirectory.
The script only needs to be invoked if the source of the configuration files have been modified.
The source of the configuration files comes from a Google spreadsheet stored 
in the project's GDrive.
```
cd makeEhrV2
./deploy.sh --lint
```
The ```--lint``` option can be replaced with ```-l```. You must use this lint option before submitting files. If you are 
making changes and then checking the results in the UI you can skip ```lint``` and get your changes into the UI faster.
Just run the script with lint when you are done and are ready to submit your code.

## Input spreadsheet

> Todo. Add documentation about the input spreadsheet and default case study data.

The input spreadsheet allows the product developer to define a default value for fields in the EHR. This is used to
prepopulate the application with information from the "Erin Jones" case study.

Team members have access to a Google spreadsheet called "Inputs". This spreadsheet is the primary source of truth for
the application. Team members can adjust the number of pages, tables, forms, inputs and the initial seed data
all from this one worksheet. Each sheet has a set of cells (with formula based values) that are designed to be selected and
copied into raw source files in the EdEHR project. These files then generates pages, forms, dialogs and tables. This allows a now-developer to participate in the design of the EHR screens. These files are located in ```makeEhr/raw_data``` and there is one
file per tab in the worksheet.

Developers can run the ```deploy.sh``` script to generate the content. They must use the ```-lint``` option before submitting
changes to the repo.

## Work flow

When team members make a change to the Inputs sheet they are encouraged to tag the Google sheet with a version name that reflects
the PR number of the code submitted.  E.g.

  1. Make some changes
      1. Make a change to the Inputs sheet
      2. Copy the code blocks into the raw files
      3. Run the deploy script and verify your changes.
  2. Submit a PR with the configuration changes.  Note the PR number
  3. Return to the google sheet and File ... Version History ... Name current version (use the PR #)

## Default_value
The ```Default_value``` property provides the input elements default value.

The following properties are yet to be described in this documentation because they are not yet fully implemented in the application:
- Suffix
- Mandatory
- Validation
- Data_case_study
- Assignment
- helperText