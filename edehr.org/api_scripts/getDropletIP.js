/* ************

This script is equal to the follow curl call but the script only shows ids and names

curl -X GET \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITALOCEAN_TOKEN" \
  "https://api.digitalocean.com/v2/droplets" | python -m json.tool

Prior to use you MUST define the DIGITALOCEAN_TOKEN environment variable. This token is your access to your DO account
export DIGITALOCEAN_TOKEN=4440....

*************************** */

const https = require('https')
const options = {
  host: 'api.digitalocean.com',
  port: 443,
  path: '/v2/droplets',
  method: 'GET',
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + process.env.DIGITALOCEAN_TOKEN
  }
};

https.get(options, res => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    data = JSON.parse(data);
    let droplets = data.droplets
    let lst = []
    droplets.forEach( droplet => {
      let d = {id:droplet.id, name: droplet.name}
      lst.push(d)
    })
    console.log(JSON.stringify(lst,null,2))
  })
}).on('error', err => {
  console.log(err.message);
})
