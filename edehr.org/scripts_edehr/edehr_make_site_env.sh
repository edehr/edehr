#!/usr/bin/env bash

. .env
if [[ -z "$server_ip" || -z "$new_user" || -z "$domain" || -z "$subdomain" || -z "$secret" || -z "$cert_email_admin" || -z "$app_title" ]]; then
    echo Usage $0
    echo Must provide the .env file with server_ip, new_user, subdomain, domain and cert_email_admin and app_title
    echo And need a secret to use as the db, cookie and auth token secrets
    exit
fi

echo '************* Set up .env.site in deployment'
cat <<EOT > /opt/edehr/project/deployment/.env.site
SOURCE="This file was created via edehr setup scripts"
APP_TITLE=${app_title}
AUTH_TOKEN_SECRET=${secret}
COOKIE_SECRET=${secret}
DOMAIN=${domain}
MONGODB_PWORD=${secret}
SUBDOMAIN=${subdomain}
EOT



