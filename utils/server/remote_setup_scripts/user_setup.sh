#!/usr/bin/env bash

./user_profile_ssh_add.sh

./user_profile_alias.sh

echo "Configure git?"
read -p "Continue? (Y/N): " confirm && [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]] || exit 1
./user_setup_git.sh
