const fs = require('fs')
const { nanoid } = require('nanoid')


const generateAdminPassword = () => {
  const id = nanoid()
  fs.writeFile('./src/config/admin-password.txt', id, (err) => {
    if (err) throw err
    console.log('generate-admin-password >> file saved!')
  })
  return id
}

const getAdminPassword = () => {
  const token = fs.readFileSync('./src/config/admin-password.txt')
  return token.toString()
}

module.exports = { 
  generateAdminPassword,
  getAdminPassword
}