const axios = require('axios')
const mockData = require('./mockData.json')

export const prepareAxiosResponse = (method, data) => {
  return new Promise((resolve) => {
    resolve(axios[method].mockResolvedValue({data}))
  })
}

export const createCompoundGetResponse = () => {
  return prepareAxiosResponse('get', {
    activity: mockData.activity,
    activitydata: mockData.activityData,
    assignment: mockData.assignment,
    assignments: mockData.assignmentListing,
    consumer: mockData.consumer,
    courses: mockData.courses,
    user: mockData.user,
    seeddata: mockData.seedDataList
  })

}