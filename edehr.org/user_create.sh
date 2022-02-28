#!/bin/bash
set -e
. ./env/.env
if [[ -z "$server_ip" || -z "$new_user" || -z "$password" ]]; then
    echo "Usage depends on configuration in a .env file"
    exit
fi

echo "Create .... User: ${new_user} on ${server_ip}"
echo ''

echo Create "${new_user}" on "${server_ip}" using
ssh root@"${server_ip}" "bash -s" -- < ./scripts_user/create_new_user.sh $new_user $password
