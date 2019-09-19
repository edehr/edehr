#!/usr/bin/env bash

# ######################
# Run this script to start your prod
cp prod.env ./.env
docker-compose -f docker-compose-app.yml -f d-c-nginx.yml up --build

