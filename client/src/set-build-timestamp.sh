#!/bin/bash
set -e

d=$(date +"%Y%m%dT%H%M")

if ! grep -q VUE_APP_BUILD_DATE .env; then
  echo -e "\nVUE_APP_BUILD_DATE=$d" >> .env
else
  sed  -E -i "s/\(VUE_APP_BUILD_DATE\).*$/\1=$d/g" .env
fi
