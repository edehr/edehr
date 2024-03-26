import StoreHelper from '@/helpers/store-helper'
import EhrDataModel from '@/ehr-definitions/EhrDataModel'
import { isValidDate } from '@/helpers/ehr-utils'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'
import store from '../store'
import { splitSimTimeKey } from '@/ehr-definitions/sim-time-seq-utils'

export function getActivitySimTimeKey () {
  let activityRecord = store.getters['activityStore/activityRecord']
  return activityRecord.simTimeKey
}
export function isActivitySimTimeActive () {
  return !! getActivitySimTimeKey() // if there is a key then yes the sim time is coming from the activity
}

export function getCurrentSimDate () {
  let d = store.getters['visit/simDate']
  let isDev = StoreHelper.isSeedEditing()
  // console.log('-----------getCurrentSimDate', isDev, d)
  if (! isDev) {
    // non-content developer
    let activityRecord = store.getters['activityStore/activityRecord']
    if (activityRecord.simTimeKey) {
      [ d ] = splitSimTimeKey(activityRecord.simTimeKey)
      // console.log('-----------getCurrentSimDate. Is Not dev content. Is using activityRecord.simTimeKey', activityRecord.simTimeKey, d)
    } // else use visit day if activity is not controlling time
  }
  return d
}

export function getCurrentSimTime () {
  let t = store.getters['visit/simTime']
  let activityRecord = store.getters['activityStore/activityRecord']
  let isDev = StoreHelper.isSeedEditing()
  // console.log('-----------getCurrentSimTime', isDev, t)
  if (! isDev) {
    if (activityRecord.simTimeKey) {
      t = splitSimTimeKey(activityRecord.simTimeKey)[1]
      // console.log('-----------getCurrentSimTime. Is using activityRecord.simTimeKey', activityRecord.simTimeKey, t)
    }
  }
  return t
}

export function hourStringToHour (ts) {
  return ts ? parseInt(ts.slice(0,2)) : ''
}

export function currentSimDayDate () {
  return simDateCalc(currentSimDayNumber())
}
export function currentSimDayNumber () {
  let metaSimTime = StoreHelper.getMetaSimTime()
  let dayVal
  if (EhrOnlyDemo.isActiveEhrOnlyDemo()) {
    dayVal = metaSimTime.visitDay
  } else {
    dayVal = getCurrentSimDate()
  }
  return Number(dayVal)
}
export function currentSimTime () {
  let metaSimTime = StoreHelper.getMetaSimTime()
  let timeVal
  if (EhrOnlyDemo.isActiveEhrOnlyDemo()) {
    timeVal = metaSimTime.visitTime
  } else {
    timeVal = getCurrentSimTime()
  }
  return timeVal
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
    if ((Number.isInteger(simDateValue) || Number.parseInt(simDateValue) >= 0)) {
      let dayNumber = simDateValue
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
