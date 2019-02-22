# EdEHR Client

Once this VUE project is built the ```dist``` folder provides the static HTML, CSS and JS for the EdEHR project.

Just need to set your web server to serve the root ```index.html``` file.

## Nginx setup
```
server {
  listen 80;
  server_name ...
  root <path to this project>/dist/;
  ...
  location / {
    try_files $uri $uri/ /index.html;
  }
```

The try_files directive is required to redirect all urls back to the root Vue file so the Vue router can parse the url and redirect as needed.

See the readme and the nginx configuration files in the ```deployment``` directory.

  
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run start
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```