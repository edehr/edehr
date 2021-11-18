#!/usr/bin/env bash

cd /opt/edehr/project/client || exit
npm run build

cd /opt/edehr/project/deployment  || exit
npm run prod:build

