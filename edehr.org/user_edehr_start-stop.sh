#!/bin/bash
set -e
. ./env/.env
if [[ -z "$server_ip" || -z "$new_user" || -z "$domain" ]]; then
    echo Must provide the .env file with server_ip, new_user and domain
    exit
fi
address=${new_user}"@"${server_ip}

read -p "Invoke edehr_run? (Y/N): " confirm
if [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]]; then
  echo ''
  echo '************* Run scripts_edehr/edehr_run.sh'
  ssh "${address}" "bash -s" -- < ./scripts_edehr/edehr_run.sh
fi

read -p "Run edehr_stop? (Y/N): " confirm
if [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]]; then
  echo ''
  echo '************* Run scripts_edehr/edehr_stop.sh'
  ssh "${address}" "bash -s" -- < ./scripts_edehr/edehr_stop.sh
fi

