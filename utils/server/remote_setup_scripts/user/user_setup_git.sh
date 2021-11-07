#!/usr/bin/env bash

echo "Set up git configuration"

read -p "git user name " name
read -p "git user email " email

git config --global user.email "${email}"
git config --global user.name "${name}"

git config --global user.name
git config --global user.email