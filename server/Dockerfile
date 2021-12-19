FROM node:14-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

# The source code is put in place via a volume. See the docker-compose.yml files
# On MAC computers you will need to configure your Docker to share this source code folder.
# COPY src src
COPY index.js ./
COPY babel.config.js ./

# Don't need CMD because the docker-compose will define the start up command
# CMD [ "npm", "run", "start" ]
