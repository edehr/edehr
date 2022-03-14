#!/usr/bin/env bash

dapp=docker ps -aqf "name=edehrapp"
docker logs -f $dapp


