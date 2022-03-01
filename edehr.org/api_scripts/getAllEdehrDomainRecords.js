/* ************
Script to get all droplets and display just their name and id. The id can be used with
the api call "https://api.digitalocean.com/v2/droplets/<id>" to get any details.

https://docs.digitalocean.com/reference/api/api-reference/#tag/Droplets

This script is equal to the follow curl call but the script only shows ids and names

curl -X GET \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  "https://api.digitalocean.com/v2/droplets" | python -m json.tool

Prior to use you MUST define the DIGITALOCEAN_TOKEN environment variable.
This token is your access to your DO account
export DIGITALOCEAN_TOKEN=4440....

The following shows all the fields available:
  id: 999,
  name: 'debian-512mb',
  memory: 1024,
  vcpus: 1,
  disk: 30,
  locked: false,
  status: 'off',
  kernel: null,
  created_at: '2015-12-27T02:26:59Z',
  features: [Array],
  backup_ids: [Array],
  next_backup_window: [Object],
  snapshot_ids: [Array],
  image: [Object],
  volume_ids: [],
  size: [Object],
  size_slug: '1gb',
  networks: [Object],
  region: [Object],
  tags: [Array]
*************************** */

const httpGet = require('./httpGet')

if ( process.argv.length < 3) {
  console.error('Must provide domain on command line. E.g.\nnode', process.argv[1], 'example.com')
  process.exit()
}
const domain = process.argv[2]
const uPath = `/v2/domains/${domain}/records`
console.log('get path', uPath)

httpGet(uPath, (data) => {
  let domain_records = data.domain_records
  console.log(JSON.stringify(domain_records,null,2))
})
