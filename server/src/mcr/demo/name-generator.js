const fs = require('fs')
const path = require('path') // For resolving file paths

const adjectives = readFromFile(path.resolve(__dirname, 'adjectives.txt'))
const nouns = readFromFile(path.resolve(__dirname, 'nouns.txt'))

export function generateDemoName () {
  const randomPart = Math.random().toString(32).slice(-4)
  return generateRandomAdjectiveNoun() + '-' + randomPart
}
// Function to read the file and store the name parts into an array
function readFromFile (filePath) {
  try {
    // Read the file contents
    const data = fs.readFileSync(filePath, 'utf8')
    // Split the content by new lines to get each adjective into an array
    return data.split('\n').map(line => line.trim()).filter(Boolean)
  } catch (err) {
    console.error(`Error reading file from disk: ${err}`)
    return []
  }
}

function generateRandomAdjectiveNoun () {
  const randomAdjective = getRandomElement(adjectives)
  const randomNoun = getRandomElement(nouns)
  return `${randomAdjective}-${randomNoun}`
}
function getRandomElement (array) {
  return array[Math.floor(Math.random() * array.length)]
}
