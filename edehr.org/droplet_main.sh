#!/bin/bash
set -e
. ./env/.env

read -p "Do you want to go edit your .env file? Select N if you wish to proceed. (Y/N): " confirm
if [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]]; then
  exit
fi

if [[ -z "$server_ip" ]]; then
    echo Must provide the .env file with server_ip
    exit
fi

read -p "Run droplet_setup?? (Y/N): " confirm
if [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]]; then
  ./droplet_setup.sh
fi

read -p "Run user_create?? (Y/N): " confirm
if [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]]; then
  ./user_create.sh
fi

read -p "Run user_setup?? (Y/N): " confirm
if [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]]; then
  ./user_setup.sh
fi

read -p "Run droplet_edehr_clone?? (Y/N): " confirm
if [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]]; then
  ./droplet_edehr_clone.sh
fi

read -p "Run user_edehr_setup?? (Y/N): " confirm
if [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]]; then
  ./user_edehr_setup.sh
fi

#read -p "Run droplet_scp_files?? (Y/N): " confirm
#if [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]]; then
#  ./droplet_scp_files.sh
#fi
