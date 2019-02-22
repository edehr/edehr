# EdEHR Database

> This sub-project provides mongodb database.

## Project setup
Docker download for Mac
https://store.docker.com/editions/community/docker-ce-desktop-mac

You will need to create an account with Docker

## Docker MongoDB Database

> Run Mongodb in a Docker container


```bash
# Run
docker-compose up
# use -d flag to run in background
docker-compose up -d

# Tear down
docker-compose down

# To be able to edit files, add volume to compose file
volumes: ['./:/usr/src/app']

# To re-build
docker-compose build
```

Add the volumes when deployed on a production server.  It does not work nor is it necessary on Macs.
