# Project - EdEHR

> Educational Electronic Health Record System: a [BCcampus](https://bccampus.ca) project

See documentation in the ```docs``` directory.  To run a local documentation server use this command 
```
npm run docs:dev
```
Then visit  [http://localhost:8080/edehr](http://localhost:8080/edehr)

Or see the compiled documents [here](https://bryan-gilbert.github.io/edehr/)


## Installation
Git clone the repository
```
cd /your/development/area
git clone https://github.com/BCcampus/edehr.git
```

After cloning the repository or to update packages used by the server or client run this one step install script:
```
npm run install
```

## Run Development - method 1
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

## Run Development - method 2

This method starts all the components with one script, each in their own docker container.
```
cd deployment
# to build the containers and start attached to see debug logs
npm run dev:build
# to run containers that were built in detached mode
npm run dev:run
# to stop detached running containers
npm run dev:stop
```


## Run Production

First build the client vue project.
```
# in oroject root
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

## Lint
Run lint on both the client and server code base. From project root:
```
npm run lint
```

## Test
Run test on both the client and server code base. From project root:
```
npm run test
```


## EHR generation
The EHR side of the project contains over 40 separate screens, each needs to be listed in the menu and routing tables. 
The code for this comes from the generator in the makeEhrV2 directory. 
The generating script only needs to be invoked when the content of the configuration files are modified.  
The source of the configuration files comes from a Google spreadsheet stored in the project GDrive.
```
cd makeEhrV2
./deploy.sh --lint
```
The ```--lint``` option can be replaced with ```-l```. You must use this lint option before submitting files. If you are 
making changes and then checking the results in the UI you can skip ```lint``` and get your changes into the UI faster.
Just run the script with lint when you are done and ready to submit your code.
