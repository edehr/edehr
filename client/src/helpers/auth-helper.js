import axios from 'axios'
import StoreHelper from './store-helper'
import { Text } from './ehr-text'

export default class AuthHelper {
// Overall auth logic
  getToken (refreshToken) {
    const apiUrl = StoreHelper.apiUrl()
    const url = `${apiUrl}/auth/refresh`
    return axios.post(url, {refreshToken})
      .catch(err => {
        throw Text.EXPIRED_TOKEN(err)
      })
  }

  getData () {
    const apiUrl = StoreHelper.apiUrl()
    const url = `${apiUrl}/auth/`
    return axios.post(url, null)
      .catch(err => {
        throw Text.INVALID_TOKEN(err)
      })
  }
  // Admin requests
  adminLogin (adminPass) {
    const apiUrl = StoreHelper.apiUrl()
    const url = `${apiUrl}/auth/admin`
    return axios.post(url, {adminPass})
  }

  adminValidate () {
    const apiUrl = StoreHelper.apiUrl()
    const url = `${apiUrl}/auth/admin/validate`
    return axios.post(url)
  }
  // Demo requests
  requestDemoAccess (name, email, role) {
    console.log('requestingdemoaccess from authHelper', name, email, role)
    const apiUrl = StoreHelper.apiUrl()
    const url = `${apiUrl}/demo/createUser`
    return axios.post(url, { fullName: name, email, role })
  }
  validateDemoUser (username) {
    const apiUrl = StoreHelper.apiUrl()
    const url = `${apiUrl}/demo/isUniqueUsername`
    return axios.post(url, { username })
  }
}