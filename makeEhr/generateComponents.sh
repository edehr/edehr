#!/bin/bash
## chmod u+x deploy.sh

# clean out previous generated files
rm generated/vue/*.vue

# run the generator
node generate-components

# place the generated content into the client
cp generated/vue/*.vue ../client/src/inside/views/
cp routes/menuList.json ../client/src/
cp routes/insideRoutes.js ../client/src/
cp routes/outsideRoutes.js ../client/src/
