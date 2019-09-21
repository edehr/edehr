  ssl_certificate /etc/letsencrypt/live/_DOMAIN/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/_DOMAIN/privkey.pem;
  # The folks at Let’s Encrypt maintain best-practice HTTPS configurations for nginx.
  # This will score you a straight A in the SSL Labs test!
  include /etc/letsencrypt/options-ssl-nginx.conf;
  ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;