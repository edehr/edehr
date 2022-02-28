#!/usr/bin/env bash

nginx_container_id=$(docker ps | grep nginx | awk '{print $1;}')
docker exec -it nginx_container_id /bin/sh