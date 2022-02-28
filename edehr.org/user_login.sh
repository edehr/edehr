#!/bin/bash
set -e
. ./env/.env
if [[ -z "$server_ip" || -z "$new_user" ]]; then
    echo "Usage depends on configuration in a .env file"
    exit
fi

#ssh ${new_user}@${server_ip}

ssh ${new_user}@${server_ip} -t "cd /opt/edehr/scripts/scripts_edehr; bash --login"