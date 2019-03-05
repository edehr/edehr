#!/bin/bash
## chmod u+x deploy.sh
LINT=false
for i in "$@"
do
echo i: $i
case $i in
    --lint)
    LINT=true
    shift
    ;;
    -l)
    LINT=true
    shift
    ;;
    *)
    echo unknown option $i. Options are -l --lint for Lint
    exit 1
    # unknown option
    ;;
esac
done

mkdir -p generated/vue
mkdir -p generated/ehrDefs
./generateComponents.sh
./generateEhrDefs.sh

if [[ "$LINT" == "true" ]]
then
  echo Linting client files, including newly generated files.
  cd ../client
  npm run lint
fi