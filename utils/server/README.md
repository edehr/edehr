# Basic Secure Server

A command-line script for building a basic secure server on Digital Ocean

## Features

The script configures / installs the following on the remote server:

  * sets the timezone to Vancouver, Canada
  * creates a new user
  * sets a password for the new user with a password provided
  * gives new newly created user sudo privilages
  * updates and upgrades all packages
  * installs: ufw, docker, docker-compose, git, curl, zsh, wget, nodejs, npm
  * replaces sshd_config with version that:
    * prohibits root logins
    * allows only you access with your public key
    * configures the ssh port selected
  * configures ufw (uncomplicated firewall) to expose only the following ports:
    * 80, 443, 123 and the port used by the ssh daemon
    * block IPv6
  * uses certbot to obtain SSL certs
  * sets up the EdEHR application

## Generate SSH keys

The following can be used to generate an ssh key
```bash
ssh-keygen -t ecdsa -b 256 -f ~/.ssh/keyForDroplet.pub
```

## Server setup

The goal is to be able to easily setup a server, from the developer's computer. This server must be locked down to prevent root access, to prevent password login (requires ssh key), and to create one non-root user with sudo privileges. The setup copies more setup script files to the remote server to be used to complete the setup.  This documentation describes how the edehr.org Saas manages this task.  In brief, we create a virtual server on DigitalOcean and then configure it.


1) Login to your Digital Ocean account and create a new virtual Debian (latest stable) server ("droplet").  The remote server must have your public ssh key installed -- for example ```~/.ssh/id_rsa.pub```
2) Set up DNS and A records for for the new domain (subdomain). 
3) On the development machine, in a terminal session, change directory to the ```/utils/server``` folder. 
   1) Copy the sample .env files and edit as needed
```bash
cp sample.env.setup .env.setup
cp sample.env.user .env.user
```
4) Run ```./droplet_setup.sh```.  This step secures the ssh access, sets up the firewall, and a new non-root user with sudo rights.
5) Follow the instructions at the end of the above
6) The instructions will say to log on as your new user and complete the setup. This includes installing docker, certbot, etc, and includes setting up SSL certs and cloning the EdEHR application, as well as setting up the application and running it.
