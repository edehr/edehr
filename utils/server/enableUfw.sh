#!/bin/bash

# This is stand alone script to enable the firewall and block root.
# You can run this after droplet_setup.sh if you happened to NOT accept the final question.

echo Import the configuration
. .env.setup

echo Server "$server_ip"
if [[ -z "$server_ip" ]]; then
    echo Incomplete .env.setup file
    usage
    exit
fi

echo Enable changes to the firewall and SSH Daemon
echo After this command is executed, root can no longer ssh
read -p "Continue? (Y/N): " confirm && [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]] || exit 1
ssh root@"${server_ip}" 'service ssh restart; ufw --force enable; ufw status'

