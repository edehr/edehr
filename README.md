# Project - EdEHR
> Educational Electronic Health Record system: a [BCcampus](https://bccampus.ca) project

## Description

EdEHR is an open source web application developed to teach medical students how to use an EHR before they enter the workforce. It can be accessed only through a learning management system (LMS) and requires a technical person to set it up. Once set up, users can access the system either as an instructor or a student. Credentials to try out either role are included below.

## License


The master-bccampus branch is released under a copyright licence (MIT). This includes all work funded by BC Campus from project start, September 2018 to project end, January 31, 2020.

Work since the BC Campus project is released under a copyleft license (GNU Affero General Public License).


## Blog Posts

[BC Campus announcement](https://bccampus.ca/2019/02/07/an-open-educational-tool-for-training-students-to-use-electronic-health-record-systems-in-the-workplace/) By E Beattie, February 7, 2019


[BC Campus Blog - An Education in Electronic Health Record](https://bccampus.ca/2020/01/07/an-education-in-electronic-health-records/) By J Caldwell, January 7, 2020
 
## Documentation

Public docs are available here [https://edehr.github.io/edehr](https://edehr.github.io/edehr)

## Demo

A demonstration mode is currently being implemented. 
This demo mode mimics a learning management system allowing you to experience both the student's  and the instructor's experiences. 
For more information write an email to [info@edehr.org](mailto:info@edehr.org). 


## Getting started as a developer

Assumes you have already installed docker, git, npm and nodejs. 
Git clone the repository.
```
cd /your/development/area
git clone https://github.com/edehr/edehr.git
```

After cloning the repository or to update packages used by the server or client run this one-step install script:
```
npm run install
```
### Start your development server
#### Method 1
This method starts the components one at a time. This is best for intensive development where you need to have 
a close contact with the code and the components.

Start the database server (in docker container)
```
npm run start:db
```
Start the API server. From project root:
```
npm run start:server
```
In another terminal session start the client. From project root:
```
npm run start:client
```
When done stop the database server. From project root:
```
npm run stop:db
```

#### Method 2

This method starts all the components with one script, each in their own docker container.
```
cd deployment
```
to build the containers and start attached to see debug logs
```
npm run dev:build
```
to run containers that were built in detached mode
```
npm run dev:run
```
to stop detached running containers
```
npm run dev:stop
```


## Run Production

To run a "production" instance you check out the code as above and have the prerequisite tools installed.
You have run the 'npm run install' set up script.

Step 0. Set up the site specific environment
```
cd /your/development/area
cd deployment
cp sample.env.site .env.site
vi .env.site
```


Step 1. Build and publish the client vue project.
```
cd /your/development/area
cd client
npm run both
```

Step 2. Start the docker system
```
cd /your/development/area
cd deployment
# to build the containers and start attached to see debug logs
npm run prod:build
# to run containers that were built in detached mode
npm run prod:run
# to stop detached running containers
npm run prod:stop
```

### Lint
Run lint on both the client and server code base. From project root:
```
npm run lint
```

### Test
Run tests on both the client and server code base. From project root:
```
npm run test
```

## EHR screen generation
There are over 40 EHR screens that are generated using a Google spreadsheet.
For more information about this spreadsheet write an email to [info@edehr.org](mailto:info@edehr.org).
This spreadsheet defines each screen's form layout, table layout, modal forms and can include option 
default data to include in the case study "seed".

If you wish to make edits to the screens or the default data, copy a version of the spreadsheet 
to your own Google Drive account (downloading and opening in Excel is not supported) and make the edits there. 
Copy the data from the furthest right-hand columns into the raw data file in the ```makeEhrV2/raw_data``` directory.

Run the following command:
```
cd makeEhrV2
./deploy.sh
```
If you are making changes to view locally in multiple steps, you can shorten the time it takes to run the command  ```./deply.sh --noLint``` . 

## Backing Up and Restoring the Database

The MongoDB database is running in a Docker container, and you need to be inside this container to run the database backup tools.  We have a npm script to make this step easy.
```
npm run shell:mongo
```
Restore and backup scripts are located in the /data/scripts directory, inside the docker container and in the  `$../database/scripts` outside the container.

Inside the Mongo Shell, run:
 ```
 cd data/scripts
 ```
Run the backup script `./backup.sh` and all the dump data will be placed in `data/dump/`  

A restore script, `./restore.sh`  restores based on the contents in the `dump/`. 

``Note``: It might be needed to change the permissions of the script files to be able to execute them.
```
chmod +x *.sh 
```

You may wish to tar zip the results
```bash

tar -czvf edehr.org-2022-02-24.tar.gz /data/dump
```


## Contributing
EdEHR is an open source project, and we encourage contributions. Please read CONTRIBUTING.md before contributing.


## Documentation
For more details about this project, [view the documentation](https://edehr.github.io/edehr/)

Alternatively, you can run a local documentation server by running the following command in your terminal:
```
npm run docs:dev
```
Then visit  [http://localhost:8080/edehr](http://localhost:8080/edehr) See documentation in the ```docs``` directory.

# Update SSL Cert on production with Certbot

```bash
# Stop the server
cd deployment
npm run prod:stop

# Run certbot to update the certs
sudo certbot

#Then find and stop all running nginx
# e.g. 
# sudo kill -QUIT 30708 

ps aux | grep nginx

# Then restart 
npm run prod:run
```

# Security notes

See https://edehr.org/edehrDetails

## User authentication comes from the LMS
The EdEHR does not have any means (intentional) to register new users. All users gain access to the application via their
learning management system (LMS) which uses Learning Tools Interoperability (LTI) protocol. Essentially the LMS and this
application have shared a key and a secret. When the user wants to access the EdEHR they click a link in their LMS. 
This link sends a HTTP POST request with an LTI payload to the EdEHR.  The payload is digitally signed with the shared
secret. The EdEHR application server verifies the payload and creates a new user record, if needed. The server then
redirects the request to the EdEHR client along with a JSON Web Token. 


## User token's are verified
When the client first receives the server request, with the token, the client immediately sends the token back to
it's pre-configure server url asking the server to verify the token is valid and to receive a new token with the verified
authentication information.  The client saves this and uses it on all further communications with the server.
