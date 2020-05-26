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

Public docs are available here [https://bccampus.github.io/edehr](https://bccampus.github.io/edehr)

## Demo

A demonstration mode is currently being implemented. This demo mode will mimic a learning management system so you can experience both the student's  and the instructor's experiences. Until then reach out to [info@edehr.org](mailto:info@edehr.org). You will be given login credentials to try out EdEHR

## Getting started

Begin by installing an LMS (e.g. Moodle or Canvas). Only with an LMS installed can you access the EdEHR locally.

## Installation
Git clone the repository
```
cd /your/development/area
git clone https://github.com/BCcampus/edehr.git
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

When all changes have been made locally and you wish to update your production server, follow the instructions below.

First build the client vue project.
```
# in project root
npm run build
```

Starts all the components with one script, each in their own docker container.
```
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
Run test on both the client and server code base. From project root:
```
npm run test
```

## EHR screen generation
There are over 40 EHR screens that are generated using a Google spreadsheet. This spreadsheet generates each screen's form layout, table layout, modal forms and can include option default data to include in the seed.

If you wish to make edits to the screens or the defaut data, copy a version of the spreadsheet to your own Google Drive account (downloading and opening in Excel is not supported) and make the edits there. Copy the data from the furthest right-hand columns into the respective file in the ```makeEhr``` directory.

Run the following command:
```
cd makeEhrV2
```
Then
```
./deploy.sh --lint
```
Pro tip: The ```--lint``` option can be replaced with ```-l```. 

You must use this lint option before submitting files. If you are 
making changes to view locally in multiple steps, you can shorten the time it takes to run the command by leaving ```lint``` out of the command. 

Please remember to run the script with lint when you are done and ready to submit your code.

## Backing Up and Restoring the Database

1. Accessing the Mongo Shell
   
    As mentioned, the system is running MongoDB as the database, usually in a Docker instance. There might be, however, the need to access the shell in order to run scripts at the database level. This can be done by running:

    ```
    npm run shell:mongo
    ```
2. Running the restore and backup scripts should be easy, since a volume has been implemented with the backup and restore scripts for all given databases (production and development), you access the scripts by accessing ``/data/``.

    Inside the Mongo Shell, run:
    ```
    cd data/
    ```

3. In order to run the backup script, please run `./backup.sh` and then all the dump data will be set to `data/dump/` (and, at the same time will be set to the volume, which is, by default in `database/backup/dump`).
   In order to run the restore script, simply run `./restore.sh` and everything in the `dump/` folder will be restored. 

   ``Note``: It might be needed to give permission to the script files. In case this happens, please, run:

   ```
    chmod +x *.sh 
   ```


## Contributing
EdEHR is an open source project and we encourage contributions. Please read CONTRIBUTING.md before contributing.


## Documentation
For more details about this project, [view the documentation](https://bccampus.github.io/edehr/)

Alternatively, you can run a local documentatiom server by running the following command in your terminal:
```
npm run docs:dev
```
Then visit  [http://localhost:8080/edehr](http://localhost:8080/edehr) See documentation in the ```docs``` directory.

