#!/usr/bin/env bash

cd /opt || exit
mkdir -p /opt/edehr
cd /opt/edehr || exit
git clone https://github.com/edehr/edehr.git project

chmod 770 /opt/edehr
chmod 770 -R /opt/edehr/*
chown -R root:edehr /opt/edehr/
exit
