#!/bin/bash

set -e

echo Import the configuration
. .env.setup
. .env.user

if [[ -z "$server_ip" ]]; then
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
echo '************* Set up root owned files *******************'
scp -r remote_setup_scripts/* "${address}":/opt/edehr/setup_scripts
scp -r .env.setup "${address}":/opt/edehr/setup_scripts/.env.setup
