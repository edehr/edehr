import axios from 'axios'


export const setAuthHeader = (token) => {
  const tokenString = `Bearer ${token}`
  axios.defaults.headers['Authorization'] = tokenString
}

export const unsetAuthToken = () => {
  axios.defaults.headers['Authorization'] = null
}