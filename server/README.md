# EdEHR API Server

> This sub-project provides application API.

## Project setup
Assumes your system has node, and npm installed.
```
npm install
```
Be sure the mongoDB is running in its docker container. See the database subdirectory.


This project depends on another project that provides LTI support
outside of the project directory 
```
cd /your/development/area
git clone https://github.com/bryan-gilbert/ims-lti.git
cd ims-lti.git 
npm install
cd ../proto-EdEHR
# Do the next step in the server subdirectory
# Install the local copy of the LTI project
cd database
npm install ../../ims-lti --save
```


## Run Server - Dev
```
npm run serve-dev
```

## Run Server - Prod
```
npm run serve
```

## LTI 
The following happens when a user clicks on an assignment in a LMS system that is linked to the EdEHR.

Students:
   - the LMS makes a post request with a message that contains the user's authentication and authorization information. This message also contains information about the course and activity.
   - The EdEHR receives the message and determines if it is valid. If not then a rejection message is sent back
   - Otherwise EdEHR looks to see if this user has visited before. If yes then it retrieves the user information. If not then it creates a user account and stores the basics of this persons information.
   - Then the EdEHR looks to see if this user has worked with the requested activity (assignment). If yes then EdEHR retrieves the information and allows the user to resume working with the assignment. Otherwise EdEHR sets up the user to do the assignment.
   
Instructors:
   - Same as for students regarding the User account.
   - Except for instructors the link to the activity does not take the user into the assignment but to a screen that lists all the users (students) who have worked on the assignment.
   
### Visits
Each time a user visits the EdEHR from an LMS the system records the access in a Visit record. See the Visit model in the ```models``` and explore the models this one uses.
   
DB Queries

   - does a given user exist?
   - get the user information by user id
   - has this user worked on an assignment before?
   - does an activity exist?
   ... etc. TBContinues
   
   
## Testing
To test a single test 
```
node node_modules/mocha/bin/mocha --require @babel/register test/controllers/lti.spec.js 
```
To test the full suite
```
npm run test
```
