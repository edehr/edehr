const axios = require('axios')
const mockData = require('./mockData.json')

export const prepareAxiosResponse = (method, data, status = 200) => {
  return new Promise((resolve) => {
    resolve(axios[method].mockResolvedValue({data, status}))
  })
}

export const createCompoundGetResponse = (obj = null) => {
  if(obj) {
    const data = Object.assign({}, obj, {
      activity: mockData.activity,
      activitydata: mockData.activityData,
      assignment: mockData.assignment,
      assignments: mockData.assignmentListing,
      consumer: mockData.consumer,
      courses: mockData.courses,
      user: mockData.user,
      seeddata: mockData.seedDataList
    })
    return prepareAxiosResponse('get', data)
  }
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