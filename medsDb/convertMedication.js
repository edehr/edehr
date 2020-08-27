'use strict'
/*
Usage:

  node convertMedication > medicationsList.json
 */
const csv = require('./csvLine')
const fs = require('fs')

const medList = []

const contents = fs.readFileSync('rawData/drug.txt', "utf-8")
contents.split('\n').forEach(line => {
  const aMed = parseLine(line)
  if (aMed) {
    medList.push(aMed)
  }
})
medList.sort((a,b) => {return a.name.localeCompare(b.name)} )
console.log(JSON.stringify(medList))

// Usage cat data.csv | node csvPipeExample.js > output.csv
function parseLine (input) {
  const lines = csv(input)
  if(lines.length > 0 ) {
    const line = lines[0]
    const code = line[0]
    const type = line[2] // human or Veterinary or ..
    const medication = line[4]
    if (type === 'Human') {
      const name = medication.toLowerCase()
      return {code: code, name: name, medication: medication}
    }
  }
}

