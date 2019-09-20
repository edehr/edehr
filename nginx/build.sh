#!/bin/sh

# use sh because nginx image does not have bash

set -e

function usage() {
    echo "Usage $0 is_prod DOMAIN PROXY_PASS_HOST SERVER_PORT"
    cat <<-____HERE
    This script is to be used by a Docker file to set up nginx
____HERE
    exit 1
}

: "${IS_PROD:=$1}"
: "${DOMAIN:=$2}"
: "${PROXY_PASS_HOST:=$3}"
: "${SERVER_PORT:=$4}"

if [[ -z "${IS_PROD}" ]]; then
    usage
    exit
fi
if [[ -z "${DOMAIN}" ]]; then
    usage
    exit
fi
if [[ -z "${PROXY_PASS_HOST}" ]]; then
    usage
    exit
fi
if [[ -z "${SERVER_PORT}" ]]; then
    usage
    exit
fi

grep -rl 'DOMAIN' /etc/nginx/sites-available | xargs sed -i "s|DOMAIN|${DOMAIN}|g"
grep -rl 'PROXY_PASS_HOST' /etc/nginx/sites-available | xargs sed -i "s|PROXY_PASS_HOST|${PROXY_PASS_HOST}|g"
grep -rl 'SERVER_PORT' /etc/nginx/sites-available | xargs sed -i "s|SERVER_PORT|${SERVER_PORT}|g"

if [[ "${IS_PROD}" = true ]]; then
  ln -s /etc/nginx/sites-available/edehr_prod.conf /etc/nginx/sites-enabled/default.conf
else
  ln -s /etc/nginx/sites-available/edehr_dev.conf /etc/nginx/sites-enabled/default.conf
fi
