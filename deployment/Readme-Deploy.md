# EdEHR Deployment

> Instructions for deploying EdEHR with Nginx (engine-X)

This readme assumes you know how to install and set up Nginx. 

Steps to set up.
   1. Edit the nginx.site file if needed
   2. Link the nginx.site file into your nginx sites-available folder.
   3. Link the linked file into the sites-enabled folder
   4. restart nginx
  
## On a Mac
Nginx location is  ``` /usr/local/etc/nginx/ ```      

Set up local web dns
``` 
sudo vi /etc/hosts
```
Add ``` 127.0.0.1       edehr.mac ```

Link up the Nginx site configuration file   
```
cd into this development folder
ln -s mac-dev.site /usr/local/etc/nginx/sites-available edehr.mac
cd /usr/local/etc/nginx/
ln -s sites-available/edehr.mac sites-enabled/edehr.mac
```



## On a public server
Nginx location is  ``` /... ```      

Link up the Nginx site configuration file   
```
cd into this development folder
ln -s nginx.site /.../sites-available edehr
cd ....
ln -s sites-available/edehr sites-enabled/edehr
```

