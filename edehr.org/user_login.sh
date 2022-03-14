#!/bin/bash
set -e
. ./env/.env
if [[ -z "$server_ip" || -z "$new_user" ]]; then
    echo "Usage depends on configuration in a .env file"
    exit
fi

# -A passes the user credentials along so the user can use ssh to another server with the same ssh key
#ssh -A ${new_user}@${server_ip}

# Change into the edehr scripts directory to be ready to run further edehr set up tasks.
ssh -A ${new_user}@${server_ip} -t "cd /opt/edehr/scripts/; bash --login"