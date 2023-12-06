// https://developers.google.com/sheets/api/quickstart/nodejs
const fs = require('fs')
const readline = require('readline')
const { google } = require('googleapis')

// V2.3.8
// const INPUT_SPREADSHEET_ID = '1rmzLnZ9CVCN6zZoeRrZsVhNevwbujVrZAOqX27pVlWo'
// V2.3.8
const INPUT_SPREADSHEET_ID = '1ly3i5oLq7Y-Z7MdszlKoaH-2lJj8i3oLaAqrt6F74J4'

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = '.token.json'


// inputType	pRef	Label	Comments	elementKey	pN	fN	gN	sgN	formCss	formOption	tableLabel	tableColumn	tableCss	addButtonText	dependentOn	Default_value	Options	Suffix	Mandatory	Validation	assetBase	assetName	helperText passToFunction calculationType tableAction tableActionLabel

function getSheets(auth) {
  const sheets = google.sheets({ version: 'v4', auth })
  const RANGE = '!AG2:BI400'
  const MLRANGE = '!AG2:BJ900'
  getSheet(sheets, INPUT_SPREADSHEET_ID, 'pages!N2:W100', 'raw_data/inside-pages.txt')
  getSheet(sheets, INPUT_SPREADSHEET_ID, 'External'+RANGE, 'raw_data/external-resources.txt')
  getSheet(sheets, INPUT_SPREADSHEET_ID, 'pProfile'+RANGE, 'raw_data/patient-profile.txt')
  getSheet(sheets, INPUT_SPREADSHEET_ID, 'pChart'+RANGE, 'raw_data/patient-chart.txt')
  getSheet(sheets, INPUT_SPREADSHEET_ID, 'pChart-2'+RANGE, 'raw_data/patient-chart-2.txt')
  getSheet(sheets, INPUT_SPREADSHEET_ID, 'TestPage'+RANGE, 'raw_data/test-page.txt')
  getSheet(sheets, INPUT_SPREADSHEET_ID, 'CV-1'+RANGE, 'raw_data/current-visit-1.txt')
  getSheet(sheets, INPUT_SPREADSHEET_ID, 'CV-2'+RANGE, 'raw_data/current-visit-2.txt')
  getSheet(sheets, INPUT_SPREADSHEET_ID, 'CV-3'+RANGE, 'raw_data/current-visit-3.txt')
  getSheet(sheets, INPUT_SPREADSHEET_ID, 'CV-Mar'+RANGE, 'raw_data/current-mar.txt')
  getSheet(sheets, INPUT_SPREADSHEET_ID, 'CV-4'+RANGE, 'raw_data/current-visit-4.txt')
  getSheet(sheets, INPUT_SPREADSHEET_ID, 'medLab'+MLRANGE, 'raw_data/med-lab.txt')
}

function getSheet(sheets, sheetId, range, fName) {
  sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: range
  }, (err, res) => {
    if (err) {
      console.error('API get sheet ', range, fName, ' error: ', err)
      if (err.message.includes('invalid_grant')) {
        console.error('Google access expired. Delete .token.json. Rerun and use provided link to get new token.')
      }
      throw new Error(err)
    }
    const rows = res.data.values
    if (rows.length) {
      const data = []
      rows.map((row) => {
        const rowData = []
        row.map((elem) => {
          // wrap items with linefeeds in quotes
          if (elem.indexOf('\n') > -1) {
            const lines = elem.split('\n').map( line => line.trim())
            rowData.push(`"${lines.join('\n')}"`)
          } else {
            rowData.push(elem)
          }
        })
        // converting CSV to TSV
        data.push(rowData.join('\t'))
      })
      fs.writeFile(fName, data.join('\n'), 'utf8', (err) => {
        if (err) return console.error('Error writing file ', fName, ' error: ', err)
        console.log('Saved data in', fName)
      })
    } else {
      console.log('No data found for', range, fName)
    }
  })
}


// ... MAIN ...
// Load client secrets from a local file.
fs.readFile('.credentials.json', 'utf8', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err)
  // Authorize a client with credentials, then call the Google Sheets API.
  authorize(JSON.parse(content), getSheets)
})

// Auth helpers and follow ....

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0])

  if (fs.existsSync(TOKEN_PATH)) {
    const token = fs.readFileSync(TOKEN_PATH,'utf-8')
    oAuth2Client.setCredentials(JSON.parse(token))
    callback(oAuth2Client)
  } else {
    getNewToken(oAuth2Client, callback)
  }
  // Check if we have previously stored a token.
  // fs.readFile(TOKEN_PATH, 'utf-8', (err, token) => {
  //   if (err) {
  //     return getNewToken(oAuth2Client, callback)
  //   }
  //   oAuth2Client.setCredentials(JSON.parse(token))
  //   callback(oAuth2Client)
  // })
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  })
  console.log('Authorize this app by visiting this url:')
  console.log(authUrl)
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close()
    oAuth2Client.getToken(code, (err, token) => {
      if (err) {
        console.error('Error while trying to retrieve access token', err.response.config)
        process.exit(1)
      }
      oAuth2Client.setCredentials(token)
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err)
        console.log('Token stored to', TOKEN_PATH)
      })
      callback(oAuth2Client)
    })
  })
}
