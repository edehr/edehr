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

Todo:  update this document if there is anything missing in the main readme.

In a browser test ```http://<domain>/api/launch_lti```.  You should see a "OK" response that will indicate the server API is running.
