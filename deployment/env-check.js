const fs = require('fs')
const path = require('path')
const eFile = path.join(__dirname, '.env')
const envContents = fs.readFileSync(eFile, 'utf-8')
const envLines = envContents.split('\n').sort()

const toCheck = [
  'API_PORT=',
  'API_TOKEN=',
  'APP_TITLE=',
  'APP_VERSION=',
  'AUTH_TOKEN_SECRET=',
  'COOKIE_SECRET=',
  'DOMAIN=',
  'START_ARG=',
  'MONGODB_HOST=',
  'MONGODB_PORT=',
  'MONGODB_PWORD=',
  'MONGODB_USER=',
  'NODE_ENV='
]

// main ....
let globalValid = true
toCheck.forEach( v => globalValid = globalValid && testExists(v, true) )

if (testExists('NODE_ENV=production')) {
  console.log('production')
  globalValid = globalValid && testExists('STORAGE_BACKUPS=/')
  globalValid = globalValid && testExists('STORAGE_DB_SCRIPTS=/')
  globalValid = globalValid && testExists('STORAGE_DATABASE=/')
} else if (testExists('NODE_ENV=development')) {
  console.log('development')
  globalValid = globalValid && testExists('STORAGE_BACKUPS=')
  globalValid = globalValid && testExists('STORAGE_DB_SCRIPTS=')
  globalValid = globalValid && testExists('STORAGE_DATABASE=')
} else {
  console.log('Unexpected value in NODE_ENV')
  globalValid = false
}


if (globalValid) {
  console.log('Env check success')
} else {
  console.log('Env check fail')
  // console.log('Contents of .env file:')
  // console.log( envLines.join('\n'))
  process.exit(1)
}
// ... end main

function testExists(key, verbose) {
  const regexp = new RegExp('^' + key, 'g')
  const matches = envLines.filter(ev => null !== ev.match(regexp))
  // console.log(key, matches)
  let isValid = Array.isArray(matches) && matches.length === 1
  if (!isValid && verbose) {
    console.log('Environment variable check FAIL --- ', key, '---- FAILED')
    if (matches === null) console.log( key, 'is undefined')
    else if (matches.length > 1) console.log( key, 'is defined more than once')
  }
  return isValid
}
