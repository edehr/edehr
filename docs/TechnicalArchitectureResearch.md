Title: TechnicalRoadmap  
Author: Bryan Gilbert

# Table of Contents  <a id="toc" class="anchor" aria-hidden="true" href="#toc">


* [Introduction](#user-content-introduction)
* [Technical Elements](#user-content-technical-elements)
  * [Application Requirements](#user-content-application-requirements)
  * [Planning & Management](#user-content-planning--management)
    * [Open Source](#user-content-open-source)
    * [Agile](#user-content-agile)
    * [Defect tracking](#user-content-defect-tracking)
    * [Source Control](#user-content-source-control)
  * [Coding](#user-content-coding)
    * [Client side code](#user-content-client-side-code)
      * [Generators](#user-content-generators)
    * [Server side code](#user-content-server-side-code)
    * [Code Standards and Linting](#user-content-code-standards-and-linting)
    * [CSS](#user-content-css)
  * [Data storage](#user-content-data-storage)
    * [Database - Application](#user-content-database--application)
  * [Installation](#user-content-installation)
  * [Testing](#user-content-testing)
    * [Testing Security](#user-content-testing-security)
    * [Testing UI](#user-content-testing-ui)
    * [Testing Server Side](#user-content-testing-server-side)
  * [CI CD](#user-content-ci-cd)
    * [Deployment Environments](#user-content-deployment-environments)
    * [Docker](#user-content-docker)
    * [Jenkins](#user-content-jenkins)
    * [Task runners](#user-content-task-runners)
  * [Product Systems](#user-content-product-systems)
    * [Interoperability](#user-content-interoperability)
    * [Document management, upload](#user-content-document-management-upload)
    * [Authorization](#user-content-authorization)
    * [Media Attachments](#user-content-media-attachments)
    * [Email system](#user-content-email-system)
    * [Analytics](#user-content-analytics)
 
# Introduction #
<a href="#toc">Top</a>


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

Status: Pending information

The MVP needs to support four institutions with a possibility of adding in two more.  

How many institutions in total will a single instance need to support?

What is the long term goals?  For example would each institution have run their own instance of the application.  Or is there to be one instance for the world.

**Recommendation:**  The application should be simple enough to be hosted at each individual institution.

This simplifies issues around privacy and it simplifies the performance requirements and database schema and more.  Accepting this recommendation will remove some project risk. 

**Assumptions**

* Prototype: 1 institution per instance
* Long term:  ditto

**Courses**

Status: Pending information

How many courses might this application be expected to support for the prototype stage?  For the long term?

**Assumption:** prototype stage has one course.

Beyond that the application may be extended, if further case studies are developed, to extend to many courses in one field of study.

Beyond that the application may be extended to support more than one field of study (e.g. doctor vs nurse vs specialist vs etc.)

**Assumptions**

•	Prototype:   1 course

•	Long term:  3 - 5 fields of study over 3 - 4 years ( 3 x 3 = 9, 5 x 4 = 20) up to 20 courses.

**Classes**

Status: Pending information

Within a course how many classes might there be? 

**Assumptions** 

* Prototype:  1
* Long term:  5

**Students**

Status: Pending information

How may students are typically in a class?

**Assumptions**

* Prototype: 20 - 30 students per class
* Long term: up to 50 students per class

**Summary based on assumptions**

Status: Pending information

Per instance 

Prototype: 1 institution per instance (perhaps 4-6), 1 course, 1 class, 2-30 students

Long term:  1 institution, 20 courses (over 4 years and 5 fields of study),  up to 5 classes each, up to 50 students in each class.   This does not mean there are 20 x 5 x 50 = 5,000 students in total because the total number of students will be much less.  It may be more like 1,000 students enrolled   across those 20 courses.  

Thus, for example, the prototype needs to support 30 concurrent student users and long term the application may have up to a 1,000 concurrent users.

Old Browsers and project risk

Status: Pending information

***If support for non-modern browsers is required then this will introduce significant risks both in terms of the ability to test them and significant risk in development time.  Stakeholders need to know that a decisionm to support non-modern browsers means other features are at risk of not being “done”.  It is a strong recomendation to exclude non-modern browsers from the MVP.***

Here is a general description of what a modern browser:

<https://stackoverflow.com/questions/50829693/what-is-a-modern-browser>

We might include a feature to warn users if they have an outdated browser.

<https://www.npmjs.com/package/outdated-browser-rework>

Here are the suggested default minimum versions as used by the above plugin. Note that IE is not included.

* Chrome: 57, // Includes Chrome for mobile devices
* Edge: 39,
* Safari: 10,
* Mobile Safari: 10,
* Firefox: 50,
* Opera: 50,
* Vivaldi: 1,
* IE: false
* // You could specify a version here if you still support IE in 2017.
* // You could also instead seriously consider what youre doing with your time and budget

----

## Planning & Management ##
<a href="#toc">Top</a>


----

### Open Source ###
<a href="#toc">Top</a>

**Open Source Licensing**

Status: Pending information

Open Source is a primary requirement for every aspect of this project

From <https://opensource.org/licenses> 

*The following OSI-approved licenses are popular, widely used, or have strong communities:*

* Apache License 2.0
* BSD 3-Clause "New" or "Revised" license
* BSD 2-Clause "Simplified" or "FreeBSD" license
* GNU General Public License (GPL)
* GNU Library or "Lesser" General Public License (LGPL)
* MIT license
* Mozilla Public License 2.0
* Common Development and Distribution License
* Eclipse Public License

<https://en.wikipedia.org/wiki/Comparison_of_free_and_open-source_software_licenses>

GNU General Public License Version 3, 29 June 2007. (GNU GPLv3)

<https://choosealicense.com/licenses/gpl-3.0/>

GNU Affero General Public License v3.0

<https://choosealicense.com/licenses/agpl-3.0/>

*The GNU Affero General Public License is a modified version of the ordinary GNU GPL version 3. It has one added requirement: if you run a modified program on a server and let other users communicate with it there, your server must also allow them to download the source code corresponding to the modified version running there.*

<https://www.gnu.org/licenses/why-affero-gpl.html>

**Recommendation**

The GNU Affero seems to fit the intention of BCCampas’s mandate to provide open source educational tools and promote the development of more open source tools.  

*  <https://bccampus.ca/2018/05/08/copyright-and-open-licences-an-excerpt-from-the-bccampus-open-education-self-publishing-guide/>

*  <https://bccampus.ca/2013/04/02/walking-the-talk-open-resources-at-rru/>

**Recommendation:** GNU Affero General Public License v3.0

BC gov resource:

Status: Do Later

https://github.com/bcgov/BC-Policy-Framework-For-GitHub/tree/master/BC-Open-Source-Development-Employee-Guide

and specifically (with a couple of useful decision trees): 

https://github.com/bcgov/BC-Policy-Framework-For-GitHub/blob/master/BC-Open-Source-Development-Employee-Guide/Licenses.md 

The implications of the licenses of the tools we use in the product must be respected/compatible when making decisions on how to license the EdEHR.  Here's an example from the open text book project.

https://github.com/BCcampus/opentextbooks/blob/dev/README.md#copyright-and-license

Dave is researching the license issue.

----

### Agile ###
<a href="#toc">Top</a>

**Requirements**

Agile planning needs to capture “stuff to do” in a place that can “backlog” or “park” the task until it is time to work on the task.  

Before a task can be started it must be the “right size”. Normally, this means it is a task that can be accomplished in a timeframe that is short enough that the doer doesn’t get distracted. I.e. a time period of a ‘day’ is big. Perhaps two or three days but not more. Ideally, it’s a task that can be DONE in a few hours.

The project contains many big tasks that need to be decomposed into smaller, achievable and understandable tasks.  This break down does happens just in time for the work to begin.

The project planning tool needs to allow the composition and ordering of both “big items” and the smaller items; quickly and efficiently.  The tool needs to let the user get everything written down quickly so they can save the thought (park it or back log it) until the time is right to work.  And then get back to work.

**Scrivener**

Scrivener is a tool that allows one to describe the forest and fly into the forest and visit a few trees and dive in further and visit a branch of a tree and go further and visit the bugs on the leaf of a branch of a tree in the forest and then quickly move back out to see the big picture again.

**Recommendation:** Use Scrivener as the main organizing tool because it is great for composing technical specifications and technical roadmap.  Scrivener is also the best place to manage the complex backlog of tasks allowing grouping, nesting, filtering and more.  Periodically, export a complete version of the overall project backlog with all the details. 

<http://www.literatureandlatte.com/forum/viewtopic.php?t=50214>

As key tasks and immediate tasks emerge move them to Trello

**Trello**

Trello.com is good at capturing ideas but it doesn’t help to structure the big, medium and small picture. In Trello everything is the same: a card. It can be augmented with a colour or label and with several mouse clicks it is possible to filter, yet it doesn’t help to quickly organize a very large conceptual framework and move around to explore nuances and details while retaining the big picture.

**Recommendation:** Use Trello as a team communication tool. 

Put all main high level tasks in Trello as placeholders for future work. Keep these simple as they just illustrate the big picture. 

Put all immediate tasks in Trello.  These are small achievable tasks that are planned for the next sprint or two or are actually in progress.  This keeps the Trello board focused on sharing with the team what are current activities and near term plans.

----

### Defect tracking ###
<a href="#toc">Top</a>


**Defect Tracking Requirements**

Defect tracking tool needs to allow the team to add, edit, comment, and resolve issues as the prototype evolves and for when it is in place.  The tool ought to be suitable for non-technical users to resolve issues.

We can look into JIRA or to keep it simple let’s just use the issue tracking in github.

**Recommendation**: Github

----

### Source Control ###
<a href="#toc">Top</a>

**Git Github**

EdEHR will use Git and Github because it is the industry standard and fits the project charter requirement to be open source.

I have started a repro here: <https://github.com/bryan-gilbert/proto-EdEHR>

**Branching**

To begin all rough preliminary work will be submitted to the main branch.  Yet, once development is underway all submissions will be made to a development branch.  Testing and stylistic checks will be completed before promotion to the master branch.  Changes on the master branch will be monitored by an instance of Jenkins which will start a build process on a Test server.  The developer’s goal is to not break the build.

**Question**: Does BCcampus have a repro?

----

## Coding ##
<a href="#toc">Top</a>


----

### Client side code ###
<a href="#toc">Top</a>

Client side coding language, for in the browser, is Javascript. There is no other choice.

----

#### Generators ####
<a href="#toc">Top</a>

**Server side generation for client side**

This section pertains to the code written for the client side (the UI).  For example, if the pages are generated on the server (e.g. PhP) or transpiled into static web resources (React, Vue, etc). Simply put:  choose between server side generation or static resources with web services. 

The current trend in the industry to away from server side generation.  It is still the dominate form of delivery because of the popularity and longevity of PhP yet new projects are opting to go the static resource direction.  One reason for this direction is it promotes a clear division between what is served to the UI and what services the server provides (which are being reduced to small, lean and efficient micro-services that are targeted to a single task such as fetching data or updating the database). Browsers are also more efficient at caching static resources and this makes the web applications more responsive. Another term for this approach is Single Page Applications (SPA).

For these reasons and many more it is recommended that EdEHR uses static resources and web services.

**Recommendation**: choose a framework such as React, Angular, Vue or ... (all of which are open source) and skip PhP.

**EdEHR Requirements:**

* Flexible and easy to adapt (to suit project timeline)
* Easy to learn (to suit project timeline and attract long term development)
* Documentation: clear, available, consistent
* Supports single page applications.
* Code Style:  How readable and intuitive is the code and conventions of the framework?
* Single File Components: How intuitive is maintaining a component in the framework?
* License: open
* Performance:  How performant are apps built with the framework?
* Tooling: What tools and stable plugins are available for the framework?
* Routing (click to next ‘page’ in app with back button history)
* State management (track what stage of a process the user is at)
* API calls to server
* Mobile:  Does it offer a way to build native mobile applications?
* Community: What is the size of the community and is it united or fragmented?
* Maturity: How mature is the framework? Is it production-tested?
* Support: How big is the team behind the framework?
* Hiring Talent: How easy would it be to hire developers with prior experience in the framework?
* Future: how are updates handled?

**Angular**

<https://en.wikipedia.org/wiki/Angular_(application_platform)>

Angular is supported by Google and a large open source community. There are two main flavors: Angular and AngularJS.  The latter is the older version and is sometimes called Angular 1.x.  The former is the newer rewrite and for a time was called Angular 2.0.   There is no point considering AngularJS for a new project because Angular is far superior. That said, Angular is a framework suited to large projects with many team members because it provides a lot of features and supports the complexity in these types of projects.  

* Flexible: no
* Easy to learn: know to have a steep learning curve
* Documentation: yes
* Supports single page applications:  yes
* Code Style:  Complex
* Single File Components: no
* License: MIT
* Performance:  Reasonable
* Tooling:  Yes
* Routing (click to next ‘page’ in app with back button history): yes
* State management (track what stage of a process the user is at): yes
* Mobile:  Not sure.
* Community:  Large and well established
* Maturity:  Hard to say because Angular is such a radical change from AngularJS. No’ish
* Support:  Google
* Hiring Talent:  Yes
* Future:  not sure

<https://medium.com/fundbox-engineering/react-vs-vue-vs-angular-163f1ae7be56>

*Angular grew to become a big framework that can be helpful in building complex systems but is less useful for building startup fast-changing UIs. React and Vue are more light-weight, and components are meant to be small, autonomous, encapsulated, hence --- easily reusable. If we were to develop a new infrastructure from scratch (and not needing to migrate from an existing one), we could have been considering Angular too. In our case, it didn’t fit.*

**EdEHR recommendation: skip Angular**

**React**

React is supported by Facebook and has a large open source community.  It is definitely the most popular framework.

References: 

<https://en.wikipedia.org/wiki/React_(JavaScript_library)>

<https://blog.techmagic.co/reactjs-vs-angular5-vs-vue-js-what-to-choose-in-2018/>

<https://medium.com/fundbox-engineering/react-vs-vue-vs-angular-163f1ae7be56>

Companies that use ReactJS: Facebook, Instagram, Netflix, New York Times, Yahoo, Khan Academy, Whatsapp, Codecademy, Dropbox, Airbnb, Asana, Atlassian, Intercom, Microsoft.

**EdEHR requirements**:  *(quotes from above sources in italics)*

* Flexible: yes
* Easy to learn: easier than Angular yet takes a long time to master.  “*React requires to (sic) learn a lot to become an expert. Would require much more time to train devs. Deliver slower (at least for the initial heavy lifting).”*
* Documentation:  *Lack of official documentation --- super-fast development of ReactJS leaves no place for the proper documentation which is a bit chaotic now as many developers contribute it individually without any systematic approach;*
* Supports single page applications: Yes
* Code Style:  Clean yet developers sometimes have too much choice; sometimes difficult to separate code between back end and front end
* Single File Components:  Yes, nicely
* License: MIT. (There is an interesting story to read about how Facebook released React with a series of different open source licenses that caused a lot of controversy. <https://en.wikipedia.org/wiki/React_(JavaScript_library)#Licensing_controversy>  Now, React is released under the very permissive MIT license.)
* Performance:  Yes
* Tooling:  Yes
* Routing: Needs plugin (which one to pick?)
* State management: not sure
* API: Yes
* Mobile:  Web and mobile apps can share some code.
* Community: Large yet fragmented
* Maturity:  Industry standard.
* Support: Yes
* Hiring Talent: Yes
* Future:  Facebook provides  “codemods” to automate much of the upgrade process.

**Vue**

Vue.js is a JavaScript framework, launched in 2013, which perfectly fits for creating highly adaptable user interfaces and sophisticated Single-page applications.

Resources

<https://medium.com/@TechMagic/reactjs-vs-angular5-vs-vue-js-what-to-choose-in-2018-b91e028fa91d>

<https://vuejs.org/v2/guide/comparison.html>

<https://medium.com/fundbox-engineering/react-vs-vue-vs-angular-163f1ae7be56>

Companies that use Vue.js: Xiaomi, Alibaba, WizzAir, EuroNews, Grammarly, Gitlab and Laracasts, Adobe, Behance, Codeship, Reuters.

**EdEHR requirements**:  *(quotes from above sources in italics)*

* Flexible:  Yes
* Easy to learn: Yes *fast ramp up*
* Documentation:  *Detailed documentation. Vue.js has very circumstantial documentation which can fasten learning curve for developers and save a lot of time to develop an app using only the basic knowledge of HTML and JavaScript.*  Yet another source says:  *Lack of full English documentation. This leads to a partial complexity on some stages of development, nevertheless, more and more materials are being translated into English.*
* Supports single page applications.
* Code Style: 
* Single File Components:  *Vue.js can be used for both building single-page applications and more difficult web interfaces of apps. The main thing is that smaller interactive parts can be easily integrated into the existing infrastructure with no negative effect on the entire system.*
* License: open
* Performance:  *Tiny size. Vue.js can weight around 20KB keeping its speed and flexibility that allows reaching much better performance in comparison to other frameworks.*
* Tooling: *Awesome integration.*  Another source says:  *Fewer plugins and tools available, smaller community.*
* Routing: *Vue’s core modules (Vuex, Router, etc.) are built-in and work fantastic.*
* State management: yes
* API: yes
* Mobile:  Vue Native and Capacitor are solutions to produce mobile targeted apps
* Community:  Growing
* Maturity: *Vue.js still has a pretty small market share in comparison with React or Angular, which means that knowledge sharing in this framework is still in the beginning phase.*
* Support: Smaller 
* Hiring Talent:  growing but not easy at this time
* Future: how are updates handled?

* *Large scaling. Vue.js can help to develop pretty large reusable templates that can be made with no extra time allocated for that according to its simple structure.*
* *Better promotes Full-Stack culture; allows cross-product development.*
* *Not being React, devs don’t gain experience with the most popular framework today.*

**Recommendation**

Resources

<https://medium.com/@TechMagic/reactjs-vs-angular5-vs-vue-js-what-to-choose-in-2018-b91e028fa91d>

<https://expertise.jetruby.com/react-vs-vue-js-which-front-end-framework-to-choose-in-2018-2a62a1fe76f9>

**Advantages of Vue.JS:**

* Flexibility, Simplicity, Fast rendering and small size.
* Soup to nuts framework
* Easier to learn and get started

**Advantages of React:**

* Perfectly fits scalable apps, easier to test and maintain;
* Can be used for native and web apps;
* Huge ecosystem;
* A big set of tools.

**Common Advantages**

* Fast rendering with Virtual DOM;
* Small size;
* Reactive components;
* The ability to easily integrate with routers, collectors, and state managers;
* A-class maintenance.

Quote:  [Laurie Voss, co-founder and COO of npm](https://jaxenter.com/javascript-report-interview-voss-140202.html)

*From my perspective, there are two factors driving Vue’s growth.*  
 *First, lots of developers still want a “soup to nuts” framework, i.e. one that does everything from routing to templating to back-end data fetching. Vue does this, which tends to make it easier for a first-time developer to pick up since they just make one choice: use Vue, and all the other choices are made for them.*

*React, on the other hand, requires making lots of additional choices about routing and data management libraries, which makes it more intimidating and slower to get started with. So Angular, Ember and Vue all have this “all-inclusive” advantage over React.*

*Second, if you’ve decided you want an all-inclusive framework, Vue performs better in benchmarks and is relatively easier to learn. Although these things are subjective, devs often report that it feels “cleaner” or “simpler” than older frameworks like Angular and Ember.*

**Summary for EdEHR**

* Flexible: either
* Easy to learn: Vue over React
* Documentation: Vue
* Code Style:  Either
* Single File Components:  Slight edge to Vue
* License: Both are MIT
* Performance:  Either
* Tooling:  Edge to React yet Vue has essentials built in making it easier to get started
* Routing: built into Vue
* State management: built into Vue
* API: Either
* Mobile:  React
* Community:  React yet it is fragmented. Vue is smaller and more cohesive and therefore consitent (read less ambiguity about how to do something. Less time trying out varoius options and then deciding and then developing.)
* Maturity:  React has edge
* Support: React community is larger yet support for either is available
* Hiring Talent:  React has edge, for now.

For a new project with no legacy and a developer team that has equal experience with both frameworks (read experienced newbie) it’s a good time to be taking the new lean simple fast approach: vue.js.

----

### Server side code ###
<a href="#toc">Top</a>

**Requirements**

* Support for Single Page Applications, Mobile Computing and Browsers (DSL support)
* Industry standard. 
* Suitable for prototyping. This is a huge project with a very short timeline. 
* Dynamically typed with option to add datatypes when working with the database. 
* Not verbose.  Language should favour clean and easy to read coding
* Large community of developers to support this project in the future.
* Modular (Separation of Concern).  Isolation of functionality is essential for stability. Once a component/module is ready and tested it should not be necessary to touch it again to adjust some other feature.
* Testable.
* Ideally use the same language for web, server and in between.
* What is the developer best at? The team developer is most familiar with Javascript (Node JS) and is interested in working more with Python.

The contenders are:  Python, Javascript (Node JS), PhP, Go, and Ruby.  This analysis will not look too deeply into Go or Ruby because the former is too new and Ruby’s popularity *may* be diminishing. <https://getpocket.com/a/read/2153732617>

**PhP**

PhP is the industry standard having been around for over two decades. Yet it is known for its verbosity and difficulty to be modular.

**PhP Pros:**

* Rich code base
* Portable
* Designed to generate web pages

**PhP Cons:**
* Inefficient separation of concerns (modularity)
* Outdated client server model (not SPA)
* Different language than used on the client side.

Not the best choice for EdEHR

**Python**

**Python Pros:**

* Readable and dynamically-typed language
* High functionality
* Rich native library support
* Shorter code compared to similar object-oriented languages
* Fast development due to concise and simple syntax

**Python Cons:**

* Absence from Mobile Computing and Browsers
* Lack of Support for DSLs (Domain-specific Languages)
* Steep learning curve
* Runtime speed slow

Could be a choice for EdEHR yet it would introduce risk as the developer is not expert in this language.

**Javascript and Node.js**

“Unlike PHP, Node.js is not a language, but a runtime environment that uses JavaScript for the server-side application development. Launched in 2009, Node.js has demonstrated the power of JavaScript in building event-based, data-driven, I/O-heavy applications for the Web 2.0 era.” <https://www.netguru.co/blog/nodejs-vs-php>

**Javascript and Node.js Pros:**

* Support for Single Page Applications, Mobile Computing and Browsers (DSL support)
* Industry standard. 
* Suitable for prototyping
* Dynamically typed with option to add datatypes when working with the database. 
* Medium verbosity.
* Large community of developers.
* Modular (Separation of Concern)
* Testable.
* One language across the full stack
* What is the developer best at?
* Fast server side
* Portable

**Javascript and Node.js Cons:**

Less efficient at handling CPU intensive applications. (This is not a requrement for EdEHR)

JavaScript and Node.js are not quite as extensible as Python.

Use Javascript ECMA 2016 or better.

----

### Code Standards and Linting ###
<a href="#toc">Top</a>


As every language, JavaScript has many code style guides.  Consider the following.  
Google Javascript Standard for ECMA 6^th^ edition

<https://google.github.io/styleguide/jsguide.html>

“A JavaScript source file is described as being in Google Style if and only if it adheres to the rules herein”

Idomatic.js

*All code in any code-base should look like a single person typed it, no matter how many people contributed.*

<https://github.com/rwaldron/idiomatic.js>

A useful snippet to consider.

*Projects must include some form of unit, reference, implementation or functional testing. Use case demos DO NOT QUALIFY as "tests". The following is a list of test frameworks, none of which are endorsed more than the other.*

* QUnit
* Jasmine
* Vows
* Mocha
* Hiro
* JsTestDriver
* Buster.js
* Sinon.js
* Tape

AirBnB Style Guide

Perhaps the most popular style guide is <https://github.com/airbnb/javascript>

*A mostly reasonable approach to JavaScript*

*Note: this guide assumes you are using Babel, and requires that you use babel-preset-airbnb or the equivalent. It also assumes you are installing shims/polyfills in your app, with airbnb-browser-shims or the equivalent.*

JavaScript Standard Style Guide. <https://github.com/standard/standard>

*JavaScript style guide, with linter & automatic code fixer. No configuration. Automatically format code. Catch style issues & programmer errors early.*

*This style guide is used by many tech companies including NPM, GitHub, mongoDB, and ZenDesk.*

To add a badge to the project readme include this markup

\`\`\`

\[!\[JavaScript Style Guide\](https://cdn.rawgit.com/standard/standard/master/badge.svg)\](https://github.com/standard/standard)

\`\`\`

\[!\[JavaScript Style Guide\](https://cdn.rawgit.com/standard/standard/master/badge.svg)\](https://github.com/standard/standard)

EdEHR will use Javascript Standard because it’s simple, automatice and just works.  End of debate means we can get coding ;-)

That said we may cherry pick guidelines from the other style guides as we go.    (<http://jstherightway.org>)

----

### CSS ###
<a href="#toc">Top</a>

**Styleguide for CSS SASS**

**October**

Decision and further research to be done with UX Designer in October

AirBnB is a possible style guide for CSS and SASS <https://github.com/airbnb/css>

Requirements:

* Responsive
* Clean and simple. It’s easier to learn, develop and maintain.
* Good if CSS does not depend on Javascript (separation of concern)

**Frameworks**

Dev and UX Designer agree to start using the Bulma CSS framework.  We chose Bulma for its simplicity hoping it supports rapid development.  

Resources

* <https://bulma.io/>
* <https://bulma.io/documentation/overview/>

Advantages
* Bulma is an open source CSS framework based on Flexbox and used by more than 100,000 developers.
* It is responsive, modular, modern and free.
* The simplist grid system
* A growing community
* So easy to learn
* So quick to customize
* Fullscreen vertical centering

----

## Data storage ##
<a href="#toc">Top</a>


----

### Database - Application ###
<a href="#toc">Top</a>

**Requirements for EdEHR databases**

**WIP**

* Flexible: because this is a rapid development prototype project it is essential that we can easily augment and change the schema without spending a lot of time on writing transformation scripts or working with transformation tooling. 
* Strongly typed and validation support to ensure the data in the database is valid.
* Rapidly convert data to and from code. (Transfer of data to and from the “objects” used in software.)
* Store data in easy for humans to understand format.
* Scalable
* Community Support
* Open Source

**Relational vs non-relational databases** (RDMS  vs NoSQL)

**WIP**

Before deciding on which database system to use (MySQL, MariaDB, PostgreSQL, MongoDB) we ought to select the type of database system to use.  As you will see, the clear answer for EdEHR is to select MongoDB with Mongoose.

Relational SQL databases (RDMS) store data in tables (like a spreadsheet) and the relationships are made by storing a piece of data in one table to say ‘go look in row X of this other table’.  RDMS are the dominant database system, for sure.  They are the better option for applications that require multi-row transactions - such as an accounting system - or for legacy systems that were built for a relational structure. 

Non-relational databases (NoSQL), like MongoDB, are better for prototyping and rapid development because they organize data into JSON documents. JSON is a format that is easy for humans to read and easy for machines to use.  JSON documents are flexible, unlike a RDMSwhere the table columns are fixed in size and type.  With MongoDB and JSON new fields can be added at any time so it can store unstructured data such as user logs, real-time analytics, content management systems, sessions, images, videos, chats and also data from IoT devices.

It is possible to add structure (schema) to a MongoDB system by using a layer like Mongoose. Yet during early development it’s good to take advantage of the dynamic schema because it gives you flexibility to change your data schema without modifying any of your existing data.

MongoDB License: GNU Affero General Public License, version 3.

Manageability: MongoDB doesn’t require a specialized database administrator. Since it is fairly user-friendly in this way, it can be used by both developers and administrators.

Speed: It’s high-performing for simple queries.

Scalability: It is difficult to increase the size of a RDMS because of the table structure. It’s just plain hard to split the table across many servers.  NoSQL databases are easily split so they are the preferred choice for large or every changing data sets.

*Flexibility- Firstly, the document structure is more in line with how developers code in their respective programming languages which is clear and structured in key-value pairs. This makes it easier to add and edit data/documents at any time. In a relational database, this would involve the database having to be restructured*

*Supports a wide range of queries -- fields, expressions, range queries, JavaScript functions and more*

*Faster turnaround time-because related data which would be stored across several tables in a MySQL database are stored in the same document in a MongoDB*

*No strict schemas followed-you are allowed to create a document first before defining the structure of the document, making it very helpful for businesses who in a start-up phase who are unsure of what their database structure should look like*

*Like we mentioned, MongoDB’s features make it better suited to those who handle huge volumes of data*

*Many today consider RDMS to be unable to meet the expectations from today’s data-intensive applications.  <https://blog.resellerclub.com/mongodb-vs-mysql-comparison/>*

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


Look to work out the requirements of the testing system after some other questions that have project risk are answered.  In other words, let’s get some answers to those risky issues and then come back to stuff that is relatively straight forward, although important

----

### Testing Security ###
<a href="#toc">Top</a>


Status: In Progress  
BURP suite security testing

----

### Testing UI ###
<a href="#toc">Top</a>


Status: In Progress

Performance testing

Status: In Progress

*By the way, if you were hoping I could point you to a generic industry standard for good and bad performance, you’re out of luck because no such guide exists. There have been various informal attempts to define a standard, particularly for browser-based applications.*

*<https://sqa.stackexchange.com/questions/15296/performance-requirements-for-web-application>*

Here are two sources of information to consider later.

**Open Source Load Testing Tools: Which One Should You Use?**

<https://www.blazemeter.com/blog/open-source-load-testing-tools-which-one-should-you-use>

**JMeter**

<https://jmeter.apache.org/usermanual/get-started.html>

----

### Testing Server Side ###
<a href="#toc">Top</a>


Status: In Progress

Must implement automated testing for server side and ideally client side code.  This is expensive to do but invaluable in later stages of development.  Acknowledge that 100% coverage is not possible so testing, inherently, has trade-offs.  Testing the core functionality along with all edge cases that surfaced as defects should be considered core.  This at least provides confidence if at some later stage we need to refactor or adjust code that is new the core functionality.  

As defects arise try to first create a test script to replicate the defect.  TDD

BDD Behavior Driven Development is appropriate for the core functionality because it is directly connected with actual user behaviors (e.g. use cases) and is more comprehensive than a series of units tests (Test Drive Development).

BDD and TDD are the same, in that both require the developer to compose the test first. The test fails until the development is complete.

Testing is related to the topic of Automated Testing 

For http testing consider supertest <https://www.npmjs.com/package/supertest>

----

## CI CD ##
<a href="#toc">Top</a>


Look to work out the requirements of the CI CD system after some other questions that have project risk are answered.  In other words, let’s get some answers to those risky issues and then come back to stuff that is relatively straight forward, although important

Continuous Integration: automated testing as part of the development lifecycle

Continuous Delivery: incrementally add value on a continuous basis.

----

### Deployment Environments ###
<a href="#toc">Top</a>

Linux based

We will not be tied to any particular version of linux. Debian, Ubunto, etc are all fine.

Digital Ocean for pre-dev

I have an account and use Digital Ocean to spin up servers for my business.  I propose to use this service during early development to save time and energy worrying about how to get going.

Later, it will be essential to transition to the hosting domain where the prottype will reside.

Production Server

SFU will be hosting the prototype.  Later we can learn how they will allocating the servers and what limitations they may impose.   At this time we lack a clear understanding of what performance and space requirements EdEHR has.

These specs are open to discussion and further research

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

----

### Docker ###
<a href="#toc">Top</a>


**WIP**  
Docker containerization

**October**

ToDo: describe the benefits and reasons for considering Docker

For the immediate term:  postpone further work on Docker because it can be considered later in the project timeline.  It’s main benefit is to allow for the application to be scalled up when needed.  As we are building a prototype it is not essential to be ready to scale.

----

### Jenkins ###
<a href="#toc">Top</a>


**WIP**  
Jenkins

**October**

Jenkins is a tool for automating a series of steps to take code from the development environment and place it into the production environment. Along the way Jenkins can run automated helper and validation tasks. For example, Jenkins can automatically run all tests and only promote the code to the production environment if the tests pass.

We’ll delay further investigation into the needs around Jenkins until mid-October.

----

### Task runners ###
<a href="#toc">Top</a>


* During development it is optimal to automate serval tasks. Including:
* SASS to CSS
* CSS to minified CSS for optimal page loading and caching
* Javascript to minified JS for optimal page loading and caching
* Transpiling React or Vue into HTML, CSS, JS
* Etc

There are three main contenders: Grunt, Gulp and WebPack.   EdEHR will use WebPack because it provides a superset of the features in Grunt and Gulp; it’s configuration is reasonable; it provides a “hot” deploy (meaning a change in code is immediately sent to the browser for viewing which speeds up development)

Webpack. <https://webpack.js.org/>

*Webpack is an open-source JavaScript module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset. Webpack takes modules with dependencies and generates static assets representing those modules.* <https://en.wikipedia.org/wiki/Webpack>

----

## Product Systems ##
<a href="#toc">Top</a>


----

### Interoperability ###
<a href="#toc">Top</a>


  
**LTI Consumer and Provider**	

The EdEHR requirements include a large number of features that are common to learning management systems (LMS). Systems such as Moodle, Canvas, and Blackboard to mention just three of dozens. It makes sense for this project to consider using a LMS to provide the basic learning management functionality. For example, managing personal information about students and teachers; courses; class lists; grades; etc.

The way to use an LMS as the “front end” is via Learning Tools Interoperability or LTI.  LTI is managed by IMS Global.  <https://www.imsglobal.org/activity/learning-tools-interoperability>

**Terms**

TP or Tool Provider is the courseware. If EdEHR adopts LTI then it will be a provider. 

TC or Tool Consumer is the LMS

Tool Proxy (will not use TP for this) is the link between a TC and TP. See LTI 2.0 below.

**LTI versions**

LTI 1.0 and 1.1 provide basic connection between the TC and TP

LTI 2.0 allows a TC and TP to establish a trust relationship by sharing information with each other.  This TC/TP relationship is required for Moodle to create a system wide global link to a TP.  This is called a “External Tool” in Moodle.  It is called a Tool Proxy in LTI.   IMS says that LTI 2.0 is obsolete although it is supported by many LMS and is the method commonly used to establish this TC/TP Tool Proxy. 

LTI 1.3 is the newest form of the spec and was created to deal with security issues that could not be implemented in LTI 2.0.

LTI Advantage appears to be a layer on top of LTI 1.3 that provides links to other IMS/LTI specs such as Deep Linking, Names and Roles Provisioning, Assignment and Grades, etc.

**System wide External Tool in Moodle**

When a TP is configured in the site administration section it becomes available to anyone who manages courses or assignment creations.  An instructor can easily add a new activity to any course and select the preconfigured external tool.  The alternative, without the system wide configuration, requires the instructor to know the exact url to use to reach the correct content inside the tool provider. Plus, know the special key and secret password. Plus how to set up any special variables that may be needed by the tool provider.

Essentially, it’s important to be able to support site wide external tools.  

At this time it seems that LTI 2.0 is needed to support this.  Thus it seems important to implement LTI 2.0.  But,  IMS says LTI 2.0 is obsolete because of security concerns. Perhaps LTI 1.3 or LTI Advantage can replace this functionality?  

**Availability of sample systems or plugins**

To answer the question about LTI 1.3 its important to also look at the availability of plug and play code.  One goal of using LTI to reach any LMS is to reduce development time for EdEHR. After all why wouldn’t we want to leverage the full power of a LMS. And not only that but be able to switch to any LMS that may suit the educational institution.   In the context of reducing development time we need to find “off the shelf” tools that can provide the LTI functionality.   It’s not difficult to find sample code for LTI 1.0.  The code for this spec is not that large which makes sense because it basically has one API end point.  

There is only one sample that supports LTI 2.0, 1.3, Advantage and it’s from Blackboard. 

**Blackboard BBDN-LTI-Tool-Provider-Node**

See <https://devhub.io/repos/blackboard-BBDN-LTI-Tool-Provider-Node>

This project is maintained, occasionally, by two or three BB employees. Its goal is to be a demonstration of various IMS initiatives including: Content Item Messaging,  LTI Advantage Messaging, Caliper, Deeplink, Names and Roles, LTI membership and more.  This is not a piece of code that can be assimilated into another project easily. It is not designed to be a plugin. There are two ways EdEHR can use this code. One, we could use the code as the base of our application. The second approach is to rework the code into a plugin and contribute this effort back to the open source community.

Option two is not in scope for this project and is not any where close to one of the deliverables. 

Option one is has risks. 

1. What are the security risks of using LTI 2.0? (Tool Proxy)
2. From the code it’s not clear that tool proxy can be provided by the LTI 1.3 code.
3. Before extracting code from a large code base it’s important to know how that code base works. This is a risk of time taken to stand up a system with this code base and try it out.
4. Extracting code from a large code base then introduces the risk of “did you bring over everything you need?” and “did you bring over stuff that you don’t need yet don’t understand”.  
5. Who will monitory the original project’s code base to see if future development/bug fixes need to be brought back to the EdEHR project.
6. How many of the IMS initiatives are desired? 

**Assessment**

LTI with LMS offers some real advantages.  

LTI specification spaghetti is confusing and we lack expertise to navigate the best approach as 2019 approaches.

Going with just LTI 1.0 means the course instructors have a more difficult time setting up their assignments.

Going with LTI 2.0 fixes this but introduces security risks that we don’t understand along with the development risks mentioned above.

**Recommendation**

For EdEHR prototype go with LTI 1.0 only.

LTI V1.x implementation

Consider using  <https://www.npmjs.com/package/ims-lti> (*This is a nodejs library used to help create Tool Providers for the IMS LTI standard. Tool Consumer implmentation is left as an excersise to the reader :P)*

831 weekly downloads

Last update to the code was Sep 5, 2016.  Two years ago.  Around Dec 2017 a developer offered to help maintain the library and they produced a sizeable pull request.  The repro owner has not commented on the update.  Is this a dead library?  These improvements can be found here and I’ve written the author in the hope they may have some advice.

<https://github.com/ChristianMurphy/ims-lti/tree/refactor/decaffeinate-code>

Observation: There is long term risk to using a library that is not being maintained. It’s good to see there are a healthy number of weekly downloads.  A search for users of this library didn’t show up many hits. The best option was another project that wraps ims-lti into a utility for Node JS applications that use Express. (This fits our plans.)   Another project designed to help integration with Canvas no longer exists.   And there was another BlackBoard community user who provided a simple application for listening to LTI requests, based on the lms-lti project.

1. See <https://community.blackboard.com/community/developers/blog/2018/01> for a very simple example that uses ims-lti library to recieve basic launch requests. This sample is missing the needed return to LMS.
2. Express middle ware to use ims-lti.  26 weekly downloads. https://www.npmjs.com/package/express-ims-lti
3. An all-purpose node module that handles the core functionality of a Canvas-integrated LTI app. 0 weekly downloads. Github ---\> 404 page.  <https://www.npmjs.com/package/canvas-app-spine> 
4. Some further notes can be found here <https://stackoverflow.com/questions/27319576/lti-launch-authentication-with-node-js>


Full 

The LTI V1.0 basic launch request contains

LTI V1.x full sequence

So far, searches for a sample LTI 1.0 application that can be used by Moodle at the system level has not been found.   There are samples using V2.0.

LTI resources

Other samples

* <https://github.com/instructure/ims-lti> Ruby implementation of LTI 1.0 only
* <https://github.com/instructure/rollcall-attendance> Rich example of a tool provider that supports instructors tracking student attendance. Its a Ruby application with close relation to the Canvas LMS.  There is no clear “LTI” section in the code so it’s not easy to see if this app is LTI 2.0 or 1.3.   (<https://support.perceivant.com/hc/en-us/articles/115015942867-What-is-the-Roll-Call-Attendance-Tool->)

Other links to explore
* This thread is packed with some good questions, answers and the links to most of what I've listed below: <https://community.canvaslms.com/thread/13467-how-can-i-get-started-building-an-lti-external-application> 
* Another branch of that thread: <https://community.canvaslms.com/thread/13468-how-can-i-get-started-building-an-lti-external-application> 
* Course on building LTIs: <https://canvas.instructure.com/courses/785215/modules> 
* Three-part blog on building LTI (.NET): [https://community.canvaslms.com/groups/canvas-developers/blog/2016/09/13/net-lti-project-part-](https://community.canvaslms.com/groups/canvas-developers/blog/2016/09/13/net-lti-project-part-1)

----

### Document management, upload ###
<a href="#toc">Top</a>


Status: Do Later

Multer to support multi-part document uploads

Seperately mounted disk for storage outside of application code space

----

### Authorization ###
<a href="#toc">Top</a>


Authorization

Status: Do Later

Depends on LMS and LTI research  
Shibboleth

*Shibboleth is an open-source project that provides Single Sign-On capabilities and allows sites to make informed authorization decisions for individual access of protected online resources in a privacy-preserving manner.*

LTI

ComPAIR

<https://ctlt.ubc.ca/about/contact-us/teaching-learning-technologies/>

<https://lthub.ubc.ca/guides/compair/>

Exceprt:

Faculty and staff at UBC can most easily get started with ComPAIR by using Canvas. Through Canvas, you can set up a course in ComPAIR that will automatically be populated with your class list. The setup process is guided and only takes a few minutes.

Use ComPAIR in your Canvas course:

Add a ComPAIR link to your Canvas course's sidebar OR in a specific course module. You can follow the instructions below or contact the LT Hub for assistance with this step.

To add a link in the course's sidebar: Go to Settings in your Canvas course. Select the Navigation tab. Scroll down until you find ComPAIR. Click the gear, and select Enable.

To add a link in a course module: Go to Modules in your Canvas course. Press the "Add item" button on a specific module. Select External Tool from the drop-down menu. Select ComPAIR and then add the item.

After the course link is set up in Canvas, click on the link to create your ComPAIR course. (This step is required to properly link your Canvas and ComPAIR courses together.) If you are a completely new user in ComPAIR, you will first be prompted to create an account and then a course.

Note that because of how Canvas currently works, students also MUST follow the ComPAIR link from your Canvas course to initially register in your ComPAIR course. They cannot go to the ComPAIR website directly and try to log in there first; this will result in being denied access to ComPAIR and/or your ComPAIR course.

If you do not want to use Canvas to set up ComPAIR, you are welcome to log in to the application directly at compair.elearning.ubc.ca. From there, you can add a course and populate it manually using the "Import Users" option found on the "Manage Users" screen inside the course. Note that importing users requires some knowledge of how to download and edit a CSV file of your course's students and means you will need to manage the class list manually (i.e., updating when students add or drop).

Linking directly to a ComPAIR assignment via LTI

Once you have set up a ComPAIR course and assignments, you can link directly to ComPAIR assignments from Canvas. This is useful if you want to send students to specific assignments from specific modules of your Canvas course and/or you want to enable automatic grade pass-back from ComPAIR assignments to Canvas.

To create an assignment link in Canvas:

Go to ComPAIR and edit the assignment you want to link to.

Click the "Copy?" link at the top right of the edit assignment screen. This will copy the information you need to enter in Canvas.

Now switch to Canvas and add an assignment, with a submission type of external tool and ComPAIR selected as the external tool.

At the end of the "External Tool URL" field, type a question mark (?), then paste the value you copied from ComPAIR. This will mean the "External Tool URL" will ultimately something look like this: compair.elearning.ubc.ca/api/lti/auth?assignment=\* * * * * * * * 

Select "Load This Tool In A New Tab".

Save the assignment. When students click on the assignment in Canvas, it will take them directly to the assignment in ComPAIR.

Note that to pass participation grades automatically from ComPAIR to Canvas for a given assignment, every student will need to click this Canvas link to the ComPAIR assignment once. Clicking the link opens up the Canvas-ComPAIR connection for that student's grade.

\-=-=-=-= End Excerpt -=-=-=-=

CAS, SAML, OAuth

----

### Media Attachments ###
<a href="#toc">Top</a>


Media Attachments

Status: Do Later

Depends on how much video is required and if this is required for MVP.  It will be relatively easy to provide links to video hosted on external sites. To serve video from inside EdEHR requires special consideration, research, tooling and servers that have both the space and capability. Probably would need to consider seperate servers to stream video to maintain performance in the main application.

Kaltura for video content.  This is perhaps the tool used in ComPAIR. Not sure.

<https://corp.kaltura.com/>

Also see the BCCampus story about Kaltura

https://bccampus.ca/2013/05/23/wrangling-videos-in-one-location-just-got-a-lot-easier-with-kaltura/

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

Status: Do Later

Look at Experience API (xAPI) at <https://xapi.com>

Do this after LMS and LTI because the LMS ought to provide analytics.

Google Analytics

Status: Pending information

Oh hold pending answers around privacy policies.