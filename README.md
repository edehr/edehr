# EdEHR

> Educational Electronic Health Record System

> A BCcampus project

> The following may need some edits ....

## Installation
```
cd /your/development/area
git clone https://github.com/bryan-gilbert/proto-EdEHR.git
```

Next install packages
```
npm install

# install packages in both the server and client sub directories

cd client
npm install

cd ../database
npm install
```

## Run Development

First install packages as described above.

In terminal window 1 start the database and server
``` bash
cd database
# start the mongodb in a docker container
docker-compose up -d
# start the API server
npm run start-dev
```

In terminal window 2 start the client
```
cd client
npm run start-dev
```

## Run Production

First install packages as described above.

In terminal window 1 start the database and server
``` bash
cd database
# start the mongodb in a docker container
docker-compse up -d
# start the API server
npm run start
```

In terminal window 2 start the client
```
cd client
npm run start
```




## EHR generation
The EHR side of the project contains almost 40 separate screens, each needs to be in the menu and routing tables.  These tasks are automated via a script in the makeEhr subdirectory.
This script only needs to be invoked if the content of the configuration files have been 
modified.  The source of the configuration files comes from a Google spreadsheet stored in the project GDrive. 
```
cd makeEhr
./deploy.sh
```
