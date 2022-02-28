#!/usr/bin/env bash

if [ ! -f /etc/ssh/sshd_config.BAK ]; then
  echo Make backup of the ssh daemon config file
  cp /etc/ssh/sshd_config /etc/ssh/sshd_config.BAK

  echo '*************** Edit sshd_config ******************'

  sed -i 's/PermitRootLogin yes/PermitRootLogin no/g' /etc/ssh/sshd_config
  sed -i '$ a AllowGroups ssh-access' /etc/ssh/sshd_config

  # sed -i "s/#Port 22/Port $ssh_port/g" /etc/ssh/sshd_config
  # sed -i 's/ClientAliveInterval 120/ClientAliveInterval 600/g' /etc/ssh/sshd_config
  # sed -i '$ a ClientAliveCountMax 3' /etc/ssh/sshd_config
fi

diff --color=always /etc/ssh/sshd_config.BAK /etc/ssh/sshd_config

echo Restart the ssh service later
echo $ service ssh restart

exit
