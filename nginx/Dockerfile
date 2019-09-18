FROM nginx:1.15-alpine

ARG DOMAIN
ARG PROXY_PASS
RUN echo "isProd $isProd"
RUN echo "DOMAIN $DOMAIN"
RUN echo "PROXY_PASS $PROXY_PASS"

RUN mkdir /etc/nginx/include
COPY  ./include/* /etc/nginx/include/
RUN grep -rl 'DOMAIN' /etc/nginx/include | xargs sed -i "s|DOMAIN|${DOMAIN}|g"
RUN grep -rl 'PROXY_PASS' /etc/nginx/include | xargs sed -i "s|PROXY_PASS|${PROXY_PASS}|g"
#RUN cat /etc/nginx/include/*

WORKDIR /etc/nginx/sites-enabled/
COPY ./nginx.site ./nginx.site
RUN   sed -i "s|DOMAIN|${DOMAIN}|g" ./nginx.site
RUN   sed -i "s|PROXY_PASS|${PROXY_PASS}|g" ./nginx.site

# RUN cat ./nginx.site

#    volumes:
#      - "./client/my-project/dist/:/usr/share/nginx/html/"
