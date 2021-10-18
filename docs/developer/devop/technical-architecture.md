# Technical Architecture

## Application structure ##

The EdEHR experience is broken down into the following three areas:

1. Learning Management System 
2. Assignment Configuration and Management
3. Electronic Health Record

----

# Technical Elements #

## Application Requirements ##

This prototype can support a large number of concurrent users without any special considerations. The main content is static and can be served by highly performant web servers. Each client interaction requires a small number of API calls that provide data retrieval services. Even fewer API calls modify the data. Only the initial LTI API post call is in any way data intensive. 

## Browser Requirements ##
The project assumes support only for modern browsers

Support screen resolutions of 1024 and up. (i.e. iPads and laptops but not iPhones)

----

## Planning & Management ##

Open Source Licensing : GNU Affero General Public License v3.0

Agile tasks: Github

Documentation: Markdown

Source Control: Github git@github.com:edehr/edehr.git or [https://github.com/edehr/edehr.git](https://github.com/edehr/edehr.git)

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
* [https://bulma.io/documentation/overview/(https://bulma.io/documentation/overview/)

SCSS

Use SCSS rather than SASS because SCSS is a superset of CSS and all CSS content is valid SCSS. CSS is not valid in SASS files.

[http://sass-lang.com/](http://sass-lang.com/)

Strive to be DRY. Use SCSS variables and mixins when possible.

Requirements:

* Responsive.
* Clean and simple. It’s easier to learn, develop and maintain.
* Good if CSS does not depend on Javascript (separation of concern).

----

## Data storage ##

Data storage: MongoDB

License: GNU Affero General Public License, version 3.

Doesn’t require a specialized database administrator.

High-performing for simple queries.

Scalable.

Flexible.

Faster development time.

----

## Testing - WIP ##

Consider the following for performance testing:

- BURP for security testing
- [https://www.blazemeter.com/blog/open-source-load-testing-tools-which-one-should-you-use](https://www.blazemeter.com/blog/open-source-load-testing-tools-which-one-should-you-use)
- JMeter [https://jmeter.apache.org/usermanual/get-started.html](https://jmeter.apache.org/usermanual/get-started.html)
- Selinium [https://www.seleniumhq.org/](https://www.seleniumhq.org/)
- BrowserStack [https://www.browserstack.com/](https://www.browserstack.com/)
- [https://www.browserstack.com/pricing](https://www.browserstack.com/pricing). $29/m
- JEST [https://jestjs.io/](https://jestjs.io/)

----

## CI CD ##
- Continuous Integration: automated testing as part of the development lifecycle.
- Continuous Delivery: incrementally add value on a continuous basis.
- Project is not dependent on any particular version of linux. 

## Development Server Hosting

Development is currently running on Digital Ocean server provided by contractor. Goal is to port to a BCcampuse server for initial prototype assessment with stakeholders. Long term objective is to host EdEHR on non-BCcampus servers.

Test environment

* 2 - 4 GB RAM per core
* 2 - 4 cores (to allow testing of application scaled to match production
* Standard hard drive, 10-20 GB free
* Network connectivity

Production

* 4 Cores
* 4 GB RAM per core
* Standard hard drive, 50-100 GB free
* Network connectivity

### Docker containerization

This project has containerize access to the database and may still containerize access to the server API.

### Automation of testing

Instead of Jenkins this project will look to use GitHub actions for automated tasks such as running static code tools and unit tests.

### Interoperability LTI ###

Learning Tools Interoperability (LTI) is a standard created by the IMS Global Learning Consortium that links content to learning platforms. Its primary purpose is to connect learning systems such as a learning management system (LMS) with external service tools in a standard way across learning systems. The standard describes the connecting system as an LTI Tool Consumer and the connected tool as an LTI Tool Provider.

With LTI found that our MVP prototype could be used by any LMS (e.g. Canvas or Moodle).  The LMS provides the system for managing 
students, instructors, classes and etc. The LMS is configured to communicate with our EdEHR through LTI v1.2 
protocol. Essentially, this protocol provides a means for the LMS user to access special portions of the EdEHR. For example, students can be presented with a set of links to assignments or instructors can have a set of links to 
courses.

----

### Document management, upload ###
Status: Do Later

Multer to support multi-part document uploads

Separate mounted disk for storage outside of application code space

There is no provision to store documents for users.  We are considering storing documents per seed to augment the 
seed data.  The EdEHR does provide documents as static resources both in the client and server. 

### Authorization ###

Authorization is provided by LMS via LTI.  We are considering adding a demo mode.

----

### Media Attachments ###
Status: Do Later

Assuming this is not a core requirement for MVP. If it is a core requirement then look into Kaltura for video content.
This is the tool used in ComPAIR. 

[https://corp.kaltura.com/](https://corp.kaltura.com/)

Also see the [BCcampus story](https://bccampus.ca/2013/05/23/wrangling-videos-in-one-location-just-got-a-lot-easier-with-kaltura/) about Kaltura

----

### Email system ###

There is no immediate need to send or handle emails from the EdEHR.  Yet we may use email as a means to grant access to
a demonstraction version. 

Considered the following:
* Nodemail
* GoogleAPIs
* Flask-Mailer (Python)

Will use []SendGrid](https://sendgrid.com/)

### Learning Analytics ###

Status: Do Later

- Look at Experience API (xAPI) at [https://xapi.com](https://xapi.com). Do this after LMS and LTI because the LMS ought to provide analytics.
- Google Analytics. On hold pending answers around privacy policies.