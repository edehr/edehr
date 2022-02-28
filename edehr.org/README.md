# Secure Server Creation and Setup

Commands for creating and setting up a DigitalOcean virtual Debian server ready for hosting a edehr.org site.

Commands for installing and running an edehr.org site.

## Server Setup Features

The script configures / installs the following on the remote server:

  * sets the timezone to Vancouver, Canada
  * creates a new user
  * sets a password for the new user with a password provided
  * gives new newly created user sudo privileges
  * updates and upgrades all packages
  * installs: ufw, docker, docker-compose, git, curl, wget, nodejs, npm
  * replaces sshd_config with version that:
    * prohibits root logins
    * allows only users in the ssh-access group to ssh onto the server and only with ppk
  * configures ufw (uncomplicated firewall) to expose only the following ports:
    * 80, 443, 123 and the port used by the ssh daemon

## Generate SSH keys

The following can be used to generate a ssh key
```bash
ssh-keygen -t ecdsa -b 256 -f ~/.ssh/keyForDroplet.pub
```

## Usage

1) Create a droplet via the web interface or the commandline.
   1) Login to your Digital Ocean account and create a new virtual Debian v11 x64 server ("droplet").  The remote server must have your public ssh key installed -- for example `~/.ssh/key_edehr_org 
   2) Or use the scripts in the api_scripts folder
```bash
cd api_scripts

./createDroplet.sh

# get the IP address of the new droplet via the DO web site or with the script. Use the id returned in the create call above

./getDropletIp.sh
```

2) Set up the domain. E.g. xxx.edehr.org to the new IP address. Use the web interface.  Command line scripts can be developed later.

3) Then on your local machine edit the .env file based on sample.env.  Be sure to update the IP address with the new droplet's IP. Also, setup the secrets for the production instance.

```bash
cp sample.env .env
vi .env
```

4) Run the droplet setup script and then the user setup script from your local machine.

```bash
./droplet_main.sh
````


At some point be sure to run the script that disables root access
```bash
./enableUfw.sh
```

5) After the scripts have finished, ssh from your local machine onto the server.
```
./user_login.sh
```
Now continue the setup that can only be done while logged onto the server with a user account with sudo access.

```bash
cd /opt/edehr/scripts/scripts_edehr

```

## Digital Ocean metadata

When logged onto a droplet you can use the following to get host name and ip address.  The IP address
169.254.169.254 is a static IP that works from any droplet.

```
export HOSTNAME=$(curl -s http://169.254.169.254/metadata/v1/hostname)
export PUBLIC_IPV4=$(curl -s http://169.254.169.254/metadata/v1/interfaces/public/0/ipv4/address)
echo Droplet: $HOSTNAME, IP Address: $PUBLIC_IPV4
```