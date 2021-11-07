#!/usr/bin/env bash

function usage() {
    echo "Usage $0 domain_name"
    cat <<-____HERE
    This script configures the edehr prod environment file
    It needs a local .env file with the domain name,
    auth token secret to be used in JWT
    cookie secret

____HERE
    exit 1
}

echo Import the configuration
. ../.env

echo Domain "$domain_name"

if [[ -z "$domain_name" || -z "$secret" ]]; then
    usage
    exit
fi

cd /opt/edehr
cd project
cd deployment
FILE=prod.env
BFILE=prod.env.bak
if [ ! -f "BFILE" ]; then
    cp $FILE $BFILE
fi
sed -i "s/AUTH_TOKEN_SECRET=changeThisJwtTokenSecretOnProdServer/AUTH_TOKEN_SECRET=${secret};/g" $FILE
sed -i "s/COOKIE_SECRET=changeThisCookieSecretOnProduction/COOKIE_SECRET=${secret};/g" $FILE
sed -i "s/MONGODB_PWORD=protectTheDatabase/MONGODB_PWORD=${secret};/g" $FILE

sed -i "s/API_HOST=edehr.org/API_HOST=${domain_name};/g" $FILE
sed -i "s/CLIENT_HOST=edehr.org/CLIENT_HOST=${domain_name};/g" $FILE

cat $FILE


