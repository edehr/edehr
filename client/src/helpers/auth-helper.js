import axios from 'axios'
import StoreHelper from './store-helper'
import { Text } from './ehr-text'

const debugA = false

class AuthHelper {
  _getApiUrl () {
    const url = StoreHelper.apiUrlGet()
    if (debugA) console.log('AuthHelper api url is ', url)
    return url
  }

  // Overall auth logic
  getToken (refreshToken) {
    if (debugA) console.log('AuthHelper getToken ')
    const apiUrl = this._getApiUrl()
    const url = `${apiUrl}/auth/refresh`
    return axios.post(url, {refreshToken})
  }

  getData () {
    if (debugA) console.log('AuthHelper getData ')
    const apiUrl = this._getApiUrl()
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
    const apiUrl = this._getApiUrl()
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