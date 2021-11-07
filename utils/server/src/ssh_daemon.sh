#!/usr/bin/env bash

echo Make backup of the ssh daemon config file
#cp /etc/ssh/sshd_config /etc/ssh/sshd_config.BAK
FILE=/etc/ssh/sshd_config
BFILE=/etc/ssh/sshd_config.BAK
if [ ! -f "BFILE" ]; then
    cp $FILE $BFILE
fi

echo '*************** Secure sshd_config ******************'

sed -i 's/PermitRootLogin yes/PermitRootLogin no/g' /etc/ssh/sshd_config
#sed -i "s/#Port 22/Port $ssh_port/g" /etc/ssh/sshd_config
sed -i 's/ClientAliveInterval 120/ClientAliveInterval 600/g' /etc/ssh/sshd_config

sed -i '$ a ClientAliveCountMax 3' /etc/ssh/sshd_config
sed -i '$ a AllowGroups ssh-access' /etc/ssh/sshd_config

diff --color=always /etc/ssh/sshd_config.BAK /etc/ssh/sshd_config
echo 'end of ssh setup'
exit
