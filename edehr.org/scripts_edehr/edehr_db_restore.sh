#!/usr/bin/env bash
set -e

: "${fName:=$1}"
if [[ -z "${fName}" ]]; then
    echo Usage $0 fName
    echo Must provide the name of the backup file.
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

# get the container id of the running docker mongo container
ddb=$(docker ps -aqf "name=mongo")
if [[ -z "$ddb" ]]; then
    echo Requires a running mongo docker container
    exit
fi

# Location in the file system.
sArchive="${VOLUME_STORAGE}/backups/${fName}"

if [ -e ${sArchive} ]
then
  # Location withing the docker container
  dArchive="/data/backups/${fName}"
  echo "Restore db from ${dArchive} inside container"
  docker exec $ddb mongorestore --authenticationDatabase admin -u root --nsInclude 'edehr-prod.*' --gzip --drop --archive=$dArchive --password=$MONGODB_PWORD
else
    echo "Can not find the source database file ${sArchive}"
fi
