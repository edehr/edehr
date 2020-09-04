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
  * if zsh is selected as the shell, installs oh-my-zsh and the bullet-train-theme
  * replaces sshd_config with version that:
    * prohibits root logins
    * allows only you access with your public key
    * configures the ssh port selected
  * configures ufw (uncomplicated firewall) to expose only the following ports:
    * 80, 443, 123 and the port used by the ssh daemon

## Generate SSH keys

The following can be used to generate a ssh key
```bash
ssh-keygen -t ecdsa -b 256 -f ~/.ssh/keyForDroplet.pub
```

## Usage

1) Login to your Digital Ocean account and create a new virtual Ubuntu 20.4 server ("droplet").  The remote server must have your public ssh key installed -- for example `~/.ssh/id_rsa.pub

2) Then on a local machine

```bash
cp sample.env .env
```
Edit your .env settings

3) Run

```bash
./droplet_setup.sh
```

```bash
./user_ufw_setup.sh
```

5) After the scripts have finished, ssh from your local machine:
```bash
ssh <NEW_USER_NAME>@<IP_ADDRESS_OF_REMOTE_SERVER> -p <PORT>
```


6) edEHR setup

TO DO .. flush out the following documentation

- run ccertbot
- stop ngix left from certbot
- build the client dist (cd client and run build)
- check .env and configs all have correct domain and secrets\
- run server and test

## SSH Port
The droplet configure script allows you to change the default SSH port (22) to whatever else you may wish.
This is enhances security through obscurity. It does dramatically reduce the number of log entries in the system
files that track access requests because it eliminates all but the most tenacious malicious bots.
 

## Shell
The droplet configure script allows for the admin user to have bash or zsh shell.

## Digital Ocean metadata

```
export HOSTNAME=$(curl -s http://169.254.169.254/metadata/v1/hostname)
export PUBLIC_IPV4=$(curl -s http://169.254.169.254/metadata/v1/interfaces/public/0/ipv4/address)
echo Droplet: $HOSTNAME, IP Address: $PUBLIC_IPV4
```
