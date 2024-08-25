FROM node:20

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy both the package.json and the package-lock.json
COPY package*.json ./
COPY checkNodeVersion.mjs ./

# Force git to use https and not git protocol. Need this for the lti module
RUN git config --global url."https://github.com/".insteadOf ssh://git@github.com/

# Install based on the package-lock.json file contents....
RUN npm ci

COPY babel.config.json ./

COPY src ./src

RUN npm run build

# The source code is put in place via a volume. See the docker-compose.yml files
# On MAC computers you will need to configure your Docker to share this source code folder.
# COPY src src
#COPY index.js ./

# Don't need CMD because the docker-compose will define the start up command
# CMD [ "npm", "run", "start" ]
