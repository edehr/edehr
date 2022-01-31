# EdEHR API Server

> This sub-project provides application API.

## Project setup

Your system needs to have nodejs version 14 (and not 13 nor 15), and npm version 6 installed.  Best to use the ```nvm``` node js version manager. https://github.com/nvm-sh/nvm 

1. Run install on this project.

```
npm install
```

2. Be sure the mongoDB is running in its docker container. See the database subdirectory.



## Run Server - Dev
Running the dev code you just need to
```
npm run start
```
This will start nodemon to monitor for changes and babel-node to transpile and compile the code. This way you can make
code changes and the system will automatically restart the server with the changes: hot swap.

## Run Server - Prod

Running the production code requires you first run the build process.
```
npm run build
npm run start:prod
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

### LTI module

This project depends on a customized LTI plugin.  Be sure to include the following in the project dependencies
```
    "ims-lti": "git+https://github.com/bryan-gilbert/ims-lti.git",
```


## Testing

To test a single test, edit the package.json file "test:one" script and put in the file name you wish to test 
```
npm run test:one 
```

To test the full suite
```
npm run test
```

To test the system
```
npm run test:system
```

To test the server
```
npm run test:server
```
