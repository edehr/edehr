## Build for Production

To run a production-ready instance you check out the code as above and have the prerequisite tools installed.
You have run the 'npm run install' set up script.

Step 0. Set up the site specific environment
```
cd /your/development/area
cd deployment
cp sample.env.site .env.site
vi .env.site
```

Make sure to modify the ``.env`` file so that it contains the correct values for your site.


Step 1. Build and publish the client vue project.
```
cd /your/development/area
cd client
npm run both
```

Step 2. Start the docker system
```
cd /your/development/area
cd deployment
# to build the containers and start attached to see debug logs
npm run prod:build
# to run containers that were built in detached mode
npm run prod:run
# to stop detached running containers
npm run prod:stop
```


## EHR screen generation
There are over 40 EHR screens that are generated using a Google spreadsheet.
For more information about this spreadsheet write an email to [info@edehr.org](mailto:info@edehr.org).
This spreadsheet defines each screen's form layout, table layout, modal forms and can include option 
default data to include in the case study "seed".

If you wish to make edits to the screens or the default data, copy a version of the spreadsheet 
to your own Google Drive account (downloading and opening in Excel is not supported) and make the edits there. 
Copy the data from the furthest right-hand columns into the raw data file in the ```makeEhrV2/raw_data``` directory.

Run the following command:
```
cd makeEhrV2
./deploy.sh
```
If you are making changes to view locally in multiple steps, you can shorten the time it takes to run the command  ```./deply.sh --noLint``` . 

# Updating SSL Cert on production with Certbot

```bash
# Stop the server
cd deployment
npm run prod:stop

# Run certbot to update the certs
sudo certbot

#Then find and stop all running nginx
# e.g. 
# sudo kill -QUIT 30708 

ps aux | grep nginx

# Then restart 
npm run prod:run
```



