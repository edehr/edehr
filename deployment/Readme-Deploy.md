# EdEHR Deployment

> Instructions for deploying EdEHR with Docker

Assume you have Docker installed and running.

## For development work 

This will run the EdEHR client with the Vue server; the EdEHR server API within a docker container and the mongoDB within 
another container.

1. Start the client
```
cd client
npm run start
``` 

2. Start the DB and Server
``` 
cd deployment
docker-compose -f docker-compose-app.yml up --build
```

Alternatively you can also build the containers and then run them in detacted mode but, for development it's easier to
just use the same command to both build and run in the interactive mode so you can watch log messages and quickly reset
the system simply by using Ctrl-C to stop the containers.

This local development set up depends on the variable set in the ```deployment/.env``` file.


## For Product side

We use nginx as the main web server for the system.  This will server the static vue client files and proxy 
the API requests to the server.  The MongoDb will remain behind the firewall.

For each installation of production you must edit the ```.env``` file in the ```deployment``` directory.

 