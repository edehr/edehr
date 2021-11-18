#!/usr/bin/env bash

## Setup nginx.  Note that the installation of certbot installs an nginx server. This script configures the install.
# Nginx is only used to run certbot. This setup adjusts the nginx configuration to know about this server's domain name.
# It also disables nginx from running after a reboot. This is not desired because the EdEHR nginx server will be running
# in a container. If the server is running nginx then the instance inside the container will not be visible.

function usage() {
    echo "Usage $0 with .env.setup file containing domain_name and cert_email_admin"
    cat <<-____HERE
    This script sets up SSL certs with certbot, without prompts.
    MUST run this script with sudo.
    It needs a local .env file with the domain name and cert_email_admin
____HERE
    exit 1
}

echo Import the configuration
. .env.setup

echo Domain "$domain_name"

if [[ -z "$domain_name" || -z "$cert_email_admin" ]]; then
    usage
    exit
fi

# this next step will adjust the nginx setup with the correct domain.
certbot --nginx --non-interactive --agree-tos --domains $domain_name --email $cert_email_admin

echo 'Stop nginx after obtaining the certs because EdEHR does not need nginx to run at the server level. It will run nginx in a Docker container.'
echo 'systemctl stop nginx'
systemctl stop nginx

echo 'Prevent this server level nginx from starting after a reboot'
echo 'systemctl disable nginx'
systemctl disable nginx

echo The next line should show nginx is disabled
sudo systemctl list-unit-files | grep nginx
