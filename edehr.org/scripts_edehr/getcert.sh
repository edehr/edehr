#!/usr/bin/env bash

## Setup nginx.  Note that the installation of certbot installs an nginx server. This script configures the install.
# Nginx is only used to run certbot. This setup adjusts the nginx configuration to know about this server's domain name.
# It also disables nginx from running after a reboot. Having nginx running blocks the EdEHR nginx server from running
# in a container.

function usage() {
    echo "Usage $0 with .env file containing domain and cert_email_admin"
    cat <<-____HERE
    This script sets up SSL certs with certbot, without prompts.
    It needs a local .env file with the domain name and cert_email_admin
____HERE
    exit 1
}

echo Import the configuration
. .env

echo Domain "$domain"

if [[ -z "$domain" || -z "$cert_email_admin" ]]; then
    usage
    exit
fi

# this next step will adjust the nginx setup with the correct domain.
sudo certbot --nginx --non-interactive --agree-tos --domains $domain --email $cert_email_admin

echo 'Stop nginx after obtaining the certs because EdEHR does not need nginx to run at the server level. It will run nginx in a Docker container.'
echo 'systemctl stop nginx'
sudo systemctl stop nginx

echo 'Prevent this server level nginx from starting after a reboot'
echo 'systemctl disable nginx'
sudo systemctl disable nginx

echo The next line should show nginx is disabled
sudo systemctl list-unit-files | grep nginx
