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

: "${NODE_ENV:=$1}"
: "${DOMAIN:=$2}"
: "${PROXY_PASS_HOST:=$3}"
: "${SERVER_PORT:=$4}"

if [[ -z "${NODE_ENV}" ]]; then
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

grep -rl '_DOMAIN' /etc/nginx | xargs sed -i "s|_DOMAIN|${DOMAIN}|g"
grep -rl '_PROXY_PASS_HOST' /etc/nginx | xargs sed -i "s|_PROXY_PASS_HOST|${PROXY_PASS_HOST}|g"
grep -rl '_SERVER_PORT' /etc/nginx | xargs sed -i "s|_SERVER_PORT|${SERVER_PORT}|g"

if [[ "${NODE_ENV}" = 'production' ]]; then
  ln -s /etc/nginx/sites-available/edehr_prod.conf /etc/nginx/sites-enabled/default.conf
else
  ln -s /etc/nginx/sites-available/edehr_dev.conf /etc/nginx/sites-enabled/default.conf
fi

cat /etc/nginx/sites-enabled/up_stream.inc