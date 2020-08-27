import axios from 'axios'

export const setAuthHeader = (token) => {
  if (token) {
    axios.defaults.headers['Authorization'] = `Bearer ${token}`
  } else {
    axios.defaults.headers['Authorization'] = null
  }
}
