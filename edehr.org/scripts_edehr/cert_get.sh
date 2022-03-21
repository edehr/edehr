#!/usr/bin/env bash

## Run CERTBOT to get SSL certs.
# Runs the cert_backup.sh script to make a copy of the certs for a backup process.
# Note that the installation of certbot installs an nginx server.
# This script also configures the installed nginx to not run except when needed by this script.
# It also disables nginx from running after a reboot.
# Note that having nginx running blocks the EdEHR nginx server from running in a container.

function usage() {
    echo "Usage $0 with .env file containing domain and cert_email_admin"
    cat <<-____HERE
    This script sets up SSL certs with certbot, without prompts.
    User must have sudo rights.
    It needs a local .env file with the domain name and cert_email_admin
____HERE
    exit 1
}

# Read in env file to get domain and cert email
. .env
if [[ -z "${cert_email_admin}" || -z "${domain}" ]]; then
    usage
    exit
fi
echo Domain "$domain"
echo Cert email "$cert_email_admin"

# this next step will adjust the nginx setup with the correct domain.
sudo certbot --nginx --non-interactive --agree-tos --domains $domain --email $cert_email_admin

sh ./cert_backup.sh

echo 'Stop nginx after obtaining the certs because EdEHR does not need nginx to run at the server level. It will run nginx in a Docker container.'
echo 'systemctl stop nginx'
sudo systemctl stop nginx

echo 'Prevent this server level nginx from starting after a reboot'
echo 'systemctl disable nginx'
sudo systemctl disable nginx

echo The next line should show nginx is disabled
sudo systemctl list-unit-files | grep nginx
