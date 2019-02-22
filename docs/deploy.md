# Deploy instructions
On the server with a user that has sudo privileges

Copy deployment/nginx.site into the /etc/nginx/sites-available directory.  
Tweak as needed. Then link to make the site active. Restart nginx
```
cd /etc/nginx/sites-enabled
ln -s ../sites-available/nginx.conf edehr
sudo service nginx reload
```

Set up the repros
```
cd /opt
sudo git clone https://github.com/bryan-gilbert/proto-EdEHR.git
sudo git clone https://github.com/bryan-gilbert/ims-lti.git
sudo chown -R "$USER":www-data proto-EdEHR/
sudo chown -R "$USER":www-data ims-lti/
cd proto-EdEHR/
# the repro, at this time, has stuff in node_modules that needs to be removed
cd node_modules
rm -Rf *
cd ..
# at this time the package lock file is not stable so remove it too
rm package-lock.json
# import our LTI repro
npm install ../ims-lti --save
# install the rest
npm install
#run
DEBUG=server node ./server/bin/www
```

In a browswer test ```http://142.93.148.22/launch_lti```

### ToDo
   - Run app with PM2 so it restarts after reboot
   - Add SSL
   - session tracking
   - nonce tracing
   

