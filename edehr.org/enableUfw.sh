#!/bin/bash
set -e
. ./env/.env
if [[ -z "$server_ip" ]]; then
    echo 'Setup .env file with server ip'
    exit
fi

echo "Enable changes to the firewall and SSH Daemon"
echo "The firewall, once enabled, will limit ssh access to users in the ssh-access group (e.g. no root access)"
read -p "Enable firewall? (Y/N): " confirm
if [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]]; then
  ssh root@"${server_ip}" 'service ssh restart; ufw --force enable; ufw status'
fi


