import axios from 'axios'
import StoreHelper from './store-helper'

const debugA = false

class AuthHelper {
  // Overall auth logic
  getToken (refreshToken) {
    if (debugA) console.log('AuthHelper getToken ')
    const apiUrl = StoreHelper.apiUrlGet()
    const url = `${apiUrl}/auth/refresh`
    return axios.post(url, {refreshToken})
  }

  hashToken (token) {
    if (!token) return 0
    const str = token
    // from https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
    let hash = 0
    if (str.length === 0) return hash
    for (let i = 0; i < str.length; i++) {
      const chr = str.charCodeAt(i)
      hash = ((hash << 5) - hash) + chr
      hash |= 0 // Convert to 32bit integer
    }
    return hash
  }

  getData () {
    if (debugA) console.log('AuthHelper getData ')
    const apiUrl = StoreHelper.apiUrlGet()
    const url = `${apiUrl}/auth/`
    return axios.post(url, null)
  }
  // Admin requests
  adminLogin (adminPass) {
    if (debugA) console.log('AuthHelper adminLogin ')
    const apiUrl = StoreHelper.apiUrlGet()
    const url = `${apiUrl}/auth/admin`
    return axios.post(url, {adminPass})
  }

  adminValidate () {
    if (debugA) console.log('AuthHelper adminValidate ')
    const apiUrl = StoreHelper.apiUrlGet()
    const url = `${apiUrl}/auth/admin/validate`
    return axios.post(url)
  }
}

const authHelper = new AuthHelper()
export default authHelper
