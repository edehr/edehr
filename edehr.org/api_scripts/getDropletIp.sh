#!/usr/bin/env bash

: "${id:=$1}"

if [[ -z "${id}" ]]; then
    echo ******** Must provide the droplet id ********
    exit
fi

curl -X GET -H "Content-Type: application/json" -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" "https://api.digitalocean.com/v2/droplets/${id}"