#!/bin/bash
ALL=false
PORT=27000
for i in "$@"
do
echo i: $i
case $i in
    --all)
    ALL=true
    shift
    ;;
    --prod)
    echo Set port to 27004
    PORT=27004
    shift
    ;;
    *)
    echo unknown option $i. Options are --all or --prod
    exit 1
    # unknown option
    ;;
esac
done
echo Using port ${PORT}
mkdir -p dbDump
curl -s http://localhost:${PORT}/users  | json_pp > dbDump/users.json
curl -s http://localhost:${PORT}/visits | json_pp > dbDump/visits.json
curl -s http://localhost:${PORT}/activities | json_pp > dbDump/activities.json
curl -s http://localhost:${PORT}/activity-data | json_pp > dbDump/activity-data.json

curl -s http://localhost:${PORT}/seed-data | json_pp > dbDump/seed-data.json
curl -s http://localhost:${PORT}/consumers | json_pp > dbDump/consumers.json
curl -s http://localhost:${PORT}/assignments | json_pp > dbDump/assignments.json
curl -s http://localhost:${PORT}/integrations | json_pp > dbDump/integrations.json
