import axios from 'axios'


export const setAuthHeader = (token) => {
  axios.defaults.headers['Authorization'] = `Bearer ${token}`
}

export const unsetAuthToken = () => {
  axios.defaults.headers['Authorization'] = null
}