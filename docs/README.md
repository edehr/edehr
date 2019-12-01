# Introduction 
The Educational Electronic Health Record application is a [BCcampus](https://bccampus.ca) [open-source](/developer/contributors.md) project funded by the Ministry of Advanced Education, Skills and Training. 

The EdEHR simulates the interaction a nurse, doctor, pharmacist or other medical practitioner would have using a professional EHR.

A stakeholder group formed by individuals from from BCIT, Douglas College, UBC, and UVic helped to research and develop requirements that were used as a foundation for the project. The goal of that stakeholder group and this project was to build a pilot-ready, minimum viable product to give students access to an EHR system in classrooms before they work in a professional setting.

- [GitHub repository](https://github.com/BCcampus/edehr)
- [BCcampus announcement](https://bccampus.ca/2018/01/23/bccampus-launches-the-educational-electronic-health-record-system-project-in-b-c/)

## About the EdEHR

The EdEHR experience is broken down into the following three areas:

### Learning management system

A LMS is needed to access the EdEHR. It provides user authentication and stores the courses and student lists that the EdEHR pulls from to know which students need access to specific assignments. 

The LMS is installed and managed by each post secondary institution using the EdEHR. 

Examples include:
- [Moodle](https://moodle.org/)
- [Canvas](https://www.canvaslms.com/)
- [Blackboard](https://www.blackboard.com)
- [D2L](https://www.d2l.com/)
 

### Assignment configuration and management

The EdEHR system is split into two parts: the EHR and everything else. "Everything else" includes the screens used by admins to configure the system as well as instructors for evaluating student work. These screens, often referred to collectively as the dashboard, is the entry point to the EdEHR for the instructor and course designer.

After a course designer has configured an assignment in the EdEHR, an instructor can view each respective course, assignment and list of students that have logged into the EdEHR from their dashboard. They can also manage evaluation notes for each student.

[Learn about EdEHR configuration](/configuration/)

### Electronic health record 

The EHR screens are made up of forms and prepopulated patient data and reports. It represents a professional EHR that has been made generic and scaled back to best serve curriculum purposes. It is where students complete an assignment and where instructors view student work and make evaluation notes. 

[Learn about EHR configuration](/developer/inside-generator/)

## Continuing development

There are many opportunities to add new features and functionality to the EdEHR. For a current list of issues we're tackling, see our [GitHub project board](https://github.com/BCcampus/edehr/projects/2).
