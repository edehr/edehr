'use strict'
/*
Usage:

node convertMedication < drug.txt | sort > medicationsList.csv
 */
const csv = require('./csvLine')
const readLine = require('readline')

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

// no header needed
//console.log(header())

rl.on('line', function (line) {
  const cL = parseLine(line)
  if (cL) {
    console.log(cL)
  }
})

// Usage cat data.csv | node csvPipeExample.js > output.csv
function parseLine (input) {
  const lines = csv(input)
  const line = lines[0]
  const type = line[2] // human or Veterinary or ..
  let medication = line[4]
  if (type === 'Human') {
    medication = medication.toLowerCase()
    let parts = [medication]
    return parts.join(', ')
  }
}

function header() {
  const parts = []
  parts.push('"Medication"')
  return parts.join(', ')
}

