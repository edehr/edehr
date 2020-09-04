#!/bin/bash

set -e

# ######################
# Run this script on your development machine to configure a fresh remote server.

function usage() {
    echo "Usage $0 server_ip_address port_num"
    cat <<-____HERE
    This script will configure a newly created Ubuntu server accessible via an IP address (e.g. on Digital Ocean)
    You must provide the IP address.

    Before invoking this script:
       - login to DigitalOcean
       - create a droplet; (e.g. Ubuntu 20.4, 1GB ($5/mth) Toronto or San Fran)
       - make sure droplet includes your ssh key
____HERE
    exit 1
}

echo Import the configuration
. .env

echo User: "$new_user"  Password: "$password"
echo Server "$server_ip"  Port: "$ssh_port"

if [[ -z "$server_ip" ]]; then
    usage
    exit
fi
if [[ -z "$ssh_port" ]]; then
    usage
    exit
fi

echo "************* Configure remote server" "${server_ip} ${ssh_port}"   "*******************"
echo ''
echo ''


echo '***************** Delete Known Host Key - if one exists ********************'
ssh-keygen -f $HOME/.ssh/known_hosts -R "${server_ip}"


echo ''
echo ''
echo '************* Secure SSH *******************'
ssh root@"${server_ip}" "bash -s" -- < ./src/ssh_daemon.sh "${ssh_port}"


echo ''
echo ''
echo '************* Firewall *******************'
ssh root@"${server_ip}" "bash -s" -- < ./src/firewall.sh "${ssh_port}"


echo ''
echo ''
echo '************* Installing Basic *******************'
ssh root@"${server_ip}" "bash -s" -- < ./src/basic_setup.sh


echo ''
echo ''
echo '************* Installing Docker *******************'
ssh root@"${server_ip}" "bash -s" -- < ./src/docker20.sh

echo ''
echo ''
echo '************* Installing Node NPM *******************'
ssh root@"${server_ip}" "bash -s" -- < ./src/node.sh

echo ''
echo ''
echo '************* Installing Certbot *******************'
ssh root@"${server_ip}" "bash -s" -- < ./src/certbot.sh


echo "************* DONE remote server" "${server_ip}" "*******************"
