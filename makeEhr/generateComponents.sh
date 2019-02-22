#!/bin/bash
## chmod u+x deploy.sh

# clean out previous generated files
rm generated/vue/*.vue

# run the generator
node generate-components

## The vue cli run prettier. This next call runs prettier on our generated file so we can checkin a file
## that is exactly what the vue cli wants.
node ../client/node_modules/\@vue/eslint-config-prettier/node_modules/.bin/prettier --write --no-semi --single-quote=true routes/insideRoutes.js
node ../client/node_modules/\@vue/eslint-config-prettier/node_modules/.bin/prettier --write --no-semi --single-quote=true routes/outsideRoutes.js

# place the generated content into the client
cp generated/vue/*.vue ../client/src/inside/views/
cp routes/menuList.json ../client/src/
cp routes/insideRoutes.js ../client/src/
cp routes/outsideRoutes.js ../client/src/
