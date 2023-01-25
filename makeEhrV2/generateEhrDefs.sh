#!/bin/bash
## chmod u+x deploy.sh
# set to exit on error and pipe error to container script
set -e
set -o pipefail

# run the generator
node gen_defs/index.js

# place the generated content into the client
cp generated/ehrDefs/ehr-page-defs.js ../client/src/ehr-definitions/
cp generated/ehrDefs/ehr-page-defs.js ../server/src/ehr-definitions/
cp generated/ehrDefs/ehr-page-defs.js ../ehr-workspace/src/ehr-definitions/

cp source/ehr-types.js ../client/src/ehr-definitions/
cp source/ehr-types.js ../server/src/ehr-definitions/
cp source/ehr-types.js ../ehr-workspace/src/ehr-definitions/

# clean up generated files
#rm generated/ehrDefs/*.js
