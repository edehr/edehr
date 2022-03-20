#!/usr/bin/env bash
set -e
# dbName = edehr-prod

: "${fName:=$1}"
if [[ -z "${fName}" ]]; then
    echo Usage $0 fName dbName
    exit
fi

# Read in env file to get db password
. /opt/edehr/project/deployment/.env
if [[ -z "$MONGODB_PWORD" ]]; then
    echo Must provide the /opt/edehr/project/deployment/.env file with MONGODB_PWORD
    exit
fi

# hard code the db name yet someday may put this into the config file
dbName=edehr-prod

# get the container id of the running docker mongo container
ddb=$(docker ps -aqf "name=mongo")
if [[ -z "$ddb" ]]; then
    echo Requires a running mongo docker container
    exit
fi

dArchive="/data/backups/${fName}"
sArchive="/opt/edehr/project/database/backups/${fName}"
#arc="/data/backups/edehr-prod-db-$(date +"%Y%m%dT%H%M").gz"

docker exec $ddb mongodump --db $dbName --authenticationDatabase admin -u root --archive=$dArchive --gzip --password=$MONGODB_PWORD
echo "back up file ${sArchive}"
ls -al $sArchive