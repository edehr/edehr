const fs = require('fs')
const pathUtil = require('path')
let pug = require('pug');
const destination = './custom_forms/outputs'
const source = './custom_forms/inputs'
let sourceDir = pathUtil.join(__dirname, source)

console.log('sod', __dirname)
const list = fs.readdirSync(sourceDir)
list.forEach((srcFile)=> {
  const parts = srcFile.split('.')
  if (parts[1] === 'pug') {
    const fName = parts[0]
    let fSrc = pathUtil.join(source, fName + '.pug')
    let fDest = pathUtil.join(destination, fName + '.txt')
    let html = pug.renderFile(fSrc, {});
    fs.writeFileSync(fDest, html)
  }
})

