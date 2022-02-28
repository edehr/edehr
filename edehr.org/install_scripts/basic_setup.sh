#!/usr/bin/env bash

echo Set timezone
timedatectl set-timezone America/Vancouver

echo DigitalOcean recommends next line. See https://www.digitalocean.com/community/questions/debian-9-3-droplet-issues-with-useradd
apt-get remove -y unscd

echo Update system
apt-get update && apt-get -y upgrade

echo Installing essentials
apt-get install -y git curl git-core wget

exit
