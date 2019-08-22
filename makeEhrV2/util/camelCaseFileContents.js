const fs = require('fs')
const pathUtil = require('path')
const camelcase = require('camelcase')


const destination = pathUtil.join(process.cwd(), 'camelcase-output.txt')
const source = pathUtil.join(process.cwd(), 'camelcase-input.txt')
main()

function main () {
  fs.readFile(source, 'utf8', function (err, contents) {
    let lines = contents.split('\n')
    let newLines = lines.map( aLine => {
      return camelcase(aLine)
    })
    fs.writeFileSync(destination, newLines.join('\n'))
  })
}

function splitCamelCase (string) {
  return string.split(/(?=[A-Z])/g).join(' ')
}
