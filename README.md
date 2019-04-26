# EdEHR

> Educational Electronic Health Record System: a [BCcampus](https://bccampus.ca) project

See documentation in the ```docs``` directory.  To run a local documentation server use this command 
```
yarn docs:dev
```
Then visit  [http://localhost:8080/edehr](http://localhost:8080/edehr)

Or see the compiled documents [here](https://bryan-gilbert.github.io/edehr/)


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
npm run start-db
```
Start the API server. From project root:
```
npm run start-server:prod
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
The EHR side of the project contains almost 40 separate screens, each needs to be listed in the menu and routing tables.  These 
tasks are automated via a script in the makeEhr subdirectory. This script only needs to be invoked if the content of the 
configuration files have been modified.  The source of the configuration files comes from a Google spreadsheet stored 
in the project GDrive.
```
cd makeEhr
./deploy.sh --lint
```
The ```--lint``` option can be replaced with ```-l```. You must use this lint option before submitting files. If you are 
making changes and then checking the results in the UI you can skip ```lint``` and get your changes into the UI faster.
Just run the script with lint when you are done and ready to submit your code.
