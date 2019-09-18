#!/bin/bash

function usage() {
    echo "Usage $0 domain email --staging (optional)"
    cat <<-____HERE
    This script is based on the article by Phillip at https://medium.com/@pentacent.
    You must provide the domain name and email address for certbot certification.
    Optionally, add --staging if you're testing your setup to avoid hitting request limits.
____HERE
    exit 1
}

if ! [ -x "$(command -v docker-compose)" ]; then
  echo 'Error: docker-compose is not installed.' >&2
  exit 1
fi

: "${domain:=$1}"
if [[ -z "${domain}" ]]; then
    usage
    exit
fi
domains=("${domain}" www."${domain}")

: "${email:=$2}"
if [[ -z "${email}" ]]; then
    usage
    exit
fi

: "${staging:=$3}"
if [[ -z "${staging}" ]]; then
    staging=0
else
    staging=1
fi

rsa_key_size=4096

echo Domain: ${domain}
echo Domains: "${domains[0]}" "${domains[1]}"
echo Email: ${email}
echo Staging: ${staging}
read -p "Continue? (Y/N): " confirm && [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]] || exit 1

if [ -d "$domain" ]; then
  cd ${domain}
else
  echo "Create a subdirectory with configuration files ready for domain: ${domain}"
  mkdir -p ${domain}/data/nginx
  sed "s/DOMAIN/${domain}/g" ./source/app.conf > ${domain}/data/nginx/app.conf
  sed "s/DOMAIN/${domain}/g" ./source/docker-compose.yml > ${domain}/docker-compose.yml
  cd ${domain}
fi

data_path="./data/certbot"

if [ -d "$data_path" ]; then
  read -p "Existing data found for $domains. Continue and replace existing certificate? (y/N) " decision
  if [ "$decision" != "Y" ] && [ "$decision" != "y" ]; then
    exit
  fi
fi

if [ ! -e "$data_path/conf/options-ssl-nginx.conf" ] || [ ! -e "$data_path/conf/ssl-dhparams.pem" ]; then
  echo "### Downloading recommended TLS parameters ..."
  mkdir -p "$data_path/conf"
  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/options-ssl-nginx.conf > "$data_path/conf/options-ssl-nginx.conf"
  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot/ssl-dhparams.pem > "$data_path/conf/ssl-dhparams.pem"
  echo
fi

echo "### Creating dummy certificate for $domains ..."
path="/etc/letsencrypt/live/$domains"
mkdir -p "$data_path/conf/live/$domains"
docker-compose run --rm --entrypoint "\
  openssl req -x509 -nodes -newkey rsa:1024 -days 1\
    -keyout '$path/privkey.pem' \
    -out '$path/fullchain.pem' \
    -subj '/CN=localhost'" certbot
echo


echo "### Starting nginx ..."
docker-compose up --force-recreate -d nginx
echo

echo "### Deleting dummy certificate for $domains ..."
docker-compose run --rm --entrypoint "\
  rm -Rf /etc/letsencrypt/live/$domains && \
  rm -Rf /etc/letsencrypt/archive/$domains && \
  rm -Rf /etc/letsencrypt/renewal/$domains.conf" certbot
echo


echo "### Requesting Let's Encrypt certificate for $domains ..."
#Join $domains to -d args
domain_args=""
for domain in "${domains[@]}"; do
  domain_args="$domain_args -d $domain"
done

# Select appropriate email arg
case "$email" in
  "") email_arg="--register-unsafely-without-email" ;;
  *) email_arg="--email $email" ;;
esac

# Enable staging mode if needed
if [ $staging != "0" ]; then staging_arg="--staging"; fi

docker-compose run --rm --entrypoint "\
  certbot certonly --webroot -w /var/www/certbot \
    $staging_arg \
    $email_arg \
    $domain_args \
    --rsa-key-size $rsa_key_size \
    --agree-tos \
    --force-renewal" certbot
echo

echo "### Reloading nginx ..."
docker-compose exec nginx nginx -s reload
