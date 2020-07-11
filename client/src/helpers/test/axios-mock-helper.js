const axios = require('axios')

export const prepareAxiosResponse = (method, data) => axios[method].mockResolvedValue({data})