  location /api {
    #proxy_cache off;
    #proxy_cache off disables caching inherited from the previous configuration level.
    # https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_bypass
    proxy_cache_bypass $http_upgrade;
    proxy_http_version 1.1;
    proxy_max_temp_file_size 0;
    proxy_pass http://upstream-api;
    proxy_redirect off;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-NginX-Proxy true;
    proxy_set_header X-Real-IP $remote_addr;
  }
