#!/bin/bash

set -e

function usage() {
    echo "Usage depends on configuration in a .env file"
    exit 1
}

echo Import the configuration
. .env

echo User: "$new_user"  Password: "$password"  Remote Shell "$remote_shell"
echo Server "$server_ip"  Port: "$ssh_port"

rhome=/home/${new_user}
address=${new_user}"@"${server_ip}
source=remote_setup_scripts

if [[ -z "$server_ip" || -z "$ssh_port" || -z "$new_user" || -z "$password" || -z "$remote_shell" ]]; then
    usage
    exit
fi

echo "Create .... User: ${new_user} on ${server_ip} port: ${ssh_port}  Remote Shell $remote_shell"
echo ''

echo Create "${new_user}" on "${server_ip}" using
ssh root@"${server_ip}" "bash -s" -- < ./src/create_new_user.sh $new_user $password $remote_shell

if [[ "${remote_shell}" == 'zsh' ]]; then
    #echo this step needs to be tested it still works
    ssh root@"${server_ip}" "bash -s" -- < ./src/oh-my-zsh-install.sh
fi

echo "Set up user while we still use port 22"
./configure_user.sh ${server_ip} ${new_user} ${remote_shell}

echo ""
echo "You can now log on with the following"
echo "ssh ${new_user}@${server_ip} -p ${ssh_port}"

echo Next run:
echo ./enableUfw.sh

