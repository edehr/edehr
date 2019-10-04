# About the EdEHR

From a high level view the app has three layers: 

1. Learning management system interface
2. Assignment management system
3. Electronic health record system

## Learning Management System

The learning management system (LMS) is actually provided by a post secondary institution. Examples include 
- [Moodle](https://moodle.org/), 
- [Canvas](https://www.canvaslms.com/), 
- [Blackboard](https://www.blackboard.com)
- and many others
Each LMS can work with other courseware providers who provide the course content.  The EdEHR is an example courseware. A list of other providers can be found [here](https://en.wikipedia.org/wiki/Learning_Tools_Interoperability#Adoption)
 
Between the LMS and the provider is a technology called [Learning Tools Interoperability (LTI)](https://www.imsglobal.org/specs/ltiv2p0/implementation-guide). This technology allows LMS applications to consume content from couseware providers.  The LMS is called a LTI Consumer and the courseware provider is called a LTI Provider.  The EdEHR application is a LTI Provider.


## Assignment management system

> Area for instructors and course designers

The EdEHR project has two levels which we call the inside and the outside.  The outside provides the assignment management system which includes learning management activities such as viewing class lists, assignments and EHR data (called seeds).  The outside is the entry point to the application for the instructor and course designer.

When an instructor accesses the application via a link in a LMS they are taken to the dashboard. Here they can view class lists, see the status of student's work, and evaluate the work within the EHR.

But first, a course designer needs to visit the EdEHR and configure the activity. This includes adding descriptions (possibly with links to helpful resources) and edit the EHR data (seed) to be associated with the assignment.

## Electronic health record system

The electronic health record system is the core of the application. In this prototype stage it consists of 48 pages each
with one or more data entry forms and/or one or more tables with associated input dialogs.  EHR's are complex and that is
why students need some exposure to them during their post-secondary education.


## Open Source & License

> A core requirement of this project is to be open source.  

Open source means all the code and documentation is publicly available,
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