#!/bin/bash
## chmod u+x deploy.sh

./generateComponents.sh
./generateEhrDefs.sh

cd ../client
npm run lint

cd ../make