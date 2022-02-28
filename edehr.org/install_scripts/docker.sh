#!/usr/bin/env bash

DOCKER_FINGERPRINT="9DC858229FC7DD38854AE2D88D81803C0EBFCD88"

echo '************* Installing Docker *****************'

apt-get install -y apt-transport-https ca-certificates gnupg2 software-properties-common

## Assume we are running as root otherwise use this
# curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -

echo ''
echo ''
echo '**************** verify the finger print ****************'

FINGERPRINT=`apt-key adv --list-public-keys --with-fingerprint --with-colons | grep $DOCKER_FINGERPRINT`

echo 'FINGERPRINT: ' $FINGERPRINT

if [[ $FINGERPRINT == *$DOCKER_FINGERPRINT* ]]; then

  # get the stable version
  add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"

  apt-get update
  apt-get install -y docker-ce docker-ce-cli containerd.io

  echo '************* Installing Docker Compose *****************'

  curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

  chmod +x /usr/local/bin/docker-compose

  docker-compose --version

  echo '************* Docker and Docker Compose Installed *******************'

else

  echo '**********************************************************'
  echo '**********************************************************'
  echo '**********************************************************'
  echo "**** Docker Repository Fingerprint Doesn't Match *********"
  echo '**********************************************************'
  echo '**********************************************************'
  echo '**********************************************************'

fi

exit
