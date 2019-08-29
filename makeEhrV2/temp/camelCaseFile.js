const fs = require('fs')
const camelcase = require('camelcase')

main()

function main() {
  let content = fs.readFileSync('./dataCamelCase.txt', 'utf8')
  let lines = content.split('\n')
  let newLines = []
  lines.forEach(line => {
    newLines.push(camelcase(line))
  })
  let newContent = newLines.join('\n')
  fs.writeFileSync('./dataCamelCaseResult.txt', newContent)
  console.log('done')
}