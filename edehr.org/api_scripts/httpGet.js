const https = require('https')
if (! process.env.DIGITALOCEAN_TOKEN ) {
  console.error('Must declare token in environment')
  process.exit()
}

function httpGet(uPath, callback) {
  const options = {
    host: 'api.digitalocean.com',
    port: 443,
    path: uPath,
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
      const json = JSON.parse(data);
      callback(json)
    })
  }).on('error', err => {
    console.log(err.message);
  })
}

module.exports = httpGet