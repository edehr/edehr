import StoreHelper from './store-helper'
import axios from 'axios'

export function   postFeedback (feedback) {
  if(!feedback || feedback.length <= 0) {
    return Promise.resolve()
  }
  const apiUrl = StoreHelper.apiUrlGet()
  const base = apiUrl + '/feedback/'
  return axios.post(base, { feedbackData: feedback})
}
