#!/usr/bin/env bash

# ######################
# Run this script to start your prod
docker-compose -f docker-compose-app.yml -f d-c-nginx.yml up -d
