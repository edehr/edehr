const fs = require('fs')

const getAdminPassword = () => {
  const token = fs.readFileSync('./src/config/admin-password.txt')
  return token.toString().trim()
}

const isAdminRequest = (request) => {
  const authPayload = request.authPayload
  return authPayload && authPayload.isAdmin
}
module.exports = {
  getAdminPassword,
  isAdminRequest
}
