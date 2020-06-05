const fs = require('fs')
const { nanoid } = require('nanoid')
const debug = require('debug')('server')

const generateAdminPassword = () => {
  const id = nanoid()
  fs.writeFile('./src/config/admin-password.txt', id, (err) => {
    if (err) throw err
    debug('generate-admin-password >> file saved!')
  })
  return id
}

const getAdminPassword = () => {
  const token = fs.readFileSync('./src/config/admin-password.txt')
  return token.toString()
}

const getCreateAdminPassword = () => {
  const password = getAdminPassword()
  debug('gotAdminPassword', password)  
  if (password) {
    return password
  } 
  return generateAdminPassword()

}

module.exports = { 
  generateAdminPassword,
  getAdminPassword,
  getCreateAdminPassword
}