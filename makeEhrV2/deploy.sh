#!/bin/bash
## chmod u+x deploy.sh
# set to exit on error and pipe error to container script
set -e
set -o pipefail

function usage() {
    echo "Usage $0 "
    cat <<-____HERE
    This script will generate the EHR page definitions based on the definitions extracted from the master
    spreadsheet.

    Options are
    -nl --npLint for no linting
    -np --nopull for no pull from the spreadsheet
    -a --all to ignore hashmap and rebuild all pages
____HERE
    exit 1
}

LINT=true
PULL=true
ALL=false
for i in "$@"
do
echo i: $i
case $i in
    --all)
    ALL=true
    shift
    ;;
    -a)
    ALL=true
    shift
    ;;
    --nopull)
    PULL=false
    shift
    ;;
    -np)
    PULL=false
    shift
    ;;
    --noLint)
    LINT=false
    shift
    ;;
    -nl)
    LINT=false
    shift
    ;;
    *)
    echo unknown option $i.
    usage
    # unknown option
    ;;
esac
done

if [[ "$ALL" == "true" ]]
then
  rm -f hashMapFile.json
fi

if [[ "$PULL" == "true" ]]
then
  node pullFromSheets.js
fi

mkdir -p generated/vue
mkdir -p generated/ehrDefs
./generateComponents.sh
./generateEhrDefs.sh
./copy-common-src.sh

if [[ "$LINT" == "true" ]]
then
  echo Run tests on EHR workspace
  echo Linting client files, including newly generated files.
  cd ../client &&  npm run lint
  cd ../server &&  npm run lint
  cd ../ehr-workspace && npm run test
fi



