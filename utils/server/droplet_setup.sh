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

if [[ -z "$server_ip" || -z "$domain_name" || -z "$server_name" ]]; then
    echo Incomplete .env.setup file
    usage
    exit
fi
if [[ -z "$new_user" || -z "$password" ]]; then
    echo Incomplete .env.user file
    usage
    exit
fi

# Create a env file for the remote server. This gets copied below.  Of course we don't push any user passwords.
#echo server_ip="$server_ip" > ./remote_setup_scripts/.env
#echo server_name="$server_name" >> ./remote_setup_scripts/.env
#echo domain_name="$domain_name" >> ./remote_setup_scripts/.env

echo '***************** Delete Known Host Key - if one exists ********************'
ssh-keygen -f $HOME/.ssh/known_hosts -R "${server_ip}"

address=root@"${server_ip}"

echo ''
echo ''
echo '************* Secure SSH *******************'
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
echo '************* Set up root owned files *******************'
ssh  "${address}" mkdir -p /opt/edehr/setup_scripts
scp -r remote_setup_scripts/* "${address}":/opt/edehr/setup_scripts
scp -r .env.setup "${address}":/opt/edehr/setup_scripts/.env.setup
ssh  "${address}" chmod 770 /opt/edehr
ssh  "${address}" chmod 770 -R /opt/edehr/*
ssh  "${address}" chown -R root:edehrgroup /opt/edehr/
ssh  "${address}" ln -s /opt/edehr /home/"${new_user}"/edehr
ssh  "${address}" chown -h ${new_user} /home/"${new_user}"/edehr

echo ''
echo ''
echo '************* Enable Firewall -- Disable Root *******************'
echo After this command is executed, root can no longer ssh
echo You can say no. Then test that you can log in as "$new_user". Then come back here and run the enableUfw.sh
# next two lines are also in:  enableUfw.sh
read -p "Continue? (Y/N): " confirm && [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]] || next
ssh "${address}" 'service ssh restart; ufw --force enable; ufw status'

echo "************* DONE remote server" "${server_ip}" "*******************"
next
