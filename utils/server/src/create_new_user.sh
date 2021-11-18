#!/usr/bin/env bash

: "${new_user:=$1}"
: "${new_password:=$2}"

if [[ -z "${new_user}" ]]; then
    echo ******** Required parameter new_user not set ********
    exit
fi

if [[ -z "${new_password}" ]]; then
    echo ******** Required parameter new_password not set ********
    exit
fi

new_user_homedir=/home/"${new_user}"

addgroup ssh-access
addgroup docker
addgroup edehrgroup

useradd -G users,sudo,ssh-access,docker,edehrgroup -m -s /bin/bash -p $(echo "${new_password}" | openssl passwd -1 -stdin) "${new_user}"

id "${new_user}"

echo Copy public SSH keys installed by Digital Ocean in root into new users home directory
mkdir -p "${new_user_homedir}"/.ssh
cp -R /root/.ssh/ "${new_user_homedir}"
chown -R "${new_user}" "${new_user_homedir}"/.ssh
chmod 700 "${new_user_homedir}"/.ssh
chmod 600 "${new_user_homedir}"/.ssh/*
ls -alR "${new_user_homedir}"/.ssh

echo "alias ll='ls -lah'" >> "${new_user_homedir}"/.bashrc

exit


