#!/bin/bash
# set to exit on error and pipe error to container script
set -e
set -o pipefail
## chmod u+x deploy.sh

# run the generator
node generate-components

# place the generated content into the client
cp generated/vue/*.vue ../client/src/inside/views/
cp routes/menuList.json ../client/src/
cp routes/insideRoutes.js ../client/src/
cp routes/outsideRoutes.js ../client/src/

# clean up generated files
rm generated/vue/*.vue
rm routes/menuList.json
rm routes/insideRoutes.js
rm routes/outsideRoutes.js
