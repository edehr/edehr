export default {
  apiUrl: process.env.API_URL ? process.env.API_URL : 
    (process.env.NODE_ENV === 'production' 
      ? 'https://edehr.org/api' 
      : (process.env.NODE_ENV === 'development'
        ? 'http://edehr.mac/api'
        : 'http://localhost:27000/api'
      )
    )
}
