#!/usr/bin/env bash

# ######################
# Best to run this as part o the configure_droplet script.
# No port is specified because the ssh port has not yet been switch when this script runs. So default to port 22

function usage() {
    echo "Usage $0 server_ip_address user_name"
    cat <<-____HERE
    This script will copy configuration files and scripts from this machine to the remote server placing the files into the given user's home directory.
    The next step is for the user to log onto that server and run 'user_setup.sh'
    You must provide the IP address and the name of user.
____HERE
    exit 1
}

: "${server_ip:=$1}"
: "${user_id:=$2}"

if [[ -z "${user_id}" ]]; then
    usage
    exit
fi
if [[ -z "${server_ip}" ]]; then
    usage
    exit
fi

echo User: "${user_id}" IP: "${server_ip}"

rhome=/home/${user_id}
address=${user_id}"@"${server_ip}

echo "Make the setup scripts directory in the remote users home"
ssh "${address}" "mkdir -p "${rhome}"/setup_scripts"

echo "Copy files from here to there"
scp -r remote_setup_scripts/* "${address}":"${rhome}"/setup_scripts

echo "Listing the remote files to verify they arrived"
ssh "${address}" "ls -al "${rhome}"/setup_scripts"

echo ''
ls -al ~/.ssh/
echo "Pick which keys you want on your server and run a scp command like this"
echo "scp ~/.ssh/yourkey "${address}":"${rhome}"/.ssh"
read -p "Enter yourkey, the private file, the one without the .pub extension" yourkey

scp ~/.ssh/${yourkey} "${address}":"${rhome}"/.ssh
