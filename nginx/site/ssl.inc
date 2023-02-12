  ssl_certificate /etc/nginx/ssl/live/_DOMAIN/fullchain.pem;
  ssl_certificate_key /etc/nginx/ssl/live/_DOMAIN/privkey.pem;
  # The folks at Let’s Encrypt maintain best-practice HTTPS configurations for nginx.
  # This will score you a straight A in the SSL Labs test!
  include /etc/nginx/ssl/options-ssl-nginx.conf;
  ssl_dhparam /etc/nginx/ssl/ssl-dhparams.pem;
