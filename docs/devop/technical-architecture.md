# Technical Architecture

About the EdEHR project

BCcampus is leading the development of a new educational technology for the classroom in the Educational Electronic Health 
Record System Project (EdEHR). This project is funded by the Ministry of Advanced Education, Skills and Training and 
will build on existing research and development completed by an interest group from BCIT, Douglas College, UBC, and UVic.

In support of the requirement for health professional graduates to be competent in using electronic health records in 
an inter-professional setting, the goal of this project is to develop a solution that can be piloted and evaluated by interested institutions.

[https://bccampus.ca/2018/01/23/bccampus-launches-the-educational-electronic-health-record-system-project-in-b-c/](https://bccampus.ca/2018/01/23/bccampus-launches-the-educational-electronic-health-record-system-project-in-b-c/)

Application structure

From a high level view the app has three layers: 

1. Learning Management System 
2. Assignment management system
3. Electronic Health Record system

----

# Technical Elements #

## Application Requirements ##

The design of the application can support very large numbers of concurrent users because the main content is just static
and can be served by highly performant web servers.  Each client interaction requires a small number of API calls that 
mainly provide data retrieval services.  Even fewer API calls modify the data.  Only the initial LTI API post call is in 
any way data intensive.  Thus, it is expected that this prototype can support a very large number of concurrent users without
any special considerations.

## Browser Requirements ##
The project assumes support only for modern browsers

Support screen resolutions of 1024 and up. (i.e. iPads and laptops but not iPhones)

----

## Planning & Management ##

Open Source Licensing : GNU Affero General Public License v3.0

Agile tasks - Github

Documentation: Markdown

Source Control:  Github  git@github.com:BCcampus/edehr.git  or [https://github.com/BCcampus/edehr.git](https://github.com/BCcampus/edehr.git)

Developers should fork the main repo and submit squashed PRs

Defect tracking: Github

----

## Coding ##

Client side UI framework: Vue.js

Javascript ECMA 2016 or better. Use Vue CLI to transpile.

Coding standards

For Javascript use ESLint rules as defined in project

CSS

Bulma CSS framework. It’s simple, 100% responsive, modern and open source. It doesn’t depend on javascript.

* [https://bulma.io/](https://bulma.io/)
* [https://bulma.io/documentation/overview/](https://bulma.io/documentation/overview/)

SCSS

Use SCSS rather than SASS because SCSS is a superset of CSS and all CSS content is valid SCSS. While CSS is not valid in SASS files.

[http://sass-lang.com/](http://sass-lang.com/)

Strive to be DRY so use SCSS variables and mixins when possible

Requirements:

* Responsive
* Clean and simple. It’s easier to learn, develop and maintain.
* Good if CSS does not depend on Javascript (separation of concern)

----

## Data storage ##

Data storage: MongoDB

License: GNU Affero General Public License, version 3.

Doesn’t require a specialized database administrator.

High-performing for simple queries.

Scalable.

Flexible

Faster development time.

----

## Testing ##

This section is a work in progress

Consider the following for performance testing

- BURP for security testing
- [https://www.blazemeter.com/blog/open-source-load-testing-tools-which-one-should-you-use](https://www.blazemeter.com/blog/open-source-load-testing-tools-which-one-should-you-use)
- JMeter [https://jmeter.apache.org/usermanual/get-started.html](https://jmeter.apache.org/usermanual/get-started.html)
- Selinium. [https://www.seleniumhq.org/](https://www.seleniumhq.org/)
- BrowserStack. [https://www.browserstack.com/](https://www.browserstack.com/)
- [https://www.browserstack.com/pricing](https://www.browserstack.com/pricing). $29/m
- JEST [https://jestjs.io/](https://jestjs.io/)

----

## CI CD ##
- Continuous Integration: automated testing as part of the development lifecycle
- Continuous Delivery: incrementally add value on a continuous basis.
- Project is not dependent on any particular version of linux. Debian, Ubunto, etc are all fine.

## Development Server Hosting

Development is currently running on Digital Ocean server provided by contractor.  Goal is to port to a BCcampuse server 
for initial prototype assessment with stakeholders.  Long term objective is to host EdEHR on non-BCcampus servers.

Test environment

* 2 - 4 GB RAM per core
* 2 - 4 cores (to allow testing of application scaled to match production
* Standard hard drive, 10-20 GB free.
* Network connectivity.

Production

* 4 Cores
* 4 GB RAM per core.
* Standard hard drive, 50-100 GB free.
* Network connectivity.

### Docker containerization

This project has containerize access to the database and may still containerize access to the server API.

### Automation of testing

Jenkins is a tool for automating a series of steps to take code from the development environment and place it into the 
production environment. Along the way Jenkins can run automated helper and validation tasks. For example, Jenkins can 
automatically run all tests and only promote the code to the production environment if the tests pass.

----

### Interoperability LTI ###

Learning Tools Interoperability (LTI) is a standard created by the IMS Global Learning Consortium that links content and 
to learning platforms.  Its primary purpose is to connect learning systems such as a learning management system (LMS) 
with external service tools in a standard way across learning systems. The standard describes the connecting system as 
an LTI Tool Consumer and the connected tool as an LTI Tool Provider.

With LTI we hope that our MVP prototype can use any LMS  (e.g. Canvas or Moodle) to provide the system for managing 
students, instructors, classes and etc.  The LMS will be configured to communicate with our EdEHR through LTI v1.2 
protocol.  Essentially, this protocol provides a means for the LMS user to access special portions of the EdEHR.  
For example, students can be presented with a set of links to assignments or instructors can have a set of links to 
courses.

----

### Document management, upload ###
Status: Do Later

Multer to support multi-part document uploads

Seperately mounted disk for storage outside of application code space

----

### Authorization ###
Authorization is provided by LMS via LTI

----

### Media Attachments ###
Status: Do Later

Assuming this is not a core requirement for MVP. If  it is a core requirement then look into Kaltura for video content.  This is the tool used in ComPAIR. 

[https://corp.kaltura.com/](https://corp.kaltura.com/)

Also see the BCCampus story about Kaltura

[https://bccampus.ca/2013/05/23/wrangling-videos-in-one-location-just-got-a-lot-easier-with-kaltura/](https://bccampus.ca/2013/05/23/wrangling-videos-in-one-location-just-got-a-lot-easier-with-kaltura/))

----

### Email system ###

Status: Do Later

To be considered after LTI and LMS research.  Perhaps the email function can be provided by the LMS

* Nodemail
* GoogleAPIs
* Flask-Mailer (Python)

----

### Learning Analytics ###

Status: Do Later

- Look at Experience API (xAPI) at [https://xapi.com](https://xapi.com)  Do this after LMS and LTI because the LMS ought to provide analytics.
- Google Analytics. Oh hold pending answers around privacy policies.