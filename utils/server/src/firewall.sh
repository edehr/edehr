#!/usr/bin/env bash

apt-get install -y ufw

ufw default deny incoming
ufw default allow outgoing

# open ssh port
#ufw allow "${ssh_port}"/tcp
sudo ufw allow ssh

# open http port
ufw allow 80/tcp
ufw allow 443/tcp

# open ntp port : to sync the clock of your machine
ufw allow 123/udp

# We can't turn on firewall yet as the SSH Port may have changed
# ufw --force enable

# list all the rules even though the firewall is not yet enabled
ufw show added

exit

