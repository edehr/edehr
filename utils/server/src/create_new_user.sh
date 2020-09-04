#!/usr/bin/env bash


: "${new_user:=$1}"
: "${new_password:=$2}"
: "${remote_shell:=$3}"

if [[ -z "${new_user}" ]]; then

    echo ******** Required parameter new_user not set ********
    exit

fi

if [[ -z "${new_password}" ]]; then

    echo ******** Required parameter new_password not set ********
    exit

fi

if [[ -z "${remote_shell}" ]]; then

    echo ******** Required parameter remote_shell not set ********
    exit

fi


new_user_homedir=/home/"${new_user}"

addgroup ssh-access

# prepare for docker. Allow this user to run docker commands without needing sudo
addgroup docker

if [[ "${remote_shell}" == 'zsh' ]]; then

   apt-get install -y zsh

fi

echo Create user: "${new_user}" using given password
# Create the user; add to group; create home directory (-m); set password hashed
useradd -G users,sudo,ssh-access,docker -m -s /bin/"${remote_shell}" -p $(echo "${new_password}" | openssl passwd -1 -stdin) "${new_user}"

echo Show information about the user:
getent passwd "${new_user}"
id -Gn "${new_user}"

echo Copy public SSH keys installed by Digital Ocean in root into new users home directory
cp -R /root/.ssh/ "${new_user_homedir}"

chmod 700 "${new_user_homedir}"/.ssh
chmod 600 "${new_user_homedir}"/.ssh/*
chown -R "${new_user}":"${new_user}" "${new_user_homedir}"/.ssh

exit


