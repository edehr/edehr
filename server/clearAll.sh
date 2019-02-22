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
curl -X DELETE http://localhost:${PORT}/users/all | json_pp
curl -X DELETE http://localhost:${PORT}/visits/all | json_pp
curl -X DELETE http://localhost:${PORT}/activities/all | json_pp
curl -X DELETE http://localhost:${PORT}/activity-data/all | json_pp

if [[ "$ALL" == "true" ]]
then
  echo Clean everything
  curl -X DELETE http://localhost:${PORT}/consumers/all | json_pp
  curl -X DELETE http://localhost:${PORT}/assignments/all | json_pp
  curl -X DELETE http://localhost:${PORT}/integrations/all | json_pp
fi
