# Introduction 
> The Educational Electronic Health Record applicaiton is a [BCcampus](https://bccampus.ca) project.  Project documents can be viewed [here](https://bryan-gilbert.github.io/edehr/). Project code repository is [here](https://github.com/BCcampus/edehr)

BCcampus is leading the development of a new educational technology for the classroom in the Educational Electronic Health 
Record System Project (EdEHR). This project is funded by the Ministry of Advanced Education, Skills and Training and 
will build on existing research and development completed by an interest group from BCIT, Douglas College, UBC, and UVic.

In support of the requirement for health professional graduates to be competent in using electronic health records in 
an inter-professional setting, the goal of this project is to develop a solution that can be piloted and evaluated by interested institutions.

> [BCcampus announcement](https://bccampus.ca/2018/01/23/bccampus-launches-the-educational-electronic-health-record-system-project-in-b-c/)

The objectives of this project are to build a pilot-ready prototype EdEHR and a sustainability plan. The EHR simulates the interaction a nurse, doctor, pharmacist or other medical practitioner would have using a professional EHR. The EdEHR wraps this simulation into an educational tool.

> This application is a prototype so there are many areas that could see further development. See [next](/whats-next.md) 

## Getting started

Apart from installing and running the LMS and EdEHR applications there are four main steps to using the application.

1. The first step is to have a LMS application use the EdEHR. This has two parts.  
    1. a LMS administrator creates a LTI link to the EdEHR. See [LMS Admin](/lms-admin/) 
    1. then, also in the LMS, a course designer uses this link one or more times to set up activities in courses. See [course designer](/course-designer)

2. The second step needs to be done by an instructor or course designer. They click on the activity link, in the course, and they are taken to the EdEHR's dashboard.
On this first visit they need to configure the activity.  See [course designer](/course/designer/)

3. Now the course students log onto the LMS and view their course.  They click on the activity (with the link to the EdEHR) and they are taken to the EdEHR. The medical student will read instructions that come from the LMS and the assignment created in the EdEHR and complete their assigned task.  When they are done they submit their work. See [student](/student/)

4. The instructor also gets to the EdEHR via the same LMS activity link. When they come to the EdEHR they see a dashboard with a listing of all the courses they have used. Under the courses is a listing of activities and then contain class lists. The instructor can now provide evaluation on the student's work.  These evaluations notes can later be exported to a file and imported into the LMS. See [instructor](/instructor/)


## Installation and Development

This documentation assumes you have a running LMS and will not discuss how to install or setup the LMS itself. See [LMS Admin](/lms-admin/) to read about making the LTI connection in the LMS to the EdEHR.

To set up and install a copy of the EdEHR see [developer](/developer/) to learn more.

The EdEHR project is open source so the world is invited to make contributions. See [developer](/developer/) to learn more.

