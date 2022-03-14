# EdEHR Database

> This sub-project provides mongodb database in Docker container, FOR DEVELOPMENT ONLY

## Project setup
Docker download for Mac
https://store.docker.com/editions/community/docker-ce-desktop-mac

You will need to create an account with Docker

## Run Mongodb in a Docker container

```bash
# To build / re-build
docker-compose build

# Run
docker-compose up

# use -d flag to run in background
docker-compose up -d

# Tear down
docker-compose down

# To be able to edit files, add volume to compose file
volumes: ['./:/usr/src/app']

```

Mainly need to add volumes when deployed on a production server.  It is not necessary for development.
