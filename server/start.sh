#!/usr/bin/env bash

# ######################
# Run this script to start the server with several environmental variables preset.
# This is mainly for ad hoc use. The main way to start the server will be via a docker-compose file.

function usage() {
    echo "Usage $0 arg11"
    cat <<-____HERE
    This script will ...
____HERE
    exit 1
}

: "${domain:=$1}"
: "${api_url:=$2}"
: "${ssl_certificate:=3}"
: "${ssl_certificate_key:=4}"


if [[ -z "${domain}" ]]; then
    usage
    exit
fi
if [[ -z "${api_url}" ]]; then
    usage
    exit
fi
if [[ -z "${ssl_certificate}" ]]; then
    usage
    exit
fi
if [[ -z "${ssl_certificate}" ]]; then
    usage
    exit
fi

echo domain: "${domain}" api_url: "${api_url}"

