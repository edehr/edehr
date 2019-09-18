# Init Lets Encrypt


Content is copied from https://medium.com/@pentacent/nginx-and-lets-encrypt-with-docker-in-less-than-5-minutes-b4b8a60d3a71


We need nginx to perform the Let’s Encrypt validation But nginx won’t start if the certificates are missing. So what do we do? Create a dummy certificate, start nginx, delete the dummy and request the real certificates. Luckily, you don’t have to do all this manually, I have created a convenient script for this.

Download the script to your working directory as init-letsencrypt.sh:

```
curl -L https://raw.githubusercontent.com/wmnnd/nginx-certbot/master/init-letsencrypt.sh > init-letsencrypt.sh
```

Edit the script to add in your domain(s) and your email address. If you’ve changed the directories of the shared Docker volumes, make sure you also adjust the data_path variable as well. Then run chmod +x init-letsencrypt.sh and sudo ./init-letsencrypt.sh.
