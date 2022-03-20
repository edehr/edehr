#!/usr/bin/env bash
export dng=$(docker ps -aqf "name=nginx")
export dapp=$(docker ps -aqf "name=edehrapp")
export ddb=$(docker ps -aqf "name=mongo")

alias dlng="docker logs -f $dng"
alias dlapp="docker logs -f $dapp"
alias dldb="docker logs -f $dapp"

alias deng="docker exec -it $dng /bin/sh"
alias deapp="docker exec -it $dapp /bin/sh"
alias dedb="docker exec -it $dapp /bin/sh"

alias denv='source /opt/edehr/scripts/scripts_edehr/edehr_docker_containers_env.sh'

echo "Use alias 'denv' to load this file again after docker build."
echo "Use the aliases dlng, dlapp, dldb to follow the logs from a container"
echo "Use the aliases deng, deapp, and dedb to get into container with exec"