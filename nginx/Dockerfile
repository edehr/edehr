FROM nginx:1.15-alpine

ARG DOMAIN
ARG PROXY_PASS_HOST
ARG SERVER_PORT
RUN echo "DOMAIN $DOMAIN"
RUN echo "PROXY_PASS_HOST $PROXY_PASS_HOST"
RUN echo "SERVER_PORT $SERVER_PORT"

WORKDIR /etc/nginx/
COPY ./nginx.conf ./nginx.conf

WORKDIR /etc/nginx/sites-enabled/
COPY ./site/* ./
RUN grep -rl 'DOMAIN' /etc/nginx/sites-enabled | xargs sed -i "s|DOMAIN|${DOMAIN}|g"
RUN grep -rl 'PROXY_PASS_HOST' /etc/nginx/sites-enabled | xargs sed -i "s|PROXY_PASS_HOST|${PROXY_PASS_HOST}|g"
RUN grep -rl 'SERVER_PORT' /etc/nginx/sites-enabled | xargs sed -i "s|SERVER_PORT|${SERVER_PORT}|g"
