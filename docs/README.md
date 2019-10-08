# Introduction 
> The Educational Electronic Health Record application is a [BCcampus](https://bccampus.ca) project.  Project documents can be viewed [here](https://bryan-gilbert.github.io/edehr/). Project code repository is [here](https://github.com/BCcampus/edehr)

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

2. Next an instructor or course designer clicks on the LMS course/activity link and will be taken to the EdEHR dashboard. It is necessary for the user to configure the activity and assignment in the EdEHR. See [course designer](/course/designer/)

3. Now the course students can click on the LMS course/activity and they will be taken directly to the EHR part of the EdEHR. The medical student will read instructions that come from the LMS and the assignment created in the EdEHR and complete their assigned task.  When they are done they submit their work for evaluation. See [student](/student/)

4. Instructors also get to the EdEHR via the same LMS course/activity link but they come to the EdEHR dashboard with a listing of all the courses they have used. Under each course is a listing of activities and these each contain class lists. From here the instructor can enter the EHR and evaluation each student's work.  These evaluations notes can later be exported to a file and imported into the LMS. See [instructor](/instructor/)

To help explain all this we have a video in two parts. [part1](https://www.dropbox.com/s/j1ycyvb91ef7hcf/tutorial-part1.mp4?dl=0) and  [part 2](https://www.dropbox.com/s/duznqu7rz930v1p/tutorial-part2.mp4?dl=0)
These videos demonstrate all of the above including how a student completes their assignment and instructor evaluates the work. You see this in part 2.


## Installation and Development

This documentation assumes you have a running LMS. It is beyond the scop of this project to describe how this is done. Yet see how to setup the LMS to use the EdEHR [here](/lms-admin/).

To set up and install a copy of the EdEHR see [developer](/developer/).

The EdEHR project is open source so the world is invited to make contributions. See [developer](/developer/) to learn more.

