FROM nginx:1.15-alpine

ARG NODE_ENV
ARG DOMAIN
ARG PROXY_PASS_HOST
ARG SERVER_PORT
RUN echo "NODE_ENV $NODE_ENV"
RUN echo "DOMAIN $DOMAIN"
RUN echo "PROXY_PASS_HOST $PROXY_PASS_HOST"
RUN echo "SERVER_PORT $SERVER_PORT"

WORKDIR /etc/nginx/
COPY ./nginx.conf ./nginx.conf

WORKDIR /etc/nginx/sites-available/
COPY ./site/*.conf ./
#RUN grep -rl 'DOMAIN' /etc/nginx/sites-enabled | xargs sed -i "s|DOMAIN|${DOMAIN}|g"

WORKDIR /etc/nginx/sites-enabled/
COPY ./site/*.inc ./

COPY build.sh /tmp/
RUN chmod u+x /tmp/build.sh
RUN /tmp/build.sh ${NODE_ENV} ${DOMAIN} ${PROXY_PASS_HOST} ${SERVER_PORT}
