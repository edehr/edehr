# EdEHR

> Educational Electronic Health Record System

> A BCcampus project 
https://bccampus.ca


## Installation
```
cd /your/development/area
git clone https://github.com/BCcampus/edehr.git
```

To install packages run from project root:
```
npm run install
```

## Run Development

Start the database server (in docker container)
```
npm run start-db
```
Start the API server. From project root:
```
npm run start-server
```
In another terminal window start the client. From project root:
```
npm run start-client
```
When done stop the database server. From project root:
```
npm run database-stop
```

## Run Production
Build the client. From project root:
```
npm run build
```

Start the database server (in docker container)
```
npm run database-start
```
Start the API server. From project root:
```
npm run start-prod-server
```
When done stop the database server. From project root:
```
npm run database-stop
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
The EHR side of the project contains almost 40 separate screens, each needs to be in the menu and routing tables.  These 
tasks are automated via a script in the makeEhr subdirectory. This script only needs to be invoked if the content of the 
configuration files have been modified.  The source of the configuration files comes from a Google spreadsheet stored 
in the project GDrive.
```
cd makeEhr
npm install
./deploy.sh --lint
```
The ```--lint``` option can be replaced with ```-l```. You must use this lint option before submitting files. If you are 
making changes and then checking the results in the UI you can skip ```lint``` and get your changes into the UI faster.
Just run the script with lint when you are done and ready to submit your code.


## Client
The client is a Vue project.

## API server
The server is a Node Express application supported by a MongoDB. It depends on a LTI package.

## Database
The MongoDB is served from a Docker image.

## Documentation
See the various readme files in the ```docs``` directory.