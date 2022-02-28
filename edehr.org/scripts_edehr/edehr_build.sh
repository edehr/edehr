#!/usr/bin/env bash

sudo systemctl stop nginx
sudo service nginx status

cd /opt/edehr/project/client || exit
npm run build

cd /opt/edehr/project/deployment  || exit
npm run prod:build

