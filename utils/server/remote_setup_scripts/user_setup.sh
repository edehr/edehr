#!/usr/bin/env bash

echo "Configure user profile to be ready to develop on this server? This is NOT needed to maintain a production system"
read -p "Continue? (Y/N): " confirm && [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]] || exit 1

# set ssh agent to start when user logs on.
./user/user_profile_ssh_add.sh

# set up useful aliases
./user/user_profile_alias.sh

echo "Configure git to enable development?"
read -p "Continue? (Y/N): " confirm && [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]] || exit 1
./user_setup_git.sh
