#!/usr/bin/env bash

echo 'Installing Docker, Node, Certbot with Ngnix. Obtain SSL certificate. Install EdEHR.
set -e

echo ''
echo ''
echo '************* Installing Docker *******************'
sudo ./server/docker20.sh

echo ''
echo ''
echo '************* Installing Node NPM *******************'
sudo ./server/node.sh

echo ''
echo ''
echo '************* Installing Certbot and get SSL certs *******************'
# Note that installing and using certbot will both install and set up nginx on the server.
# EdEHR does not want nginx to run at this level because it runs nginx inside a Docker container.
# The getcert script will disable nginx from starting on reboot.
# install ....
sudo ./server/certbot.sh
# get SSL certs ...
sudo ./server/getcert.sh

echo ''
echo ''
echo '************* Clone and setup EdEHR project *******************'
./server/edehr_setup.sh

