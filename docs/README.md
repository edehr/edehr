# Introduction to the EdEHR
The Educational Electronic Health Record application is a [BCcampus](https://bccampus.ca) [open-source](/developer/contributors.md) project funded by the Ministry of Advanced Education, Skills and Training. 

The EdEHR simulates the interaction a nurse, doctor, pharmacist or other medical practitioner would have using a professional EHR system. An alternative name for EHR is electronic medical record (EMR) system.

A stakeholder group comprised of stakeholders from 
the British Columbia Institute of Technology (<a href="https://www.bcit.ca/">BCIT</a>), 
the University of British Columbia (<a href="https://www.ubc.ca/">UBC</a>), 
and the University of Victoria (<a href="https://www.uvic.ca/">UVic</a>
formed to research and develop the requirements that were used as a foundation for the project. The goal of that stakeholder group and this project was to build a pilot-ready, "minimum viable product" to give students access to an EHR system in classrooms before they work in a professional setting.

- [GitHub repository](https://github.com/edehr/edehr)
- [BCcampus announcement](https://bccampus.ca/2018/01/23/bccampus-launches-the-educational-electronic-health-record-system-project-in-b-c/)

The three main ways people interact with the EdEHR are; as a student learning about how best use an electronic health record system in clinical situations, as an instructor in a health teaching environment, or as an administrator of the learning management system for a health education insitition that wishes to use an instance of the EdEHR. 

All these interactions start in a learning management system (an LMS). Some typical learning management systems include
[Moodle](https://moodle.org/),
[Canvas](https://www.canvaslms.com/),
[Blackboard](https://www.blackboard.com), and
[D2L](https://www.d2l.com/).
All of these learning management systems support a standard method of using external content provided by another application that is called LTI. You can read more about this in the [LMS Admin](/lms-admin) section of this documentation. 

All students and instructors log into their LMS and view their course work.  If their LMS is configured to use the EdEHR then they will be able to access the EdEHR and complete their course work.  The EdEHR can only be accessed via an LMS connection.  So, the LMS provides the user authentication and authorization (e.g. student or instructor)

## The EdEHR instance

There are two ways a learning institution can access the EdEHR. The first is to take advantage of the open source nature of this project and run the EdEHR application on internal servers. This approach requires intensive effort from your institution's IT team, but it does mean that all data in the application remains within the control of your institution. To learn more about this approach see the open source repository [here](https://github.com/edehr/edehr).

The second way to use EdEHR is through a shared service operated outside the institution. The original developer of EdEHR offers this software as a not for profit service at
[edehr.org](https://edehr.org). To learn more about how your learning institution can use this service please email <a href="mailto:info@edehr.org">info@edehr.org</a>.
Click [here](https://edehr.org/privacy) to read the <strong>privacy policy</strong> for the edehr.org service.

By using a shared service several learning instutions can share the cost of operation as well as share ideas for best peda  gogical practices.


### Assignment configuration and management

The EdEHR system is split into two parts: the EHR and everything else. "Everything else" includes the screens used by admins to configure the system as well as instructors for evaluating student work. These screens, often referred to collectively as the dashboard, is the entry point to the EdEHR for the instructor and course designer.

After a course designer has configured an assignment in the EdEHR, an instructor can view each respective course, assignment and list of students that have logged into the EdEHR from their dashboard. They can also manage evaluation notes for each student.

[Learn about EdEHR configuration](/configuration/)

### Electronic health record 

The EHR screens are made up of forms and prepopulated patient data and reports. It represents a professional EHR that has been made generic and scaled back to best serve curriculum purposes. It is where students complete an assignment and where instructors view student work and make evaluation notes. 

[Learn about EHR configuration](/developer/inside-generator/)

## Continuing development

There are many opportunities to add new features and functionality to the EdEHR. For a current list of issues we're tackling, see our [GitHub project board](https://github.com/edehr/edehr/projects/2).
