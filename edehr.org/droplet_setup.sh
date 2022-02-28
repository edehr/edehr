#!/bin/bash

set -e

# ######################
# Run this script on your development machine to configure a fresh remote server.

function usage() {
    echo "Usage $0 "
    cat <<-____HERE
    This script will configure a newly created Debian server accessible via an IP address (e.g. on Digital Ocean)
    You must provide the IP address via an .env file. See sample.env.

    Before invoking this script:
       - login to DigitalOcean
       - create a droplet; (e.g. Debian, 1GB ($5/mth) Toronto or San Fran)
       - make sure droplet includes your ssh key
____HERE
    exit 1
}

echo Import the configuration
. ./env/.env

echo Server "$server_ip"

if [[ -z "$server_ip" ]]; then
    usage
    exit
fi

echo "************* Configure remote server" "${server_ip}"   "*******************"
echo ''
echo ''

echo '***************** Delete Known Host Key - if one exists ********************'
ssh-keygen -f $HOME/.ssh/known_hosts -R "${server_ip}"

echo ''
echo ''
echo '************* Secure SSH *******************'
ssh root@"${server_ip}" "bash -s" -- < ./install_scripts/ssh_daemon.sh

echo ''
echo ''
echo '************* Firewall *******************'
ssh root@"${server_ip}" "bash -s" -- < ./install_scripts/firewall.sh

echo ''
echo ''
echo '************* Installing Basic *******************'
ssh root@"${server_ip}" "bash -s" -- < ./install_scripts/basic_setup.sh

echo ''
echo ''
echo '************* Installing Docker *******************'
ssh root@"${server_ip}" "bash -s" -- < ./install_scripts/docker.sh

echo ''
echo ''
echo '************* Installing Node NPM *******************'
ssh root@"${server_ip}" "bash -s" -- < ./install_scripts/node.sh

echo ''
echo ''
echo '************* Installing Certbot *******************'
ssh root@"${server_ip}" "bash -s" -- < ./install_scripts/certbot.sh


echo "************* DONE remote server" "${server_ip}" "*******************"
