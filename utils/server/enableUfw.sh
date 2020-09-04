#!/bin/bash

echo Import the configuration
. .env

echo Server "$server_ip"  Port: "$ssh_port"


echo Enable changes to the firewall and SSH Daemon
echo After this command is executed, root can no longer ssh and the new ssh_port ${ssh_port} will be active
read -p "Continue? (Y/N): " confirm && [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]] || exit 1
ssh root@"${server_ip}" 'service ssh restart; ufw --force enable; ufw status'

