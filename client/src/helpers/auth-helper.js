import axios from 'axios'
import StoreHelper from './store-helper'
import { Text } from './ehr-text'

const debugA = false

class AuthHelper {
  // Overall auth logic
  getToken (refreshToken) {
    if (debugA) console.log('AuthHelper getToken ')
    const apiUrl = StoreHelper.apiUrlGet()
    const url = `${apiUrl}/auth/refresh`
    return axios.post(url, {refreshToken})
  }

  getData () {
    if (debugA) console.log('AuthHelper getData ')
    const apiUrl = StoreHelper.apiUrlGet()
    const url = `${apiUrl}/auth/`
    return axios.post(url, null)
      .catch(err => {
        const msg = Text.INVALID_TOKEN(err)
        console.error('AuthHelper error', msg)
        throw msg
      })
  }
  // Admin requests
  adminLogin (adminPass) {
    if (debugA) console.log('AuthHelper adminLogin ')
    const apiUrl = StoreHelper.apiUrlGet()
    const url = `${apiUrl}/admin`
    return axios.post(url, {adminPass})
  }

  adminValidate () {
    if (debugA) console.log('AuthHelper adminValidate ')
    const apiUrl = StoreHelper.apiUrlGet()
    const url = `${apiUrl}/admin/validate`
    return axios.post(url)
  }
}

const authHelper = new AuthHelper()
export default authHelper