#!/usr/bin/env bash

## Install certbot.
# It was hard to find complete instructions for this task.
# See discussion here https://bryan-gilbert.github.io/may14/certbot/install.html

#echo "deb http://deb.debian.org/debian stretch-backports main" | tee -a /etc/apt/sources.list
#apt-get update
#apt-get install certbot -t stretch-backports -y

sudo apt install certbot python3-certbot-nginx

#verify
certbot --version
