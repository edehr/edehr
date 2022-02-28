#!/bin/bash
set -e
. ./env/.env
if [[ -z "$server_ip" || -z "$new_user" ]]; then
    echo "Usage depends on configuration in a .env file"
    exit
fi
address=root@"${server_ip}"

echo ''
echo ''
echo "************* Refresh set up server scripts from local to ${server_ip} *********"
ssh  "${address}" mkdir -p /opt/edehr/scripts

scp -r scripts_edehr/* "${address}":/opt/edehr/scripts

scp env/.env "${address}":/opt/edehr/scripts/.env.setup
