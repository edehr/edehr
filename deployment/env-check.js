const fs = require('fs')
const path = require('path')
const eFile = path.join(__dirname, '.env')
const envContents = fs.readFileSync(eFile, 'utf-8')

const toCheck = [
  'API_PORT',
  'API_LOG_FILES_DIRECTORY',
  'APP_TITLE',
  'APP_VERSION',
  'AUTH_TOKEN_SECRET',
  'COOKIE_SECRET',
  'DOMAIN',
  'START_ARG',
  'MONGODB_HOST',
  'MONGODB_PORT',
  'MONGODB_PWORD',
  'MONGODB_USER',
  'VOLUME_STORAGE',
]

// main ....
let globalValid = true
toCheck.forEach( v => testExists(v) )
if (!globalValid) {
  const lines = envContents.split('\n').sort().join('\n')
  console.log('Contents of .env file:')
  console.log( lines)
  process.exit(1)
}
// ... end main

function testExists(key) {
  const regexp = new RegExp(key + '=', 'g')
  const matches = envContents.match(regexp);
  let isValid = Array.isArray(matches) && matches.length === 1
  if (!isValid) {
    console.log('Environment variable check FAIL --- ', key, '---- FAILED')
    if (matches === null) console.log( key, 'is undefined')
    else if (matches.length > 1) console.log( key, 'is defined more than once')
    globalValid = false
  }
}
