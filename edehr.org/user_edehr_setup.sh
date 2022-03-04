#!/bin/bash
set -e
. ./env/.env
if [[ -z "$server_ip" || -z "$new_user" || -z "$domain" || -z "$secret" || -z "$cert_email_admin" || -z "$app_title" ]]; then
    echo Must provide the .env file with server_ip, new_user and domain and cert_email_admin and app_title
    echo And need a secret to use as the db, cookie and auth token secrets
    exit
fi
address=${new_user}"@"${server_ip}

read -p "Run edehr_pull? (Y/N): " confirm
if [[ $confirm == [yY] ]]; then
  echo ''
  echo '************* Run scripts_edehr/edehr_pull.sh'
  ssh "${address}" "bash -s" -- < ./scripts_edehr/edehr_pull.sh
fi

read -p "Setup remote .env files in scripts, deployment and client directories? (Y/N): " confirm
if [[ $confirm == [yY] ]]; then
  echo '************* Set up the edehr client .env.production file with the domain'
  #echo "When the Vue app is built all VUE_APP_ variables are substituted into the code."
  #echo "The client used the ROOT API value for its api calls."

  fname="env/.env.client.${domain}"
  echo "VUE_APP_ROOT_API=https://${domain}" > "${fname}"
  scp "${fname}" "${address}":/opt/edehr/project/client/.env.production

  echo '************* Set up .env.site in deployment'
  fname="env/.env.site.${domain}"
  cat <<EOT > "${fname}"
SOURCE="This file was created via edehr setup scripts"
AUTH_TOKEN_SECRET=${secret}
COOKIE_SECRET=${secret}
MONGODB_PWORD=${secret}
DOMAIN=${domain}
APP_TITLE=${app_title}
EOT
  scp "${fname}" "${address}":/opt/edehr/project/deployment/.env.site

  echo '************* Set up .env in scripts'
  fname="env/.env.scripts.${domain}"
  cat <<EOT > "${fname}"
SOURCE="This file was created via edehr setup scripts"
domain=${domain}
cert_email_admin=${cert_email_admin}
EOT
  scp "${fname}" "${address}":/opt/edehr/scripts/scripts_edehr/.env

fi

read -p "Run copy scripts to remote? (Y/N): " confirm
if [[ $confirm == [yY] ]]; then
  echo ''
  echo "************* Refresh set up scripts from local to ${server_ip} *********"
  echo "These are placed on the droplet for later use by a user who is working on the server"
  ssh  "${address}" mkdir -p /opt/edehr/scripts/scripts_edehr
  scp -r scripts_edehr/* "${address}":/opt/edehr/scripts/scripts_edehr

  ssh  "${address}" mkdir -p /opt/edehr/scripts/install_scripts
  scp -r install_scripts/* "${address}":/opt/edehr/scripts/install_scripts

  ssh  "${address}" chown -R "${new_user}":edehr /opt/edehr/scripts
fi

read -p "Run edehr_install? (Y/N): " confirm
if [[ $confirm == [yY] ]]; then
  echo ''
  echo '************* Run scripts_edehr/edehr_install.sh'
  ssh "${address}" "bash -s" -- < ./scripts_edehr/edehr_install.sh
fi
