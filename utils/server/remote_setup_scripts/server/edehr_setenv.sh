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

echo Domain "$domain_name"

if [[ -z "$domain_name" || -z "$secret" ]]; then
    usage
    exit
fi

FILE=/opt/edehr/project/deployment/prod.env
sed -i "s/AUTH_TOKEN_SECRET=.*/AUTH_TOKEN_SECRET=${secret}/g" $FILE
sed -i "s/COOKIE_SECRET=.*/COOKIE_SECRET=${secret}/g" $FILE
sed -i "s/MONGODB_PWORD=.*/MONGODB_PWORD=${secret}/g" $FILE
sed -i "s/API_HOST=.*/API_HOST=${domain_name}/g" $FILE
sed -i "s/CLIENT_HOST=.*/CLIENT_HOST=${domain_name}/g" $FILE
echo ''
echo "Deployment environment file ${FILE} contains"
cat $FILE

CLIENT_ENV=/opt/edehr/project/client/.env.production
echo VUE_APP_ROOT_API=https://"${domain_name}"/api > $CLIENT_ENV
echo ''
echo VUE Client env file: "${CLIENT_ENV} contains:"
cat $CLIENT_ENV
