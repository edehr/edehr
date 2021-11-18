#!/bin/bash

set -e

echo Import the configuration
. .env.setup
. .env.user

if [[ -z "$server_ip" || -z "$server_name" ]]; then
    echo Incomplete .env.setup file
    exit
fi
if [[ -z "$new_user" ]]; then
    echo Incomplete .env.user file
    exit
fi

address="${new_user}"@"${server_ip}"

echo ''
echo ''
echo "************* Refresh set up server scripts from local to ${server_ip} ${server_name} *********"
scp -r remote_setup_scripts/server/* "${address}":/opt/edehr/setup_scripts
scp -r .env.setup "${address}":/opt/edehr/setup_scripts/.env.setup
