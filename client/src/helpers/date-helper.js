import StoreHelper from '@/helpers/store-helper'
import EhrDataModel from '@/ehr-definitions/EhrDataModel'
import { isValidDate } from '@/helpers/ehr-utils'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'
import store from '../store'

export function currentSimDayNumber () {
  let metaSimTime = StoreHelper.getMetaSimTime()
  let dayVal
  if (EhrOnlyDemo.isActiveEhrOnlyDemo()) {
    dayVal = metaSimTime.visitDay
  } else {
    dayVal = store.getters['visit/simDate']
  }
  return dayVal
}

export function diffSimulationDays (datePickerDate) {
  let admissionDate = new Date()
  let df = numberOfDaysInSim()
  admissionDate.setDate(admissionDate.getDate() - df)
  const diffTime = Math.abs(datePickerDate - admissionDate)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  console.log( '--- diffSimulationDays', diffDays)
  return diffDays
}

export function numberOfDaysInSim () {
  const mergedData = StoreHelper.getMergedData()
  const ehrDataModel = new EhrDataModel(mergedData)
  const simTime = ehrDataModel.simTime
  return simTime.visitDay + 1
}
function todayNumber () {
  return numberOfDaysInSim() - 1
}

export function simDateCalc (simDateValue) {
  try {
    // if (!isValidDate(simDateValue)) {
    //   throw new Error('simDateCalc requires a value date input. ' + simDateValue)
    // }

    if ((Number.isInteger(simDateValue) || Number.parseInt(simDateValue) >= 0)) {
      let dayNumber = simDateValue
      // const mergedData = StoreHelper.getMergedData()
      // const ehrDataModel = new EhrDataModel(mergedData)
      // const simTime = ehrDataModel.simTime
      // let numberOfDays = simTime.visitDay + 1
      // const todayNum = numberOfDays - 1
      const todayNum = todayNumber()
      let df = todayNum - dayNumber
      let dv = new Date()
      let sD = dv.getDate() - df
      dv.setDate(sD)
      return formatYmdDateInLocalZone(dv)
    }
    return simDateValue
  } catch (error) {
    console.error('simDateCalc ', simDateValue, '----', error)
  }
}

export function simDateCalc2 (simDateValue) {
  try {
    let result = simDateValue
    if ((Number.isInteger(simDateValue) || Number.parseInt(simDateValue) >= 0)) {
      const todayNum = todayNumber()
      let df = todayNum - simDateValue
      let dateValue = new Date()
      let sD = dateValue.getDate() - df
      dateValue.setDate(sD)
      result = formatYmdDateInLocalZone(dateValue)
    }
    return result
  } catch (error) {
    console.error('simDateCalc ', simDateValue, '----', error)
  }
}

export function formatYmdDateInLocalZone ( inputDate) {
  try {
    if (!isValidDate(inputDate)) {
      throw new Error('formatYmdDateInLocalZone requires a value date input. ' + inputDate)
    }
    const offset = inputDate.getTimezoneOffset()
    inputDate = new Date(inputDate.getTime() - (offset * 60 * 1000))
    return inputDate.toISOString().split('T')[0]
  } catch (error) {
    console.error('formatYmdDateInLocalZone "' + inputDate + '" ----', error)
    return inputDate
  }
}
