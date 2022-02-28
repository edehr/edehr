# Create a new droplet
curl -X POST -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" -H 'Content-Type: application/json' -d @drop-def.json "https://api.digitalocean.com/v2/droplets"