#!/bin/bash

set -e

# ######################
# Run this script ONCE on your development machine to configure a fresh remote server. It requires root ssh access.

function usage() {
    echo "Usage $0 server_ip_address"
    cat <<-____HERE
    This script will configure a newly created server accessible via an IP address (e.g. on Digital Ocean)
    You must provide the IP address.

    Before invoking this script:
       - login to DigitalOcean
       - create a droplet; (e.g. latest stable Debian is recommended and use the Toronto data center for Canadian content)
       - make sure droplet includes your ssh key
____HERE
    exit 1
}

function next() {
    cat <<-____HERE
    The remote server is now ready. (Be sure to have enabled the firewall and forced a restart of ssh.
    Next you have two options.
    1. Copy script and environment settings to the server from here. Do this step next and repeat if you need to change something later.
    2. Log on as the user and continue the set up on the host. Change directory into the edehr folder and run the setup script.

    cd ~/edehr/setup_scripts
    ./setup_server.sh
____HERE
    echo ssh "$new_user"@"${server_ip}"
    exit 1
}

echo Import the configuration
. .env.setup
. .env.user

# test the env files contain all the expected values even though some are not needed for this particular setup script.
if [[ -z "$server_ip" || -z "$domain_name" || -z "$server_name" || -z "$secret" || -z "$cert_email_admin" ]]; then
    echo Incomplete .env.setup file
    usage
    exit
fi
if [[ -z "$new_user" || -z "$password" ]]; then
    echo Incomplete .env.user file
    usage
    exit
fi

echo "************* START remote server ${server_ip} ${server_name} *******************"

echo '***************** Delete Known Host Key - if one exists ********************'
ssh-keygen -f $HOME/.ssh/known_hosts -R "${server_ip}"

address=root@"${server_ip}"

echo ''
echo ''
echo "************* Secure SSH $server_name *******************"
ssh "${address}" "bash -s" -- < ./src/ssh_daemon.sh

echo ''
echo ''
echo '************* Create base user *******************'
ssh  "${address}" "bash -s" -- < ./src/create_new_user.sh "$new_user" "$password"

echo ''
echo ''
echo '************* Firewall *******************'
ssh  "${address}" "bash -s" -- < ./src/firewall.sh

echo ''
echo ''
echo '************* Installing Basic *******************'
ssh  "${address}" "bash -s" -- < ./src/basic_setup.sh

echo ''
echo ''
echo "************* Set up server side setup script files $server_name *******************"
ssh  "${address}" mkdir -p /opt/edehr/setup_scripts
scp -r remote_setup_scripts/server/* "${address}":/opt/edehr/setup_scripts
scp -r .env.setup "${address}":/opt/edehr/setup_scripts/.env.setup
ssh  "${address}" chmod 770 /opt/edehr
ssh  "${address}" chmod 770 -R /opt/edehr/*
ssh  "${address}" chown -R root:edehrgroup /opt/edehr/
ssh  "${address}" ln -s /opt/edehr /home/"${new_user}"/edehr
ssh  "${address}" chown -h ${new_user} /home/"${new_user}"/edehr

echo ''
echo ''
echo '************* Enable Firewall -- Disable Root *******************'
echo After this next command is executed, root will no longer be able ssh onto the server.
echo "You can say no. Then test that you can log in as ${new_user} then run the same command using enableUfw.sh"
# next two lines are also in:  enableUfw.sh
read -p "Continue? (Y/N): " confirm && [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]] || next
ssh "${address}" 'service ssh restart; ufw --force enable; ufw status'

echo "************* DONE remote server ${server_ip} ${server_name} *******************"
next
