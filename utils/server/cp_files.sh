#!/bin/bash

# When the droplet_setup script runs it will copy the setup script files. This tool helps when the user
# needs to update the files after root access is blocked.
set -e

function usage() {
    echo "Usage depends on configuration in a .env file"
    exit 1
}

echo Import the configuration file
. .env

if [[ -z "$server_ip" || -z "$new_user" ]]; then
    usage
    exit
fi
address="${new_user}"@"${server_ip}"
echo "Copy setup files as user: ${new_user} to ${server_ip} via ${address}"

scp -r remote_setup_scripts/* "${address}":/opt/edehr/setup_scripts
scp -r remote_setup_scripts/.env "${address}":/opt/edehr/setup_scripts
ssh "${address}" chown -R "${new_user}":edehrgroup /opt/edehr/
