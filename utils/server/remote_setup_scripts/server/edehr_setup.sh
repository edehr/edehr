#!/usr/bin/env bash

echo ''
echo ''
echo '************* Clone and setup EdEHR project *******************'
./edehr_clone.sh

./edehr_setenv.sh

./edehr_install.sh

./edehr_build.sh

./edehr_run.sh

