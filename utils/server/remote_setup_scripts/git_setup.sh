#!/usr/bin/env bash

# THIS FILE IS NOT USED NOR READY.  It's to become a script about setting up a ssh key for use with ssh or git over ssh
export KF=may14-ecdsa
# Generate key, enter a password or passphrase when prompted
ssh-keygen -t ecdsa -b 256 -f $KF
ssh-add $KF