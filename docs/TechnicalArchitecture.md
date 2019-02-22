Title: TechnicalRoadmap  
Author: Bryan Gilbert

# Table of Contents  <a id="toc" class="anchor" aria-hidden="true" href="#toc">


* [Introduction](#user-content-introduction)
* [Technical Elements](#user-content-technical-elements)
  * [Application Requirements](#user-content-application-requirements)
  * [Planning & Management](#user-content-planning--management)
  * [Coding](#user-content-coding)
  * [Data storage](#user-content-data-storage)
  * [Installation](#user-content-installation)
  * [Testing](#user-content-testing)
  * [CI CD](#user-content-ci-cd)
  * [Product Systems](#user-content-product-systems)
    * [Interoperability](#user-content-interoperability)
    * [Document management, upload](#user-content-document-management-upload)
    * [Authorization](#user-content-authorization)
    * [Media Attachments](#user-content-media-attachments)
    * [Email system](#user-content-email-system)
    * [Analytics](#user-content-analytics)
 
# Introduction #
<a href="#toc">Top</a>

About the EdEHR project

BCcampus is leading the development of a new educational technology for the classroom in the Educational Electronic Health Record System Project (EdEHR). This project is funded by the Ministry of Advanced Education, Skills and Training and will build on existing research and development completed by an interest group from BCIT, Douglas College, UBC, and UVic.

In support of the requirement for health professional graduates to be competent in using electronic health records in an inter-professional setting, the goal of this project is to develop a solution that can be piloted and evaluated by interested institutions.

<https://bccampus.ca/2018/01/23/bccampus-launches-the-educational-electronic-health-record-system-project-in-b-c/>

Application structure

From a high level view the app has three layers: 

1. Learning Management System 
2. Assignment management system
3. Electronic Health Record system

----

# Technical Elements #
<a href="#toc">Top</a>


----

## Application Requirements ##
<a href="#toc">Top</a>


The following contains assumptions that need to be verified by the team.  
**Institutions**

* Prototype: 1 institution per instance
* Long term:  ditto

**Courses**

•	Prototype:   1 course

•	Long term:  3 - 5 fields of study over 3 - 4 years ( 3 x 3 = 9, 5 x 4 = 20) up to 20 courses.

**Classes**

* Prototype:  1
* Long term:  5

**Students**

* Prototype: 20 - 30 students per class
* Long term: up to 50 students per class

**Summary based on assumptions**

Per instance 

Prototype: 1 institution per instance (perhaps 4-6), 1 course, 1 class, 2-30 students

Long term:  1 institution, 20 courses (over 4 years and 5 fields of study),  up to 5 classes each, up to 50 students in each class.   This does not mean there are 20 x 5 x 50 = 5,000 students in total because the total number of students will be much less.  It may be more like 1,000 students enrolled   across those 20 courses.  

Thus, for example, the prototype needs to support 30 concurrent student users and long term the application may have up to a 1,000 concurrent users.

Browsers

Only support modern browsers

Support screen resolutions of 1024 and up. (i.e. iPads and laptops but not iPhones)

----

## Planning & Management ##
<a href="#toc">Top</a>

Open Source Licensing : GNU Affero General Public License v3.0

Agile tasks - Trello

Use Trello as agile team communication tool.  Put all main high level tasks in Trello as placeholders for future work. Keep these simple as they just illustrate the big picture.  Put all immediate tasks in Trello.  These are small achievable tasks that are planned for the next sprint or two or are actually in progress.  This keeps the Trello board focused on sharing with the team what are current activities and near term plans.

Documentation: Scrivener to Markdown

Use Scrivener for technical documentation. Compile to markdown.  Automated script appends table of contents and places resulting files into the correct location.  E.g Readme.md is placed in the root project folder.  This Technical Architecture document is placed into the docs folder.

Source Control:  Github

Initial repro is located here: <https://github.com/bryan-gilbert/proto-EdEHR>

Will transfer to a BCcampus repro as the project develops

**Branching**

To begin all rough preliminary work will be submitted to the main branch.  Yet, once development is underway all submissions will be made to a development branch.  Testing and stylistic checks will be completed before promotion to the master branch.  Changes on the master branch will be monitored by an instance of Jenkins which will start a build process on a Test server.  The developer’s goal is to not break the build.

Defect tracking: use github

----

## Coding ##
<a href="#toc">Top</a>

Client side UI framework: Vue.js or React. TBD in the begining of October

Javascript ECMA 2016 or better. Use Babel to transpile if necessary.

Coding standards

For Javascript use Javascript Standard. It’s simple, automatic and definitive.

<https://standardjs.com/>

CSS

Bulma CSS framework. It’s simple, 100% responsive, modern and open source. It doesn’t depend on javascript.

* <https://bulma.io/>
* <https://bulma.io/documentation/overview/>

SCSS

Use SCSS rather than SASS because SCSS is a superset of CSS and all CSS content is valid SCSS. While CSS is not valid in SASS files.

<http://sass-lang.com/>

Strive to be DRY so use SCSS variables and mixins when possible

Styleguide for CSS/SCSS

Decision and further research to be done with UX Designer in October

AirBnB is a possible style guide for CSS and SASS <https://github.com/airbnb/css>

Requirements:

* Responsive
* Clean and simple. It’s easier to learn, develop and maintain.
* Good if CSS does not depend on Javascript (separation of concern)

----

## Data storage ##
<a href="#toc">Top</a>

Data storage: MongoDB

License: GNU Affero General Public License, version 3.

Doesn’t require a specialized database administrator.

High-performing for simple queries.

Scalable.

Flexible

Faster development time.

----

## Installation ##
<a href="#toc">Top</a>

Npm install

The system will be built to make installation as simple as:

\`\`\`

git clone

npm install

npm start

\`\`\`

----

## Testing ##
<a href="#toc">Top</a>


Consider BURP for security testing

Consider the following for performance testing

<https://www.blazemeter.com/blog/open-source-load-testing-tools-which-one-should-you-use>

JMeter <https://jmeter.apache.org/usermanual/get-started.html>

Selinium. <https://www.seleniumhq.org/>

BrowserStack. <https://www.browserstack.com/>

<https://www.browserstack.com/pricing>. $29/m

JEST <https://jestjs.io/>

----

## CI CD ##
<a href="#toc">Top</a>

CI CD

Continuous Integration: automated testing as part of the development lifecycle

Continuous Delivery: incrementally add value on a continuous basis.

Linux based OS

Project is not dependent on any particular version of linux. Debian, Ubunto, etc are all fine.

Development Server Hosting

The developer will use Digital Ocean to spin up servers for proof of concepts.

Later, it will be essential to transition to the BCcampus domain.

Production Server

At this time we lack a clear understanding of what performance and space requirements EdEHR has. So, the following specs are open to discussion and further research

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

Docker containerization

It’s desirable to containerize the application for ease of deployment and management but this task will be considered again after proof of concepts are complete.

Automation of testing

Jenkins is a tool for automating a series of steps to take code from the development environment and place it into the production environment. Along the way Jenkins can run automated helper and validation tasks. For example, Jenkins can automatically run all tests and only promote the code to the production environment if the tests pass.

Automation of common tasks

Gulp for misc tasks such as converting Scrivener outout to markdown or converting raw schema information to code.

Webpack for tasks such as Vue/SCSS to HTML/CSS/Javascript

Webpack. <https://webpack.js.org/>

----

## Product Systems ##
<a href="#toc">Top</a>


----

### Interoperability ###
<a href="#toc">Top</a>

LTI

Learning Tools Interoperability (LTI) is a standard created by the IMS Global Learning Consortium that links content and resources to learning platforms.  Its primary purpose is to connect learning systems such as a learning management system (LMS) with external service tools in a standard way across learning systems. The standard describes the connecting system as an LTI Tool Consumer and the connected tool as an LTI Tool Provider.

With LTI we hope that our MVP prototype can use any LMS  (e.g. Canvas or Moodle) to provide the system for managing students, instructors, classes and etc.  The LMS will be configured to communicate with our EdEHR through LTI v1.2 protocol.  Essentially, this protocol provides a means for the LMS user to access special portions of the EdEHR.  For example, students can be presented with a set of links to assignments or instructors can have a set of links to courses.

----

### Document management, upload ###
<a href="#toc">Top</a>


Status: Do Later

Multer to support multi-part document uploads

Seperately mounted disk for storage outside of application code space

----

### Authorization ###
<a href="#toc">Top</a>


Authorization will be provided by LMS via LTI

----

### Media Attachments ###
<a href="#toc">Top</a>


Media Attachments

Assuming this is not a core requirement for MVP. If  it is a core requirement then look into Kaltura for video content.  This is the tool used in ComPAIR. 

<https://corp.kaltura.com/>

Also see the BCCampus story about Kaltura

<https://bccampus.ca/2013/05/23/wrangling-videos-in-one-location-just-got-a-lot-easier-with-kaltura/>

----

### Email system ###
<a href="#toc">Top</a>


Email

Status: Do Later

To be considered after LTI and LMS research.  Perhaps the email function can be provided by the LMS

* Nodemail
* GoogleAPIs
* Flask-Mailer (Python)

----

### Analytics ###
<a href="#toc">Top</a>

Learning Analytics

Look at Experience API (xAPI) at <https://xapi.com>

Do this after LMS and LTI because the LMS ought to provide analytics.

Google Analytics

Oh hold pending answers around privacy policies.