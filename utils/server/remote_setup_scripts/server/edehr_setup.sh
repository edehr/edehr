#!/usr/bin/env bash

function usage() {
    echo "Usage $0 plus read from local .env file to obtain domain_name and secret"
    cat <<-____HERE
    This script configures the edehr prod environment file
    It needs a local .env file with the domain name,
    auth token secret to be used in JWT and cookie secret

____HERE
    exit 1
}

echo Import the configuration
. .env.setup

echo "Set up EdEHR for $domain_name"

if [[ -z "$domain_name" || -z "$secret" ]]; then
    usage
    exit
fi

echo ''
echo ''
echo '************* Setup EdEHR project *******************'

if [ ! -d /opt/edehr/project ] ; then
  echo '************* Clone EdEHR project *******************'
  git clone https://github.com/edehr/edehr.git /opt/edehr/project
else
  echo '************* Git pull EdEHR project *******************'
  cd /opt/edehr/project || exit
  git pull
fi

./edehr_setenv.sh

./edehr_install.sh

./edehr_build.sh

./edehr_run.sh

