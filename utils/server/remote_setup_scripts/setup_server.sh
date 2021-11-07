#!/usr/bin/env bash

# run this script as a user with sudo on the server
# sudo ./setup_server.sh
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
echo '************* Installing Certbot *******************'
sudo ./server/certbot.sh

echo ''
echo ''
echo '************* Configure nginx start on boot *******************'
sudo ./server/nginx.sh
sudo ./server/getcert.sh

echo ''
echo ''
echo '************* Clone and setup EdEHR project *******************'
./server/edehr_install.sh

