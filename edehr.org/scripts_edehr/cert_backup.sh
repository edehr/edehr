#!/usr/bin/env bash

## Copies SSL certs to a folder for a backup process.

function usage() {
    echo "Usage $0 with .env file containing domain and cert_email_admin"
    cat <<-____HERE
    This script copies SSL certs to a folder for a backup process.
    It reads the .env from the deployment folder to obtain the subdomain name.
    User must have sudo rights
____HERE
    exit 1
}

# Read in env file to get domain and cert email
. /opt/edehr/project/deployment/.env
if [[ -z "${subdomain}" ]]; then
    usage
    exit
fi
echo subdomain "$subdomain"

target=/opt/edehr/certs
mkdir -p "$target"
sudo cp -R -p /etc/letsencrypt/archive/${subdomain}.edehr.org/ "$target"
sudo chown -R $UID "$target"
