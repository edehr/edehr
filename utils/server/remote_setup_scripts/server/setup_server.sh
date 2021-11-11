#!/usr/bin/env bash

echo 'Installing Docker, Node, Certbot with Ngnix. Obtain SSL certificate. Install EdEHR.'
set -e

echo ''
echo ''
echo '************* Installing Docker *******************'
sudo ./docker20.sh

echo ''
echo ''
echo '************* Installing Node NPM *******************'
sudo ./node.sh

echo ''
echo ''
echo '************* Installing Certbot and get SSL certs *******************'
# Note that installing and using certbot will both install and set up nginx on the server.
# EdEHR does not want nginx to run at this level because it runs nginx inside a Docker container.
# The getcert script will disable nginx from starting on reboot.
# install ....
sudo ./certbot.sh
# get SSL certs ...
sudo ./getcert.sh

echo ''
echo ''
echo 'NEXT clone and setup EdEHR project. Run the edehr_setup script...'
echo ./edehr_setup.sh

