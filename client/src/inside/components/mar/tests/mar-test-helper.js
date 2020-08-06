import MedOrder, { ScheduleOptions } from '../med-order'
import marMock from './marMock.json'

export const getMedOrders = (asClass = false) => {
  if (asClass) return marMock.mockMedOrders.map(mo => new MedOrder(mo))
  return marMock.mockMedOrders
}

export const getMedOrder = (index = 0) => {
  return marMock.mockMedOrders[index]
}

export const getExpectedSchedule = () => {
  const medOrders = getMedOrders()
  const found = medOrders.find(mo => mo.administration === 'od')
  const result = []
  if (found) {
    result.push('od')
  }
  medOrders.filter(mo=> mo.administration === 'sched')
    .map(mo => result.push(...ScheduleOptions.OPTIONS[mo.scheduled]))
  return result
}
