const axios = require('axios')

export const prepareAxiosResponse = (method, data) => {
  return new Promise((resolve) => {
    resolve(axios[method].mockResolvedValue({data}))
  })
}