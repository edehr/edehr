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

{
  echo "AllowGroups ssh-access"
  # remove graphical support
  echo "X11Forwarding no"
  echo "AllowAgentForwarding no"
  echo "AllowTcpForwarding no"
  # reduce from 6 to 3
  echo "MaxAuthTries 6"
  # reduce max sessions from 10 to 5
  echo "MaxSessions 5"
  # reduce LoginGraceTime from 2m to 20 seconds
  echo "LoginGraceTime 20"
} >> /etc/ssh/sshd_config


diff --color=always /etc/ssh/sshd_config.BAK /etc/ssh/sshd_config
echo 'end of ssh setup'
exit
