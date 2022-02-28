#!/bin/bash
set -e
. ./env/.env
if [[ -z "$server_ip" || -z "$new_user" || -z "$password" ]]; then
    echo "Usage depends on configuration in a .env file"
    exit
fi

uHome=/home/${new_user}
address=${new_user}"@"${server_ip}

#echo "On the remote create a setup_scripts directory"
#ssh "${address}" "mkdir -p "${uHome}"/setup_scripts"

scp -r ./resources_for_site_user/.bash_aliases "${address}":"${uHome}"
scp -r ./resources_for_site_user/user_setup_git.sh "${address}":"${uHome}"

#ssh "${address}" "bash -s" -- < ./scripts_user/setup_user.sh $new_user

ssh  "${address}" ln -s /opt/edehr /home/"${new_user}"/edehr
ssh  "${address}" chown -h ${new_user} /home/"${new_user}"/edehr

echo ""
echo "You can now log on with the following"
echo "ssh ${new_user}@${server_ip}"
