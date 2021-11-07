#!/usr/bin/env bash

## Setup nginx.  Note that the installation of certbot installs an nginx server. This script configures the install.
# Nginx is only used to run certbot. This setup adjusts the nginx configuration to know about this server's domain name.
# It also disables nginx from running after a reboot. This is not desired because the EdEHR nginx server will be running
# in a container. If the server is running nginx then the instance inside the container will not be visible.

function usage() {
    echo "Usage $0 domain_name"
    cat <<-____HERE
    This script configures the host's copy of nginx which is only used to run certbot (get SSL cert).
    Must run this script with sudo.
    It needs a local .env file with the domain name.
____HERE
    exit 1
}

echo Import the configuration
. ../.env

echo Domain "$domain_name"

if [[ -z "$domain_name" ]]; then
    usage
    exit
fi

systemctl disable nginx
nginx -t
systemctl status nginx
systemctl stop nginx

FILE=/etc/nginx/sites-available/default
BFILE=/etc/nginx/sites-available/default.bak
if [ ! -f "BFILE" ]; then
    cp $FILE $BFILE
fi
sed -i "s/server_name _;/server_name ${domain_name} www.${domain_name};/g" $FILE

# test configuration
nginx -t
# reload after changes
systemctl start nginx
#systemctl reload nginx
