#!/bin/bash
## chmod u+x deploy.sh

# clean out previous generated files
rm generated/ehrDefs/*.js

# run the generator
node generate-ehr-defs

# place the generated content into the client
cp generated/ehrDefs/*.js ../client/src/inside/defs/
