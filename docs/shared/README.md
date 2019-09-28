# EdEHR

> Educational Electronic Health Record: a [BCcampus](https://bccampus.ca) project

Project documents can be viewed [here](https://bryan-gilbert.github.io/edehr/)

Project code repository is in [git](https://github.com/BCcampus/edehr)

> Both the documentation and the code are actively being developed and are subject to change.

BCcampus is leading the development of a new educational technology for the classroom in the Educational Electronic Health 
Record System Project (EdEHR). This project is funded by the Ministry of Advanced Education, Skills and Training and 
will build on existing research and development completed by an interest group from BCIT, Douglas College, UBC, and UVic.

In support of the requirement for health professional graduates to be competent in using electronic health records in 
an inter-professional setting, the goal of this project is to develop a solution that can be piloted and evaluated by interested institutions.

> [BCcampus announcement](https://bccampus.ca/2018/01/23/bccampus-launches-the-educational-electronic-health-record-system-project-in-b-c/)

The objectives of the project are to build a pilot-ready prototype EdEHR and a sustainability plan. 

## Application structure

From a high level view the app has three layers: 

1. Learning management system 
2. Assignment management system
3. Electronic health record system

### Learning Management System

The [learning management system](/lms/) (LMS) is actually provided by other applications called LTI Consumers. 
LTI stands for [Learning Tools Interoperability](https://www.imsglobal.org/specs/ltiv2p0/implementation-guide)
and this technology allows applications to consume and provide learning applications.
Example LMS applications include [Moodle](https://moodle.org/), [Canvas[(https://www.canvaslms.com/)] and 
[Blackboard](https://www.blackboard.com) amoung many others.

See [learning management system](/lms/)
 
### Assignment management system

> Users enter the application via a link in a LMS.

The EdEHR project has two levels which we call the inside and the outside.  The outside provides the 
[assignment management system](/outside/) which includes learning management activities
such as viewing class lists, assignments and EHR data (called seeds).  The outside is the entry point to the application.

When an instructor accesses the application via a link in a LMS they are taken to the assignment
management pages.  Here they can view class lists, see the status of student's work, and evaluate
the work within the EHR.

When a user with content editing permissions enters the app, they are taken to the
assignment management pages.  They are permitted to edit assignments and seed data.

See [assignment management system](/outside/)

### Electronic Health Record

In the center of the application (the inside) is an
[electronic health record system](/inside/) (EHR) scaled to suit the learning environment.

A student can access the EHR via a LMS link. The EHR similuates the interaction a nurse, doctor, pharmacist or other medical practitioner would have using a professional EHR. 
Students will have been given an assignment to complete within the EHR.  The student can 
reenter the application any number of times to complete the assignment and they can make edits
until they submit their work.  After this they can only view their work.  At this point the instructor
can evaluate the student's work and leave comments.

A future version of this application might support LTI processes for transferring more information,
such as evaluation results, back to the LMS.
   
See [electronic health record system](/inside/)

## Open Source & License

A core requirement of this project is to be open source.  This means all the code and documentation is publicly available,
all the time, even while under development.
Git code repository [here](https://github.com/BCcampus/edehr)

From [https://opensource.org/licenses](https://opensource.org/licenses). The following OSI-approved licenses are popular, 
widely used, or have strong communities:

* Apache License 2.0
* BSD 3-Clause "New" or "Revised" license
* BSD 2-Clause "Simplified" or "FreeBSD" license
* GNU General Public License (GPL)
* GNU Library or "Lesser" General Public License (LGPL)
* [GNU Affero General Public License](https://choosealicense.com/licenses/agpl-3.0/)
* MIT license
* Mozilla Public License 2.0
* Common Development and Distribution License
* Eclipse Public License

See this [comparison](https://en.wikipedia.org/wiki/Comparison_of_free_and_open-source_software_licenses)

The [GNU Affero General Public License](https://choosealicense.com/licenses/agpl-3.0/) is a modified version of the 
ordinary [GNU Affero General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/). It has one added requirement: 
if you run a modified program on a server and let other users communicate with it there, your server must also allow 
them to download the source code corresponding to the modified version running there.

The GNU Affero seems to best fit the intention of BCCampas’s mandate to provide open source educational tools and promote 
the development of more open source tools.  

Todo: Add a header to code files.  Question: should the author's name be the developer or BCcampus?

 
> Copyright (C) 2019 Bryan Gilbert

> This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

> This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

> You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>. 
  
#### More references
* [https://www.gnu.org/licenses/why-affero-gpl.html](https://www.gnu.org/licenses/why-affero-gpl.html)
* [https://bccampus.ca/2018/05/08/copyright-and-open-licences-an-excerpt-from-the-bccampus-open-education-self-publishing-guide/](https://bccampus.ca/2018/05/08/copyright-and-open-licences-an-excerpt-from-the-bccampus-open-education-self-publishing-guide/)]
* [https://bccampus.ca/2013/04/02/walking-the-talk-open-resources-at-rru/](https://bccampus.ca/2013/04/02/walking-the-talk-open-resources-at-rru/)
* [https://github.com/bcgov/BC-Policy-Framework-For-GitHub/tree/master/BC-Open-Source-Development-Employee-Guide](https://github.com/bcgov/BC-Policy-Framework-For-GitHub/tree/master/BC-Open-Source-Development-Employee-Guide)
* [https://github.com/bcgov/BC-Policy-Framework-For-GitHub/blob/master/BC-Open-Source-Development-Employee-Guide/Licenses.md](https://github.com/bcgov/BC-Policy-Framework-For-GitHub/blob/master/BC-Open-Source-Development-Employee-Guide/Licenses.md)
* [https://github.com/BCcampus/opentextbooks/blob/dev/README.md#copyright-and-license](https://github.com/BCcampus/opentextbooks/blob/dev/README.md#copyright-and-license) 