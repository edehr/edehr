#!/usr/bin/env bash

# ######################
# Run this script to start your dev
cp dev.env ./.env
docker-compose -f docker-compose-app.yml up --build

