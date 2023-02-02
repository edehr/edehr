// noinspection DuplicatedCode

import { EhrPages } from './ehr-models'
import EhrDataModel from '../ehr-definitions/EhrDataModel'

export function validateAgeValue ( age) {
  const ageValue = Number.parseInt(age)
  return 0 <= ageValue && ageValue <= 150
}

export function extractMonth (dateStr) {
  let results
  // getMonth and getDate use local time so make sure the dateStr has a fixed time
  dateStr += dateStr.includes('T') ? '' : 'T00:00'
  const dt = new Date(dateStr)
  if (dt.toString() !== 'Invalid Date') {
    results = dt.getMonth() + 1
  }
  return results
}
export function extractDay (dateStr) {
  let results
  // getMonth and getDate use local time so make sure the dateStr has a fixed time
  dateStr += dateStr.includes('T') ? '' : 'T00:00'
  // console.log('dateStr',dateStr)
  const dt = new Date(dateStr)
  if (dt.toString() !== 'Invalid Date') {
    results = dt.getDate()
  }
  return results
}


/**
 *
 * Calculates the year by taking today's year and subtracting
 * the ageValue but adjusting if today date is after the given dob.
 * Then use the given dob for the month and day.
 *
 * @param ageValue { string } number of years e.g. 10 or 75 or 105
 * @param demographicsDoB  {string} Date entered by user. '2000-01-01T00:00'
 * @param now { Date } Only need this for testing.
 * @returns {string} Birth date of person. Returns undefined on invalid inputs
 */
export function computeDateOfBirth (ageValue, demographicsDoB, now = new Date()) {
  let dateStr
  if (validateAgeValue(ageValue)) {
    const dob = new Date(demographicsDoB)
    if (dob.toString() === 'Invalid Date') {
      console.log('cdob invalid demographicsDoB', demographicsDoB)
      dateStr = demographicsDoB
    } else {
      console.log('dob', JSON.stringify(dob))
      const isAfter = dob.getMonth() > now.getMonth() || dob.getMonth() === now.getMonth() && dob.getDay() > now.getDay()
      let nyr = now.getFullYear()
      nyr = nyr - ageValue
      nyr += isAfter ? -1 : 0
      dob.setFullYear(nyr)
      dateStr = dob.toISOString().split('T')[0]
      // console.log('cdob dateStr', dateStr)
    }
  } else {
    // console.log('cdob invalid ageValue', ageValue)
  }
  return dateStr
}

// The ehr time values may be stored as 00:00
export function convertTimeStr (text) {
  let result = text
  if (text && Object.prototype.toString.call(text) === '[object String]' && text.length > 0) {
    let time = text.replace(/:/g, '')
    let temp = Number.parseInt(time)
    result = Number.isInteger(temp) ? temp : result
  }
  return result
}
export function convertTimeStrToMilTime (text) {
  let result = text
  if (text && Object.prototype.toString.call(text) === '[object String]' && text.length > 0) {
    let mTime = ''+ convertTimeStr(text)
    result = mTime.padStart(4,'0')
  }
  return result
}

export function updateAllVisitTime (eData) {
  const model = new EhrDataModel(eData)
  const pages = new EhrPages()
  const pageList = pages.pageList
  pageList.forEach(page => {
    const pageKey = page.pageKey
    if (model.hasData(pageKey)) {
      const pChildren = page.pageChildren.filter(c => c.inputType === 'visitTime')
      pChildren.forEach(c => {
        let d = model.getPageFormData(pageKey, c.elementKey)
        if(d) {
          let val = convertTimeStrToMilTime(d)
          model.updatePageFormData(pageKey, c.elementKey, val)
        }
      })
      page.pageTables.forEach(table => {
        const children = table.children
        const timeChildren = children.filter(c => c.inputType === 'visitTime')
        const tableKey = table.elementKey
        const tableData = model.getPageTableData(pageKey, tableKey)
        if (tableData) {
          tableData.forEach((row, rowIndex) => {
            timeChildren.forEach(timeChild => {
              const k = timeChild.elementKey
              let elemData = row[k]
              if(elemData) {
                let val = convertTimeStrToMilTime(elemData)
                model.updateRowElem(pageKey, tableKey, rowIndex, k, val)
              }
            })
          })
        }
      })
    }
  })
  return model.ehrData
}

