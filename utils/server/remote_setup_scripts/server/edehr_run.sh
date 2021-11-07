#!/usr/bin/env bash

sudo nginx -s stop

cd /opt/edehr/project/deployment
npm run prod:run