#!/usr/bin/env bash
set -e

: "${fName:=$1}"
if [[ -z "${fName}" ]]; then
    echo Usage $0 fName
    echo Must provide a name for the new backup file.
    exit
fi

# Read the site specific env file to get db password and db location
. /opt/edehr/project/deployment/.env.site
if [[ -z "$MONGODB_PWORD" ]]; then
    echo Must provide the /opt/edehr/project/deployment/.env.site file with MONGODB_PWORD
    exit
fi
if [[ -z "$VOLUME_STORAGE" ]]; then
    echo Must provide the /opt/edehr/project/deployment/.env.site file with VOLUME_STORAGE
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

# Location withing the docker container
dArchive="/data/backups/${fName}"
# Location in the file system.
sArchive="${VOLUME_STORAGE}/backups/${fName}"

docker exec $ddb mongodump --db $dbName --authenticationDatabase admin -u root --archive=$dArchive --gzip --password=$MONGODB_PWORD
echo "The new back up file is ${sArchive}"
ls -al $sArchive
