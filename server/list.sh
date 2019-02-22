#!/bin/bash

## chmod u+x script.sh
curl http://localhost:27000/consumers | json_pp
curl http://localhost:27000/users | json_pp
curl http://localhost:27000/activities | json_pp
curl http://localhost:27000/visits | json_pp
curl http://localhost:27000/visitdata | json_pp
