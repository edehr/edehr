#!/usr/bin/env bash

cd /opt/edehr/project/client
npm run build:client

cd /opt/edehr/project/deployment
npm run prod:build

