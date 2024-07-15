#!/bin/bash
set -e

# Use to explore user and permission and env issues
#echo "Running as user: $(whoami)"
#echo "Environment variables:"
#printenv

# Mongodb recommends adjusting THP but this has to be done in the container host
#echo 'never' > /sys/kernel/mm/transparent_hugepage/enabled
#echo 'never' > /sys/kernel/mm/transparent_hugepage/defrag

# Create the log directory if it doesn't exist
mkdir -p /var/log/mongodb

# Change ownership to mongod user
chown -R mongodb:mongodb /var/log/mongodb

echo Execute the original MongoDB entrypoint:  "$@"
echo GO...
exec /usr/local/bin/docker-entrypoint.sh "$@"
echo ... DONE
