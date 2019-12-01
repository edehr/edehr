# Deploy instructions
On the server with a user that has sudo privileges


Install onto server
```
cd /opt
sudo git clone git@github.com:BCcampus/edehr.git
sudo chown -R "$USER":www-data edehr/
cd edehr
# See main readme for reamining install and statup instructions
```

On the server tweak this project's nginx configuration file as needed. See ```deployment/nginx.site```
Then link into the nginx system to make the site active. Restart nginx
```
ln -s /opt/edehr/deployment/nginx.site /etc/nginx/sites-available/edehr.conf
ln -s /etc/nginx/sites-available/edehr.conf /etc/nginx/sites-enabled/edehr.conf
sudo service nginx reload
```

In a browser test ```http://142.93.148.22/launch_lti``` (use your IP address)
