#!/bin/bash
set -e
. ./env/.env
if [[ -z "$server_ip" || -z "$domain" ]]; then
    echo Must provide the .env file with server_ip and domain
    exit
fi
address="root@"${server_ip}

echo ''
echo '************* Clone the github EdEHR project *******************'
ssh "${address}" "bash -s" -- < ./scripts_edehr/edehr_clone.sh
