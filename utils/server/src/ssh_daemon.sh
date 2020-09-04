#!/usr/bin/env bash

: "${ssh_port:=$1}"

if [[ -z "${ssh_port}" ]]; then

    echo ******** Required parameter ssh_port not set ********
    exit

fi

echo Make backup of the ssh daemon config file
cp /etc/ssh/sshd_config /etc/ssh/sshd_config.BAK

echo '*************** Secure sshd_config ******************'

sed -i 's/PermitRootLogin yes/PermitRootLogin no/g' /etc/ssh/sshd_config
sed -i "s/#Port 22/Port $ssh_port/g" /etc/ssh/sshd_config
sed -i 's/ClientAliveInterval 120/ClientAliveInterval 600/g' /etc/ssh/sshd_config

sed -i '$ a ClientAliveCountMax 3' /etc/ssh/sshd_config
sed -i '$ a AllowGroups ssh-access' /etc/ssh/sshd_config

diff --color=always /etc/ssh/sshd_config.BAK /etc/ssh/sshd_config

echo Restart the ssh service later
echo $ service ssh restart

exit
